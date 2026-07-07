'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'



function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 1h3l1.5 3.5-1.5 1a9 9 0 0 0 4 4l1-1.5L14 9.5V13a1.5 1.5 0 0 1-1.5 1.5C5.5 14.5.5 9.5.5 3A1.5 1.5 0 0 1 2.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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
        className="relative block select-none"
        style={{
          width: scrolled ? 108 : 136,
          height: scrolled ? 54 : 68,
          textDecoration: 'none',
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-label="Pepe Martín Ramírez — inicio"
      >
        <img
          src={scrolled ? "/media/logo_zancara_ohm_text_black.png" : "/media/logo_zancara_ohm_white_icon_blue_text.png"}
          alt="Záncara OHM"
          className="h-full w-full"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      </motion.a>



      {/* CTAs de contacto rápido */}
      <div className="flex items-center gap-2">
        {/* Teléfono */}
        <a
          href={PHONE_HREF}
          className="cta-blue-hover flex items-center gap-2 px-3 py-1.5 hover:!bg-accent hover:!border-accent hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent focus-visible:!border-accent focus-visible:!text-paper focus-visible:!opacity-100"
          style={{
            border: scrolled ? '1px solid rgba(20,20,20,0.3)' : '1px solid rgba(255,255,255,0.45)',
            color: scrolled ? 'var(--color-ink)' : 'var(--color-paper)',
            fontFamily: 'var(--font-technical)',
            fontSize: 11,
            letterSpacing: '0.06em',
            textDecoration: 'none',
            transition: 'border-color 0.3s ease, color 0.3s ease',
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
