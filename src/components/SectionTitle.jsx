import { motion } from 'framer-motion'

export default function SectionTitle({ emoji, children, color = 'text-fur-dark' }) {
  return (
    <motion.h2
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', bounce: 0.45, duration: 0.7 }}
      className={`font-display text-3xl sm:text-4xl font-bold text-center ${color}`}
    >
      <span className="inline-block mr-2">{emoji}</span>
      {children}
    </motion.h2>
  )
}
