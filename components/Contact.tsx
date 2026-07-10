'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PHONE_HREF, PHONE_DISPLAY, EMAIL } from '@/lib/constants'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 1h3l1.5 3.5-1.5 1a9 9 0 0 0 4 4l1-1.5L14 9.5V13a1.5 1.5 0 0 1-1.5 1.5C5.5 14.5.5 9.5.5 3A1.5 1.5 0 0 1 2.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 3.5L7.5 8.5L13.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Contact() {
  const reduced = useReducedMotion()

  return (
    <section
      id="contacto"
      className="relative py-12 md:py-20 px-4 md:px-10 border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="contact-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        07.0 — CONTACTO
      </div>

      <div className="max-w-3xl">
        {/* Título principal */}
        <motion.h2
          id="contact-heading"
          className="font-display mb-8"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', color: 'var(--color-ink)' }}
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="highlight-heading">Hablamos</span>
        </motion.h2>

        <p className="mb-12" style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.8, opacity: 0.7, maxWidth: '600px' }}>
          La consulta inicial es gratuita. Cuéntame qué necesitas y te digo qué tipo de tramitación
          corresponde y cuánto cuesta.
        </p>

        {/* Botones directos paralelos */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <a
            href={PHONE_HREF}
            className="cta-orange-hover mobile-cta-filled-orange flex items-center justify-center gap-3 py-4 hover:!bg-accent-orange hover:!border-accent-orange hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent-orange focus-visible:!border-accent-orange focus-visible:!text-paper focus-visible:!opacity-100"
            style={{
              border: '2px solid var(--color-accent-orange)',
              color: 'var(--color-accent-orange)',
              fontFamily: 'var(--font-technical)',
              fontSize: 13,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            aria-label={`Llamar al ${PHONE_DISPLAY}`}
          >
            <PhoneIcon />
            Llamar · {PHONE_DISPLAY}
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="cta-orange-hover flex items-center justify-center gap-3 py-4 hover:!bg-accent-orange hover:!border-accent-orange hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent-orange focus-visible:!border-accent-orange focus-visible:!text-paper focus-visible:!opacity-100"
            style={{
              border: '2px solid var(--color-accent-orange)',
              color: 'var(--color-accent-orange)',
              fontFamily: 'var(--font-technical)',
              fontSize: 13,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            aria-label={`Enviar email a ${EMAIL}`}
          >
            <MailIcon />
            Enviar mensaje
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t" style={{ borderColor: 'var(--color-section-border)' }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.55, letterSpacing: '0.08em' }}>
              PEPE MARTÍN RAMÍREZ — INGENIERO TÉCNICO · PEDRO MUÑOZ, CIUDAD REAL
            </span>
            <div className="flex items-center gap-4">
              <a href={PHONE_HREF} className="rotring" style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.4, color: 'var(--color-ink)', textDecoration: 'none' }}>
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="rotring" style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.4, color: 'var(--color-ink)', textDecoration: 'none' }}>
                {EMAIL}
              </a>
            </div>
          </div>
          <a
            href="https://www.coitclm.com"
            className="rotring opacity-40 hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 11, color: 'var(--color-ink)', textDecoration: 'none', letterSpacing: '0.06em' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Colegio Ingenieros Industriales CLM ↗
          </a>
        </div>
        <div
          className="mt-4"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 9, opacity: 0.25, letterSpacing: '0.1em' }}
          aria-hidden="true"
        >
          REV. 2026.A — NORMATIVA: DECRETO 54/2011 CLM · RD 2267/2004 · REBT 2002
        </div>
      </footer>
    </section>
  )
}
