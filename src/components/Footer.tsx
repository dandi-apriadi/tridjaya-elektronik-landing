import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50 bg-white/40 py-12 backdrop-blur-sm dark:border-white/5 dark:bg-gray-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Tridjaya Elektronik</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Toko elektronik terpercaya di Sulawesi Utara dengan 16 cabang yang siap melayani kebutuhan rumah tangga dan gaya hidup modern Anda.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Produk</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#categories" className="transition-colors hover:text-primary-500">Elektronik</a></li>
                <li><a href="#categories" className="transition-colors hover:text-primary-500">Rumah Tangga</a></li>
                <li><a href="#categories" className="transition-colors hover:text-primary-500">Sepeda Listrik</a></li>
                <li><a href="#categories" className="transition-colors hover:text-primary-500">Furniture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li><a href="#trust" className="transition-colors hover:text-primary-500">Garansi Resmi</a></li>
                <li><a href="#trust" className="transition-colors hover:text-primary-500">Cicilan</a></li>
                <li><a href="#contact" className="transition-colors hover:text-primary-500">Cabang</a></li>
                <li><a href="#contact" className="transition-colors hover:text-primary-500">Kontak</a></li>
              </ul>
            </div>
          </div>

          {/* Social / Contact summary */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Ikuti Kami</h4>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="rounded-xl border border-gray-200 bg-white/60 px-4 py-2 text-xs font-medium text-gray-600 backdrop-blur-sm transition-all hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-primary-500/30 dark:hover:text-primary-400"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200/50 pt-8 text-center text-sm text-gray-400 dark:border-white/5">
          &copy; {new Date().getFullYear()} Tridjaya Elektronik Manado. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
