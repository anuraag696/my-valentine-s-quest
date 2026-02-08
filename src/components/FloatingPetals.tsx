import { useEffect, useMemo } from "react";

const PETALS = ["🌸", "💗", "✨", "🩷", "🌷"];

interface FloatingPetal {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingPetals = ({ count = 12 }: { count?: number }) => {
  const petals: FloatingPetal[] = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 14 + Math.random() * 14,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute animate-fall opacity-60"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingPetals;
