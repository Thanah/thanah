import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type RefObject } from 'react'

// Every effect here is progressive: without IntersectionObserver, matchMedia
// or motion permission, the page renders in its final, static state.

export function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? true
}

function canObserve() {
  return typeof IntersectionObserver !== 'undefined'
}

/** Fades in every [data-reveal] element the first time it scrolls into view. */
export function useScrollReveal() {
  useEffect(() => {
    if (!canObserve() || prefersReducedMotion()) return
    const root = document.documentElement
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    root.classList.add('reveal-ready')
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}

/** Tilts an element a few degrees toward the pointer (fine pointers only). */
export function useTilt<T extends HTMLElement>(ref: RefObject<T | null>, maxDegrees = 6) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !window.matchMedia?.('(pointer: fine)').matches) return
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--rx', `${(-y * maxDegrees).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(x * maxDegrees).toFixed(2)}deg`)
    }
    const reset = () => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', reset)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', reset)
    }
  }, [ref, maxDegrees])
}

/** Counts from 0 up to `target` once the element is on screen. */
export function useCountUp<T extends HTMLElement>(target: number, durationMs = 1600) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(target)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !canObserve() || prefersReducedMotion()) return
    setValue(0)
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1)
          setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      setValue(target)
    }
  }, [target, durationMs])

  return { ref, value }
}

/** Cycles through `items`, returning the current index. Holds on 0 if motion is reduced. */
export function useRotatingIndex(length: number, intervalMs = 2600) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (length < 2 || prefersReducedMotion()) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), intervalMs)
    return () => window.clearInterval(id)
  }, [length, intervalMs])
  return index
}

/** Writes the pointer position into --mx / --my for the card spotlight. */
export function trackPointer(event: ReactPointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}
