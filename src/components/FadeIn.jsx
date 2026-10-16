import { motion } from 'framer-motion'

/**
 * Envuelve contenido con animación fade-in + slide-up al hacer scroll.
 */
export default function FadeIn({ children, delay = 0, y = 32, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
