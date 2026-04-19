import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Icon } from '../../components/Icon/Icon'
import { portfolio } from '../../data/portfolio'
import styles from './ContactSection.module.css'

export function ContactSection() {
  const { contact } = portfolio
  const mailto = `mailto:${contact.email}`

  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden />
          <div className={styles.inner}>
            <h2 className={styles.title}>{contact.title}</h2>
            <p className={styles.description}>{contact.description}</p>

            <div className={styles.actions}>
              <Button href={mailto} size="lg" variant="primary">
                {contact.email}
              </Button>
              <div className={styles.iconLinks} aria-label="Social links">
                {contact.links.map((link) => (
                  <a
                    key={link.label}
                    aria-label={link.label}
                    className={styles.iconButton}
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden name={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

