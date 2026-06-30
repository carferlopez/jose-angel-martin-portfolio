'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Replay from the beginning whenever the Hero section is shown
            video.currentTime = 0
            video.play().catch((err) => {
              console.log("Auto-play prevented or failed:", err)
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full aspect-video md:h-screen md:min-h-screen overflow-hidden bg-paper"
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
          ref={videoRef}
          className="h-full w-full object-contain bg-paper"
          src="/media/hero_video_0628.mp4"
          autoPlay={!reduced}
          muted
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
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--color-ink)' }}
        aria-hidden="true"
      >
        00.0 — VIDEO HERO
      </div>

      <a
        href="#ingenieria"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#ingenieria')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute right-4 md:right-10 bottom-6 md:bottom-9 flex items-center gap-2 rotring"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--color-ink)', textDecoration: 'none' }}
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
