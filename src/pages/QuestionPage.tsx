import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useCelebration } from "@/hooks/useCelebration";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import FloatingPetals from "@/components/FloatingPetals";

interface QuestionData {
  question: string;
  options: string[];
  celebration: string;
}

const questions: QuestionData[] = [
  {
    question: "Do you remember the first thing that made you smile about me?",
    options: [
      "The way you looked at me",
      "You being the Maths Wizard",
      "Your attitude",
    ],
    celebration: "Whether it was my looks, my nerdy math skills, or my attitude — I'm just glad I made you smile. 🥰",
  },
  {
    question: "If we could relive one moment together, which would you choose?",
    options: [
      "The days we ranted about the world",
      "The day I bought you the bouquet for the first time",
      "Every quiet moment we shared",
    ],
    celebration: "From rants to roses to silence — every moment with you is worth reliving. 💐",
  },
  {
    question: "Would you share your last bite of food with me?",
    options: [
      "Absolutely, you can have it all",
      "Okay, but not the last bite of the cone of my Ice-cream",
      "Fine... but I'm taking a big bite",
    ],
    celebration: "I promise to never touch the last bite of your ice-cream cone. Maybe. 🍦",
  },
  {
    question: "On a scale of amazing to extraordinary, how lucky am I to have you?",
    options: [
      "Extraordinarily lucky",
      "You don't even deserve me (jk... maybe)",
      "Lucky enough that you disappoint me every second",
    ],
    celebration: "Even if I disappoint you every second, I'll spend every second trying to make it up to you. 💫",
  },
];

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fireHearts } = useCelebration();
  const [selected, setSelected] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const questionIndex = parseInt(id || "1") - 1;
  const question = questions[questionIndex];
  const isLast = questionIndex === questions.length - 1;

  // Reset state when question changes
  useEffect(() => {
    setSelected(null);
    setShowCelebration(false);
  }, [questionIndex]);

  if (!question) {
    navigate("/");
    return null;
  }

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowCelebration(true);
    fireHearts();
  };

  const handleNext = () => {
    if (isLast) {
      navigate("/apology");
    } else {
      navigate(`/questions/${questionIndex + 2}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <FloatingPetals count={8} />

      {/* Progress */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              i <= questionIndex ? "bg-primary scale-110" : "bg-border"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={questionIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center z-10"
        >
          <motion.p className="text-sm text-muted-foreground mb-2 font-body">
            Question {questionIndex + 1} of {questions.length}
          </motion.p>

          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 leading-snug">
            {question.question}
          </h2>

          <div className="space-y-3 mb-8">
            {question.options.map((option, i) => (
              <motion.button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full px-6 py-4 rounded-xl text-left font-body transition-all duration-300 border ${
                  selected === i
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : selected !== null
                    ? "bg-muted/50 text-muted-foreground border-border opacity-50"
                    : "bg-gradient-card text-foreground border-border hover:border-primary/50 hover:shadow-romantic"
                }`}
                whileHover={selected === null ? { scale: 1.02 } : {}}
                whileTap={selected === null ? { scale: 0.98 } : {}}
              >
                <span className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground font-display">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {option}
                </span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {showCelebration && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <p className="font-body italic text-sm md:text-base">
                    {question.celebration}
                  </p>
                  <Sparkles className="w-5 h-5" />
                </div>

                <motion.button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-display shadow-romantic hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLast ? "Continue" : "Next Question"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionPage;
