import { motion } from 'framer-motion'
import { Monitor, Home, Bike, Sofa, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Category {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
  glow: string
}

const categories: Category[] = [
  {
    title: 'Elektronik',
    description: 'TV, kulkas, mesin cuci, AC, dan berbagai perangkat elektronik berkualitas.',
    icon: Monitor,
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'group-hover:shadow-blue-500/25',
  },
  {
    title: 'Rumah Tangga',
    description: 'Peralatan dapur, pembersih rumah, dan kebutuhan harian keluarga Anda.',
    icon: Home,
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-emerald-500/25',
  },
  {
    title: 'Sepeda Listrik',
    description: 'Sepeda listrik modern, hemat energi, dan ramah lingkungan.',
    icon: Bike,
    gradient: 'from-violet-500 to-purple-500',
    glow: 'group-hover:shadow-violet-500/25',
  },
  {
    title: 'Furniture',
    description: 'Sofa, meja, lemari, dan furniture elegan untuk rumah impian Anda.',
    icon: Sofa,
    gradient: 'from-orange-500 to-rose-500',
    glow: 'group-hover:shadow-orange-500/25',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Categories() {
  return (
    <section id="categories" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
            Kategori Produk
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Temukan Yang Anda Butuhkan
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
            Pilihan lengkap untuk memenuhi setiap kebutuhan rumah tangga dan gaya hidup modern Anda.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-card group relative cursor-pointer rounded-3xl p-8 shadow-lg transition-shadow duration-300 ${cat.glow} hover:shadow-2xl`}
              >
                {/* Icon */}
                <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${cat.gradient} p-3.5 text-white shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{cat.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {cat.description}
                </p>

                {/* Hover button */}
                <div className="flex items-center gap-1 text-sm font-semibold text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lihat Koleksi <ArrowRight className="h-4 w-4" />
                </div>

                {/* Corner glow on hover */}
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${cat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
