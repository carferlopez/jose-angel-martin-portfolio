'use client'
import { useEffect, useState } from 'react'
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

export function Manifesto() {
  const reduced = useReducedMotion()
  const [vpWidth, setVpWidth] = useState(0)

  useEffect(() => {
    setVpWidth(window.innerWidth)
    const handler = () => setVpWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="ingenieria"
      className="relative flex flex-col justify-start md:justify-end pt-32 pb-14 md:py-20 md:min-h-screen px-4 md:px-10 border-b overflow-hidden"
      style={{ borderColor: 'rgba(20,20,20,0.08)' }}
      aria-labelledby="intro-heading"
    >
      <div
        className="absolute top-28 left-4 md:left-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em' }}
        aria-hidden="true"
      >
        00.1 — INICIO
      </div>

      <div
        className="absolute top-32 right-4 md:right-10 hidden md:flex flex-col items-end gap-1 opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 9 }}
        aria-hidden="true"
      >
        <span>FECHA: 2026.06</span>
        <span>NORMATIVA: CTE · REBT</span>
        <span>ÁMBITO: LA MANCHA</span>
      </div>

      <motion.div
        className="absolute left-4 md:left-10 hidden md:block"
        style={{ top: '15%', bottom: '15%', width: 1, backgroundColor: 'var(--color-ink)', opacity: 0.08 }}
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.2 }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="overflow-hidden mb-8">
          <motion.h1
            id="intro-heading"
            className="font-display"
            style={{ fontSize: 'clamp(3rem, 10vw, 11rem)' }}
            initial={reduced ? undefined : { clipPath: 'inset(0 100% 0 0)' }}
            whileInView={reduced ? undefined : { clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="highlight-heading">Consultoría de Compras</span>
            <br />
            <span className="highlight-heading">e Ingeniería Eléctrica</span>
          </motion.h1>
        </div>

        <motion.div
          className="mb-6 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: reduced ? 0 : 0.35 }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-0 w-full">
            <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
            <motion.div
              style={{ height: 1, backgroundColor: 'var(--color-accent)', flexGrow: 1 }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            />
            <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
            <span
              className="ml-3 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: 'var(--color-accent)', letterSpacing: '0.1em' }}
            >
              ↔ {vpWidth}px
            </span>
          </div>
        </motion.div>

        <motion.p
          className="mb-8 max-w-xl"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.65, color: 'var(--color-ink)', opacity: 0.72 }}
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 0.72, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.55 }}
        >
          Ingeniero Técnico Eléctrico. Tramito tu expediente de principio a fin ante el Ayuntamiento.{' '}
          <span style={{ opacity: 0.6 }}>Sin colas, me ocupo de la burocracia, sin sorpresas.</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={reduced ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: reduced ? 0 : 0.7 }}
        >
          <a
            href={PHONE_HREF}
            className="cta-blue-hover flex items-center gap-2 px-5 py-3 hover:!bg-accent hover:!border-accent hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent focus-visible:!border-accent focus-visible:!text-paper focus-visible:!opacity-100"
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

          <a
            href="#contacto"
            onClick={scrollToContact}
            className="cta-blue-hover flex items-center gap-2 px-5 py-3 hover:!bg-accent hover:!border-accent hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent focus-visible:!border-accent focus-visible:!text-paper focus-visible:!opacity-100"
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
      </div>
    </section>
  )
}
