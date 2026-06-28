'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = [
  'INICIANDO SISTEMA…',
  'CALIBRANDO RETÍCULA… OK',
  'CARGANDO PLANOS… OK',
  'VERIFICANDO NORMATIVA… OK',
  'REV. 2026.A — LISTO',
]

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true)
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < LINES.length) {
        setLines((prev) => [...prev, LINES[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 700)
        }, 350)
      }
    }, 280)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col justify-end"
          style={{ backgroundColor: 'var(--color-ink)' }}
          exit={{ clipPath: 'inset(0 100% 0 0)', transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Grid lines subtle */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#EDEAE3 0.5px, transparent 0.5px), linear-gradient(90deg, #EDEAE3 0.5px, transparent 0.5px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Lines */}
          <div className="relative z-10 px-8 md:px-16 pb-16 pt-8">
            <div className="mb-8 flex items-center gap-3">
              <span
                className="text-2xl tracking-tighter font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-paper)' }}
              >
                PM.
              </span>
              <span className="stamp" style={{ borderColor: 'rgba(237,234,227,0.3)', color: 'rgba(237,234,227,0.5)' }}>
                INGENIERO TÉCNICO ELÉCTRICO
              </span>
            </div>

            <div className="space-y-2">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontFamily: 'var(--font-technical)',
                    fontSize: 12,
                    color: i === lines.length - 1 ? 'var(--color-accent)' : 'rgba(237,234,227,0.6)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {`> ${line}`}
                </motion.div>
              ))}

              {/* Blinking cursor */}
              {lines.length < LINES.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  style={{ fontFamily: 'var(--font-technical)', fontSize: 12, color: 'rgba(237,234,227,0.6)' }}
                >
                  {'> _'}
                </motion.span>
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-px bg-paper/10 relative overflow-hidden w-full max-w-xs">
              <motion.div
                className="h-full absolute left-0 top-0"
                style={{ backgroundColor: 'var(--color-accent)' }}
                animate={{ width: `${(lines.length / LINES.length) * 100}%` }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
