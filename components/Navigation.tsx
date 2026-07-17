'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_HREF, TELEGRAM_HREF, EMAIL } from '@/lib/constants'

const SECTIONS = [
  { href: '#inicio', number: '00.0', label: 'Introducción' },
  { href: '#servicio', number: '01.0', label: 'Servicios' },
  { href: '#ingenieria', number: '02.0', label: 'Servicios de Ingeniería' },
  { href: '#compras', number: '03.0', label: 'Consultoría de Compras' },
  { href: '#cobertura', number: '04.0', label: 'Cobertura' },
  { href: '#sobre-mi', number: '05.0', label: 'Sobre Mí' },
  { href: '#contacto', number: '06.0', label: 'Contacto' },
]

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 1h3l1.5 3.5-1.5 1a9 9 0 0 0 4 4l1-1.5L14 9.5V13a1.5 1.5 0 0 1-1.5 1.5C5.5 14.5.5 9.5.5 3A1.5 1.5 0 0 1 2.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 3.5L7.5 8.5L13.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.28.072.39-.058l.549-.68c.116-.145.231-.116.39-.058.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.423-.101.827z" />
      <path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 2.212.723 4.25 1.954 5.886L2.6 21.4l3.664-1.319A9.957 9.957 0 0011.99 22C17.508 22 22 17.527 22 11.99 22 6.473 17.508 2 11.99 2zm.04 18.232c-1.73 0-3.347-.502-4.717-1.379l-.338-.217-2.182.785.799-2.115-.236-.367c-.981-1.527-1.554-3.376-1.554-5.348 0-5.467 4.447-9.914 9.915-9.914 5.468 0 9.916 4.447 9.916 9.914 0 5.468-4.448 9.915-9.916 9.915z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {open ? (
        <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M2 4.5H14M2 8H14M2 11.5H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAndClose = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-10"
      animate={{ height: scrolled ? 72 : 92 }}
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
        className={`relative block select-none ${
          scrolled ? 'w-[66px] h-[66px]' : 'w-[66px] h-[66px] md:w-[84px] md:h-[84px]'
        }`}
        style={{
          textDecoration: 'none',
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-label="Pepe Martín Ramírez — inicio"
      >
        <img
          src={scrolled ? "/media/Logo_OK_Azul.png" : "/media/Logo_OK_Blanco.png"}
          alt="Záncara OHM"
          className="h-full w-full"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      </motion.a>

      {/* CTAs de contacto rápido + Menú desplegable */}
      <div className="flex items-center gap-1.5 sm:gap-2 relative" ref={menuRef}>
        {/* En móvil se esconden los botones sueltos (quedaban amontonados) y se muestran solo en md+ */}
        <div className="hidden md:flex items-center gap-1.5 sm:gap-2">
          {/* Teléfono */}
          <a
            href={PHONE_HREF}
            className="cta-orange-hover mobile-cta-filled-orange flex items-center gap-2 px-3 py-1.5 hover:!bg-accent-orange hover:!border-accent-orange hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent-orange focus-visible:!border-accent-orange focus-visible:!text-paper focus-visible:!opacity-100"
            style={{
              backgroundColor: 'var(--color-accent-orange)',
              border: '1px solid var(--color-accent-orange)',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-technical)',
              fontSize: 11,
              letterSpacing: '0.06em',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
            }}
            aria-label={`Llamar al ${PHONE_DISPLAY}`}
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-2.5 py-1.5 hover:opacity-85 focus-visible:opacity-85 transition-opacity duration-300"
            style={{
              border: '1px solid #25D366',
              color: '#FFFFFF',
              backgroundColor: '#25D366',
              textDecoration: 'none',
            }}
            aria-label="Abrir WhatsApp"
            title="Abrir WhatsApp"
          >
            <WhatsAppIcon />
          </a>

          {/* Telegram */}
          <a
            href={TELEGRAM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-2.5 py-1.5 hover:opacity-85 focus-visible:opacity-85 transition-opacity duration-300"
            style={{
              border: '1px solid #24A1DE',
              color: '#FFFFFF',
              backgroundColor: '#24A1DE',
              textDecoration: 'none',
            }}
            aria-label="Abrir Telegram"
            title="Abrir Telegram"
          >
            <TelegramIcon />
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center px-2.5 py-1.5 hover:opacity-85 focus-visible:opacity-85 transition-opacity duration-300"
            style={{
              border: '1px solid var(--color-accent-orange)',
              color: 'var(--color-paper)',
              backgroundColor: 'var(--color-accent-orange)',
              textDecoration: 'none',
            }}
            aria-label={`Enviar correo a ${EMAIL}`}
            title={`Enviar correo a ${EMAIL}`}
          >
            <MailIcon />
          </a>
        </div>

        {/* Botón Menú Hamburguesa en color naranja sólido */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center px-3 py-1.5 transition-all duration-300 ml-0.5 cursor-pointer hover:opacity-90 focus-visible:opacity-90"
          style={{
            border: '1px solid var(--color-accent-orange)',
            color: 'var(--color-paper)',
            backgroundColor: 'var(--color-accent-orange)',
            textDecoration: 'none',
          }}
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de secciones"}
          title="Menú de secciones"
        >
          <HamburgerIcon open={menuOpen} />
        </button>

        {/* Menú Desplegable */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute right-0 top-full mt-3 w-[86vw] max-w-sm sm:w-80 bg-white shadow-2xl p-6 z-[120]"
              style={{
                border: '1px solid var(--color-ink)',
                boxShadow: '0 20px 45px rgba(0,0,0,0.22)',
              }}
            >
              {/* Encabezado del menú */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b" style={{ borderColor: 'var(--color-section-border)' }}>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>
                  SECCIONES
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-black transition-colors cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Botones sociales/contacto dentro del menú en móvil */}
              <div className="md:hidden pb-4 mb-4 border-b flex flex-col gap-2.5" style={{ borderColor: 'var(--color-section-border)' }}>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>
                  CONTACTO RÁPIDO
                </span>
                <div className="grid grid-cols-4 gap-2">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: 'var(--color-accent-orange)', color: 'var(--color-paper)', border: '1px solid var(--color-accent-orange)' }}
                    aria-label={`Llamar al ${PHONE_DISPLAY}`}
                    title={`Llamar al ${PHONE_DISPLAY}`}
                  >
                    <PhoneIcon />
                  </a>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: '#25D366', color: '#FFFFFF', border: '1px solid #25D366' }}
                    aria-label="Abrir WhatsApp"
                    title="Abrir WhatsApp"
                  >
                    <WhatsAppIcon />
                  </a>
                  <a
                    href={TELEGRAM_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: '#24A1DE', color: '#FFFFFF', border: '1px solid #24A1DE' }}
                    aria-label="Abrir Telegram"
                    title="Abrir Telegram"
                  >
                    <TelegramIcon />
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center justify-center py-2.5 transition-opacity hover:opacity-85"
                    style={{ backgroundColor: 'var(--color-accent-orange)', color: 'var(--color-paper)', border: '1px solid var(--color-accent-orange)' }}
                    aria-label={`Enviar correo a ${EMAIL}`}
                    title={`Enviar correo a ${EMAIL}`}
                  >
                    <MailIcon />
                  </a>
                </div>
                <a
                  href={PHONE_HREF}
                  className="mt-1 block text-center py-2 transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: 'var(--color-ink)',
                    color: 'var(--color-paper)',
                    fontFamily: 'var(--font-technical)',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}
                >
                  LLAMAR: {PHONE_DISPLAY}
                </a>
              </div>

              {/* Lista de secciones */}
              <nav className="flex flex-col gap-3.5">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.href}
                    href={sec.href}
                    onClick={scrollToAndClose(sec.href)}
                    className="group flex items-center justify-between py-1 transition-all duration-200"
                    style={{ textDecoration: 'none', color: 'var(--color-ink)' }}
                  >
                    <span
                      className="font-display transition-colors duration-200 group-hover:text-[var(--color-accent-orange)]"
                      style={{ fontSize: '1.25rem' }}
                    >
                      {sec.label}
                    </span>
                    <span
                      className="transition-colors duration-200 group-hover:text-[var(--color-accent-orange)] opacity-50 group-hover:opacity-100"
                      style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.08em' }}
                    >
                      {sec.number}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-3.5 border-t flex justify-between items-center opacity-70" style={{ borderColor: 'var(--color-section-border)' }}>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.08em', color: 'var(--color-ink)' }}>
                  ZÁNCARA OHM
                </span>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: 'var(--color-accent-orange)' }}>
                  • EST. 2026
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
