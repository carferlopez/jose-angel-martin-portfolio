'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Manifesto() {
  const reduced = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-start md:justify-end pt-16 pb-12 md:py-20 md:min-h-screen px-4 md:px-10 border-t border-b overflow-hidden"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="intro-heading"
    >
      <div
        className="absolute top-6 md:top-8 left-4 md:left-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em' }}
        aria-hidden="true"
      >
        00.1 — INICIO
      </div>

      <motion.div
        className="absolute left-4 md:left-10 hidden md:block"
        style={{ top: '15%', bottom: '15%', width: 1, backgroundColor: 'var(--color-ink)', opacity: 0.08 }}
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.2 }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="overflow-hidden mb-8">
          <motion.h1
            id="intro-heading"
            className="font-display"
            style={{ fontSize: 'clamp(3rem, 10vw, 11rem)' }}
            initial={reduced ? undefined : { clipPath: 'inset(0 100% 0 0)' }}
            whileInView={reduced ? undefined : { clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="highlight-heading">Ingeniería Eléctrica</span>
            <br />
            <span className="highlight-heading">y Consultoría de Compras</span>
          </motion.h1>
        </div>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: reduced ? 0 : 0.35 }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-0 w-full">
            <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent-orange)', flexShrink: 0 }} />
            <motion.div
              style={{ height: 1, backgroundColor: 'var(--color-accent-orange)', flexGrow: 1 }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            />
            <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent-orange)', flexShrink: 0 }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
