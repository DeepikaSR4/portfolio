import { MinimalNav } from "@/components/minimal-nav"
import { EditorialHero } from "@/components/editorial-hero"
import { ExpertiseSection } from "@/components/expertise-section"
import { EditorialProjects } from "@/components/editorial-projects"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MinimalNav />
      <EditorialHero />
      <ExpertiseSection />
      <EditorialProjects />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
    </main>
  )
}
