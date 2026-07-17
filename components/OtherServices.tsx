'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SERVICES = [
  {
    icon: '📋',
    title: 'Licencias de Actividad',
    desc: 'Para comercios, talleres, bares, etc. gestionada ante el ayuntamiento. Memoria técnica y planos de planta.',
    image: '/media/service_licencias.png',
  },
  {
    icon: '☀',
    title: 'Energía solar fotovoltaica',
    desc: 'Diseño, proyecto y legalización de instalaciones de autoconsumo en viviendas, comercios e industrias.',
    image: '/media/service_solar.png',
  },
  {
    icon: '⚡',
    title: 'Proyectos de baja tensión',
    desc: 'Legalización de instalaciones eléctricas, certificación ante OCA y tramitación ante Industria.',
    image: '/media/service_tension.png',
  },
  {
    icon: '🔌',
    title: 'Puntos de recarga VE',
    desc: 'Proyecto, legalización y dirección de obra de infraestructuras de recarga para vehículo eléctrico.',
    image: '/media/service_vehiculo.png',
  },
]

export function OtherServices() {
  const reduced = useReducedMotion()
  return (
    <section
      id="ingenieria"
      className="relative py-12 md:py-20 px-4 md:px-10 border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="other-services-heading"
    >
      <span id="otros-servicios" />
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        02.0 — SERVICIOS DE INGENIERÍA
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        <motion.h2
          id="other-services-heading"
          className="font-display"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)', color: 'var(--color-ink)' }}
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="highlight-heading highlight-heading-loose">Servicios de Ingeniería</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              style={{ borderTop: '1px solid var(--color-section-border)', paddingTop: '1.25rem' }}
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {s.image && (
                <div
                  className="relative overflow-hidden mb-6 aspect-[16/10] bg-white animate-fade-in"
                  style={{ border: '1px solid var(--color-section-border)' }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700 ease-out"
                    style={{ display: 'block' }}
                  />
                  <div className="cross-mark top-2 left-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
                  <div className="cross-mark top-2 right-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
                  <div className="cross-mark bottom-2 left-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
                  <div className="cross-mark bottom-2 right-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
                </div>
              )}
              <div
                className="mb-2"
                style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--color-accent-orange)', opacity: 0.9 }}
                aria-hidden="true"
              >
                // 0{i + 1}
              </div>
              <h3
                className="font-display mb-3"
                style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', color: 'var(--color-ink)' }}
              >
                <span className="highlight-heading">{s.title}</span>
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.75, opacity: 0.8 }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
