/**
 * 🎵 Reproducción de música con el archivo MP3 del proyecto.
 * El audio comienza sola al abrir la web, sin necesidad de clic.
 * Al pulsarlo, pausa/reanuda.
 */
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Music, VolumeX, Pause, Play } from 'lucide-react'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const [active, setActive] = useState(false)
  const audioRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    // Crear un contexto de Audio para soporte cross-origin
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioCtx()
    const audio = new Audio()
    audio.preload = 'auto'
    audio.crossOrigin = 'anonymous'
    audio.src = '/capibara.mp3'
    audio.loop = true
    audio.load()

    audioRef.current = { ctx, audio, isSuspended: false }
    setPlaying(false)
    setActive(false)

    return () => {
      audio.pause()
      audio.src = ''
      ctx.close().catch(() => {})
    }
  }, [])

  // Inicia el audio cuando el usuario desplaza la página (scroll)
  useEffect(() => {
    const handleScroll = () => {
      const { ctx, audio, isSuspended } = audioRef.current
      if (!ctx) return

      // Para evitar que active ante cualquier leve desplazamiento, requiere
      // mover al menos 30 px y espera 150 ms antes de reproducir.
      const threshold = 30
      const debounceMs = 150
      let lastY = window.scrollY
      let timer = null

      const start = () => {
        if (isSuspended) {
          ctx.resume().then(() => {
            audio.play().catch(() => {})
            setActive(true)
          })
        } else if (audio.paused) {
          audio.play().catch(() => {})
          setActive(true)
        }
      }

      const onScroll = () => {
        const currentY = window.scrollY
        const distance = Math.abs(currentY - lastY)
        lastY = currentY

        if (distance > threshold) {
          clearTimeout(timer)
          timer = setTimeout(start, debounceMs)
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
        clearTimeout(timer)
      }
    }

    window.addEventListener('scroll', handleScroll, { once: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Al hacer clic en el botón: pausa/reanuda el audio
  const handleToggle = () => {
    const { ctx, audio, isSuspended } = audioRef.current
    if (!ctx) return

    if (isSuspended) {
      ctx.resume().then(() => {
        audio.play().catch(() => {})
        setActive(true)
      })
    } else {
      if (audio.paused) {
        audio.play().catch(() => {})
        setActive(true)
      } else {
        audio.pause()
      }
    }
  }

  return active ? (
    <motion.button
      ref={toggleRef}
      type="button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', bounce: 0.5 }}
      whileTap={{ scale: 0.88 }}
      onClick={handleToggle}
      aria-pressed={playing}
      aria-label={playing ? 'Pausar música de fondo' : 'Iniciar música de fondo'}
      title={playing ? 'Pausar música 🎵' : 'Reproducir música 🎵'}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-banana text-fur-dark font-display font-semibold rounded-full px-4 py-3 shadow-card-hover border-2 border-white hover:bg-banana-dark transition-colors duration-300 cursor-pointer select-none"
    >
      <motion.span
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={playing ? { repeat: Infinity, duration: 3, ease: 'linear' } : {}}
        className="flex"
      >
        {playing ? <Pause size={24} /> : <Play size={24} />}
      </motion.span>
      <span className="hidden sm:inline text-sm">
        {playing ? 'Música ON' : 'Música OFF'}
      </span>
    </motion.button>
  ) : null
}
