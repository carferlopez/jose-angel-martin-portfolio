'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [label, setLabel] = useState('')
  const [isHover, setIsHover] = useState(false)
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  const x = useSpring(rawX, { stiffness: 800, damping: 50 })
  const y = useSpring(rawY, { stiffness: 800, damping: 50 })

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }

    const over = (e: MouseEvent) => {
      const el = (e.target as Element).closest('[data-cursor]') as HTMLElement | null
      if (el) {
        setLabel(el.dataset.cursor ?? '')
        setIsHover(true)
      }
    }

    const out = (e: MouseEvent) => {
      const el = (e.target as Element).closest('[data-cursor]')
      if (!el) {
        setLabel('')
        setIsHover(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
    }
  }, [isDesktop, rawX, rawY])

  if (!isDesktop) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x, y }}
      aria-hidden="true"
    >
      {/* Crosshair lines */}
      <motion.div
        className="absolute"
        style={{ left: -20, top: 0, width: 40, height: 1, background: 'var(--color-ink)', opacity: 0.7 }}
        animate={{ scaleX: isHover ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute"
        style={{ top: -20, left: 0, height: 40, width: 1, background: 'var(--color-ink)', opacity: 0.7 }}
        animate={{ scaleY: isHover ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Center dot */}
      <motion.div
        className="absolute rounded-full"
        style={{ left: -1.5, top: -1.5, width: 3, height: 3, background: 'var(--color-ink)' }}
        animate={{ opacity: isHover ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Hover circle with label */}
      <motion.div
        className="absolute rounded-full border flex items-center justify-center"
        style={{
          borderColor: 'var(--color-accent)',
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-technical)',
          fontSize: 9,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
        animate={{
          width: isHover ? 64 : 6,
          height: isHover ? 64 : 6,
          left: isHover ? -32 : -3,
          top: isHover ? -32 : -3,
          opacity: isHover ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {isHover && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}
