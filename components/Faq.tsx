'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const FAQS = [
  {
    q: '¿Qué es exactamente una licencia de actividad?',
    a: 'Es la autorización municipal que certifica que tu negocio cumple con la normativa de urbanismo, seguridad contra incendios, higiene y medio ambiente. Sin ella, el Ayuntamiento puede ordenar el cierre del local y sancionar al titular.',
  },
  {
    q: '¿Qué diferencia hay entre licencia de actividad y declaración responsable?',
    a: 'La declaración responsable permite abrir el negocio en el momento de la presentación: el titular declara bajo su responsabilidad que cumple los requisitos. Se aplica a actividades de bajo impacto ambiental y superficies limitadas. La licencia ordinaria requiere un informe técnico previo del Ayuntamiento y es obligatoria para actividades de mayor complejidad o impacto.',
  },
  {
    q: '¿Cuánto tiempo tarda tramitarse en Castilla-La Mancha?',
    a: 'Con declaración responsable puedes abrir el mismo día de la presentación. Una licencia ordinaria tarda habitualmente entre 2 y 4 meses en los ayuntamientos de la comarca, aunque depende de la carga de trabajo de cada municipio. Gestiono el expediente para minimizar los plazos y resolver cualquier requerimiento rápidamente.',
  },
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'El coste depende del tipo de actividad, la superficie del local y el municipio. Te preparo un presupuesto detallado sin coste ni compromiso. Una declaración responsable para un pequeño comercio es significativamente más económica que una licencia con proyecto técnico completo para una nave industrial.',
  },
  {
    q: '¿Qué documentación necesito aportar yo?',
    a: 'Principalmente: escritura o contrato de alquiler del local, DNI del titular o escrituras de la sociedad, y descripción de la actividad. El resto —memoria técnica, planos, certificados de instalaciones— lo elaboro yo.',
  },
  {
    q: '¿Puedo empezar a reformar el local antes de tener la licencia de actividad?',
    a: 'Para las obras de reforma necesitas una licencia de obras municipal aparte. En algunos casos se puede tramitar conjuntamente con la licencia de actividad. Te asesoro sobre el procedimiento más adecuado para no perder tiempo ni dinero.',
  },
  {
    q: '¿Trabajas solo en Pedro Muñoz o también en otros municipios?',
    a: 'Tengo base en Pedro Muñoz y opero habitualmente en toda la comarca: Alcázar de San Juan, Campo de Criptana, Tomelloso, Socuéllamos y municipios cercanos de Cuenca y Toledo. Para proyectos en el resto de Ciudad Real o en otras provincias de Castilla-La Mancha, consúltame sin compromiso.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function FaqItem({ faq, index }: { faq: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      initial={reduced ? undefined : { opacity: 0, y: 10 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left flex items-start justify-between gap-4 py-5"
        aria-expanded={open}
        style={{ background: 'transparent' }}
      >
        <span
          className="font-display"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--color-ink)', lineHeight: 1.15 }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 4, fontSize: 20, fontWeight: 300, lineHeight: 1 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={reduced ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-5 max-w-3xl"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.78, opacity: 0.72 }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Faq() {
  return (
    <section
      id="faq"
      className="relative py-20 md:py-36 px-4 md:px-10 border-t"
      style={{ borderColor: 'var(--color-section-border)' }}
      aria-labelledby="faq-heading"
    >
      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Número sección */}
      <div
        className="mb-10 section-number"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        06.0 — FAQ
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <h2
            id="faq-heading"
            className="font-display md:sticky md:top-24"
            style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', color: 'var(--color-ink)' }}
          >
            <span className="highlight-heading highlight-heading-loose">Preguntas frecuentes</span>
          </h2>
        </div>
        <div>
          {FAQS.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
          {/* Último borde */}
          <div className="border-t" style={{ borderColor: 'var(--color-section-border)' }} />
        </div>
      </div>
    </section>
  )
}
