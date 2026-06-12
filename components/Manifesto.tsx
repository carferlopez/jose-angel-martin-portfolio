'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Manifesto() {
  const reduced = useReducedMotion()
  return (
    <section
      className="relative py-16 md:py-24 px-4 md:px-10 border-t border-b"
      style={{ borderColor: 'rgba(20,20,20,0.08)' }}
      aria-label="Compromiso"
    >
      <motion.p
        className="font-display max-w-4xl"
        style={{ fontSize: 'clamp(1.8rem, 4.5vw, 5rem)', color: 'var(--color-ink)' }}
        initial={reduced ? undefined : { opacity: 0, y: 18 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65 }}
      >
        Tramito tu licencia de principio a fin.
        <br />
        <span style={{ opacity: 0.45 }}>Tú solo te ocupas de abrir.</span>
      </motion.p>
      <div className="mt-5 flex items-center gap-3" aria-hidden="true">
        <div style={{ width: 28, height: 1, backgroundColor: 'var(--color-accent)' }} />
        <span style={{ fontFamily: 'var(--font-technical)', fontSize: 9, color: 'var(--color-accent)', letterSpacing: '0.14em' }}>
          JAM — PEDRO MUÑOZ, C.R.
        </span>
      </div>
    </section>
  )
}
