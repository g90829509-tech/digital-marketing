import { useEffect, useState } from "react";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 9) % 100}%`,
  top: `${(i * 53 + 12) % 100}%`,
  delay: `${-(i % 9) * 1.7}s`,
  duration: `${12 + (i % 8) * 2}s`,
  size: `${3 + (i % 3) * 2}px`,
}));

export default function GlassWorldBackground() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(!media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div
      className={`glass-world ${enabled ? "" : "motion-disabled"}`}
      aria-hidden="true"
    >
      <div className="glass-world__glow glass-world__glow--violet" />
      <div className="glass-world__glow glass-world__glow--peach" />
      <div className="glass-world__glow glass-world__glow--blue" />

      <div className="glass-world__orb glass-world__orb--large">
        <div className="glass-world__orb-inner" />
      </div>

      <div className="glass-world__orb glass-world__orb--small" />
      <div className="glass-world__orb glass-world__orb--peach" />

      <div className="glass-world__orbit glass-world__orbit--one">
        <span />
      </div>

      <div className="glass-world__orbit glass-world__orbit--two">
        <span />
      </div>

      <div className="glass-world__orbit glass-world__orbit--three">
        <span />
      </div>

      {enabled &&
        particles.map((particle) => (
          <span
            key={particle.id}
            className="glass-world__particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
    </div>
  );
}
