'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const INCLUDED = [
  'Consulta inicial gratuita y análisis de viabilidad',
  'Memoria técnica descriptiva y justificativa',
  'Planos de planta, alzados y distribución',
  'Proyecto de instalaciones si es necesario (eléctrica, contra incendios, climatización)',
  'Presentación del expediente en el Ayuntamiento',
  'Gestión de comunicaciones con la administración',
  'Seguimiento hasta la resolución favorable',
]

const BUSINESS_TYPES = [
  'Comercios y tiendas',
  'Bares, cafeterías y restaurantes',
  'Talleres mecánicos y automoción',
  'Oficinas y despachos profesionales',
  'Naves industriales y almacenes',
  'Centros de estética, peluquerías y spas',
  'Academias y centros de formación',
  'Supermercados y grandes superficies',
  'Industrias agroalimentarias',
  'Cualquier otra actividad económica',
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Service() {
  return (
    <section
      id="servicio"
      className="relative py-20 md:py-36 px-4 md:px-10"
      aria-labelledby="service-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        01.0 — SERVICIO
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">

        {/* Columna izquierda */}
        <div className="space-y-10">
          <FadeIn>
            <h2
              id="service-heading"
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 5.5rem)', color: 'var(--color-ink)' }}
            >
              <span className="highlight-heading highlight-heading-loose">¿Qué es una licencia de actividad?</span>
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, opacity: 0.75 }}
            >
              La licencia de actividad (o licencia de apertura) es la autorización municipal que certifica
              que tu local cumple con la normativa urbanística, de seguridad, higiene y medio ambiente.
              Es obligatoria para abrir cualquier negocio en España.
            </p>
          </FadeIn>
        </div>

        {/* Columna derecha */}
        <div className="space-y-10">
          {/* Qué incluye */}
          <FadeIn delay={0.05}>
            <h3
              className="font-display mb-5"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)', color: 'var(--color-ink)' }}
            >
              <span className="highlight-heading">Qué incluye mi servicio</span>
            </h3>
            <ul className="space-y-2 list-none">
              {INCLUDED.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{ fontFamily: 'var(--font-technical)', fontSize: 12, lineHeight: 1.6, opacity: 0.8 }}
                >
                  <span
                    style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Para qué locales */}
          <FadeIn delay={0.12}>
            <h3
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.2rem, 2vw, 2rem)', color: 'var(--color-ink)' }}
            >
              <span className="highlight-heading">¿Para qué tipo de negocios?</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_TYPES.map((type) => (
                <span
                  key={type}
                  className="stamp"
                  style={{ opacity: 0.65, fontSize: 10 }}
                >
                  {type}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
