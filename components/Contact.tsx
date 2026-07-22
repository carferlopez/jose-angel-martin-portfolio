'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { EMAIL, TELEGRAM_HREF } from '@/lib/constants'

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 3.5L7.5 8.5L13.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
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
        06.0 — CONTACTO
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
          <span className="highlight-heading highlight-heading-loose">Estamos en contacto</span>
        </motion.h2>

        {/* Botones directos paralelos (Telegram + Email) */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
          {/* Telegram */}
          <a
            href={TELEGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-4 hover:!bg-[#24A1DE] hover:!border-[#24A1DE] hover:!text-white focus-visible:!bg-[#24A1DE] focus-visible:!border-[#24A1DE] focus-visible:!text-white transition-all duration-300"
            style={{
              border: '2px solid #24A1DE',
              color: '#24A1DE',
              backgroundColor: 'transparent',
              fontFamily: 'var(--font-technical)',
              fontSize: 13,
              letterSpacing: '0.06em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            aria-label="Abrir Telegram"
          >
            <TelegramIcon />
            <span>Telegram</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="cta-orange-hover flex items-center justify-center gap-2.5 py-4 hover:!bg-accent-orange hover:!border-accent-orange hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent-orange focus-visible:!border-accent-orange focus-visible:!text-paper focus-visible:!opacity-100 transition-all duration-300"
            style={{
              border: '2px solid var(--color-accent-orange)',
              color: 'var(--color-accent-orange)',
              backgroundColor: 'transparent',
              fontFamily: 'var(--font-technical)',
              fontSize: 13,
              letterSpacing: '0.06em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            aria-label={`Enviar email a ${EMAIL}`}
          >
            <MailIcon />
            <span>Enviar mensaje</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-6 border-t flex justify-between items-center" style={{ borderColor: 'var(--color-section-border)' }}>
        <span style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.65, letterSpacing: '0.06em' }}>
          Web desarrollada por{' '}
          <a
            href="https://carlosmakes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rotring font-semibold text-[var(--color-accent-orange)] opacity-100"
          >
            Carlosmakes.com
          </a>
        </span>
      </footer>
    </section>
  )
}
