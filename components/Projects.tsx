'use client'
import { useRef, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { TechnicalPlaceholder } from './TechnicalImage'
import { ProjectPanel } from './ProjectPanel'

export interface Project {
  id: string
  number: string
  title: string
  tagline: string
  metric: string
  year: string
  client: string
  scope: string
  result: string
  imageSrc: string
}

const PROJECTS: Project[] = [
  {
    id: 'licencia-actividad',
    number: '02.1',
    title: 'Licencia de Actividad',
    tagline: 'Tramitación integral — expediente aprobado en 4 meses',
    metric: '100% aprobado',
    year: '2024',
    client: 'Comercial Manchega S.L. (ficticio)',
    scope: 'Proyecto técnico, memoria descriptiva, planos de instalaciones, gestión municipal y Junta de Comunidades. Aforo: 320 personas.',
    result: 'Licencia de apertura concedida en 16 semanas. Resolución favorable sin subsanaciones.',
    imageSrc: '/media/proyecto-01.jpg',
  },
  {
    id: 'solar-fotovoltaica',
    number: '02.2',
    title: 'Instalación Solar FV',
    tagline: '48 kWp sobre cubierta industrial — ahorro 82 %',
    metric: '48 kWp',
    year: '2024',
    client: 'Agroalimentaria Don Quijote S.A. (ficticio)',
    scope: 'Diseño del sistema fotovoltaico, cálculo de generación, proyecto de legalización ante industria, dirección de obra y puesta en marcha. 120 módulos.',
    result: 'Reducción del 82 % en factura eléctrica. Retorno de inversión en 6,2 años.',
    imageSrc: '/media/proyecto-02.jpg',
  },
  {
    id: 'baja-tension',
    number: '02.3',
    title: 'Proyecto Baja Tensión',
    tagline: 'Legalización de nave industrial — 6 cuadros eléctricos',
    metric: '630 kVA',
    year: '2023',
    client: 'Industrias Lanza S.L. (ficticio)',
    scope: 'Legalización de instalación eléctrica BT en nave de 3.800 m². Diseño de cuadros, cálculo de líneas, certificación ante organismo de control (OCA).',
    result: 'Certificado por OCA sin observaciones. Puesta en servicio en 3 semanas.',
    imageSrc: '/media/proyecto-03.jpg',
  },
  {
    id: 'recarga-ve',
    number: '02.4',
    title: 'Punto de Recarga VE',
    tagline: 'Infraestructura AC + DC — proyecto y dirección de obra',
    metric: '22 kW AC / 50 kW DC',
    year: '2025',
    client: 'Gasolinera La Mancha (ficticio)',
    scope: 'Proyecto de instalación de infraestructura de recarga: 4 puntos AC 22 kW y 1 cargador DC 50 kW. Tramitación ante distribuidora y Industria.',
    result: 'Instalación operativa en 5 semanas. Primera estación de recarga rápida en Pedro Muñoz.',
    imageSrc: '/media/proyecto-04.jpg',
  },
]

export function Projects() {
  const reduced = useReducedMotion()
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [openProject, setOpenProject] = useState<Project | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const imgX = useSpring(mouseX, { stiffness: 90, damping: 22 })
  const imgY = useSpring(mouseY, { stiffness: 90, damping: 22 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX - 220)
      mouseY.set(e.clientY - 150)
    },
    [mouseX, mouseY],
  )

  return (
    <section
      id="proyectos"
      className="relative py-24 md:py-40 px-6 md:px-12"
      onMouseMove={handleMouseMove}
      aria-label="02.0 — Proyectos"
    >
      {/* Número sección */}
      <div
        className="mb-12 md:mb-16"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em', opacity: 0.35 }}
        aria-hidden="true"
      >
        02.0 — PROYECTOS
      </div>

      {/* Lista de proyectos */}
      <ol className="list-none">
        {PROJECTS.map((project, i) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={i}
            isHovered={hoverIndex === i}
            onHover={() => setHoverIndex(i)}
            onLeave={() => setHoverIndex(null)}
            onOpen={() => setOpenProject(project)}
            reduced={reduced}
          />
        ))}
      </ol>

      {/* Imagen flotante — solo desktop */}
      {!reduced && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
          style={{ x: imgX, y: imgY }}
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            {hoverIndex !== null && (
              <motion.div
                key={hoverIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="relative w-[440px] h-[300px] overflow-hidden"
                style={{ border: '1px solid rgba(20,20,20,0.2)' }}
              >
                <TechnicalPlaceholder
                  label={PROJECTS[hoverIndex].imageSrc.split('/').pop() ?? ''}
                  className="w-full h-full"
                />
                {/* Cruces de registro */}
                <div className="cross-mark top-2 left-2" />
                <div className="cross-mark top-2 right-2" />
                <div className="cross-mark bottom-2 left-2" />
                <div className="cross-mark bottom-2 right-2" />
                {/* Etiqueta de cota */}
                <div
                  className="absolute bottom-3 right-3"
                  style={{ fontFamily: 'var(--font-technical)', fontSize: 9, color: 'var(--color-accent)', letterSpacing: '0.1em' }}
                >
                  {PROJECTS[hoverIndex].number} ↗ 440×300
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Panel fullscreen */}
      <AnimatePresence>
        {openProject && (
          <ProjectPanel project={openProject} onClose={() => setOpenProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectRow({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  onOpen,
  reduced,
}: {
  project: Project
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onOpen: () => void
  reduced: boolean
}) {
  return (
    <motion.li
      initial={reduced ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <button
        className="group w-full text-left py-6 md:py-8 border-t border-ink/10 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 hover:border-ink/25 transition-colors"
        style={{ background: 'transparent', cursor: 'inherit' }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onOpen}
        data-cursor="VER"
        aria-label={`Ver proyecto: ${project.title}`}
      >
        {/* Número */}
        <span
          className="shrink-0 opacity-35"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.15em', minWidth: '4rem' }}
        >
          {project.number}
        </span>

        {/* Título */}
        <span
          className="flex-1 leading-none font-display"
          style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 5.5rem)',
            color: 'var(--color-ink)',
            transition: 'opacity 0.2s',
            opacity: 1,
          }}
        >
          {project.title}
        </span>

        {/* Tagline — oculto en mobile, visible en desktop */}
        <span
          className="hidden md:block shrink-0 opacity-45"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.06em', maxWidth: '28ch', textAlign: 'right' }}
        >
          {project.tagline}
        </span>

        {/* Métrica */}
        <span
          className="shrink-0 text-right md:text-right"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 12, color: 'var(--color-accent)', letterSpacing: '0.08em', minWidth: '7rem' }}
        >
          {project.metric}
        </span>
      </button>

      {/* Imagen en mobile (al entrar en viewport) */}
      <motion.div
        className="block md:hidden overflow-hidden mb-4"
        style={{ maxHeight: 0 }}
        initial={{ maxHeight: 0, opacity: 0 }}
        whileInView={reduced ? undefined : { maxHeight: 220, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative h-[220px]" style={{ border: '1px solid rgba(20,20,20,0.15)' }}>
          <TechnicalPlaceholder label={project.imageSrc.split('/').pop() ?? ''} className="w-full h-full" />
          <div
            className="absolute bottom-2 right-2"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 9, color: 'var(--color-accent)' }}
          >
            {project.number}
          </div>
        </div>
      </motion.div>
    </motion.li>
  )
}
