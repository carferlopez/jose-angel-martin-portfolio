'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Servicio', href: '#servicio' },
  { label: 'Cómo trabajo', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 1h3l1.5 3.5-1.5 1a9 9 0 0 0 4 4l1-1.5L14 9.5V13a1.5 1.5 0 0 1-1.5 1.5C5.5 14.5.5 9.5.5 3A1.5 1.5 0 0 1 2.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-10"
      animate={{ height: scrolled ? 52 : 64 }}
      style={{
        borderBottom: scrolled ? '1px solid rgba(20,20,20,0.1)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        onClick={scrollTo('#hero')}
        className="font-display leading-none select-none"
        animate={{ fontSize: scrolled ? '1.2rem' : '1.6rem' }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ color: 'var(--color-ink)', textDecoration: 'none' }}
        aria-label="José Ángel Martín — inicio"
      >
        JA.
      </motion.a>

      {/* Nav links — solo desktop */}
      <nav className="hidden md:block" aria-label="Navegación principal">
        <ul className="flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={scrollTo(link.href)}
                className="rotring"
                style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: 'var(--color-ink)',
                  opacity: 0.7,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTAs de contacto rápido */}
      <div className="flex items-center gap-2">
        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-none px-3 py-1.5 transition-opacity hover:opacity-85"
          style={{
            backgroundColor: '#25D366',
            color: '#fff',
            fontFamily: 'var(--font-technical)',
            fontSize: 11,
            letterSpacing: '0.06em',
            textDecoration: 'none',
          }}
          aria-label="Escribir por WhatsApp"
        >
          <WhatsAppIcon />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Teléfono */}
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 px-3 py-1.5 transition-opacity hover:opacity-75"
          style={{
            border: '1px solid rgba(20,20,20,0.3)',
            color: 'var(--color-ink)',
            fontFamily: 'var(--font-technical)',
            fontSize: 11,
            letterSpacing: '0.06em',
            textDecoration: 'none',
          }}
          aria-label={`Llamar al ${PHONE_DISPLAY}`}
        >
          <PhoneIcon />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
        </a>
      </div>
    </motion.header>
  )
}
