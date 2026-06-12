'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
}

const STATS: Stat[] = [
  { value: 12, suffix: ' AÑOS', label: 'DE EXPERIENCIA' },
  { value: 85, suffix: '+', prefix: '', label: 'LICENCIAS TRAMITADAS' },
  { value: 340, suffix: ' KWP', label: 'POTENCIA SOLAR INSTALADA' },
  { value: 40, suffix: '%', prefix: '−', label: 'TIEMPO MEDIO TRAMITACIÓN' },
]

function Counter({ value, suffix, prefix = '', reduced }: Stat & { reduced: boolean }) {
  const [display, setDisplay] = useState(reduced ? value : 0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView || reduced) {
      setDisplay(value)
      return
    }
    // Rapid "calibration" counter
    const steps = 18
    const duration = 900
    let frame = 0
    const interval = setInterval(() => {
      frame++
      if (frame >= steps) {
        setDisplay(value)
        clearInterval(interval)
        return
      }
      // Scramble effect: mostly random then settle
      if (frame < steps - 4) {
        setDisplay(Math.floor(Math.random() * value * 1.3))
      } else {
        const t = (frame - (steps - 4)) / 4
        setDisplay(Math.round(value * t))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [isInView, reduced, value])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  const reduced = useReducedMotion()

  return (
    <section
      id="cifras"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-paper)' }}
      aria-label="04.0 — Cifras"
    >
      {/* Grid sobre fondo oscuro */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(237,234,227,0.04) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(237,234,227,0.04) 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Número sección */}
      <div
        className="mb-12 opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-paper)' }}
        aria-hidden="true"
      >
        04.0 — CIFRAS
      </div>

      {/* Grid de datos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-paper/10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="md:px-8 first:pl-0"
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Valor */}
            <div
              className="font-display leading-none mb-2"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                color: 'var(--color-paper)',
              }}
              aria-label={`${stat.prefix ?? ''}${stat.value}${stat.suffix}`}
            >
              <Counter {...stat} reduced={reduced} />
            </div>
            {/* Etiqueta */}
            <div
              style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em', opacity: 0.45, color: 'var(--color-paper)' }}
            >
              {stat.label}
            </div>
            {/* Línea de cota decorativa */}
            <div
              className="mt-4 flex items-center gap-0"
              style={{ width: 48 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 8, backgroundColor: 'var(--color-accent)' }} />
              <div style={{ flex: 1, height: 1, backgroundColor: 'var(--color-accent)', opacity: 0.5 }} />
              <div style={{ width: 1, height: 8, backgroundColor: 'var(--color-accent)' }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Anotación técnica inferior */}
      <div
        className="mt-16 pt-8 border-t flex items-center gap-4 opacity-25"
        style={{ borderColor: 'rgba(237,234,227,0.1)', fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.1em', color: 'var(--color-paper)' }}
        aria-hidden="true"
      >
        <span>DATOS ACUMULADOS 2013–2026</span>
        <span style={{ width: 1, height: 10, backgroundColor: 'rgba(237,234,227,0.3)', display: 'inline-block' }} />
        <span>PEDRO MUÑOZ, CIUDAD REAL</span>
        <span style={{ width: 1, height: 10, backgroundColor: 'rgba(237,234,227,0.3)', display: 'inline-block' }} />
        <span>CASTILLA-LA MANCHA</span>
      </div>
    </section>
  )
}
