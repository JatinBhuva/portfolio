import styles from './Icon.module.css'

type IconProps = {
  name: string
  className?: string
  'aria-hidden'?: boolean
}

export function Icon({ name, className, ...rest }: IconProps) {
  const iconClassName = className
    ? `material-symbols-outlined ${styles.icon} ${className}`
    : `material-symbols-outlined ${styles.icon}`
  return (
    <span className={iconClassName} {...rest}>
      {name}
    </span>
  )
}
