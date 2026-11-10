import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Location from './components/Location'
import GiftTable from './components/GiftTable'
import Rsvp from './components/Rsvp'
import Gallery from './components/Gallery'
import JungleBackground from './components/JungleBackground'

export default function App() {
  return (
    <main className="font-body text-fur-dark">
      <ConfettiBurst />
      <JungleBackground />
      <Hero />
      <EventDetails />
      <Location />
      <GiftTable />
      <Rsvp />
      <Gallery />
      <footer className="bg-banana py-6 text-center font-display font-semibold text-fur-dark">
        🐵 ¡Gracias por venir a nuestra aventura! 🍌
      </footer>
    </main>
  )
}
