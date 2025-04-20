import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import ContentCarousel from "@/components/content-carousel"
import Testimonials from "@/components/testimonials"
import PremiumTrial from "@/components/premium-trial"
import BlogSection from "@/components/blog-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ContentCarousel />
      <Testimonials />
      <PremiumTrial />
      <BlogSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
