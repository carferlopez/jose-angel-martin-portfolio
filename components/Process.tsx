'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const STEPS = [
  {
    num: '01',
    title: 'Consulta sin coste',
    desc: 'Analizamos tu local y actividad. Te digo qué tipo de tramitación necesitas y el coste total antes de comprometerte a nada.',
  },
  {
    num: '02',
    title: 'Proyecto y documentación',
    desc: 'Redacto la memoria técnica, los planos y toda la documentación exigida por el Ayuntamiento. Me encargo de que esté todo correcto.',
  },
  {
    num: '03',
    title: 'Tramitación completa',
    desc: 'Presento el expediente y gestiono todas las comunicaciones con la administración. Tú no pones un pie en el Ayuntamiento.',
  },
  {
    num: '04',
    title: 'Licencia en mano',
    desc: 'Te entrego la resolución favorable. A partir de ese momento, solo tienes que abrir las puertas.',
  },
]

export function Process() {
  const reduced = useReducedMotion()
  return (
    <section
      id="proceso"
      className="relative py-20 md:py-36 px-4 md:px-10"
      style={{ backgroundColor: 'var(--color-ink)' }}
      aria-labelledby="process-heading"
    >
      {/* Grid oscuro */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(237,234,227,0.035) 0.5px,transparent 0.5px),linear-gradient(90deg,rgba(237,234,227,0.035) 0.5px,transparent 0.5px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Número sección */}
        <div
          className="mb-10 opacity-30"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-paper)' }}
          aria-hidden="true"
        >
          02.0 — CÓMO TRABAJO
        </div>

        <motion.h2
          id="process-heading"
          className="font-display mb-14 md:mb-20"
          style={{ fontSize: 'clamp(2rem, 5vw, 5.5rem)', color: 'var(--color-paper)' }}
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="highlight-heading">Proceso en 4 pasos</span>
        </motion.h2>

        <ol className="grid md:grid-cols-4 gap-0 list-none">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.num}
              className="relative border-l md:border-l-0 md:border-t"
              style={{ borderColor: 'rgba(237,234,227,0.12)', paddingLeft: '1.25rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingRight: '1.5rem' }}
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Número grande */}
              <div
                className="font-display mb-3"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-accent)', opacity: 0.9, lineHeight: 1 }}
                aria-hidden="true"
              >
                {step.num}
              </div>

              <h3
                className="font-display mb-3"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)', color: 'var(--color-paper)' }}
              >
                <span className="highlight-heading">{step.title}</span>
              </h3>
              <p style={{ fontFamily: 'var(--font-technical)', fontSize: 12, lineHeight: 1.7, color: 'var(--color-paper)', opacity: 0.6 }}>
                {step.desc}
              </p>

              {/* Flecha entre pasos (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
                  style={{ color: 'var(--color-accent)', opacity: 0.5 }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M0 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </motion.li>
          ))}
        </ol>

        {/* Sello de proceso */}
        <div className="mt-12 flex items-center gap-3" aria-hidden="true">
          <span className="stamp" style={{ borderColor: 'rgba(237,234,227,0.3)', color: 'rgba(237,234,227,0.4)' }}>
            PROCESO VERIFICADO
          </span>
          <span className="stamp" style={{ borderColor: 'rgba(237,234,227,0.3)', color: 'rgba(237,234,227,0.4)' }}>
            +12 AÑOS DE EXPERIENCIA
          </span>
        </div>
      </div>
    </section>
  )
}
