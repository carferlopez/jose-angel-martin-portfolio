'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TechnicalPlaceholder } from './TechnicalImage'
import type { Project } from './Projects'

interface ProjectPanelProps {
  project: Project
  onClose: () => void
}

export function ProjectPanel({ project, onClose }: ProjectPanelProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ backgroundColor: 'var(--color-paper)' }}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label={`Proyecto: ${project.title}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-ink/10">
        <div className="flex items-center gap-4">
          <span
            style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.15em', opacity: 0.4 }}
          >
            {project.number}
          </span>
          <span
            className="font-display"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', color: 'var(--color-ink)' }}
          >
            {project.title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          style={{ background: 'transparent', fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.1em', cursor: 'inherit' }}
          data-cursor="CERRAR"
          aria-label="Cerrar panel"
        >
          <span>ESC / ✕</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Imagen */}
          <motion.div
            className="relative min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-ink/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <TechnicalPlaceholder
              label={project.imageSrc.split('/').pop() ?? ''}
              className="w-full h-full min-h-[300px]"
            />
            {/* Cruces */}
            <div className="cross-mark top-4 left-4" />
            <div className="cross-mark top-4 right-4" />
            <div className="cross-mark bottom-4 left-4" />
            <div className="cross-mark bottom-4 right-4" />
          </motion.div>

          {/* Ficha técnica */}
          <motion.div
            className="p-8 md:p-12 flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            {/* Ficha */}
            <div className="space-y-5">
              <TechField label="CLIENTE" value={project.client} />
              <TechField label="AÑO" value={project.year} />
              <TechField label="ALCANCE" value={project.scope} />
              <TechField label="RESULTADO" value={project.result} accent />
            </div>

            {/* Métrica destacada */}
            <div className="pt-6 border-t border-ink/10 flex items-center gap-4">
              <span
                className="font-display"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', color: 'var(--color-accent)' }}
              >
                {project.metric}
              </span>
              <div
                style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.1em', opacity: 0.45, lineHeight: 1.6 }}
              >
                <div>INDICADOR CLAVE</div>
                <div>REF. {project.number} — {project.year}</div>
              </div>
            </div>

            {/* Stamp */}
            <div className="flex items-center gap-3">
              <span className="stamp">PROYECTO COMPLETADO</span>
              <span className="stamp">REV. 2026.A</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function TechField({
  label,
  value,
  accent = false,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div>
      <div
        style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4, marginBottom: 4 }}
      >
        // {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-technical)',
          fontSize: 13,
          lineHeight: 1.6,
          color: accent ? 'var(--color-accent)' : 'var(--color-ink)',
          opacity: accent ? 1 : 0.8,
        }}
      >
        {value}
      </div>
    </div>
  )
}
