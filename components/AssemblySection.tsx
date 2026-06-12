'use client'
import { useRef, useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const AssemblyScene = dynamic(
  () => import('./AssemblyScene').then((m) => ({ default: m.AssemblyScene })),
  { ssr: false, loading: () => <SceneLoader /> },
)

function SceneLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.1em', opacity: 0.4 }}>
        CARGANDO MODELO…
      </span>
    </div>
  )
}

export function AssemblySection() {
  const reduced = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const canvasWrap = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)
  const [isMobile, setIsMobile] = useState(false)
  const [inViewport, setInViewport] = useState(false)
  const isInView = useInView(sectionRef, { once: false, margin: '-20%' })

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 767px)').matches)
    const mq = window.matchMedia('(max-width: 767px)')
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])

  useEffect(() => {
    if (isInView) setInViewport(true)
  }, [isInView])

  useEffect(() => {
    if (reduced || isMobile || !sectionRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=280%',
        pin: true,
        scrub: 1.2,
        onUpdate: (self) => {
          progressRef.current = self.progress
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reduced, isMobile])

  // Mobile autoplay animation
  useEffect(() => {
    if (!isMobile || !inViewport || reduced) return
    let raf = 0
    const start = performance.now()
    const duration = 3800

    const animate = (now: number) => {
      const elapsed = now - start
      progressRef.current = Math.min(elapsed / duration, 1)
      if (elapsed < duration) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isMobile, inViewport, reduced])

  return (
    <section
      id="la-pieza"
      ref={sectionRef}
      className="relative bg-paper overflow-hidden"
      style={{ height: isMobile ? '90vh' : '100vh' }}
      aria-label="03.0 — La pieza"
    >
      {/* Número sección */}
      <div
        className="absolute top-8 left-6 md:left-12 z-20 opacity-35"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        03.0 — LA PIEZA
      </div>

      {/* Anotaciones técnicas de fondo */}
      <div
        className="absolute top-8 right-6 md:right-12 z-20 text-right hidden md:block opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 9, lineHeight: 1.7 }}
        aria-hidden="true"
      >
        <div>VISTA: ISOMÉTRICA</div>
        <div>ESCALA: N.A.</div>
        <div>MATERIAL: ACERO F-114</div>
        <div>NORMA: UNE-EN ISO 286</div>
      </div>

      {/* Canvas 3D */}
      <div
        ref={canvasWrap}
        className="absolute inset-0 z-10"
        style={{ opacity: reduced ? 0.4 : 1 }}
      >
        {inViewport && (
          <Suspense fallback={<SceneLoader />}>
            <AssemblyScene progressRef={progressRef} isMobile={isMobile} />
          </Suspense>
        )}
        {/* Frame estático para reduced motion */}
        {reduced && (
          <div className="absolute inset-0 flex items-center justify-center">
            <StaticFrame />
          </div>
        )}
      </div>

      {/* Texto superpuesto — aparece al final del ensamblaje */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: isMobile ? 3.5 : 0, duration: 0.8 }}
      >
        <p
          className="font-display max-w-3xl"
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 2.4rem)',
            color: 'var(--color-ink)',
            opacity: 0.9,
          }}
        >
          Todo sistema complejo es un conjunto de piezas simples bien colocadas.
        </p>
        <div className="mt-4 flex items-center gap-3" aria-hidden="true">
          <div style={{ width: 32, height: 1, backgroundColor: 'var(--color-accent)' }} />
          <span style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--color-accent)', opacity: 0.7 }}>
            REDUCTOR CILÍNDRICO · VISTA EXPLOSIONADA → ENSAMBLADO
          </span>
        </div>
      </motion.div>

      {/* Línea de cota en la base */}
      <div
        className="absolute bottom-8 right-6 md:right-12 z-20 hidden md:flex items-center gap-2 opacity-25"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 9 }}
        aria-hidden="true"
      >
        <span>SCROLL PARA ENSAMBLAR</span>
        <svg width="16" height="8" viewBox="0 0 16 8">
          <path d="M0 4 L12 4 M9 1 L12 4 L9 7" stroke="#141414" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </section>
  )
}

function StaticFrame() {
  return (
    <div
      className="w-64 h-64 relative flex items-center justify-center"
      style={{ border: '1px solid rgba(20,20,20,0.2)' }}
    >
      <div className="cross-mark top-2 left-2" />
      <div className="cross-mark top-2 right-2" />
      <div className="cross-mark bottom-2 left-2" />
      <div className="cross-mark bottom-2 right-2" />
      <div style={{ fontFamily: 'var(--font-technical)', fontSize: 10, opacity: 0.4 }}>
        MODELO 3D
      </div>
    </div>
  )
}
