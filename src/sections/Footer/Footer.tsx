import { Container } from '../../components/Container/Container'
import { portfolio } from '../../data/portfolio'
import styles from './Footer.module.css'

export function Footer() {
  const { footer } = portfolio
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.tagline}>{footer.tagline}</div>
        <div className={styles.links}>
          {footer.links.map((link) => (
            <a
              key={link.label}
              className={styles.link}
              href={link.href}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.copy}>{footer.copyright}</div>
      </Container>
    </footer>
  )
}

