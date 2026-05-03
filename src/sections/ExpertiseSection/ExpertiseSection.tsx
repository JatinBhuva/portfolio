import { memo, useId, useMemo, useState } from 'react'
import { Container } from '../../components/Container/Container'
import { Icon } from '../../components/Icon/Icon'
import { portfolio } from '../../data/portfolio'
import type { StackItem } from '../../data/types'
import styles from './ExpertiseSection.module.css'

const StackCard = memo(function StackCard({ title, href, icon, logo }: StackItem) {
  const showNativePair = title.toLowerCase() === 'native modules'

  const content = (
    <>
      <div className={styles.stackIconWrap} aria-hidden>
        {showNativePair ? (
          <div className={styles.stackLogoPair}>
            <img
              alt=""
              className={styles.stackLogo}
              loading="lazy"
              src="https://cdn.simpleicons.org/android/3DDC84"
            />
            <img
              alt=""
              className={styles.stackLogo}
              loading="lazy"
              src="https://cdn.simpleicons.org/apple/FFFFFF"
              data-mode="light"
            />
          </div>
        ) : logo ? (
          <img
            alt=""
            className={styles.stackLogo}
            data-mode={logo.mode ?? 'dark'}
            loading="lazy"
            src={logo.src}
          />
        ) : icon ? (
          <Icon aria-hidden className={styles.stackIcon} name={icon} />
        ) : null}
      </div>
      <div className={styles.stackName}>{title}</div>
    </>
  )

  if (!href) {
    return (
      <div className={styles.stackCard} aria-label={title}>
        {content}
      </div>
    )
  }

  return (
    <a
      className={`${styles.stackCard} ${styles.stackLink}`}
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-label={`Open ${title} website in a new tab`}
    >
      {content}
    </a>
  )
})

export function ExpertiseSection() {
  const { stack, workHistory } = portfolio
  const [openIndex, setOpenIndex] = useState(0)
  const accordionId = useId()
  const items = useMemo(() => workHistory.items, [workHistory.items])

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

        <div className={styles.workHistory} aria-label={workHistory.title}>
          <div className={styles.workHeader}>
            <h3 className={styles.workTitle}>{workHistory.title}</h3>
            <p className={styles.workSubtitle}>{workHistory.description}</p>
          </div>

          <div className={styles.workList}>
            {items.map((item, index) => {
              const isOpen = openIndex === index
              const metaParts = [
                `${item.start} — ${item.end}`,
                item.location,
              ].filter(Boolean)
              const panelId = `${accordionId}-${index}`

              return (
                <article
                  key={`${item.company}-${item.role}-${item.start}`}
                  className={styles.workItem}
                  data-open={isOpen ? 'true' : 'false'}
                >
                  <button
                    type="button"
                    className={styles.workToggle}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                  >
                    <span className={styles.workDot} aria-hidden />
                    <span className={styles.workHeading}>
                      <span className={styles.workRole}>
                        {item.role} <span className={styles.workAt}>@</span>{' '}
                        <span className={styles.workCompany}>{item.company}</span>
                      </span>
                      {metaParts.length > 0 ? (
                        <span className={styles.workMeta}>
                          {metaParts.map((part, idx) => (
                            <span key={`${part}-${idx}`} className={styles.workMetaItem}>
                              {part}
                            </span>
                          ))}
                        </span>
                      ) : null}
                    </span>
                    <Icon
                      className={styles.workChevron}
                      name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    />
                  </button>

                  <div
                    id={panelId}
                    className={styles.workPanel}
                    hidden={!isOpen}
                  >
                    {item.summary && item.summary.length > 0 ? (
                      <ul className={styles.workSummary}>
                        {item.summary.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
