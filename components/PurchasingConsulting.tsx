'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SERVICES = [
  {
    num: '01',
    title: 'Diagnóstico y Optimización',
    desc: 'Análisis completo de tus procesos de compras actuales, identificación de oportunidades de mejora y diseño de un modelo de compras más eficiente y profesional.',
  },
  {
    num: '02',
    title: 'Sourcing y Negociación',
    desc: 'Selección y homologación de nuevos proveedores nacionales e internacionales. Negociación de condiciones óptimas de precio, calidad, plazos y condiciones de pago.',
  },
  {
    num: '03',
    title: 'Reducción de Costes',
    desc: 'Proyectos específicos de ahorro en compras directas e indirectas aplicando metodologías analíticas y de negociación probadas.',
  },
  {
    num: '04',
    title: 'Gestión de Contratos',
    desc: 'Redacción, revisión y negociación de acuerdos con proveedores. Implantación de sistemas de seguimiento y control de KPIs para evitar desviaciones.',
  },
  {
    num: '05',
    title: 'Compras Sostenibles y ESG',
    desc: 'Integración de criterios ambientales, sociales y de gobernanza (ESG) en la cadena de suministro para mitigar riesgos y mejorar la reputación corporativa.',
  },
  {
    num: '06',
    title: 'Formación y Acompañamiento',
    desc: 'Capacitación práctica a compradores y jefes de compras. Implantación de buenas prácticas operativas y herramientas modernas de gestión.',
  },
  {
    num: '07',
    title: 'Interim Management',
    desc: 'Incorporación temporal como Director o Jefe de Compras para cubrir ausencias, pilotar procesos de transformación o liderar proyectos estratégicos urgentes.',
  },
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
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="compras"
      className="relative py-20 md:py-36 px-4 md:px-10 border-t"
      style={{ borderColor: 'rgba(20,20,20,0.08)' }}
      aria-labelledby="compras-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        02.0 — CONSULTORÍA DE COMPRAS
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Columna Izquierda: Título, Intro, ¿Por qué yo? */}
        <div className="space-y-12">
          <FadeIn>
            <h2
              id="compras-heading"
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 5.5rem)', color: 'var(--color-ink)' }}
            >
              <span className="highlight-heading highlight-heading-loose">Consultoría de Compras</span>
            </h2>
            
            <p
              className="mt-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 14, lineHeight: 1.75, opacity: 0.8 }}
            >
              Soy consultor especializado en Dirección de Compras con un Máster en Dirección de Compras por la UDIMA y más de 10 años de experiencia en sectores exigentes como Automoción, Bienes de Consumo, Retail y Energías Renovables. Ayudo a empresas de Castilla-La Mancha y toda España a optimizar su función de compras, reducir costes de manera sostenible y mejorar su competitividad.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div style={{ border: '1px solid rgba(20,20,20,0.12)', padding: '1.75rem', position: 'relative' }}>
              <div className="cross-mark top-3 left-3" />
              <div className="cross-mark top-3 right-3" />
              <div className="cross-mark bottom-3 left-3" />
              <div className="cross-mark bottom-3 right-3" />
              
              <div
                className="mb-3"
                style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', color: 'var(--color-accent)', opacity: 0.9 }}
              >
                // ¿POR QUÉ TRABAJAR CONMIGO?
              </div>
              <p style={{ fontFamily: 'var(--font-technical)', fontSize: 12, lineHeight: 1.7, opacity: 0.72 }}>
                Con experiencia real en automoción, retail, bienes de consumo y energías renovables, entiendo los retos específicos de cada sector y aporto soluciones probadas, no teorías. Mi enfoque es eminentemente práctico, orientado a resultados tangibles y adaptado a la realidad operativa de las empresas.
              </p>
            </div>
          </FadeIn>

          {/* CTA direct to contact */}
          <FadeIn delay={0.12}>
            <div className="space-y-4">
              <p style={{ fontFamily: 'var(--font-technical)', fontSize: 12, lineHeight: 1.6, opacity: 0.6 }}>
                ¿Quieres reducir tus costes de aprovisionamiento, profesionalizar tu departamento de compras o preparar tu empresa para un crecimiento sostenible?
              </p>
              <a
                href="#contacto"
                onClick={scrollToContact}
                className="cta-blue-hover inline-flex items-center gap-2 px-5 py-3 hover:!bg-accent hover:!border-accent hover:!text-paper hover:!opacity-100"
                style={{
                  border: '1px solid var(--color-ink)',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-technical)',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                Evaluar mi situación sin compromiso →
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Columna Derecha: Listado de Servicios */}
        <div className="space-y-6">
          <FadeIn delay={0.05}>
            <h3
              className="font-display mb-6"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)', color: 'var(--color-ink)' }}
            >
              <span className="highlight-heading">Servicios en Compras</span>
            </h3>
          </FadeIn>

          <div className="space-y-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                className="group relative"
                style={{
                  borderTop: '1px solid rgba(20,20,20,0.08)',
                  paddingTop: '1.25rem',
                  paddingBottom: '0.5rem',
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div className="flex gap-4 items-start">
                  <span
                    style={{
                      fontFamily: 'var(--font-technical)',
                      fontSize: 10,
                      color: 'var(--color-accent)',
                      opacity: 0.7,
                      marginTop: 2,
                    }}
                  >
                    {s.num}.
                  </span>
                  <div>
                    <h4
                      className="font-display mb-1.5 transition-colors"
                      style={{ fontSize: '1.25rem', color: 'var(--color-ink)' }}
                    >
                      <span className="highlight-heading !bg-transparent !color-ink group-hover:!bg-accent group-hover:!text-paper transition-colors duration-250 px-1 py-0.5">
                        {s.title}
                      </span>
                    </h4>
                    <p style={{ fontFamily: 'var(--font-technical)', fontSize: 11.5, lineHeight: 1.65, opacity: 0.65 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Cierre de borde final */}
            <div style={{ borderTop: '1px solid rgba(20,20,20,0.08)' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
