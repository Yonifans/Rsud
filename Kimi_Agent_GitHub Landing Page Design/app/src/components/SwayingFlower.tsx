import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SwayingFlowerProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export default function SwayingFlower({
  children,
  className = '',
  duration = 4,
}: SwayingFlowerProps) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [-2, 2] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
