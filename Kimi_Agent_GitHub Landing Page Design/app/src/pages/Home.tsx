import LogoBar from '../sections/LogoBar'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LogoBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
