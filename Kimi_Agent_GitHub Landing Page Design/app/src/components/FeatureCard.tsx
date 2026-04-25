import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  iconLeft: string;
  iconRight?: string;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  iconLeft,
  iconRight,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="w-full max-w-xl mx-auto"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="w-full bg-primary-purple hover:bg-primary-purple-dark transition-colors duration-200 rounded-full py-4 px-6 md:py-5 md:px-8 flex items-center justify-center gap-3 md:gap-4 shadow-lg cursor-pointer"
      >
        <img
          src={iconLeft}
          alt=""
          className="w-9 h-9 md:w-10 md:h-10 object-contain flex-shrink-0"
        />
        <span className="text-white font-semibold text-base md:text-lg lg:text-xl whitespace-nowrap">
          {title}
        </span>
        {iconRight && (
          <img
            src={iconRight}
            alt=""
            className="w-9 h-9 md:w-10 md:h-10 object-contain flex-shrink-0"
          />
        )}
      </motion.button>
      <p className="text-center text-text-secondary text-sm md:text-base mt-3 px-4">
        {description}
      </p>
    </motion.div>
  );
}
