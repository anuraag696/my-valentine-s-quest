import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import FloatingPetals from "@/components/FloatingPetals";

const ApologyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-romantic flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <FloatingPetals count={6} />

      <motion.div
        className="max-w-lg w-full text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mb-6"
        >
          <Heart className="w-12 h-12 text-primary mx-auto" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-display font-semibold text-gradient-rose mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Before I ask you something…
        </motion.h2>

        <motion.div
          className="bg-gradient-card border border-border rounded-2xl p-8 shadow-romantic mb-8 text-left space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-body text-foreground leading-relaxed">
            Gugga, I need to say something that's been weighing on my heart.
          </p>
          <p className="font-body text-foreground leading-relaxed">
            I know I haven't always been the person you deserve. I'm sorry for the times I've been a disappointment — for the moments where I should have been better, kinder, more present. I'm sorry for hurting you emotionally, even when I never intended to.
          </p>
          <p className="font-body text-foreground leading-relaxed">
            You deserve someone who lifts you up every single day, and I'm sorry for every day I fell short of that.
          </p>
          <p className="font-body text-foreground leading-relaxed italic text-primary">
            But I want you to know — I see it. I feel it. And I am choosing, every day, to be better for you. Not because I have to, but because you deserve nothing less.
          </p>
          <p className="font-body text-foreground leading-relaxed">
            Thank you for staying. Thank you for believing in us, even when I made it hard to. You are my grace, and I will spend every day earning yours.
          </p>
        </motion.div>

        <motion.button
          onClick={() => navigate("/valentine")}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-display text-lg shadow-romantic hover:shadow-glow transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          I have one more thing to ask… 💕
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ApologyPage;
