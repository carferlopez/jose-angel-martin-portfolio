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
        className="mb-10 opacity-30"
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
            className="relative overflow-hidden"
            style={{ border: '1px solid rgba(20,20,20,0.18)', maxWidth: 420, aspectRatio: '4/5' }}
          >
            <TechnicalImage
              src="/media/retrato.jpg"
              alt="Retrato de José Ángel Martín"
              label="retrato.jpg"
              fill
              sizes="(min-width: 768px) 420px, calc(100vw - 32px)"
              style={{ objectFit: 'cover' }}
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
              retrato.jpg ↗
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
              José Ángel Martín
            </h2>
            <p style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.1em', opacity: 0.45, textTransform: 'uppercase' }}>
              Ingeniero Industrial Colegiado
            </p>
          </div>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.78, color: 'var(--color-ink)', opacity: 0.78 }}>
            Más de doce años proyectando y legalizando actividades en Castilla-La Mancha. Conozco los
            ayuntamientos de la comarca y los tiempos reales de tramitación. Mi objetivo es que tu negocio
            abra cuanto antes y sin contratiempos.
          </p>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, color: 'var(--color-ink)', opacity: 0.55 }}>
            Con base en Pedro Muñoz, ofrezco servicio en toda la provincia de Ciudad Real y municipios
            de provincias limítrofes. Trato directo: yo mismo llevo tu expediente de principio a fin,
            sin intermediarios.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="stamp">Colegiado C.R.</span>
            <span className="stamp">Pedro Muñoz</span>
            <span className="stamp">Desde 2013</span>
            <span className="stamp">Trato directo</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
