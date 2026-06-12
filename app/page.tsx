'use client'
import { useState } from 'react'
import { GridBackground } from '@/components/GridBackground'
import { LenisProvider } from '@/components/LenisProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { Preloader } from '@/components/Preloader'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Manifesto } from '@/components/Manifesto'
import { Projects } from '@/components/Projects'
import { AssemblySection } from '@/components/AssemblySection'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Preloader — se superpone hasta que termina */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* App principal */}
      <LenisProvider>
        <CustomCursor />
        <GridBackground />

        <div
          className="relative z-10"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
            minHeight: '100dvh',
          }}
        >
          <Navigation />

          <main id="main-content">
            {/* 00 — Hero */}
            <Hero />

            {/* 01.0 — Método / Manifiesto */}
            <Manifesto />

            {/* 02.0 — Proyectos */}
            <Projects />

            {/* 03.0 — La pieza (R3F assembly) */}
            <AssemblySection />

            {/* 04.0 — Cifras */}
            <Stats />

            {/* 05.0 — Sobre mí */}
            <About />

            {/* 06.0 — Contacto */}
            <Contact />
          </main>
        </div>
      </LenisProvider>
    </>
  )
}
