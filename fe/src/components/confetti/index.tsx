import { useEffect, useRef } from 'react';

type particleType = {
  x: number;
  y: number;
  speed: number;
  size: number;
  color: string;
}

type colorsType = string[];

function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      const particles: particleType[] = [];
      const colors: colorsType = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];

      const createParticles = () => {
        for (let i = 0; i < 50; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 5 + 1,
            size: Math.random() * 5 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }

      let animationId = 0;
      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.y += particle.speed;
          if (particle.y > canvas.height) {
            particle.y = 0 - particle.size;
          }
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        });

        animationId = requestAnimationFrame(animateParticles);
      }

      createParticles();
      animateParticles();

      setTimeout(() => {
        cancelAnimationFrame(animationId);
      }, 4000);
    }
  }, []);

  return <canvas role='canvas' ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
}

export default Confetti;