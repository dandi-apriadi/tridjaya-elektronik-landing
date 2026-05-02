import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Product {
  name: string
  price: string
  rating: number
  tag: string
  emoji: string
}

const products: Product[] = [
  { name: 'Samsung Smart TV 55"', price: 'Rp 8.999.000', rating: 4.8, tag: 'Bestseller', emoji: '📺' },
  { name: 'LG InstaView Refrigerator', price: 'Rp 15.499.000', rating: 4.9, tag: 'Premium', emoji: '🧊' },
  { name: 'Selis E-Bike Thunder', price: 'Rp 7.299.000', rating: 4.7, tag: 'New', emoji: '🚲' },
  { name: 'Polytron LED TV 43"', price: 'Rp 4.299.000', rating: 4.6, tag: 'Promo', emoji: '📺' },
  { name: 'Daikin Inverter AC 1 PK', price: 'Rp 6.899.000', rating: 4.8, tag: 'Hemat Energi', emoji: '❄️' },
  { name: 'Spring Bed Olympic', price: 'Rp 3.799.000', rating: 4.5, tag: 'Comfort', emoji: '🛏️' },
]

export default function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  return (
    <section id="featured" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <span className="mb-2 inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
              Produk Unggulan
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Pilihan Premium
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="rounded-xl border border-gray-200 bg-white/80 p-3 text-gray-600 backdrop-blur-sm transition-all hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-primary-500/30"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="rounded-xl border border-gray-200 bg-white/80 p-3 text-gray-600 backdrop-blur-sm transition-all hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-primary-500/30"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                <div className="glass-card group h-full rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl">
                  {/* Tag */}
                  <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-3 py-1 text-xs font-semibold text-white">
                    {product.tag}
                  </span>

                  {/* Product visual */}
                  <div className="mb-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/[0.02]">
                    <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                      {product.emoji}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  <div className="mb-3 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-extrabold text-primary-600 dark:text-primary-400">{product.price}</p>
                    <button className="rounded-xl bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-500/20 dark:text-primary-400">
                      Detail
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? 'w-8 bg-primary-500'
                  : 'w-2 bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
