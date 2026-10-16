import { useEffect } from 'react'
import confetti from 'canvas-confetti'

// Confeti al cargar la página: ráfaga central + lluvia dorada desde las esquinas
export default function ConfettiBurst() {
  useEffect(() => {
    const colors = ['#ffcf3f', '#e63946', '#43c6f4', '#8b5e3c', '#fff8e6']

    confetti({
      particleCount: 130,
      spread: 75,
      origin: { y: 0.6 },
      colors,
      zIndex: 100,
    })

    const t1 = setTimeout(
      () =>
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.8 },
          colors,
          zIndex: 100,
        }),
      350,
    )
    const t2 = setTimeout(
      () =>
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.8 },
          colors,
          zIndex: 100,
        }),
      550,
    )

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return null
}

export function launchConfetti() {
  confetti({
    particleCount: 90,
    spread: 80,
    origin: { y: 0.7 },
    colors: ['#ffcf3f', '#e63946', '#43c6f4', '#8b5e3c'],
    zIndex: 100,
  })
}
