'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LINES = ['JOSÉ ÁNGEL', 'MARTÍN']

export function Hero() {
  const reduced = useReducedMotion()
  const [vpWidth, setVpWidth] = useState(0)
  const [dimVisible, setDimVisible] = useState(false)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setVpWidth(window.innerWidth)
    const handler = () => setVpWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setDimVisible(true), reduced ? 0 : 1400)
    return () => clearTimeout(t)
  }, [reduced])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  }

  const lineVariant = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 pt-24 overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Número de sección */}
      <div
        className="absolute top-20 left-6 md:left-12 opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em' }}
        aria-hidden="true"
      >
        00.0 — HERO
      </div>

      {/* Marca de anotación lateral derecha */}
      <div
        className="absolute top-24 right-6 md:right-12 hidden md:flex flex-col items-end gap-1 opacity-35"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 9 }}
        aria-hidden="true"
      >
        <span>FECHA: 2026.06</span>
        <span>ESCALA: 1:1</span>
        <span>HOJA: 1/1</span>
      </div>

      {/* Línea vertical de referencia */}
      <motion.div
        className="absolute left-6 md:left-12 hidden md:block"
        style={{ top: '15%', bottom: '15%', width: 1, backgroundColor: 'var(--color-ink)', opacity: 0.1 }}
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />

      {/* Título display */}
      <motion.div
        ref={lineRef}
        variants={reduced ? undefined : container}
        initial={reduced ? undefined : 'hidden'}
        animate={reduced ? undefined : 'show'}
        className="relative z-10 mb-6"
      >
        {LINES.map((line) => (
          <div key={line} className="overflow-hidden leading-none">
            <motion.h1
              variants={reduced ? undefined : lineVariant}
              className="font-display block"
              style={{
                fontSize: 'clamp(3.5rem, 14vw, 14rem)',
                color: 'var(--color-ink)',
              }}
            >
              {line}
            </motion.h1>
          </div>
        ))}
      </motion.div>

      {/* Línea de cota horizontal — mide el ancho real del viewport */}
      <motion.div
        className="relative z-10 mb-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: dimVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-0 w-full">
          {/* Tick izquierdo */}
          <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
          {/* Línea animada */}
          <motion.div
            style={{ height: 1, backgroundColor: 'var(--color-accent)', flexGrow: 1 }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: dimVisible ? 1 : 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
          {/* Tick derecho */}
          <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
          {/* Etiqueta */}
          <motion.span
            className="ml-3 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: 'var(--color-accent)', letterSpacing: '0.1em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: dimVisible ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            ↔ {vpWidth}px
          </motion.span>
        </div>
      </motion.div>

      {/* Subtítulo */}
      <motion.div
        className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: reduced ? 0 : 0.8 }}
      >
        <span
          style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink)', opacity: 0.75 }}
        >
          Ingeniero Industrial
        </span>
        <span style={{ width: 1, height: 12, backgroundColor: 'var(--color-ink)', opacity: 0.3, display: 'inline-block' }} />
        <span style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5 }}>
          Pedro Muñoz · Ciudad Real
        </span>
        <span style={{ width: 1, height: 12, backgroundColor: 'var(--color-ink)', opacity: 0.3, display: 'inline-block' }} />
        <span style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5 }}>
          Licencias · Solar · BT · VE
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.4 }}
        aria-label="Desplaza hacia abajo para continuar"
      >
        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          {/* Arrow técnica SVG */}
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
            <line x1="7" y1="0" x2="7" y2="16" stroke="var(--color-ink)" strokeWidth="1" opacity="0.5" />
            <polyline points="3,11 7,16 11,11" fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.5" />
          </svg>
        </motion.div>
        <span
          style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.1em', opacity: 0.4 }}
        >
          01.0 →
        </span>
      </motion.div>
    </section>
  )
}
