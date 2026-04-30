import { memo, useMemo, useState } from 'react'
import { Button } from '../../components/Button/Button'
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
  const highlights = (project.highlights ?? []).slice(0, 4)
  const impact = (project.impact ?? []).slice(0, 3)

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
      {highlights.length > 0 ? (
        <ul className={styles.highlights} aria-label={`${project.title} highlights`}>
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
      {impact.length > 0 ? (
        <div className={styles.impact} aria-label={`${project.title} impact`}>
          <div className={styles.impactTitle}>Impact</div>
          <ul className={styles.impactList}>
            {impact.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ) : null}
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
  const [showAll, setShowAll] = useState(false)
  const projects = useMemo(
    () =>
      work.projects.filter((project) => {
        const title = project.title.toLowerCase()
        return !title.includes('diamond') && !title.includes('quiz')
      }),
    [work.projects],
  )
  const featuredCount = 4
  const visibleProjects = showAll ? projects : projects.slice(0, featuredCount)
  const indexProjects = showAll ? projects : projects.slice(0, featuredCount)
  const remainingCount = Math.max(0, projects.length - featuredCount)

  return (
    <section className={styles.section} id="work">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{work.title}</h2>
          <p className={styles.subtitle}>{work.description}</p>
          <div className={styles.projectIndex} aria-label="Projects">
            {indexProjects.map((project) => (
              <Chip key={project.title}>{project.title}</Chip>
            ))}
            {!showAll && remainingCount > 0 ? (
              <Chip>{`+${remainingCount} more`}</Chip>
            ) : null}
          </div>
        </div>

        <div className={styles.list}>
          {visibleProjects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>

        {projects.length > featuredCount ? (
          <div className={styles.moreWrap}>
            <Button
              onClick={() => setShowAll((prev) => !prev)}
              rightIcon={showAll ? 'expand_less' : 'expand_more'}
              size="lg"
              variant="secondary"
            >
              {showAll ? 'Show fewer projects' : 'View more projects'}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
