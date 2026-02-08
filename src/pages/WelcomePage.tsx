import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gradient-romantic flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        <Heart className="w-16 h-16 text-primary animate-heartbeat" fill="currentColor" />
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl font-display font-semibold text-gradient-rose mb-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Dear Gugga,
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-md mb-2 font-body italic"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        I have a few questions for you…
      </motion.p>

      <motion.p
        className="text-sm text-muted-foreground max-w-sm mb-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        And something very important to ask at the end. ♡
      </motion.p>

      <motion.button
        onClick={() => navigate("/questions/1")}
        className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-display text-lg shadow-romantic hover:shadow-glow transition-all duration-300 hover:scale-105"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Let's Begin
      </motion.button>

      <motion.p
        className="absolute bottom-8 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        Made with all my love, just for you 💕
      </motion.p>
    </motion.div>
  );
};

export default WelcomePage;
