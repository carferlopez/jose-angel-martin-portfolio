'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Service() {
  const reduced = useReducedMotion()

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="servicio"
      className="relative py-12 md:py-20 px-4 md:px-10 border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="service-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        01.0 — SERVICIOS
      </div>

      <motion.h2
        id="service-heading"
        className="font-display mb-12"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)', color: 'var(--color-ink)' }}
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <span className="highlight-heading highlight-heading-loose">SERVICIOS</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Categoría 1: Ingeniería Eléctrica */}
        <motion.div
          className="flex flex-col justify-between group"
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div>
            <div
              className="relative overflow-hidden mb-6 aspect-[16/10] bg-white animate-fade-in cursor-pointer"
              style={{ border: '1px solid var(--color-section-border)' }}
              onClick={(e) => scrollToSection(e, '#ingenieria')}
            >
              <img
                src="/media/medidores.png"
                alt="Servicios de Ingeniería"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700 ease-out"
                style={{ display: 'block' }}
              />
              <div className="cross-mark top-2 left-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
              <div className="cross-mark top-2 right-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
              <div className="cross-mark bottom-2 left-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
              <div className="cross-mark bottom-2 right-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
            </div>

            <div
              className="mb-2"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--color-accent-orange)', opacity: 0.9 }}
              aria-hidden="true"
            >
              // 01 — INGENIERÍA
            </div>

            <h3
              className="font-display mb-3"
              style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)', color: 'var(--color-ink)' }}
            >
              <a
                href="#ingenieria"
                onClick={(e) => scrollToSection(e, '#ingenieria')}
                className="hover:opacity-80 transition-opacity"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="highlight-heading">Servicios de Ingeniería</span>
              </a>
            </h3>

            <p
              className="leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, opacity: 0.75 }}
            >
              Diseño, proyecto técnico y legalización de instalaciones de baja tensión, energía solar fotovoltaica
              e infraestructuras de recarga para vehículos eléctricos (VE) en viviendas, comercios e industrias.
            </p>
          </div>

          <div>
            <a
              href="#ingenieria"
              onClick={(e) => scrollToSection(e, '#ingenieria')}
              className="inline-flex items-center gap-2 py-2 font-technical text-xs tracking-widest uppercase transition-colors"
              style={{ color: 'var(--color-ink)', fontWeight: 600, letterSpacing: '0.12em', borderBottom: '1px solid var(--color-ink)' }}
            >
              VER SERVICIOS DE INGENIERÍA —&gt;
            </a>
          </div>
        </motion.div>

        {/* Categoría 2: Consultoría de Compras */}
        <motion.div
          className="flex flex-col justify-between group"
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div>
            <div
              className="relative overflow-hidden mb-6 aspect-[16/10] bg-white animate-fade-in cursor-pointer"
              style={{ border: '1px solid var(--color-section-border)' }}
              onClick={(e) => scrollToSection(e, '#compras')}
            >
              <img
                src="/media/compras.png"
                alt="Servicios de Consultoría de Compras"
                className="w-full h-full object-cover object-[20%_center] scale-[1.25] origin-[20%_center] group-hover:scale-[1.3] transition-all duration-700 ease-out"
                style={{ display: 'block' }}
              />
              <div className="cross-mark top-2 left-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
              <div className="cross-mark top-2 right-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
              <div className="cross-mark bottom-2 left-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
              <div className="cross-mark bottom-2 right-2 opacity-70" style={{ transform: 'scale(0.8)' }} />
            </div>

            <div
              className="mb-2"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--color-accent-orange)', opacity: 0.9 }}
              aria-hidden="true"
            >
              // 02 — CONSULTORÍA
            </div>

            <h3
              className="font-display mb-3"
              style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)', color: 'var(--color-ink)' }}
            >
              <a
                href="#compras"
                onClick={(e) => scrollToSection(e, '#compras')}
                className="hover:opacity-80 transition-opacity"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="highlight-heading">Servicios de Consultoría de Compras</span>
              </a>
            </h3>

            <p
              className="leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, opacity: 0.75 }}
            >
              Diagnóstico y optimización de procesos, sourcing y homologación de proveedores, reducción de costes,
              gestión de contratos e Interim Management para profesionalizar tu cadena de suministro.
            </p>
          </div>

          <div>
            <a
              href="#compras"
              onClick={(e) => scrollToSection(e, '#compras')}
              className="inline-flex items-center gap-2 py-2 font-technical text-xs tracking-widest uppercase transition-colors"
              style={{ color: 'var(--color-ink)', fontWeight: 600, letterSpacing: '0.12em', borderBottom: '1px solid var(--color-ink)' }}
            >
              VER CONSULTORÍA DE COMPRAS —&gt;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
