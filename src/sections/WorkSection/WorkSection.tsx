import { memo } from 'react'
import { Chip } from '../../components/Chip/Chip'
import { Container } from '../../components/Container/Container'
import { Icon } from '../../components/Icon/Icon'
import { portfolio } from '../../data/portfolio'
import { isExternalHref } from '../../utils/isExternalHref'
import styles from './WorkSection.module.css'

type Project = (typeof portfolio.work.projects)[number]

const ProjectItem = memo(function ProjectItem({
  project,
  reversed,
}: {
  project: Project
  reversed: boolean
}) {
  const media = (
    <div className={styles.media}>
      {project.image ? (
        <img
          alt={project.image.alt}
          className={styles.image}
          loading="lazy"
          src={project.image.src}
        />
      ) : (
        <div className={styles.placeholder} aria-hidden>
          <div className={styles.placeholderInner}>
            <div className={styles.placeholderTitle}>{project.title}</div>
            <div className={styles.placeholderSubtitle}>Project preview</div>
          </div>
        </div>
      )}
    </div>
  )

  const copy = (
    <div className={styles.copy}>
      {project.tags.length > 0 ? (
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      ) : null}
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      {project.href ? (
        <a
          className={styles.caseLink}
          href={project.href}
          rel={isExternalHref(project.href) ? 'noreferrer' : undefined}
          target={isExternalHref(project.href) ? '_blank' : undefined}
        >
          Explore Case Study
          <Icon aria-hidden className={styles.caseIcon} name="arrow_right_alt" />
        </a>
      ) : null}
    </div>
  )

  return (
    <div className={styles.row}>
      {reversed ? (
        <>
          <div className={styles.colCopy}>{copy}</div>
          <div className={styles.colMedia}>{media}</div>
        </>
      ) : (
        <>
          <div className={styles.colMedia}>{media}</div>
          <div className={styles.colCopy}>{copy}</div>
        </>
      )}
    </div>
  )
})

export function WorkSection() {
  const { work } = portfolio

  return (
    <section className={styles.section} id="work">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{work.title}</h2>
          <p className={styles.subtitle}>{work.description}</p>
        </div>

        <div className={styles.list}>
          {work.projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
