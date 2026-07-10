'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const MUNICIPALITIES = [
  { name: 'Pedro Muñoz', highlight: true },
  { name: 'Alcázar de San Juan', highlight: false },
  { name: 'Campo de Criptana', highlight: false },
  { name: 'Tomelloso', highlight: false },
  { name: 'Socuéllamos', highlight: false },
  { name: 'Argamasilla de Alba', highlight: false },
  { name: 'Herencia', highlight: false },
  { name: 'Villarta de San Juan', highlight: false },
  { name: 'Arenas de San Juan', highlight: false },
  { name: 'Membrilla', highlight: false },
  { name: 'Mota del Cuervo', highlight: false },
  { name: 'Las Mesas', highlight: false },
  { name: 'El Toboso', highlight: false },
  { name: 'Albacete', highlight: false, note: '(consultar)' },
  { name: 'Resto de C. Real', highlight: false, note: '(consultar)' },
]

export function Coverage() {
  const reduced = useReducedMotion()

  return (
    <section
      id="cobertura"
      className="relative py-12 md:py-20 px-4 md:px-10 border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="coverage-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        03.0 — COBERTURA
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Texto */}
        <div>
          <motion.h2
            id="coverage-heading"
            className="font-display mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)', color: 'var(--color-ink)' }}
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="highlight-heading">Dónde trabajo</span>
          </motion.h2>

          <motion.p
            className="mb-8"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, opacity: 0.72 }}
            initial={reduced ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduced ? undefined : { opacity: 0.72, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Tengo base en Pedro Muñoz y opero en toda la comarca de La Mancha. Conozco los
            procedimientos y tiempos reales de tramitación de los ayuntamientos de la zona.
          </motion.p>

          {/* Lista de municipios */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0 }}
            whileInView={reduced ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div
              className="mb-3"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4 }}
              aria-hidden="true"
            >
              // MUNICIPIOS
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-none">
              {MUNICIPALITIES.map((m) => (
                <li
                  key={m.name}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-technical)',
                    fontSize: 11,
                    color: m.highlight ? 'var(--color-accent-orange)' : 'var(--color-ink)',
                    opacity: m.highlight ? 1 : 0.7,
                  }}
                >
                  <span
                    style={{ width: 12, height: 1, backgroundColor: m.highlight ? 'var(--color-accent-orange)' : 'currentColor', opacity: 0.5, flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  {m.name}
                  {m.note && (
                    <span style={{ fontSize: 9, opacity: 0.45 }}>{m.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mapa */}
        <div
          className="relative overflow-hidden"
          style={{ border: '1px solid rgba(20,20,20,0.15)', minHeight: 360 }}
        >
          <iframe
            title="Mapa de cobertura en La Mancha"
            src="https://www.google.com/maps?hl=es&ll=39.245,-3.135&z=9&output=embed"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="cross-mark top-3 left-3" />
          <div className="cross-mark top-3 right-3" />
          <div className="cross-mark bottom-3 left-3" />
          <div className="cross-mark bottom-3 right-3" />
          {/* Cota */}
          <div
            className="absolute bottom-3 left-3 right-3 flex items-center gap-1"
            aria-hidden="true"
          >
            <div style={{ width: 1, height: 8, backgroundColor: 'var(--color-accent)', opacity: 0.4 }} />
            <div style={{ flex: 1, height: 1, backgroundColor: 'var(--color-accent)', opacity: 0.25 }} />
            <div style={{ width: 1, height: 8, backgroundColor: 'var(--color-accent)', opacity: 0.4 }} />
            <span style={{ fontFamily: 'var(--font-technical)', fontSize: 9, color: 'var(--color-accent)', opacity: 0.5, marginLeft: 6, letterSpacing: '0.1em' }}>
              COMARCA DE LA MANCHA
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
