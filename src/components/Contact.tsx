import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-rose-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
            Hubungi Kami
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Kunjungi Toko Kami
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
            Cabang utama Sam Ratulangi siap melayani kebutuhan Anda setiap hari.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {[
              { icon: MapPin, label: 'Alamat', value: 'Jl. Sam Ratulangi No. 88, Manado, Sulawesi Utara' },
              { icon: Phone, label: 'Telepon', value: '(0431) 123-4567' },
              { icon: Mail, label: 'Email', value: 'info@tridjayaelektronik.co.id' },
              { icon: Clock, label: 'Jam Operasional', value: 'Senin - Sabtu: 08:00 - 21:00' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="glass-card flex items-start gap-4 rounded-2xl p-5 shadow-md"
                >
                  <div className="rounded-xl bg-primary-500/10 p-3">
                    <Icon className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">{item.label}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              )
            })}

            {/* CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-emerald-500/25 transition-all hover:scale-[1.01] hover:shadow-emerald-500/40"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <iframe
              title="Tridjaya Elektronik Sam Ratulangi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4897!2d124.845!3d1.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjgnNDguMCJOIDEyNMKwNTAnNDIuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
