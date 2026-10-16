/**
 * 🐒 Fondo de monos animados para toda la invitación.
 * Capa fija detrás del contenido (pointer-events-none, z negativo):
 *  - Monos pendulando "colgados" arriba.
 *  - Monos caminantes que cruzan la pantalla lentamente.
 *  - Un mono saltarín.
 * Todos con opacidad baja para no estorbar la lectura.
 */
import { motion } from 'framer-motion'

const WALKERS = [
  { emoji: '🐵', top: '78%', left: 0, duration: 38, delay: 0, size: 'text-5xl sm:text-6xl', flip: false },
  { emoji: '🙈', top: '24%', left: 0, duration: 52, delay: 6, size: 'text-4xl sm:text-5xl', flip: true },
  { emoji: '🙉', top: '55%', left: 0, duration: 45, delay: 14, size: 'text-4xl sm:text-6xl', flip: false },
  { emoji: '🙊', top: '42%', left: 0, duration: 60, delay: 26, size: 'text-3xl sm:text-5xl', flip: true },
]

export default function JungleBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Monos caminantes: cruzan la pantalla de lado a lado */}
      {WALKERS.map((w, i) => (
        <motion.span
          key={i}
          className={`absolute ${w.size} opacity-20`}
          style={{ top: w.top, left: 0 }}
          animate={{
            x: ['-10vw', '108vw'],
            y: [0, -18, 0, 14, 0],
            rotate: w.flip ? [6, -6, 6] : [-6, 6, -6],
          }}
          transition={{
            x: { duration: w.duration, delay: w.delay, repeat: Infinity, ease: 'linear' },
            y: { duration: w.duration / 6, repeat: Infinity, repeatDelay: w.duration / 12, ease: 'easeInOut' },
            rotate: { duration: w.duration / 9, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {w.emoji}
        </motion.span>
      ))}

      {/* Mono colgado "balanceándose" del borde superior */}
      <motion.span
        className="absolute left-[8%] top-6 text-4xl sm:text-5xl opacity-25 origin-top"
        animate={{ rotate: [-18, 18, -18] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        🐒
      </motion.span>
      <motion.span
        className="absolute right-[10%] top-16 text-3xl sm:text-5xl opacity-25 origin-top"
        animate={{ rotate: [14, -14, 14] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        🐵
      </motion.span>

      {/* Mono saltarín abajo a la izquierda */}
      <motion.span
        className="absolute left-[4%] bottom-[18%] text-4xl sm:text-5xl opacity-20"
        animate={{ y: [0, -26, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        🐵
      </motion.span>
    </div>
  )
}
