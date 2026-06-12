'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const TEXT =
  'Un proyecto sin cálculo no se puede legalizar. Yo calculo, proyecto y elimino todo lo que sobra.'

const SIDE_NOTES = [
  { text: 'NOTA 1: NORMATIVA VIGENTE CTE-DB', top: '10%', right: false },
  { text: 'REF. DECRETO 842/2002 REBT', top: '25%', right: true },
  { text: '↙ VER PROYECTO 02.1', top: '40%', right: false },
  { text: 'REVISADO: JAM — 2026.06', top: '60%', right: true },
  { text: 'ESCALA: 1:1 · HOJA REF: M-01', top: '78%', right: false },
]

function Word({
  word,
  progress,
  index,
  total,
}: {
  word: string
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const start = (index / total) * 0.72
  const end = Math.min(((index + 1.5) / total) * 0.72, 1)
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  return (
    <motion.span
      style={{ opacity, display: 'inline-block', marginRight: '0.3em' }}
    >
      {word}
    </motion.span>
  )
}

export function Manifesto() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.25'],
  })

  const words = TEXT.split(' ')

  return (
    <section
      id="metodo"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-12 py-32 overflow-hidden"
      aria-label="01.0 — Método"
    >
      {/* Número sección */}
      <SectionNumber label="01.0" scrollProgress={scrollYProgress} />

      {/* Anotaciones laterales */}
      {SIDE_NOTES.map((note, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{
            top: note.top,
            ...(note.right ? { right: '3rem' } : { left: '3rem' }),
            fontFamily: 'var(--font-technical)',
            fontSize: 9,
            letterSpacing: '0.1em',
            opacity: 0,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            writingMode: note.right ? 'horizontal-tb' : 'horizontal-tb',
          }}
          animate={reduced ? {} : { opacity: 0.3 }}
          transition={{ delay: i * 0.25 + 0.5, duration: 0.5 }}
          aria-hidden="true"
        >
          {note.text}
        </motion.div>
      ))}

      {/* Líneas horizontales de referencia */}
      <div className="absolute left-0 right-0 top-1/4 h-px bg-ink opacity-[0.05]" aria-hidden="true" />
      <div className="absolute left-0 right-0 bottom-1/4 h-px bg-ink opacity-[0.05]" aria-hidden="true" />

      {/* Texto principal */}
      <div className="relative z-10 max-w-5xl">
        <p
          className="leading-tight"
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 6.5rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            lineHeight: 0.92,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
          }}
          aria-label={TEXT}
        >
          {reduced
            ? TEXT
            : words.map((word, i) => (
                <Word
                  key={`${word}-${i}`}
                  word={word}
                  progress={scrollYProgress}
                  index={i}
                  total={words.length}
                />
              ))}
        </p>

        {/* Firma de la nota */}
        <div className="mt-10 flex items-center gap-4" aria-hidden="true">
          <div style={{ width: 40, height: 1, backgroundColor: 'var(--color-accent)' }} />
          <span
            style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: 'var(--color-accent)', letterSpacing: '0.12em' }}
          >
            JAM — PEDRO MUÑOZ, C.R.
          </span>
        </div>
      </div>
    </section>
  )
}

function SectionNumber({ label, scrollProgress }: { label: string; scrollProgress: MotionValue<number> }) {
  const reduced = useReducedMotion()
  const opacity = useTransform(scrollProgress, [0, 0.15], [0, 1])
  const y = useTransform(scrollProgress, [0, 0.15], [20, 0])

  return (
    <motion.div
      className="absolute top-16 left-6 md:left-12"
      style={reduced ? {} : { opacity, y }}
      aria-hidden="true"
    >
      <span
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em', opacity: 0.35 }}
      >
        {label} — MÉTODO
      </span>
    </motion.div>
  )
}
