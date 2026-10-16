import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import SectionTitle from './SectionTitle'
import Hand from 'lucide-react/dist/esm/icons/hand'
import Gamepad2 from 'lucide-react/dist/esm/icons/gamepad-2'
import PartyPopper from 'lucide-react/dist/esm/icons/party-popper'
import Cake from 'lucide-react/dist/esm/icons/cake'

const STOPS = [
  {
    time: '4:00 PM',
    title: '¡Llegada de los exploradores!',
    sub: 'Bienvenida',
    icon: Hand,
    bg: 'bg-sky-fun',
  },
  {
    time: '5:00 PM',
    title: '¡A jugar y hacer monerías!',
    sub: 'Show / Juegos',
    icon: Gamepad2,
    bg: 'bg-fur',
  },
  {
    time: '6:30 PM',
    title: '¡A romper la piñata!',
    sub: 'Piñata',
    icon: PartyPopper,
    bg: 'bg-jorge-red',
  },
  {
    time: '7:30 PM',
    title: '¡El delicioso pastel!',
    sub: 'Pastel',
    icon: Cake,
    bg: 'bg-banana-dark',
  },
]

export default function Itinerary() {
  return (
    <section className="px-4 py-14">
      <FadeIn>
        <SectionTitle emoji="🗺️" color="text-fur-dark">
          Itinerario del día
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-10 max-w-md mx-auto relative">
          {/* Línea punteada vertical */}
          <div className="absolute left-[28px] top-4 bottom-4 w-[3px] timeline-dotted" aria-hidden />

          <ol className="space-y-8">
            {STOPS.map((stop, i) => {
              const Icon = stop.icon
              return (
                <motion.li
                  key={stop.time}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.12, type: 'spring', bounce: 0.4, duration: 0.7 }}
                  className="relative flex items-center gap-4"
                >
                  <div
                    className={`shrink-0 w-14 h-14 rounded-full ${stop.bg} text-white flex items-center justify-center shadow-card z-10 border-4 border-white`}
                  >
                    <Icon size={26} />
                  </div>
                  <div className="bg-white rounded-2xl shadow-card px-4 py-3 flex-1 border-l-4 border-banana hover:shadow-card-hover transition-shadow duration-300">
                    <span className="font-display font-bold text-jorge-red">{stop.time}</span>
                    <p className="font-bold text-fur-dark leading-snug">{stop.title}</p>
                    <p className="text-sm text-fur/80 font-semibold">{stop.sub}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </FadeIn>
    </section>
  )
}
