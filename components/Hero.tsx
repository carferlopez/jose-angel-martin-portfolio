'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 1h3l1.5 3.5-1.5 1a9 9 0 0 0 4 4l1-1.5L14 9.5V13a1.5 1.5 0 0 1-1.5 1.5C5.5 14.5.5 9.5.5 3A1.5 1.5 0 0 1 2.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Hero() {
  const reduced = useReducedMotion()
  const [vpWidth, setVpWidth] = useState(0)
  const [dimVisible, setDimVisible] = useState(false)

  useEffect(() => {
    setVpWidth(window.innerWidth)
    const handler = () => setVpWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setDimVisible(true), reduced ? 0 : 800)
    return () => clearTimeout(t)
  }, [reduced])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-14 md:pb-20 px-4 md:px-10 pt-24 overflow-hidden"
      aria-label="Licencias de actividad en Pedro Muñoz"
    >
      {/* Anotación técnica — número de sección */}
      <div
        className="absolute top-20 left-4 md:left-10 opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em' }}
        aria-hidden="true"
      >
        00.0 — INICIO
      </div>

      {/* Anotación lateral derecha (solo desktop) */}
      <div
        className="absolute top-24 right-4 md:right-10 hidden md:flex flex-col items-end gap-1 opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 9 }}
        aria-hidden="true"
      >
        <span>FECHA: 2026.06</span>
        <span>NORMATIVA: CTE · REBT</span>
        <span>ÁMBITO: C.R. + COMARCA</span>
      </div>

      {/* Línea vertical de referencia */}
      <motion.div
        className="absolute left-4 md:left-10 hidden md:block"
        style={{ top: '15%', bottom: '15%', width: 1, backgroundColor: 'var(--color-ink)', opacity: 0.08 }}
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        aria-hidden="true"
      />

      {/* H1 */}
      <div className="overflow-hidden mb-4">
        <motion.h1
          className="font-display block"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 11rem)', color: 'var(--color-ink)' }}
          initial={reduced ? undefined : { clipPath: 'inset(0 100% 0 0)' }}
          animate={reduced ? undefined : { clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          Licencias de actividad
        </motion.h1>
      </div>
      <div className="overflow-hidden mb-8">
        <motion.div
          className="font-display block"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 11rem)', color: 'var(--color-ink)' }}
          initial={reduced ? undefined : { clipPath: 'inset(0 100% 0 0)' }}
          animate={reduced ? undefined : { clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          en Pedro Muñoz y comarca
        </motion.div>
      </div>

      {/* Línea de cota */}
      <motion.div
        className="mb-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: dimVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-0 w-full">
          <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
          <motion.div
            style={{ height: 1, backgroundColor: 'var(--color-accent)', flexGrow: 1 }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: dimVisible ? 1 : 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
          <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
          <motion.span
            className="ml-3 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: 'var(--color-accent)', letterSpacing: '0.1em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: dimVisible ? 1 : 0 }}
            transition={{ delay: 0.7 }}
          >
            ↔ {vpWidth}px
          </motion.span>
        </div>
      </motion.div>

      {/* Subtítulo */}
      <motion.p
        className="mb-8 max-w-xl"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.65, color: 'var(--color-ink)', opacity: 0.72 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.72, y: 0 }}
        transition={{ duration: 0.6, delay: reduced ? 0 : 0.55 }}
      >
        Ingeniero industrial colegiado. Tramito tu expediente de principio a fin ante el Ayuntamiento y la Junta de Comunidades.{' '}
        <span style={{ opacity: 0.6 }}>Sin colas, sin burocracia, sin sorpresas.</span>
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: reduced ? 0 : 0.7 }}
      >
        {/* Llamar */}
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 px-5 py-3 transition-opacity hover:opacity-75"
          style={{
            border: '1px solid var(--color-accent)',
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-technical)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
          aria-label={`Llamar al ${PHONE_DISPLAY}`}
        >
          <PhoneIcon />
          Llamar
        </a>

        {/* Presupuesto */}
        <a
          href="#contacto"
          onClick={scrollToContact}
          className="flex items-center gap-2 px-5 py-3 transition-opacity hover:opacity-75"
          style={{
            border: '1px solid rgba(20,20,20,0.25)',
            color: 'var(--color-ink)',
            fontFamily: 'var(--font-technical)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textDecoration: 'none',
            textTransform: 'uppercase',
            opacity: 0.8,
          }}
        >
          Pedir presupuesto →
        </a>
      </motion.div>

      {/* Indicador scroll */}
      <motion.div
        className="absolute bottom-6 left-4 md:left-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.1 }}
        aria-hidden="true"
      >
        <motion.div
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
            <line x1="6" y1="0" x2="6" y2="14" stroke="var(--color-ink)" strokeWidth="1" opacity="0.4"/>
            <polyline points="2,10 6,14 10,10" fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.4"/>
          </svg>
        </motion.div>
        <span style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.1em', opacity: 0.35 }}>
          01.0 →
        </span>
      </motion.div>
    </section>
  )
}
