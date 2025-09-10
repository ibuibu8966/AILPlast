'use client';

export default function ParticleSystem() {
  const particles = [
    { width: 8, height: 8, left: 10, top: 20, delay: 0, duration: 20 },
    { width: 12, height: 12, left: 90, top: 15, delay: 2, duration: 18 },
    { width: 6, height: 6, left: 25, top: 80, delay: 4, duration: 22 },
    { width: 10, height: 10, left: 70, top: 60, delay: 1, duration: 19 },
    { width: 14, height: 14, left: 40, top: 10, delay: 3, duration: 21 },
    { width: 7, height: 7, left: 60, top: 90, delay: 5, duration: 17 },
    { width: 9, height: 9, left: 15, top: 50, delay: 2, duration: 20 },
    { width: 11, height: 11, left: 85, top: 35, delay: 6, duration: 18 },
    { width: 5, height: 5, left: 30, top: 70, delay: 1, duration: 23 },
    { width: 13, height: 13, left: 55, top: 25, delay: 4, duration: 16 },
    { width: 8, height: 8, left: 20, top: 45, delay: 7, duration: 19 },
    { width: 10, height: 10, left: 75, top: 85, delay: 3, duration: 20 },
    { width: 6, height: 6, left: 45, top: 5, delay: 8, duration: 22 },
    { width: 12, height: 12, left: 65, top: 55, delay: 2, duration: 17 },
    { width: 9, height: 9, left: 35, top: 30, delay: 9, duration: 21 },
    { width: 7, height: 7, left: 80, top: 75, delay: 5, duration: 18 },
    { width: 11, height: 11, left: 5, top: 40, delay: 10, duration: 20 },
    { width: 8, height: 8, left: 50, top: 95, delay: 6, duration: 19 },
    { width: 14, height: 14, left: 95, top: 65, delay: 11, duration: 16 },
    { width: 10, height: 10, left: 42, top: 88, delay: 7, duration: 24 },
  ];

  return (
    <div className="particle-container">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
}