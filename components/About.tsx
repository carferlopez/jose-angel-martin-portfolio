'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { TechnicalPlaceholder } from './TechnicalImage'

const SPECIALTIES = [
  'Licencias de Actividad',
  'Energía Solar Fotovoltaica',
  'Proyectos de Baja Tensión',
  'Puntos de Recarga VE',
  'Instalaciones Industriales',
  'Dirección de Obra',
]

export function About() {
  const reduced = useReducedMotion()
  const plantaRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: plantaScroll } = useScroll({
    target: plantaRef,
    offset: ['start end', 'end start'],
  })
  const plantaY = useTransform(plantaScroll, [0, 1], reduced ? [0, 0] : [-40, 40])

  return (
    <section
      id="sobre-mi"
      className="relative py-24 md:py-40 px-6 md:px-12"
      aria-label="05.0 — Sobre mí"
    >
      {/* Número sección */}
      <div
        className="mb-12 md:mb-20 opacity-35"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        05.0 — SOBRE MÍ
      </div>

      {/* Dos columnas */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Columna izquierda: retrato + bio */}
        <div>
          {/* Retrato con cruces */}
          <motion.div
            className="relative mb-8 overflow-hidden"
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative"
              style={{ border: '1px solid rgba(20,20,20,0.18)', display: 'inline-block', width: '100%', maxWidth: 420, aspectRatio: '4/5' }}
            >
              <TechnicalPlaceholder label="retrato.jpg" className="w-full h-full" />
              <div className="cross-mark top-3 left-3" />
              <div className="cross-mark top-3 right-3" />
              <div className="cross-mark bottom-3 left-3" />
              <div className="cross-mark bottom-3 right-3" />
              {/* Etiqueta de cota */}
              <div
                className="absolute bottom-3 right-3"
                style={{ fontFamily: 'var(--font-technical)', fontSize: 9, color: 'var(--color-accent)', letterSpacing: '0.08em' }}
                aria-hidden="true"
              >
                retrato.jpg ↗
              </div>
            </div>
          </motion.div>

          {/* Nombre y cargo */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2
              className="font-display mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', color: 'var(--color-ink)' }}
            >
              José Ángel Martín
            </h2>
            <p
              style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.1em', opacity: 0.5, textTransform: 'uppercase' }}
            >
              Ingeniero Industrial Colegiado
            </p>
          </motion.div>
        </div>

        {/* Columna derecha: texto + especialidades */}
        <div className="flex flex-col gap-10">
          {/* Bio */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 15, lineHeight: 1.75, color: 'var(--color-ink)', opacity: 0.8 }}
            >
              Más de doce años proyectando instalaciones y legalizando actividades en
              Castilla-La Mancha. Ingeniero industrial. Trabajo donde el plano se
              encuentra con la normativa.
            </p>
            <p
              className="leading-relaxed"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.75, color: 'var(--color-ink)', opacity: 0.55 }}
            >
              Con base en Pedro Muñoz (Ciudad Real), ofrezco servicio en toda la
              provincia y comarca: licencias de actividad, proyectos de energía solar
              fotovoltaica, instalaciones de baja tensión y puntos de recarga para
              vehículo eléctrico.
            </p>
          </motion.div>

          {/* Especialidades */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div
              className="mb-4"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4 }}
              aria-hidden="true"
            >
              // ÁMBITOS DE TRABAJO
            </div>
            <ul className="space-y-2 list-none">
              {SPECIALTIES.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-3"
                  style={{ fontFamily: 'var(--font-technical)', fontSize: 12, color: 'var(--color-ink)', opacity: 0.75 }}
                >
                  <span
                    style={{ width: 16, height: 1, backgroundColor: 'var(--color-accent)', display: 'inline-block', opacity: 0.7 }}
                    aria-hidden="true"
                  />
                  {s}
                  <span
                    style={{ fontFamily: 'var(--font-technical)', fontSize: 9, color: 'var(--color-ink)', opacity: 0.3, marginLeft: 'auto' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sellos */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="stamp">COLEGIADO</span>
            <span className="stamp">CIUDAD REAL</span>
            <span className="stamp">DESDE 2013</span>
          </div>
        </div>
      </div>

      {/* Imagen planta con parallax */}
      <div ref={plantaRef} className="relative mt-20 md:mt-32 overflow-hidden" style={{ border: '1px solid rgba(20,20,20,0.15)' }}>
        <motion.div
          className="relative h-[280px] md:h-[420px]"
          style={{ y: plantaY }}
        >
          <TechnicalPlaceholder label="planta.jpg" className="w-full h-full" />
          <div className="cross-mark top-3 left-3" />
          <div className="cross-mark top-3 right-3" />
          <div className="cross-mark bottom-3 left-3" />
          <div className="cross-mark bottom-3 right-3" />
        </motion.div>

        {/* Cota animada */}
        <div
          className="absolute bottom-4 left-6 right-6 flex items-center gap-2"
          aria-hidden="true"
        >
          <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', opacity: 0.5 }} />
          <motion.div
            style={{ flex: 1, height: 1, backgroundColor: 'var(--color-accent)', opacity: 0.35 }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            whileInView={reduced ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <div style={{ width: 1, height: 10, backgroundColor: 'var(--color-accent)', opacity: 0.5 }} />
          <span style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: 'var(--color-accent)', opacity: 0.5, marginLeft: 8, letterSpacing: '0.1em' }}>
            planta.jpg ↔
          </span>
        </div>
      </div>
    </section>
  )
}
