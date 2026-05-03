import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Zap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Kategori', href: '#categories' },
  { label: 'Produk', href: '#featured' },
  { label: 'Tentang', href: '#trust' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-xl dark:bg-gray-950/60"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 shadow-lg shadow-primary-500/25">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-gray-900 dark:text-white">Tridjaya</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-primary-500">Elektronik</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/30 md:block"
          >
            Hubungi Kami
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-500 md:hidden dark:text-gray-400"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary-500/25"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
