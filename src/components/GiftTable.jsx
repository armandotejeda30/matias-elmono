import FadeIn from './FadeIn'
import Gift from 'lucide-react/dist/esm/icons/gift'
import { motion } from 'framer-motion'

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
            Tu presencia es mi mejor regalo, pero si deseas sorprenderme, me
            encantan los juguetes de{' '}
            <span className="text-jorge-red">carros y dinosaurios 🚗🦖</span> o
            contamos con un buzón para lluvia de sobres en el evento.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
