import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    title: 'Tahapan Perkembangan Bayi',
    description: 'Pantau pertumbuhan dan perkembangan bayi Anda dengan presisi.',
    iconLeft: '/assets/icon-baby-growth.png',
    iconRight: undefined,
  },
  {
    title: 'E-Book Panduan Lengkap',
    description: 'Panduan lengkap perawatan bayi prematur yang komprehensif.',
    iconLeft: '/assets/icon-book.png',
    iconRight: '/assets/icon-ereader.png',
  },
  {
    title: 'Layanan Interaktif Dokter Anak',
    description: 'Forum diskusi dan konsultasi langsung dengan ahli (dr. Sp. Anak).',
    iconLeft: '/assets/icon-doctor-chat.png',
    iconRight: undefined,
  },
];

export default function Features() {
  return (
    <section
      id="fitur"
      className="relative w-full bg-accent-cream py-12 md:py-16 px-4"
    >
      {/* Decorative flower accents at bottom left */}
      <div className="absolute bottom-0 left-0 w-20 md:w-28 opacity-60 pointer-events-none">
        <img
          src="/assets/flower-branch.png"
          alt=""
          className="w-full h-auto -scale-x-100"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-serif text-2xl md:text-4xl font-bold text-text-primary text-center mb-8 md:mb-10"
        >
          Fitur Utama
        </motion.h2>

        {/* Feature cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              iconLeft={feature.iconLeft}
              iconRight={feature.iconRight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
