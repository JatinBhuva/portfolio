import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from '../Icon/Icon'
import styles from './Carousel.module.css'

function getPrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

type CarouselProps = {
  ariaLabel: string
  slideCount: number
  renderSlide: (index: number) => React.ReactNode
  autoAdvanceMs?: number
  variant?: 'default' | 'full'
  className?: string
}

export const Carousel = memo(function Carousel({
  ariaLabel,
  slideCount,
  renderSlide,
  autoAdvanceMs = 5200,
  variant = 'default',
  className,
}: CarouselProps) {
  const prefersReducedMotion = useMemo(getPrefersReducedMotion, [])
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const pointerRef = useRef<{
    pointerId: number
    startX: number
    startScrollLeft: number
    isDragging: boolean
  } | null>(null)

  const [isPaused, setIsPaused] = useState(false)

  const getStep = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return 0
    const first = viewport.firstElementChild as HTMLElement | null
    if (!first) return 0

    const style = window.getComputedStyle(viewport)
    const gapValue = style.columnGap !== 'normal' ? style.columnGap : style.gap
    const gapPx = Number.parseFloat(gapValue ?? '0')
    const gap = Number.isFinite(gapPx) ? gapPx : 0
    return first.getBoundingClientRect().width + gap
  }, [])

  const getIndex = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return 0
    const step = getStep()
    if (step <= 0) return 0
    return Math.round(viewport.scrollLeft / step)
  }, [getStep])

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const viewport = viewportRef.current
      if (!viewport) return
      const step = getStep()
      if (step <= 0) return
      viewport.scrollTo({ left: index * step, behavior })
    },
    [getStep],
  )

  const scrollNext = useCallback(() => {
    const next = (getIndex() + 1) % Math.max(1, slideCount)
    scrollToIndex(next)
  }, [getIndex, scrollToIndex, slideCount])

  const scrollPrev = useCallback(() => {
    const count = Math.max(1, slideCount)
    const prev = (getIndex() - 1 + count) % count
    scrollToIndex(prev)
  }, [getIndex, scrollToIndex, slideCount])

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!autoAdvanceMs) return
    if (isPaused) return
    if (slideCount <= 1) return

    const id = window.setInterval(() => scrollNext(), autoAdvanceMs)
    return () => window.clearInterval(id)
  }, [autoAdvanceMs, isPaused, prefersReducedMotion, scrollNext, slideCount])

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'touch') return
      const viewport = viewportRef.current
      if (!viewport) return

      const target = event.target as HTMLElement | null
      if (target?.closest('a,button,input,textarea,select,[role="button"]')) {
        return
      }

      pointerRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startScrollLeft: viewport.scrollLeft,
        isDragging: false,
      }
      setIsPaused(true)
    },
    [],
  )

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    const state = pointerRef.current
    if (!viewport || !state) return
    if (event.pointerId !== state.pointerId) return

    const delta = event.clientX - state.startX
    if (!state.isDragging) {
      if (Math.abs(delta) < 6) return
      state.isDragging = true
    }
    viewport.scrollLeft = state.startScrollLeft - delta
  }, [])

  const onPointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    const state = pointerRef.current
    if (!viewport || !state) return
    if (event.pointerId !== state.pointerId) return

    const wasDragging = state.isDragging
    pointerRef.current = null

    if (wasDragging) {
      const index = getIndex()
      scrollToIndex(index)
    }
    setIsPaused(false)
  }, [getIndex, scrollToIndex])

  const rootClassName = [
    styles.root,
    variant === 'full' ? styles.full : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className={rootClassName}
      onBlurCapture={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.controls}>
        <button
          aria-label="Previous"
          className={styles.control}
          onClick={scrollPrev}
          type="button"
        >
          <Icon aria-hidden name="arrow_back" />
        </button>
        <button
          aria-label="Next"
          className={styles.control}
          onClick={scrollNext}
          type="button"
        >
          <Icon aria-hidden name="arrow_forward" />
        </button>
      </div>

      <div
        className={styles.viewport}
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {Array.from({ length: slideCount }).map((_, index) => (
          <div
            key={index}
            aria-label={`${index + 1} of ${slideCount}`}
            aria-roledescription="slide"
            className={styles.slide}
            role="group"
          >
            {renderSlide(index)}
          </div>
        ))}
      </div>
    </section>
  )
})
