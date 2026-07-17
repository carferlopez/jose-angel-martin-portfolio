'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LIST_ITEMS = [
  'Reducción de costes',
  'Subcontrata a un comprador.',
  'Búsqueda de proveedores.',
  'Auditoria a proveedores.',
  'Búsqueda de repuestos.',
  'Optimización proceso de compras.',
  'Jefe de compras temporal',
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

export function PurchasingConsulting() {
  return (
    <section
      id="compras"
      className="relative py-12 md:py-20 px-4 md:px-10 border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="compras-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        03.0 — CONSULTORÍA DE COMPRAS
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Columna Izquierda: Título y Foto */}
        <div className="space-y-10">
          <FadeIn>
            <h2
              id="compras-heading"
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 5.5rem)', color: 'var(--color-ink)' }}
            >
              <span className="highlight-heading highlight-heading-loose">Consultoría de Compras</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div
              className="relative overflow-hidden bg-white"
              style={{ border: '1px solid var(--color-accent-orange)', maxWidth: 420, aspectRatio: '500/561' }}
            >
              <img
                src="/media/pepe_profile_meme.jpg"
                alt="Meme de Consultoría de Compras (Flex Tape)"
                className="w-full h-full object-contain"
              />
              <div className="cross-mark cross-mark-orange top-3 left-3" />
              <div className="cross-mark cross-mark-orange top-3 right-3" />
              <div className="cross-mark cross-mark-orange bottom-3 left-3" />
              <div className="cross-mark cross-mark-orange bottom-3 right-3" />
            </div>
          </FadeIn>
        </div>

        {/* Columna Derecha: Texto único adjuntado */}
        <div className="md:pt-4 space-y-8">
          <FadeIn delay={0.1}>
            <p
              className="leading-relaxed"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 16, lineHeight: 1.75, color: 'var(--color-ink)', opacity: 0.9 }}
            >
              Máster en Dirección de Compras por la UDIMA y más de 10 años de experiencia en Automoción, Bienes de Consumo y Retail.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ul className="space-y-3.5 list-none">
              {LIST_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}
                >
                  <span
                    style={{ color: 'var(--color-accent-orange)', flexShrink: 0, marginTop: 2, fontWeight: 'bold' }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
