'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 80))
  }, [scrollY])

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12"
      animate={{ height: scrolled ? 48 : 64 }}
      style={{
        borderBottom: scrolled ? '1px solid rgba(20,20,20,0.1)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(237,234,227,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo — se encoge con scroll */}
      <motion.a
        href="#"
        onClick={handleClick('#hero')}
        className="rotring font-display leading-none select-none"
        animate={{
          fontSize: scrolled ? '1.2rem' : '1.6rem',
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ color: 'var(--color-ink)', textDecoration: 'none' }}
        data-cursor="INICIO"
        aria-label="José Ángel Martín — inicio"
      >
        JA.
      </motion.a>

      {/* Nav links */}
      <nav aria-label="Navegación principal">
        <ul className="flex items-center gap-6 md:gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClick(link.href)}
                className="rotring text-ink/70 hover:text-ink transition-colors"
                style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
                data-cursor="IR"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sello revisión (solo desktop) */}
      <div className="hidden md:flex items-center gap-3">
        <span className="stamp">REV. 2026.A</span>
        <span
          className="opacity-40"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.1em' }}
        >
          PEDRO MUÑOZ, C.R.
        </span>
      </div>
    </motion.header>
  )
}
