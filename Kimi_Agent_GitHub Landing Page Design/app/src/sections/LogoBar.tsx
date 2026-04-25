import { motion } from 'framer-motion';

export default function LogoBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white py-2 px-4"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 md:gap-6 flex-wrap">
        {/* Kemenkes-style logo placeholder */}
        <div className="flex items-center gap-1.5">
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-green-700 flex items-center justify-center border-2 border-green-800">
            <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM6 9.5l6 3.5 6-3.5v6l-6 3.5-6-3.5v-6z"/>
            </svg>
          </div>
          <span className="text-[10px] md:text-xs text-green-800 font-semibold leading-tight hidden sm:block">
            Kementerian<br/>Kesehatan RI
          </span>
        </div>

        {/* Dinas Kesehatan placeholder */}
        <div className="flex items-center gap-1.5">
          <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-emerald-600 flex items-center justify-center border border-emerald-700">
            <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
            </svg>
          </div>
        </div>

        {/* BerAKHLAK */}
        <div className="flex flex-col items-center">
          <span className="text-red-700 font-bold text-sm md:text-base tracking-wide">BerAKHLAK</span>
          <span className="text-[7px] md:text-[9px] text-gray-600 text-center leading-tight max-w-[120px]">
            Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif
          </span>
        </div>

        {/* Bangga Melayani Bangsa */}
        <div className="flex items-center gap-1">
          <span className="text-red-600 font-black text-lg md:text-xl">#</span>
          <span className="text-red-600 font-bold text-xs md:text-sm leading-tight">
            Bangga<br/>Melayani<br/>Bangsa
          </span>
        </div>

        {/* SAYANGI */}
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary-purple flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <span className="text-primary-purple font-bold text-sm md:text-base tracking-wider">SAYANGI</span>
        </div>
      </div>
    </motion.div>
  );
}
