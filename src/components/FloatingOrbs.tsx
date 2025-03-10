import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs: React.FC = () => {
  // Create an array of orbs with random properties
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50, // Random size between 50-150px
    x: Math.random() * 100, // Random x position (0-100%)
    y: Math.random() * 100, // Random y position (0-100%)
    duration: Math.random() * 20 + 10, // Random animation duration (10-30s)
    delay: Math.random() * 5, // Random delay (0-5s)
    color: i % 3 === 0 
      ? 'rgba(115, 182, 140, 0.4)' // Primary color
      : i % 3 === 1 
        ? 'rgba(234, 182, 136, 0.3)' // Accent color
        : 'rgba(99, 125, 153, 0.3)', // Secondary color
  }));

  return (
    <>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.6,
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
          }}
          transition={{
            opacity: { duration: 2, delay: orb.delay },
            x: { 
              duration: orb.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: orb.delay
            },
            y: { 
              duration: orb.duration * 1.2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: orb.delay
            }
          }}
        />
      ))}
    </>
  );
};

export default FloatingOrbs;