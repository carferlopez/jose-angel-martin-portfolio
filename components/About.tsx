'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { TechnicalImage } from './TechnicalImage'

export function About() {
  const reduced = useReducedMotion()
  return (
    <section
      id="sobre-mi"
      className="relative py-20 md:py-36 px-4 md:px-10"
      aria-labelledby="about-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        04.0 — SOBRE MÍ
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Foto */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="relative overflow-hidden bg-white"
            style={{ border: '1px solid rgba(20,20,20,0.18)', maxWidth: 420, aspectRatio: '500/561' }}
          >
            <TechnicalImage
              src="/media/pepe_profile_meme.jpg"
              alt="Retrato de Pepe Martín Ramírez"
              label="pepe_profile_meme.jpg"
              fill
              sizes="(min-width: 768px) 420px, calc(100vw - 32px)"
              style={{ objectFit: 'contain' }}
            />
            <div className="cross-mark top-3 left-3" />
            <div className="cross-mark top-3 right-3" />
            <div className="cross-mark bottom-3 left-3" />
            <div className="cross-mark bottom-3 right-3" />
            <div
              className="absolute bottom-3 right-3"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 9, color: 'var(--color-accent)', letterSpacing: '0.08em' }}
              aria-hidden="true"
            >
              pepe_profile_meme.jpg ↗
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="flex flex-col gap-8"
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <h2
              id="about-heading"
              className="font-display mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', color: 'var(--color-ink)' }}
            >
              <span className="highlight-heading">Pepe Martín Ramírez</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.1em', opacity: 0.45, textTransform: 'uppercase' }}>
              Ingeniero Técnico Eléctrico
            </p>
          </div>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.78, color: 'var(--color-ink)', opacity: 0.78 }}>
            Ingeniero Técnico Eléctrico con más de 10 años de experiencia técnica en compras en diferentes sectores. Aporto una visión que combina la precisión de la ingeniería y la optimización estratégica.
          </p>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, color: 'var(--color-ink)', opacity: 0.55 }}>
            Con base en Pedro Muñoz, ofrezco servicio en toda la comarca de la Mancha. Trato directo y cercano: yo mismo llevo tu expediente de principio a fin, sin intermediarios.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="stamp">Ingeniero Técnico</span>
            <span className="stamp">Pedro Muñoz</span>
            <span className="stamp">+10 años exp.</span>
            <span className="stamp">Trato directo</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
