import { useEffect, useState } from 'react'

// 12 de diciembre de 2026, 16:00 hrs (hora local)
export const EVENT_DATE = new Date(2026, 11, 12, 16, 0, 0)

function getRemainder(target) {
  const now = new Date()
  const diff = Math.max(0, target - now)
  return {
    total: diff,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

export default function useCountdown(target = EVENT_DATE) {
  const [time, setTime] = useState(() => getRemainder(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemainder(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return time
}
