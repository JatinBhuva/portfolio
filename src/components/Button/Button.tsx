import type { ReactNode } from 'react'
import { Icon } from '../Icon/Icon'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'md' | 'lg'

type CommonProps = {
  variant: ButtonVariant
  size?: ButtonSize
  className?: string
  rightIcon?: string
  children: ReactNode
}

type ButtonAsLink = CommonProps & {
  href: string
  target?: string
  rel?: string
  onClick?: never
  type?: never
}

type ButtonAsButton = CommonProps & {
  href?: never
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  target?: never
  rel?: never
}

export type ButtonProps = ButtonAsLink | ButtonAsButton

export function Button({
  variant,
  size = 'md',
  className,
  rightIcon,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean)

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {rightIcon ? <Icon aria-hidden name={rightIcon} /> : null}
    </>
  )

  if ('href' in rest) {
    return (
      <a className={classes.join(' ')} href={rest.href} rel={rest.rel} target={rest.target}>
        {content}
      </a>
    )
  }

  return (
    <button
      className={classes.join(' ')}
      disabled={rest.disabled}
      onClick={rest.onClick}
      type={rest.type ?? 'button'}
    >
      {content}
    </button>
  )
}
