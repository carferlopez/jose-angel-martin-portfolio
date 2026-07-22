'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { TechnicalImage } from './TechnicalImage'

export function About() {
  const reduced = useReducedMotion()
  return (
    <section
      id="sobre-mi"
      className="relative py-12 md:py-20 px-4 md:px-10 border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="about-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        05.0 — SOBRE MÍ
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Foto con enlace a LinkedIn */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://es.linkedin.com/in/pepe-martin-992849158"
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer"
            aria-label="Perfil de LinkedIn"
          >
            <div
              className="relative overflow-hidden bg-white group-hover:shadow-lg transition-all duration-300"
              style={{ border: '1px solid var(--color-accent-orange)', maxWidth: 420, aspectRatio: '500/561' }}
            >
              <TechnicalImage
                src="/media/pepe_profile.jpeg"
                alt="Ingeniero Técnico Eléctrico"
                label="INGENIERO_TECNICO.JPEG"
                fill
                sizes="(min-width: 768px) 420px, calc(100vw - 32px)"
                style={{ objectFit: 'cover' }}
              />
              <div className="cross-mark cross-mark-orange top-3 left-3" />
              <div className="cross-mark cross-mark-orange top-3 right-3" />
              <div className="cross-mark cross-mark-orange bottom-3 left-3" />
              <div className="cross-mark cross-mark-orange bottom-3 right-3" />
              <div className="absolute bottom-4 right-4 bg-accent-orange text-paper px-2.5 py-1 text-[10px] font-technical uppercase tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                LinkedIn ↗
              </div>
            </div>
          </a>
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
              <a
                href="https://es.linkedin.com/in/pepe-martin-992849158"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-orange transition-colors inline-flex items-center gap-2 group"
                aria-label="Perfil de LinkedIn"
              >
                <span className="highlight-heading">Ingeniero Técnico Eléctrico</span>
                <span className="text-accent-orange opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-2xl md:text-3xl" aria-hidden="true">↗</span>
              </a>
            </h2>
          </div>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.78, color: 'var(--color-ink)', opacity: 0.78 }}>
            Ingeniero Técnico Eléctrico con más de 10 años de experiencia técnica en compras en diferentes sectores. Aporto una visión que combina la precisión de la ingeniería y la optimización estratégica.
          </p>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, color: 'var(--color-ink)', opacity: 0.55 }}>
            Con base en Pedro Muñoz, ofrezco servicio en toda la comarca de la Mancha. Trato directo y cercano: yo mismo llevo tu expediente de principio a fin, sin intermediarios.
          </p>

          <div>
            <div className="flex flex-wrap gap-2 mb-6 uppercase">
              <span className="stamp">Ingeniero Técnico Eléctrico</span>
              <span className="stamp">Comprador Técnico</span>
              <span className="stamp">Jefe de Compras</span>
              <span className="stamp">Pedro Muñoz</span>
              <span className="stamp">+10 años exp.</span>
              <span className="stamp">Trato directo</span>
            </div>

            <div style={{ border: '1px solid var(--color-accent-orange)', padding: '1.75rem', position: 'relative' }} className="bg-white">
              <div className="cross-mark cross-mark-orange top-3 left-3" />
              <div className="cross-mark cross-mark-orange top-3 right-3" />
              <div className="cross-mark cross-mark-orange bottom-3 left-3" />
              <div className="cross-mark cross-mark-orange bottom-3 right-3" />
              
              <div
                className="mb-3"
                style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', color: 'var(--color-accent-orange)', opacity: 0.9 }}
              >
                // ¿POR QUÉ TRABAJAR CONMIGO?
              </div>
              <p style={{ fontFamily: 'var(--font-technical)', fontSize: 12.5, lineHeight: 1.7, opacity: 0.72 }}>
                Está feo que lo diga yo, pero ayudo a tu empresa a mejorar y optimizar los procesos de compra. Con experiencia real en automoción, retail, bienes de consumo y energías renovables, entiendo los retos específicos de cada sector y aporto soluciones probadas, no teorías. Mi enfoque es eminentemente práctico, orientado a resultados tangibles y adaptado a la realidad operativa de las empresas. Además, poseo gran experiencia en mercados asiáticos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
