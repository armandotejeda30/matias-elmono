import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Location from './components/Location'
import Itinerary from './components/Itinerary'
import DressCode from './components/DressCode'
import GiftTable from './components/GiftTable'
import Rsvp from './components/Rsvp'
import Gallery from './components/Gallery'
import ConfettiBurst from './components/ConfettiBurst'
import MusicToggle from './components/MusicToggle'
import JungleBackground from './components/JungleBackground'

export default function App() {
  return (
    <main className="font-body text-fur-dark">
      <ConfettiBurst />
      <JungleBackground />
      <Hero />
      <EventDetails />
      <Location />
      <Itinerary />
      <DressCode />
      <GiftTable />
      <Rsvp />
      <Gallery />
      <MusicToggle />
      <footer className="bg-banana py-6 text-center font-display font-semibold text-fur-dark">
        🐵 ¡Gracias por venir a nuestra aventura! 🍌
      </footer>
    </main>
  )
}
