import FadeIn from './FadeIn'
import SectionTitle from './SectionTitle'

const POLAROIDS = [
  { src: 'matias1', emoji: '🐵', tilt: 'tilt-1', delay: 0 },
  { src: 'matias2', emoji: '🍌', tilt: 'tilt-2', delay: 0.1 },
  { src: 'matias3', emoji: '🎈', tilt: 'tilt-3', delay: 0.2 },
  { src: 'matias4', emoji: '🎩', tilt: 'tilt-4', delay: 0.3 },
]

export default function Gallery() {
  return (
    <section className="px-4 py-14 bg-cream/60">
      <FadeIn>
        <SectionTitle emoji="📷" color="text-fur-dark">
          Galería de aventuras
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-10 max-w-lg mx-auto grid grid-cols-2 gap-6 sm:gap-8">
          {POLAROIDS.map((p, i) => (
            <div
              key={i}
              className={`${p.tilt} bg-white p-3 pb-10 rounded-xs shadow-card transition-all duration-300 hover:rotate-0 hover:shadow-card-hover hover:z-10 hover:scale-105 cursor-pointer`}
            >
              <div className="aspect-square bg-banana/25 rounded-xs flex items-center justify-center text-6xl select-none">
                {p.emoji}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
