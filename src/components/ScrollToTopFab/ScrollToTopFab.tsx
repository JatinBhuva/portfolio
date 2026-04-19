import { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from '../Icon/Icon'
import styles from './ScrollToTopFab.module.css'

function getPrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

export function ScrollToTopFab() {
  const prefersReducedMotion = useMemo(getPrefersReducedMotion, [])
  const [isVisible, setIsVisible] = useState(false)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const update = () => {
      rafId.current = null
      setIsVisible(window.scrollY > 520)
    }

    const onScroll = () => {
      if (rafId.current != null) return
      rafId.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={styles.fab}
      data-visible={isVisible ? 'true' : 'false'}
      onClick={scrollToTop}
    >
      <Icon aria-hidden className={styles.icon} name="arrow_upward" />
    </button>
  )
}

