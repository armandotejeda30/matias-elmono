/**
 * 🎵 Música de fondo generada con la Web Audio API (100% offline).
 * Se activa sola al abrir la web.
 */
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Music, VolumeX } from 'lucide-react'

// ─── Partitura: melodía pentatónica alegre (32 corcheas = 4 compases) ───────
const TEMPO = 108 // BPM
const EIGHTH = 60 / TEMPO / 2 // duración de una corchea en segundos
const LOOP_AHEAD = 0.4 // adelanto de programación en segundos

// [nota MIDI | null (silencio), corcheas de duración]
const MELODY = [
  [76, 1], [79, 1], [76, 1], [72, 1], [74, 1], [76, 1], [79, 2],
  [76, 1], [74, 1], [72, 1], [69, 1], [74, 2], [67, 2],
  [72, 1], [76, 1], [79, 1], [81, 1], [79, 1], [76, 1], [72, 2],
  [74, 1], [76, 1], [74, 1], [72, 1], [69, 1], [72, 1], [74, 2],
]
// Bajo: una nota por compás (4 compases)
const BASS = [48, 53, 48, 55] // C3, F3, C3, G3
const BAR_LENGTH = 8 // corcheas por compás

const midiToFreq = (m) => 440 * 2 ** ((m - 69) / 12)

function playPlick(ctx, destination, midi, time, dur) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'triangle'
  osc.frequency.value = midiToFreq(midi)
  gain.gain.setValueAtTime(0.0001, time)
  gain.gain.exponentialRampToValueAtTime(0.5, time + 0.02)
  gain.gain.exponentialRampToValueAtTime(0.0001, time + dur * 0.9)
  osc.connect(gain).connect(destination)
  osc.start(time)
  osc.stop(time + dur)
}

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null) // { ctx, master, timer, schedulerId }

  useEffect(() => {
    // Iniciar la música sin esperar a un clic.
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioCtx()
    ctx.resume().catch(() => {})
    const master = ctx.createGain()
    master.gain.value = 0.12
    master.connect(ctx.destination)

    const state = { noteIdx: 0, nextNoteTime: ctx.currentTime + 0.15, barIdx: 0 }

    const schedule = () => {
      while (state.nextNoteTime < ctx.currentTime + LOOP_AHEAD) {
        if (state.noteIdx % BAR_LENGTH === 0) {
          const bassMidi = BASS[Math.floor(state.noteIdx / BAR_LENGTH) % BASS.length]
          playPlick(ctx, master, bassMidi, state.nextNoteTime, BAR_LENGTH * EIGHTH * 0.8)
        }
        const [midi, beats] = MELODY[state.noteIdx % MELODY.length]
        if (midi !== null) {
          playPlick(ctx, master, midi, state.nextNoteTime, beats * EIGHTH)
        }
        state.nextNoteTime += beats * EIGHTH
        state.noteIdx += beats
      }
    }

    const schedulerId = setInterval(schedule, 200)

    // Proveer un tono inicial inmediato para que el navegador inicie el
    // audio al cargar la página, en lugar de esperar a un clic.
    setTimeout(() => {
      BASS.forEach((midi, i) => {
        playPlick(ctx, master, midi, ctx.currentTime + i * 0.1, EIGHTH * 0.8)
      })
    }, 0)

    schedule()

    audioRef.current = {
      teardown: () => {
        clearInterval(schedulerId)
        ctx.close().catch(() => {})
      },
    }
    setPlaying(true)

    return () => {
      clearInterval(schedulerId)
      ctx.close().catch(() => {})
    }
  }, [])

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', bounce: 0.5 }}
      whileTap={{ scale: 0.88 }}
      aria-pressed={playing}
      aria-label="Pausar música de fondo"
      title="Pausar música 🎵"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-banana text-fur-dark font-display font-semibold rounded-full px-4 py-3 shadow-card-hover border-2 border-white hover:bg-banana-dark transition-colors duration-300 cursor-pointer select-none"
    >
      <motion.span
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={playing ? { repeat: Infinity, duration: 3, ease: 'linear' } : {}}
        className="flex"
      >
        {playing ? <Music size={24} /> : <VolumeX size={24} />}
      </motion.span>
      <span className="hidden sm:inline text-sm">
        {playing ? 'Música ON' : 'Música OFF'}
      </span>
    </motion.button>
  )
}
