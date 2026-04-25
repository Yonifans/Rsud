import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Sanuan', href: '#sanuan' },
  { label: 'Dokter Anak', href: '#dokter' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-primary-purple-dark sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto px-4">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center h-12 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm font-medium hover:opacity-80 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center justify-between h-12">
          <span className="text-white text-sm font-medium">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-primary-purple-dark border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-sm font-medium py-2 hover:opacity-80 transition-opacity duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
