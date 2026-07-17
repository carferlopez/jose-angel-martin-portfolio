'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PHONE_HREF, PHONE_DISPLAY, EMAIL, WHATSAPP_HREF, TELEGRAM_HREF } from '@/lib/constants'

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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.39-.058l.549-.68c.116-.145.231-.116.39-.058.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.423-.101.827z" />
      <path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 2.212.723 4.25 1.954 5.886L2.6 21.4l3.664-1.319A9.957 9.957 0 0011.99 22C17.508 22 22 17.527 22 11.99 22 6.473 17.508 2 11.99 2zm.04 18.232c-1.73 0-3.347-.502-4.717-1.379l-.338-.217-2.182.785.799-2.115-.236-.367c-.981-1.527-1.554-3.376-1.554-5.348 0-5.467 4.447-9.914 9.915-9.914 5.468 0 9.916 4.447 9.916 9.914 0 5.468-4.448 9.915-9.916 9.915z" />
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

        {/* Botones directos paralelos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {/* Teléfono */}
          <a
            href={PHONE_HREF}
            className="cta-orange-hover mobile-cta-filled-orange flex items-center justify-center gap-2.5 py-4 hover:!bg-accent-orange hover:!border-accent-orange hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent-orange focus-visible:!border-accent-orange focus-visible:!text-paper focus-visible:!opacity-100 transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-accent-orange)',
              border: '2px solid var(--color-accent-orange)',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-technical)',
              fontSize: 13,
              letterSpacing: '0.06em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            aria-label={`Llamar al ${PHONE_DISPLAY}`}
          >
            <PhoneIcon />
            <span>Llamar · {PHONE_DISPLAY}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 py-4 hover:!bg-[#25D366] hover:!border-[#25D366] hover:!text-white focus-visible:!bg-[#25D366] focus-visible:!border-[#25D366] focus-visible:!text-white transition-all duration-300"
            style={{
              border: '2px solid #25D366',
              color: '#25D366',
              backgroundColor: 'transparent',
              fontFamily: 'var(--font-technical)',
              fontSize: 13,
              letterSpacing: '0.06em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
            aria-label="Abrir WhatsApp"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>

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
            href="https://www.cogitialbacete.org/"
            className="rotring opacity-40 hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 11, color: 'var(--color-ink)', textDecoration: 'none', letterSpacing: '0.06em' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Colegio Oficial de Ingenieros Técnicos Industriales de Albacete ↗
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
