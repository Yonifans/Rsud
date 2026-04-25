import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-primary-purple py-4 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-white text-sm mb-1 flex items-center justify-center gap-2 flex-wrap">
          <a
            href="#kebijakan"
            className="hover:underline transition-all duration-200"
          >
            Kebijakan Privasi
          </a>
          <span>|</span>
          <a
            href="#syarat"
            className="hover:underline transition-all duration-200"
          >
            Syarat Penggunaan
          </a>
        </div>
        <p className="text-white/80 text-sm">
          Copyright 2021-2022, sayangi.edukasi.id
        </p>
      </div>
    </motion.footer>
  );
}
