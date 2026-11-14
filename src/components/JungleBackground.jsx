/** 
 * 🐒 Fondo de monos reales animados para toda la invitación.
 * Capa fija detrás del contenido (pointer-events-none, z negativo):
 *  - Monos caminadores que cruzan la pantalla lentamente.
 *  - Mono colgado "balanceándose" del borde superior.
 *  - Mono saltarín abajo a la izquierda.
 * Los src son rutas absolutas en public/.
 * Solo se usan las primeras 6 .png (matias1.png a matias6.png).
 */ 
import { motion } from 'framer-motion'

// Solo las primeras 6 fotos .png de public/.
const PHOTOS = [
  'matias1.png',
  'matias2.png',
  'matias3.png',
  'matias4.png',
  'matias5.png',
  'matias6.png',
]

const CIRCLE = 'rounded-full'

// Las 6 fotos se usan en este orden (sin barajar, para que el margen en Y
// sea predecible y no se repitan posiciones).
const WALKERS = PHOTOS.map((src, i) => ({
  src,
  top: `${10 + i * 14}%`,
  y: [0, -24, 0, 18, 0],
  flip: i % 2 === 0,
}))

export default function JungleBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Monos caminantes que cruzan la pantalla de lado a lado */}
      {WALKERS.map((w, i) => (
        <motion.img
          key={i}
          src={`/${w.src}`}
          alt=""
          aria-hidden="true"
          className={`absolute ${w.size} select-none ${CIRCLE} opacity-30`}
          style={{ top: w.top, left: 0 }}
          animate={{
            x: ['-10vw', '108vw'],
            y: w.y,
            rotate: w.flip ? [6, -6, 6] : [-6, 6, -6],
          }}
          transition={{
            x: { duration: 38, delay: 0, repeat: Infinity, ease: 'linear' },
            y: { duration: 38 / 6, delay: i * 0.25, repeat: Infinity, repeatDelay: 38 / 12, ease: 'easeInOut' },
            rotate: { duration: 38 / 9, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}

      {/* Mono colgado "balanceándose" del borde superior */}
      <motion.img
        src="/matias5.png"
        alt=""
        aria-hidden="true"
        className={`absolute left-[6%] top-[12%] select-none ${CIRCLE} opacity-30`}
        animate={{ rotate: [-18, 18, -18] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/matias6.png"
        alt=""
        aria-hidden="true"
        className={`absolute right-[10%] top-[22%] select-none ${CIRCLE} opacity-30`}
        animate={{ rotate: [14, -14, 14] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Mono saltarín abajo a la izquierda */}
      <motion.img
        src="/matias1.png"
        alt=""
        aria-hidden="true"
        className={`absolute left-[4%] bottom-[18%] select-none ${CIRCLE} opacity-30`}
        animate={{ y: [0, -26, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
