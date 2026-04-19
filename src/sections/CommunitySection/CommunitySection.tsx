import { Carousel } from '../../components/Carousel/Carousel'
import { Chip } from '../../components/Chip/Chip'
import { Container } from '../../components/Container/Container'
import { Icon } from '../../components/Icon/Icon'
import { portfolio } from '../../data/portfolio'
import { isExternalHref } from '../../utils/isExternalHref'
import styles from './CommunitySection.module.css'

export function CommunitySection() {
  const { community } = portfolio

  return (
    <section className={styles.section} id="community">
      <Container>
        <header className={styles.header}>
          <h2 className={styles.title}>{community.title}</h2>
          <p className={styles.description}>{community.description}</p>
        </header>
        <Carousel
          ariaLabel="Community contributions"
          slideCount={community.items.length}
          variant="full"
          renderSlide={(index) => {
            const item = community.items[index]
            const icon = item.icon ?? 'terminal'
            return (
              <article className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon} aria-hidden>
                    <Icon name={icon} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardSubtitle}>{item.subtitle}</p>
                  </div>
                </div>

                {item.tags && item.tags.length > 0 ? (
                  <div className={styles.tags} aria-label="Tags">
                    {item.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                ) : null}

                {item.description ? (
                  <p className={styles.cardDescription}>{item.description}</p>
                ) : null}

                <div className={styles.lines} aria-hidden>
                  <div className={styles.lineFull} />
                  <div className={styles.lineThreeQuarter} />
                  <div className={styles.lineFiveSixth} />
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.meta}>
                    {item.meta ?? item.metaLeft ?? ''}
                  </span>
                  {item.href ? (
                    <a
                      className={styles.cta}
                      href={item.href}
                      rel={isExternalHref(item.href) ? 'noreferrer' : undefined}
                      target={isExternalHref(item.href) ? '_blank' : undefined}
                    >
                      {item.ctaLabel ?? item.linkLabel}
                    </a>
                  ) : (
                    <span className={styles.linkDisabled}>{item.linkLabel}</span>
                  )}
                </div>
              </article>
            )
          }}
        />
      </Container>
    </section>
  )
}
