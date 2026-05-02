import { motion } from 'framer-motion'
import { ArrowRight, Refrigerator, Bike } from 'lucide-react'

const words = ['Solusi', 'Kebutuhan', 'Gaya Hidup', 'Anda']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-400/20 blur-[120px] dark:bg-primary-600/10" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-400/20 blur-[120px] dark:bg-accent-600/10" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-8 lg:px-8 lg:py-24">
        {/* Left side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Toko Elektronik #1 di Sulawesi Utara
          </motion.div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`inline-block ${i === 2 ? 'bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent' : ''}`}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mx-auto mb-8 max-w-lg text-lg text-gray-500 lg:mx-0 dark:text-gray-400"
          >
            Temukan koleksi lengkap elektronik, perabot rumah tangga, sepeda listrik, dan furniture berkualitas dengan harga terbaik dan cicilan mudah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#categories"
              className="glow-button group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-primary-500/25 transition-all hover:scale-[1.02] hover:shadow-primary-500/40"
            >
              Shop Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/60 px-8 py-4 text-lg font-semibold text-gray-700 backdrop-blur-sm transition-all hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-primary-500/30 dark:hover:text-primary-400"
            >
              Lihat Produk
            </a>
          </motion.div>
        </div>

        {/* Right side - Floating product illustrations */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Glow ring */}
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-3xl sm:h-96 sm:w-96 dark:from-primary-500/10 dark:to-accent-500/10" />

          {/* Refrigerator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="animate-float relative z-10"
          >
            <div className="glass-card flex h-56 w-44 flex-col items-center justify-center rounded-3xl p-6 shadow-2xl sm:h-72 sm:w-56">
              <Refrigerator className="h-24 w-24 text-primary-500 sm:h-32 sm:w-32" strokeWidth={1.2} />
              <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Kulkas Premium</p>
              <p className="text-xs text-gray-400">Mulai Rp 3.5jt</p>
            </div>
          </motion.div>

          {/* E-Bike */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="animate-float-delayed absolute -right-4 bottom-0 z-20 sm:right-0"
          >
            <div className="glass-card flex h-44 w-36 flex-col items-center justify-center rounded-3xl p-4 shadow-2xl sm:h-52 sm:w-44">
              <Bike className="h-20 w-20 text-accent-500 sm:h-24 sm:w-24" strokeWidth={1.2} />
              <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-200">E-Bike</p>
              <p className="text-xs text-gray-400">Mulai Rp 5jt</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z"
            className="fill-white/40 dark:fill-white/[0.02]"
          />
        </svg>
      </div>
    </section>
  )
}
