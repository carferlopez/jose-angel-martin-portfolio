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


  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-start md:justify-end pt-16 pb-12 md:py-20 md:min-h-screen px-4 md:px-10 border-t border-b overflow-hidden"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="manifesto-heading"
    >
      <div
        className="absolute top-6 md:top-8 left-4 md:left-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em' }}
        aria-hidden="true"
      >
        00.1 — INICIO
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
            <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent-orange)', flexShrink: 0 }} />
            <motion.div
              style={{ height: 1, backgroundColor: 'var(--color-accent-orange)', flexGrow: 1 }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            />
            <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent-orange)', flexShrink: 0 }} />
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
            className="cta-orange-hover mobile-cta-filled-orange flex items-center gap-2 px-5 py-3 hover:!bg-accent-orange hover:!border-accent-orange hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent-orange focus-visible:!border-accent-orange focus-visible:!text-paper focus-visible:!opacity-100"
            style={{
              backgroundColor: 'var(--color-accent-orange)',
              border: '1px solid var(--color-accent-orange)',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-technical)',
              fontSize: 12,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            aria-label={`Llamar al ${PHONE_DISPLAY}`}
          >
            <PhoneIcon />
            Llamar</a>

          <a
            href="#contacto"
            onClick={scrollToContact}
            className="cta-orange-hover flex items-center gap-2 px-5 py-3 hover:!bg-accent-orange hover:!border-accent-orange hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent-orange focus-visible:!border-accent-orange focus-visible:!text-paper focus-visible:!opacity-100"
            style={{
              border: '1px solid var(--color-accent-orange)',
              color: 'var(--color-accent-orange)',
              fontFamily: 'var(--font-technical)',
              fontSize: 12,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            Pedir presupuesto →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
