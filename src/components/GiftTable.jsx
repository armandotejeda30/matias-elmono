import FadeIn from './FadeIn'
import Gift from 'lucide-react/dist/esm/icons/gift'
import { motion } from 'framer-motion'
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag'
import Banknote from 'lucide-react/dist/esm/icons/banknote'

const GAME_TYPES = [
  { name: 'Tenis', paquete: ['8', '10'] },
  { name: 'Ropa', paquete: ['2'] },
]

const GAME_ITEMS = [
  { type: 'Ropa', tallas: ['talla 2'] },
  { type: 'Efectivo', tallas: [''] },
]

const rows = GAME_ITEMS.map((item) => (
  <div key={item.type} className="flex flex-col items-center gap-3 py-4">
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-white border-2 border-jorge-red flex items-center justify-center shadow-card-sm">
        {item.type === 'Ropa' ? (
          <ShoppingBag size={32} className="text-sky-fun-dark" />
        ) : (
          <Banknote size={32} className="text-jorge-red" />
        )}
      </div>
    </div>
    <span className="text-sm font-bold text-fur-dark">
      {item.type} {item.tallas[0]}
    </span>
  </div>
))

const EMOJI = { Tenis: '🎾', Ropa: '👕' }

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
            Sugerencia de regalos
          </p>

          <div className="mt-8 grid grid-cols-2 gap-8">
            {rows}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
