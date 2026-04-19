import { memo } from 'react'
import { Container } from '../../components/Container/Container'
import { portfolio } from '../../data/portfolio'
import { isExternalHref } from '../../utils/isExternalHref'
import styles from './BlogSection.module.css'

type Post = (typeof portfolio.blog.posts)[number]

const PostCard = memo(function PostCard({ post }: { post: Post }) {
  const isExternal = post.href ? isExternalHref(post.href) : false

  const content = (
    <>
      <div className={styles.media}>
        {post.image ? (
          <img
            alt={post.image.alt}
            className={styles.image}
            loading="lazy"
            src={post.image.src}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden>
            <div className={styles.placeholderInner}>
              <div className={styles.placeholderTitle}>{post.category}</div>
              <div className={styles.placeholderSubtitle}>Medium</div>
            </div>
          </div>
        )}
      </div>
      <span className={styles.category}>{post.category}</span>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={`${styles.description} lineClamp2`}>{post.description}</p>
    </>
  )

  return post.href ? (
    <a
      className={styles.card}
      href={post.href}
      rel={isExternal ? 'noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {content}
    </a>
  ) : (
    <article className={styles.card}>{content}</article>
  )
})

export function BlogSection() {
  const { blog } = portfolio
  return (
    <section className={styles.section} id="blog">
      <Container>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>{blog.title}</h2>
            <p className={styles.subtitle}>{blog.description}</p>
          </div>
          {blog.viewAllHref ? (
            <a
              className={styles.viewAll}
              href={blog.viewAllHref}
              rel="noreferrer"
              target="_blank"
            >
              View all posts
            </a>
          ) : (
            <span className={styles.viewAll} aria-hidden>
              View all posts
            </span>
          )}
        </div>

        <div className={styles.grid}>
          {blog.posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}
