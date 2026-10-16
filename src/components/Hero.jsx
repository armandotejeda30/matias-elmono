import { motion } from 'framer-motion'
import { Cake, CalendarClock, PartyPopper } from 'lucide-react'
import useCountdown from '../hooks/useCountdown'
import { CONFIG } from '../config'

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-card px-3 py-2 min-w-[64px] sm:min-w-[80px]">
      <span className="font-display text-2xl sm:text-4xl font-bold text-jorge-red tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] sm:text-xs font-bold text-fur uppercase tracking-wide">
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown()
  const finished = days + hours + minutes + seconds === 0

  return (
    <header className="relative min-h-screen bg-banana banana-pattern overflow-hidden flex flex-col items-center justify-center px-4 py-16">
      {/* Decoración flotante */}
      <motion.div
        className="absolute top-16 left-6 text-6xl select-none"
        animate={{ y: [0, -14, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        🍌
      </motion.div>
      <motion.div
        className="absolute top-24 right-8 text-6xl select-none"
        animate={{ y: [0, 12, 0], rotate: [10, -6, 10] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-10 text-5xl select-none hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      >
        🐵
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-10 text-5xl select-none hidden sm:block"
        animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        🎩
      </motion.div>

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 0.9 }}
        className="font-display font-bold text-center text-fur-dark leading-tight"
      >
        <span className="block text-2xl sm:text-3xl text-jorge-red drop-shadow-sm">
          ¡Nos vamos de aventura!
        </span>
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block text-5xl sm:text-7xl text-white drop-shadow-[0_4px_0_rgba(93,58,34,0.35)]"
        >
          {CONFIG.nombre} cumple {CONFIG.edad}
        </motion.span>
      </motion.h1>

      {/* Imagen central */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', bounce: 0.4, duration: 0.9 }}
        className="relative mt-6 mb-8"
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-52 h-52 sm:w-72 sm:h-72 rounded-full sm:rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-card-hover bg-cream"
        >
          <img
            src="/jorge.jpg"
            alt={`${CONFIG.nombre} y Jorge el Curioso`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute -bottom-3 -right-4 bg-jorge-red text-white font-display font-semibold rounded-full px-4 py-2 shadow-card rotate-6 text-sm sm:text-base flex items-center gap-1">
          <Cake size={18} /> ¡ Fiesta !
        </div>
      </motion.div>

      {/* Contador regresivo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-2 text-fur-dark font-display font-semibold text-lg sm:text-xl">
          <CalendarClock size={22} className="text-jorge-red" />
          {finished
            ? '¡La aventura ya empezó! 🎉'
            : 'La aventura empieza en...'}
        </div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="flex gap-2 sm:gap-3"
        >
          <CountdownUnit value={days} label="días" />
          <CountdownUnit value={hours} label="horas" />
          <CountdownUnit value={minutes} label="min." />
          <CountdownUnit value={seconds} label="seg." />
        </motion.div>
        <p className="flex items-center gap-1.5 text-fur font-bold text-sm sm:text-base">
          <PartyPopper size={16} className="text-fur" />
          Sábado 12 de diciembre de 2026 · 4:00 PM
        </p>
      </motion.div>

      {/* Flecha para hacer scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="absolute bottom-6 text-fur-dark text-3xl"
        aria-hidden
      >
        ⌄
      </motion.div>
    </header>
  )
}
