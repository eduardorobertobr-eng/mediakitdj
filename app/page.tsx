import Header from "@/components/header"
import Hero from "@/components/hero"
import Bio from "@/components/bio"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Bio />
      <Gallery />
      <Contact />
    </main>
  )
}
