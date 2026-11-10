import FadeIn from './FadeIn'
import SectionTitle from './SectionTitle'
import { CalendarDays, Clock, HeartHandshake } from 'lucide-react'

export default function EventDetails() {
  return (
    <section className="px-4 py-14">
      <FadeIn>
        <SectionTitle emoji="🗓️" color="text-fur-dark">
          Detalles del evento
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-8 max-w-xl mx-auto bg-white border-4 border-jorge-red rounded-[2rem] shadow-card p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl font-bold text-fur flex items-center justify-center gap-2 leading-snug">
            <HeartHandshake className="text-jorge-red shrink-0 hidden sm:block" size={26} />
            “¡Acompáñanos a celebrar esta increible aventura y divertinos a lo grande!”
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="bg-cream rounded-2xl p-4 flex flex-col items-center gap-1">
              <CalendarDays size={28} className="text-jorge-red" />
              <span className="text-xs font-bold text-fur uppercase tracking-wide">Fecha</span>
              <span className="font-display font-semibold text-fur-dark">
                Sábado, 12 de diciembre de 2026
              </span>
            </div>
            <div className="bg-cream rounded-2xl p-4 flex flex-col items-center gap-1">
              <Clock size={28} className="text-jorge-red" />
              <span className="text-xs font-bold text-fur uppercase tracking-wide">Hora</span>
              <span className="font-display font-semibold text-fur-dark">4:00 PM</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
