import FadeIn from './FadeIn'
import SectionTitle from './SectionTitle'
import MapPin from 'lucide-react/dist/esm/icons/map-pin'
import Map from 'lucide-react/dist/esm/icons/map'
import { CONFIG } from '../config'

export default function Location() {
  return (
    <section className="px-4 py-14 bg-cream/60">
      <FadeIn>
        <SectionTitle emoji="📍" color="text-fur-dark">
          La gran aventura
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-8 max-w-xl mx-auto text-center bg-white rounded-[2rem] shadow-card border-b-4 border-banana-dark p-6 sm:p-8">
          <MapPin size={40} className="mx-auto text-jorge-red mb-3" />
          <p className="text-lg sm:text-xl font-bold text-fur-dark leading-snug">
            La gran aventura será en{' '}
            <span className="text-jorge-red">{CONFIG.salon}</span>,{' '}
            {CONFIG.lugar}.
          </p>
          <a
            href={CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 bg-jorge-red hover:bg-jorge-red-dark text-white font-display font-semibold text-lg px-8 py-4 rounded-full shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <Map size={24} />
            Ver en Google Maps
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
