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
  icon?: string
  logo?: { src: string; alt: string; mode?: 'light' | 'dark' }
  href?: string
}

export type WorkHistoryProject = {
  title: string
  subtitle?: string
  bullets: string[]
  images?: { src: string; alt: string }[]
}

export type WorkHistoryItem = {
  company: string
  role: string
  start: string
  end: string
  location?: string
  summary?: string[]
  projects?: WorkHistoryProject[]
}

export type Project = {
  title: string
  description: string
  tags: string[]
  image?: { src: string; alt: string }
  href?: string
  highlights?: string[]
  impact?: string[]
  techStack?: string[]
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
  emoji?: string
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

export type EmailJsConfig = {
  serviceId: string
  templateId: string
  publicKey: string
}

export type PortfolioData = {
  brand: { name: string }
  nav: NavItem[]
  hero: HeroContent
  stack: { title: string; description: string; items: StackItem[] }
  workHistory: { title: string; description: string; items: WorkHistoryItem[] }
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
    emailjs?: EmailJsConfig
    links: { label: string; href: string; icon: string }[]
  }
  footer: { tagline: string; links: SocialLink[]; copyright: string }
}
