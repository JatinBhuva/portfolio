import { memo } from 'react'
import { portfolio } from '../../data/portfolio'
import { useTheme } from '../../hooks/useTheme'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import styles from './TopNavBar.module.css'

type TopNavBarProps = {
  activeSectionId: string | null
}

export const TopNavBar = memo(function TopNavBar({
  activeSectionId,
}: TopNavBarProps) {
  const { theme, toggleTheme } = useTheme()
  const nextThemeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  const themeIcon = theme === 'dark' ? 'light_mode' : 'dark_mode'

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Container className={styles.inner}>
        <a className={styles.brand} href="#main">
          {portfolio.brand.name}
        </a>
        <div className={styles.links} aria-label="Sections">
          {portfolio.nav.map((item) => {
            const isActive = item.id === activeSectionId
            const linkClassName = isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
            return (
              <a key={item.id} className={linkClassName} href={item.href}>
                {item.label}
              </a>
            )
          })}
        </div>
        <div className={styles.actions}>
          <button
            aria-label={nextThemeLabel}
            className={styles.themeToggle}
            onClick={toggleTheme}
            type="button"
          >
            <Icon aria-hidden name={themeIcon} />
          </button>
          <Button href="#contact" size="md" variant="primary">
            Get in touch
          </Button>
        </div>
      </Container>
    </nav>
  )
})
