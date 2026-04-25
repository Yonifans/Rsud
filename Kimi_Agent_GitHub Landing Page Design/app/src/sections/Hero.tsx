import { motion } from 'framer-motion';
import TwinkleStar from '../components/TwinkleStar';
import SwayingFlower from '../components/SwayingFlower';

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #D8C4E8 0%, #B8A0D8 35%, #D4B8C8 60%, #E8D4C4 80%, #FFF8F0 100%)',
      }}
    >
      {/* Decorative clouds - top left */}
      <div className="absolute top-0 left-0 w-32 md:w-48 opacity-90 pointer-events-none">
        <img
          src="/assets/cloud-top-left.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Decorative clouds - bottom right */}
      <div className="absolute bottom-16 right-0 w-48 md:w-72 opacity-90 pointer-events-none">
        <img
          src="/assets/cloud-bottom-right.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Twinkling stars */}
      <TwinkleStar size={10} top="12%" left="15%" delay={0} duration={2.5} />
      <TwinkleStar size={8} top="20%" left="75%" delay={0.7} duration={3} />
      <TwinkleStar size={12} top="8%" left="55%" delay={1.2} duration={2.8} />
      <TwinkleStar size={6} top="25%" left="85%" delay={0.3} duration={3.5} />
      <TwinkleStar size={9} top="15%" left="40%" delay={1.5} duration={2.2} />
      <TwinkleStar size={7} top="30%" left="25%" delay={0.9} duration={3.2} />
      <TwinkleStar size={11} top="5%" left="80%" delay={2} duration={2.6} />

      {/* Butterfly decoration - left side */}
      <div className="absolute top-[45%] left-2 md:left-8 z-10 pointer-events-none">
        <SwayingFlower duration={4}>
          <img
            src="/assets/butterfly.png"
            alt=""
            className="w-12 h-12 md:w-16 md:h-16 opacity-80"
          />
        </SwayingFlower>
      </div>

      {/* Flower branch - left side */}
      <div className="absolute top-[55%] left-0 z-10 pointer-events-none">
        <SwayingFlower duration={5}>
          <img
            src="/assets/flower-branch.png"
            alt=""
            className="w-28 md:w-40 opacity-90"
          />
        </SwayingFlower>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-10 pb-8 md:pt-14 md:pb-12 max-w-3xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-4"
        >
          Sayangi: Selamat
          <br />
          Datang Bunda!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-text-secondary text-sm md:text-lg max-w-md mb-6 leading-relaxed"
        >
          Platform edukasi terpercaya untuk membantu Bunda merawat bayi prematur dengan optimal
        </motion.p>

        {/* Baby on moon illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="relative w-full max-w-sm md:max-w-md mx-auto"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/assets/hero-baby-moon.png"
              alt="Bayi tidur di bulan sabit"
              className="w-full h-auto drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
