import FadeIn from './FadeIn'
import Shirt from 'lucide-react/dist/esm/icons/shirt'
import Footprints from 'lucide-react/dist/esm/icons/footprints'

export default function DressCode() {
  return (
    <section className="px-4 py-14">
      <FadeIn>
        <div className="max-w-xl mx-auto bg-white rounded-[2rem] shadow-card border-b-4 border-sky-fun p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 overflow-hidden relative">
          <div className="shrink-0 w-20 h-20 rounded-full bg-sky-fun/20 flex items-center justify-center">
            <Shirt size={40} className="text-sky-fun-dark" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl font-bold text-fur-dark mb-1 flex items-center gap-2 justify-center sm:justify-start">
              Código de vestimenta
              <Footprints size={22} className="text-jorge-red" />
            </h3>
            <p className="text-fur font-bold leading-snug">
              ¡Ropa muy cómoda y calcetines para saltar sin parar en los
              brincolines!
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
