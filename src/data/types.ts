export type NavItem = {
  id: string
  label: string
  href: `#${string}`
}

export type HeroContent = {
  badge: string
  heading: string
  highlight: string
  description: string
  primaryCta: { label: string; href: `#${string}` }
  secondaryCta: { label: string; href: `#${string}` }
  image: { src: string; alt: string }
}

export type StackItem = {
  title: string
  description: string
  icon: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  image?: { src: string; alt: string }
  href?: string
}

export type Stat = {
  value: string
  label: string
}

export type FeaturedItem = {
  title: string
  subtitle: string
  description?: string
  tags?: string[]
  meta?: string
  metaLeft?: string
  linkLabel: string
  ctaLabel?: string
  href?: string
  icon?: string
}

export type BlogPost = {
  category: string
  title: string
  description: string
  image?: { src: string; alt: string }
  href?: string
}

export type SocialLink = {
  label: string
  href: string
}

export type PortfolioData = {
  brand: { name: string }
  nav: NavItem[]
  hero: HeroContent
  stack: { title: string; description: string; items: StackItem[] }
  work: { title: string; description: string; projects: Project[] }
  community: {
    title: string
    description: string
    stats: Stat[]
    items: FeaturedItem[]
  }
  blog: {
    title: string
    description: string
    posts: BlogPost[]
    viewAllHref?: string
  }
  contact: {
    title: string
    description: string
    email: string
    links: { label: string; href: string; icon: string }[]
  }
  footer: { tagline: string; links: SocialLink[]; copyright: string }
}
