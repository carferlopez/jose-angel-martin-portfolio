'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SERVICES = [
  {
    icon: '☀',
    title: 'Energía solar fotovoltaica',
    desc: 'Diseño, proyecto y legalización de instalaciones de autoconsumo en viviendas, comercios e industrias.',
  },
  {
    icon: '⚡',
    title: 'Proyectos de baja tensión',
    desc: 'Legalización de instalaciones eléctricas, certificación ante OCA y tramitación ante Industria.',
  },
  {
    icon: '🔌',
    title: 'Puntos de recarga VE',
    desc: 'Proyecto, legalización y dirección de obra de infraestructuras de recarga para vehículo eléctrico.',
  },
]

export function OtherServices() {
  const reduced = useReducedMotion()
  return (
    <section
      id="otros-servicios"
      className="relative py-20 md:py-32 px-4 md:px-10 border-t"
      style={{ borderColor: 'rgba(20,20,20,0.08)' }}
      aria-labelledby="other-services-heading"
    >


      <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
        <motion.h2
          id="other-services-heading"
          className="font-display shrink-0"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4rem)', color: 'var(--color-ink)', opacity: 0.9 }}
          initial={reduced ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduced ? undefined : { opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="highlight-heading">Otros servicios</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6 flex-1">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              style={{ borderTop: '1px solid rgba(20,20,20,0.12)', paddingTop: '1rem' }}
              initial={reduced ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div
                className="mb-2"
                style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.12em', color: 'var(--color-accent)', opacity: 0.8 }}
                aria-hidden="true"
              >
                // 0{i + 1}
              </div>
              <h3
                className="font-display mb-2"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', color: 'var(--color-ink)' }}
              >
                <span className="highlight-heading">{s.title}</span>
              </h3>
              <p style={{ fontFamily: 'var(--font-technical)', fontSize: 11, lineHeight: 1.65, opacity: 0.6 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
