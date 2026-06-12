import { GridBackground } from '@/components/GridBackground'
import { LenisProvider } from '@/components/LenisProvider'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Manifesto } from '@/components/Manifesto'
import { Service } from '@/components/Service'
import { Process } from '@/components/Process'
import { Coverage } from '@/components/Coverage'
import { About } from '@/components/About'
import { OtherServices } from '@/components/OtherServices'
import { Faq } from '@/components/Faq'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <LenisProvider>
      <GridBackground />
      <Navigation />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Manifesto />
        <Service />
        <Process />
        <Coverage />
        <About />
        <OtherServices />
        <Faq />
        <Contact />
      </main>
    </LenisProvider>
  )
}
