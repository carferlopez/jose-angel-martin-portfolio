'use client'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      aria-label="Video de presentación"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduced ? undefined : { scale: 1.03, opacity: 0 }}
        animate={reduced ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <video
          className="h-full w-full object-cover"
          src="/media/hero_video.mp4"
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </motion.div>

      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0))' }}
        aria-hidden="true"
      />

      <div
        className="absolute left-4 md:left-10 bottom-8 md:bottom-10"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--color-paper)', textShadow: '0 1px 12px rgba(0,0,0,0.45)' }}
        aria-hidden="true"
      >
        00.0 — VIDEO HERO
      </div>

      <a
        href="#intro"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute right-4 md:right-10 bottom-6 md:bottom-9 flex items-center gap-2 rotring"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--color-paper)', textDecoration: 'none', textShadow: '0 1px 12px rgba(0,0,0,0.45)' }}
      >
        VER SERVICIO
        <motion.span
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          ↓
        </motion.span>
      </a>
    </section>
  )
}
