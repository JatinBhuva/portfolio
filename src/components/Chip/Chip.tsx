import type { PropsWithChildren } from 'react'
import styles from './Chip.module.css'

type ChipProps = PropsWithChildren<{
  className?: string
}>

export function Chip({ className, children }: ChipProps) {
  const chipClassName = className ? `${styles.chip} ${className}` : styles.chip
  return <span className={chipClassName}>{children}</span>
}

