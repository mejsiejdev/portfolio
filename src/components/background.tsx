"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function Background() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;
    }[] = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        velocityX: (Math.random() - 0.5) * 0.3,
        velocityY: (Math.random() - 0.5) * 0.3,
      });
    }

    function animate() {
      if (!canvas || !context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const particleColor =
        theme === "dark"
          ? "rgba(125, 211, 252, 0.6)"
          : "rgba(14, 165, 233, 0.5)";
      const lineColor =
        theme === "dark"
          ? "rgba(125, 211, 252, 0.2)"
          : "rgba(14, 165, 233, 0.2)";

      particles.forEach((particle, i) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < 0 || particle.x > canvas.width)
          particle.velocityX *= -1;
        if (particle.y < 0 || particle.y > canvas.height)
          particle.velocityY *= -1;

        context.fillStyle = particleColor;
        context.beginPath();
        context.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        context.fill();

        context.strokeStyle = lineColor;
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(particle2.x, particle2.y);
            context.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
