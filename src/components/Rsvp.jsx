import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle'
import { CONFIG } from '../config'

export default function Rsvp() {
  return (
    <section className="px-4 py-14">
      <FadeIn>
        <div className="max-w-xl mx-auto bg-sky-fun rounded-[2rem] shadow-card-hover p-6 sm:p-10 text-center relative overflow-hidden">
          {/* Lunares decorativos */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 3px, transparent 3px)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden
          />
          <div className="relative z-10 text-white">
            <h3 className="font-display text-3xl font-bold drop-shadow-sm">
              Confirmación de asistencia
            </h3>
            <p className="mt-3 font-bold leading-snug max-w-md mx-auto">
              Por favor, confirma tu asistencia antes del{' '}
              <span className="bg-white/25 px-1.5 rounded">5 de diciembre</span>{' '}
              para preparar todas las sorpresas. 🎁
            </p>
            <motion.a
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="mt-6 inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-display font-semibold text-lg sm:text-xl px-10 py-4 rounded-full rsvp-pulse transition-colors duration-300"
            >
              <MessageCircle size={26} />
              Confirmar por WhatsApp
            </motion.a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
