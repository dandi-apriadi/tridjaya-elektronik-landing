import { motion } from 'framer-motion'
import { MapPin, ShieldCheck, CreditCard, Headphones } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Signal {
  icon: LucideIcon
  value: string
  label: string
  gradient: string
}

const signals: Signal[] = [
  {
    icon: MapPin,
    value: '16 Cabang',
    label: 'di Sulawesi Utara',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ShieldCheck,
    value: 'Garansi Resmi',
    label: 'Produk 100% Original',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: CreditCard,
    value: 'Cicilan Mudah',
    label: 'Tenor hingga 36 bulan',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Headphones,
    value: 'Layanan 24/7',
    label: 'Support after-sales',
    gradient: 'from-orange-500 to-rose-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function TrustSignals() {
  return (
    <section id="trust" className="relative py-24 sm:py-32">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/5 blur-[100px] dark:bg-primary-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            Mengapa Tridjaya
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Dipercaya Sejak Puluhan Tahun
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
            Tridjaya Elektronik telah melayani masyarakat Sulawesi Utara dengan produk berkualitas dan layanan terpercaya.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {signals.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.value}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className={`mx-auto mb-5 inline-flex rounded-2xl bg-gradient-to-br ${s.gradient} p-4 text-white shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-1 text-2xl font-extrabold text-gray-900 dark:text-white">{s.value}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
