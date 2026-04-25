import { motion } from 'framer-motion';

interface TwinkleStarProps {
  size?: number;
  top?: string;
  left?: string;
  delay?: number;
  duration?: number;
}

export default function TwinkleStar({
  size = 12,
  top = '10%',
  left = '20%',
  delay = 0,
  duration = 3,
}: TwinkleStarProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left, width: size, height: size }}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill="#FFF4CC"
        />
      </svg>
    </motion.div>
  );
}
