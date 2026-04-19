import { memo } from 'react'
import { Container } from '../../components/Container/Container'
import { Icon } from '../../components/Icon/Icon'
import { portfolio } from '../../data/portfolio'
import styles from './ExpertiseSection.module.css'

const StackCard = memo(function StackCard({
  title,
  description,
  icon,
}: (typeof portfolio.stack.items)[number]) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap} aria-hidden>
        <Icon className={styles.icon} name={icon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  )
})

export function ExpertiseSection() {
  const { stack } = portfolio

  return (
    <section className={styles.section} id="expertise">
      <Container>
        <div className={styles.header}>
          <div className={styles.headerCopy}>
            <h2 className={styles.title}>{stack.title}</h2>
            <p className={styles.subtitle}>{stack.description}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {stack.items.map((item) => (
            <StackCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

