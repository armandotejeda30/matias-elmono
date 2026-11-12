import FadeIn from './FadeIn'
import Gift from 'lucide-react/dist/esm/icons/gift'
import { motion } from 'framer-motion'

const GAME_TYPES = [
  { name: 'Tenis', paquete: ['8', '10'] },
  { name: 'Ropa', paquete: ['3'] },
]

const GAME_ITEMS = [
  { type: 'Tenis', caja: 1, tallas: ['13', '14'] },
  { type: 'Tenis', caja: 1, tallas: ['13', '14'] },
  { type: 'Ropa', caja: 1, tallas: ['4', '6'] },
  { type: 'Ropa', caja: 1, tallas: ['4', '6'] },
]

const wrapItems = (items) => {
  if (items.length === 0) return items
  const col = Math.ceil(Math.sqrt(items.length))
  const wrapped = []
  for (let i = 0; i < items.length; i += col) {
    wrapped.push(items.slice(i, i + col))
  }
  return wrapped
}

const rows = wrapItems(GAME_ITEMS)

export default function GiftTable() {
  return (
    <section className="px-4 py-14">
      <FadeIn>
        <div className="max-w-xl mx-auto text-center bg-white rounded-[2rem] shadow-card border-b-4 border-jorge-red p-6 sm:p-8">
          <motion.div
            animate={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
            className="inline-block mb-3 bg-banana/30 rounded-full p-5"
          >
            <Gift size={44} className="text-jorge-red" />
          </motion.div>
          <h3 className="font-display text-2xl font-bold text-fur-dark mb-3">
            Mesa de regalos
          </h3>
          <p className="text-fur font-bold leading-snug">
            Mono
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            {rows.map((row, ri) => (
              <div
                key={ri}
                className="flex flex-col gap-3"
              >
                {row.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex items-center justify-center gap-3 rounded-[1.25rem] border-2 border-bana-border bg-white/90 px-3 py-2 text-center shadow-card-sm backdrop-blur-sm"
                  >
                    <span className="text-lg font-bold text-fur-dark">
                      {item.type}
                    </span>
                    <span className="text-sm font-bold text-jorge-red">
                      {item.tallas.map((t, ti) => (
                        <span
                          key={ti}
                          className="border border-jorge-red/50 rounded px-1.5 py-0.5 font-semibold text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
