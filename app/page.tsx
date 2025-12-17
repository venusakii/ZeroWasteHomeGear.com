import { Hero } from "@/components/hero"
import { CategorySection } from "@/components/category-section"
import { WhyZeroWaste } from "@/components/why-zero-waste"
import { HowItWorks } from "@/components/how-it-works"
import { LifestyleSection } from "@/components/lifestyle-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <CategorySection />
      <WhyZeroWaste />
      <HowItWorks />
      <LifestyleSection />
      <CTASection />
      <Footer />
    </main>
  )
}
