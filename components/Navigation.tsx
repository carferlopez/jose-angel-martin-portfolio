'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EMAIL } from '@/lib/constants'

const SECTIONS = [
  { href: '#inicio', number: '00.0', label: 'Introducción' },
  { href: '#servicio', number: '01.0', label: 'Servicios' },
  { href: '#ingenieria', number: '02.0', label: 'Servicios de Ingeniería' },
  { href: '#compras', number: '03.0', label: 'Consultoría de Compras' },
  { href: '#cobertura', number: '04.0', label: 'Cobertura' },
  { href: '#sobre-mi', number: '05.0', label: 'Sobre Mí' },
  { href: '#contacto', number: '06.0', label: 'Contacto' },
]

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 3.5L7.5 8.5L13.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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

              {/* Botón de contacto por Email dentro del menú en móvil */}
              <div className="md:hidden pb-4 mb-4 border-b flex flex-col gap-2.5" style={{ borderColor: 'var(--color-section-border)' }}>
                <span style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--color-accent-orange)', fontWeight: 'bold' }}>
                  CONTACTO RÁPIDO
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-2 py-2.5 transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: 'var(--color-accent-orange)',
                    color: 'var(--color-paper)',
                    border: '1px solid var(--color-accent-orange)',
                    fontFamily: 'var(--font-technical)',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}
                  aria-label={`Enviar correo a ${EMAIL}`}
                  title={`Enviar correo a ${EMAIL}`}
                >
                  <MailIcon />
                  <span>{EMAIL}</span>
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
