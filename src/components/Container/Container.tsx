import type { PropsWithChildren } from 'react'
import styles from './Container.module.css'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

export function Container({ className, children }: ContainerProps) {
  const containerClassName = className
    ? `${styles.container} ${className}`
    : styles.container

  return <div className={containerClassName}>{children}</div>
}

