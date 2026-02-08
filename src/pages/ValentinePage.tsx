import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useCelebration } from "@/hooks/useCelebration";
import FloatingPetals from "@/components/FloatingPetals";

const NO_RESPONSES = [
  "Are you sure? 🥺",
  "Really? Think again, Gugga…",
  "My heart just cracked a little 💔",
  "I promise to share my food with you forever!",
  "Please? I'll let you pick every movie!",
  "You're breaking my heart here… 😢",
  "I'll even pretend to like your playlist!",
  "Last chance… my heart can't take much more 🥹",
  "Okay fine… but the button is getting smaller 👀",
  "You literally can't say no. It's science. 💕",
];

const ValentinePage = () => {
  const { fireBigCelebration } = useCelebration();
  const [noCount, setNoCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const yesSize = Math.min(1 + noCount * 0.15, 2.2);
  const noSize = Math.max(1 - noCount * 0.08, 0.4);

  const handleYes = useCallback(() => {
    setAccepted(true);
    setShowPopup(false);
    fireBigCelebration();
  }, [fireBigCelebration]);

  const handleNo = () => {
    setNoCount((prev) => prev + 1);
    setShowPopup(true);
  };

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-romantic flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <FloatingPetals count={20} />

        <motion.div
          className="text-center z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mb-8"
          >
            <Heart className="w-24 h-24 text-primary mx-auto" fill="currentColor" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-rose mb-4">
            She said YES! 🎉
          </h1>
          <p className="text-xl md:text-2xl font-body text-foreground mb-2">
            Happy Valentine's Day, Gugga!
          </p>
          <p className="text-muted-foreground font-body italic">
            You've just made me the happiest person alive. ♡
          </p>

          <motion.div
            className="mt-10 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {["💕", "🌹", "💗", "✨", "🩷"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, delay: i * 0.2, duration: 1.5 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <FloatingPetals count={10} />

      <motion.div
        className="max-w-lg w-full text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Heart className="w-16 h-16 text-primary mx-auto" fill="currentColor" />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient-rose mb-3">
          Gugga,
        </h1>
        <p className="text-xl md:text-2xl font-display text-foreground mb-10">
          Will you be my Valentine? 💕
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <motion.button
            onClick={handleYes}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-display shadow-romantic hover:shadow-glow transition-all duration-300"
            style={{ transform: `scale(${yesSize})` }}
            whileHover={{ scale: yesSize * 1.05 }}
            whileTap={{ scale: yesSize * 0.95 }}
          >
            Yes! 💕
          </motion.button>

          <motion.button
            onClick={handleNo}
            className="px-6 py-3 bg-muted text-muted-foreground rounded-full font-display border border-border transition-all duration-300"
            style={{ transform: `scale(${noSize})` }}
            whileHover={{ scale: noSize * 1.02 }}
          >
            No
          </motion.button>
        </div>

        {noCount > 0 && !showPopup && (
          <motion.p
            className="mt-6 text-sm text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Hint: The right answer is getting bigger… 👀
          </motion.p>
        )}
      </motion.div>

      {/* Convincing popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-card border border-border rounded-2xl p-8 max-w-sm w-full text-center shadow-romantic"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-lg font-display text-foreground mb-6">
                {NO_RESPONSES[Math.min(noCount - 1, NO_RESPONSES.length - 1)]}
              </p>

              <div className="flex gap-3 justify-center">
                <motion.button
                  onClick={handleYes}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-display shadow-romantic"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Okay, YES! 💕
                </motion.button>

                {noCount < NO_RESPONSES.length && (
                  <motion.button
                    onClick={() => {
                      setShowPopup(false);
                    }}
                    className="px-4 py-3 text-muted-foreground text-sm font-body rounded-full border border-border"
                    style={{ fontSize: `${Math.max(14 - noCount, 8)}px` }}
                  >
                    Still no…
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentinePage;
