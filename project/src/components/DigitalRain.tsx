import React, { useEffect, useRef } from 'react';

const DigitalRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (you can customize this)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store the current y position of each column
    const drops: number[] = new Array(columns).fill(1);

    // Function to draw the digital rain
    function draw() {
      if (!context || !canvas) return;

      // Add semi-transparent black rectangle to create fade effect
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      context.fillStyle = '#0F0'; // Matrix green
      context.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Calculate x position
        const x = i * fontSize;
        
        // Calculate y position
        const y = drops[i] * fontSize;

        // Add glow effect
        context.shadowBlur = 5;
        context.shadowColor = '#0F0';
        
        // Draw the character
        context.fillText(char, x, y);
        
        // Reset shadow
        context.shadowBlur = 0;

        // Reset position if it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    }

    // Animation loop
    const interval = setInterval(draw, 33); // ~30fps

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
};

export default DigitalRain; 