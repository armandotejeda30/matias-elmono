/** 
 * 🐒 Fondo de monos reales animados para toda la invitación.
 * Capa fija detrás del contenido (pointer-events-none, z negativo):
 *  - Monos caminantes que cruzan la pantalla lentamente.
 *  - Mono colgado "balanceándose" del borde superior.
 *  - Mono saltarín abajo a la izquierda.
 * Los src son rutas absolutas en public/.
 * Todas las imágenes son 32x32 (text-4xl en este proyecto)
 * y tienen una opacidad baja para no estorbar.
 */
import { motion } from 'framer-motion'

// Nombre del archivo sin extensión. Se usa .png en public/.
const MONO = 'matias1'

const CIRCLE = 'rounded-full'

const WALKERS = [
  { src: MONO, top: '78%', left: 0, size: 'text-4xl', flip: false },
  { src: 'matias2', top: '24%', left: 0, size: 'text-4xl', flip: true },
  { src: 'matias3', top: '55%', left: 0, size: 'text-4xl', flip: false },
  { src: 'matias4', top: '42%', left: 0, size: 'text-4xl', flip: true },
]

export default function JungleBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Monos caminantes: cruzan la pantalla de lado a lado */}
      {WALKERS.map((w, i) => (
        <motion.img
          key={i}
          src={`/${w.src}.png`}
          alt=""
          aria-hidden="true"
          className={`absolute ${w.size} select-none ${CIRCLE} opacity-30`}
          style={{ top: w.top, left: 0 }}
          animate={{
            x: ['-10vw', '108vw'],
            y: [0, -18, 0, 14, 0],
            rotate: w.flip ? [6, -6, 6] : [-6, 6, -6],
          }}
          transition={{
            x: { duration: 38, delay: 0, repeat: Infinity, ease: 'linear' },
            y: { duration: 38 / 6, repeat: Infinity, repeatDelay: 38 / 12, ease: 'easeInOut' },
            rotate: { duration: 38 / 9, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}

      {/* Mono colgado "balanceándose" del borde superior */}
      <motion.img
        src="/matias5.png"
        alt=""
        aria-hidden="true"
        className={`absolute left-[8%] top-6 select-none ${CIRCLE} opacity-30`}
        animate={{ rotate: [-18, 18, -18] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/matias6.png"
        alt=""
        aria-hidden="true"
        className={`absolute right-[10%] top-16 select-none ${CIRCLE} opacity-30`}
        animate={{ rotate: [14, -14, 14] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Mono saltarín abajo a la izquierda */}
      <motion.img
        src="/matias7.png"
        alt=""
        aria-hidden="true"
        className={`absolute left-[4%] bottom-[18%] select-none ${CIRCLE} opacity-30`}
        animate={{ y: [0, -26, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
