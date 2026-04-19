import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { portfolio } from '../../data/portfolio'
import styles from './HeroSection.module.css'

const ROTATING_WORDS = [
  'cross-platform',
  'user-first',
  'high-performance',
  'scalable',
] as const

function getPrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

function useRotatingWords(
  words: readonly string[],
  {
    holdMs,
    outMs,
    inMs,
  }: {
    holdMs: number
    outMs: number
    inMs: number
  },
) {
  const prefersReducedMotion = useMemo(getPrefersReducedMotion, [])
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const timeoutsRef = useRef<number[]>([])

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) return

    const clearAll = () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id))
      timeoutsRef.current = []
    }

    let isMounted = true
    const scheduleCycle = () => {
      timeoutsRef.current.push(
        window.setTimeout(() => {
          if (!isMounted) return
          setPhase('out')

          timeoutsRef.current.push(
            window.setTimeout(() => {
              if (!isMounted) return
              setIndex((current) => (current + 1) % words.length)
              setPhase('in')

              timeoutsRef.current.push(
                window.setTimeout(() => {
                  if (!isMounted) return
                  setPhase('idle')
                  scheduleCycle()
                }, inMs),
              )
            }, outMs),
          )
        }, holdMs),
      )
    }

    clearAll()
    scheduleCycle()

    return () => {
      isMounted = false
      clearAll()
    }
  }, [holdMs, inMs, outMs, prefersReducedMotion, words.length])

  const current = words[index] ?? ''

  return { current, phase, prefersReducedMotion }
}

export function HeroSection() {
  const { hero } = portfolio
  const { current, phase, prefersReducedMotion } = useRotatingWords(
    ROTATING_WORDS,
    { holdMs: 2400, outMs: 360, inMs: 520 },
  )

  return (
    <section className={styles.section} aria-label="Hero">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.badge}>{hero.badge}</span>
            <h1 className={styles.title}>
              Building{' '}
              <span className={styles.rotator} aria-label={current}>
                <span
                  className={[
                    styles.word,
                    styles.highlight,
                    phase === 'out' ? styles.wordOut : undefined,
                    phase === 'in' ? styles.wordIn : undefined,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {prefersReducedMotion ? ROTATING_WORDS[0] : current}
                </span>
              </span>{' '}
              mobile experiences.
            </h1>
            <p className={styles.description}>{hero.description}</p>
            <div className={styles.ctas}>
              <Button
                href={hero.primaryCta.href}
                rightIcon="arrow_forward"
                size="lg"
                variant="primary"
              >
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
          <div className={styles.media}>
            <div className={styles.blob} aria-hidden />
            <div className={styles.portraitFrame}>
              <img
                alt={hero.image.alt}
                className={styles.portrait}
                loading="eager"
                src={hero.image.src}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
