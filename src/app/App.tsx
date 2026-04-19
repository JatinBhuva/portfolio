import { useMemo } from 'react'
import { TopNavBar } from '../components/TopNavBar/TopNavBar'
import { portfolio } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { BlogSection } from '../sections/BlogSection/BlogSection'
import { CommunitySection } from '../sections/CommunitySection/CommunitySection'
import { ContactSection } from '../sections/ContactSection/ContactSection'
import { ExpertiseSection } from '../sections/ExpertiseSection/ExpertiseSection'
import { Footer } from '../sections/Footer/Footer'
import { HeroSection } from '../sections/HeroSection/HeroSection'
import { WorkSection } from '../sections/WorkSection/WorkSection'
import { ScrollToTopFab } from '../components/ScrollToTopFab/ScrollToTopFab'
import styles from './App.module.css'

export default function App() {
  const sectionIds = useMemo(
    () => portfolio.nav.map((item) => item.id),
    [],
  )
  const activeSectionId = useActiveSection(sectionIds)

  return (
    <div className={styles.app}>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <TopNavBar activeSectionId={activeSectionId} />
      <main className={styles.main} id="main">
        <HeroSection />
        <ExpertiseSection />
        <WorkSection />
        <CommunitySection />
        <BlogSection />
        <ContactSection />
      </main>
      <ScrollToTopFab />
      <Footer />
    </div>
  )
}
