import { useCallback } from "react";
import confetti from "canvas-confetti";

export const useCelebration = () => {
  const fireHearts = useCallback(() => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0.4,
      decay: 0.94,
      startVelocity: 20,
      shapes: ["circle"],
      colors: ["#c97b84", "#d4a0a7", "#e8c4c8", "#c9a96e", "#f5e6d3"],
    };

    confetti({ ...defaults, particleCount: 40, origin: { x: 0.2, y: 0.5 } });
    confetti({ ...defaults, particleCount: 40, origin: { x: 0.8, y: 0.5 } });

    setTimeout(() => {
      confetti({ ...defaults, particleCount: 30, origin: { x: 0.5, y: 0.3 } });
    }, 200);
  }, []);

  const fireBigCelebration = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#c97b84", "#d4a0a7", "#c9a96e", "#e8c4c8"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return { fireHearts, fireBigCelebration };
};
