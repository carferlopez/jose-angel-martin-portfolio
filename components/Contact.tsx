'use client'
import { useState, useId, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PHONE_HREF, PHONE_DISPLAY, EMAIL } from '@/lib/constants'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 1h3l1.5 3.5-1.5 1a9 9 0 0 0 4 4l1-1.5L14 9.5V13a1.5 1.5 0 0 1-1.5 1.5C5.5 14.5.5 9.5.5 3A1.5 1.5 0 0 1 2.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Contact() {
  const reduced = useReducedMotion()
  const id = useId()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [msgRef, setMsgRef] = useState('0000')
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  useEffect(() => {
    setMsgRef(String(Math.floor(Math.random() * 9000) + 1000))
  }, [])

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'CAMPO REQUERIDO'
    if (!form.phone.trim() || !/^[+\d\s\-()]{7,}$/.test(form.phone)) e.phone = 'TELÉFONO INVÁLIDO'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'MÍNIMO 10 CARACTERES'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [field]: e.target.value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }))
  }

  return (
    <section
      id="contacto"
      className="relative py-20 md:py-36 px-4 md:px-10"
      aria-labelledby="contact-heading"
    >
      {/* Número sección */}
      <div
        className="mb-10 opacity-30"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        07.0 — CONTACTO
      </div>

      <div className="grid md:grid-cols-2 gap-14 md:gap-24">

        {/* Columna izquierda: canales directos */}
        <div className="flex flex-col gap-8">
          <motion.h2
            id="contact-heading"
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 5rem)', color: 'var(--color-ink)' }}
            initial={reduced ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="highlight-heading">Hablamos</span>
          </motion.h2>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, opacity: 0.65 }}>
            La consulta inicial es gratuita. Cuéntame qué necesitas y te digo qué tipo de tramitación
            corresponde y cuánto cuesta.
          </p>

          {/* Botones directos */}
          <div className="flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="cta-blue-hover flex items-center justify-center gap-3 py-4 hover:!bg-accent hover:!border-accent hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent focus-visible:!border-accent focus-visible:!text-paper focus-visible:!opacity-100"
              style={{
                border: '2px solid var(--color-ink)',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-technical)',
                fontSize: 13,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              aria-label={`Llamar al ${PHONE_DISPLAY}`}
            >
              <PhoneIcon />
              Llamar · {PHONE_DISPLAY}
            </a>
          </div>

          {/* Email */}
          <div>
            <div style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4, marginBottom: 6 }}>
              // EMAIL
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="rotring"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 13, color: 'var(--color-ink)', textDecoration: 'none', opacity: 0.75 }}
            >
              {EMAIL}
            </a>
          </div>

          {/* Horario */}
          <div>
            <div style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4, marginBottom: 6 }}>
              // HORARIO
            </div>
            <p style={{ fontFamily: 'var(--font-technical)', fontSize: 12, lineHeight: 1.7, opacity: 0.6 }}>
              Lunes a viernes, 9:00–18:00<br />
              Fuera de horario: deja un mensaje y te respondo.
            </p>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div>
          <div
            className="mb-6"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.35 }}
            aria-hidden="true"
          >
            // FORMULARIO · REF. {msgRef}
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 flex flex-col gap-4"
              >
                <div className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', color: 'var(--color-accent)' }}>
                  Mensaje registrado
                </div>
                <p style={{ fontFamily: 'var(--font-technical)', fontSize: 12, letterSpacing: '0.1em', opacity: 0.6 }}>
                  REF. #{msgRef} — Respondo en 24–48 h laborables.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="stamp">OK</span>
                  <span className="stamp">REV. 2026.A</span>
                </div>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" noValidate exit={{ opacity: 0 }}>
                <Field id={`${id}-name`} label="NOMBRE" type="text" value={form.name} onChange={set('name')} error={errors.name} placeholder="Tu nombre completo" />
                <Field id={`${id}-phone`} label="TELÉFONO" type="tel" value={form.phone} onChange={set('phone')} error={errors.phone} placeholder="600 000 000" />
                <Field id={`${id}-msg`} label="MENSAJE" type="textarea" value={form.message} onChange={set('message')} error={errors.message} placeholder="Cuéntame qué necesitas…" />

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="cta-blue-hover relative overflow-hidden w-full hover:!bg-accent hover:!border-accent hover:!text-paper hover:!opacity-100 focus-visible:!bg-accent focus-visible:!border-accent focus-visible:!text-paper focus-visible:!opacity-100"
                  style={{
                    border: '1px solid var(--color-ink)',
                    backgroundColor: 'transparent',
                    color: 'var(--color-ink)',
                    fontFamily: 'var(--font-technical)',
                    fontSize: 12,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '14px 24px',
                  }}
                  whileHover={reduced ? undefined : { backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-accent)', color: 'var(--color-paper)' }}
                  transition={{ duration: 0.2 }}
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje →'}
                </motion.button>

                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-technical)', fontSize: 11, color: '#C22222', letterSpacing: '0.1em' }}>
                    ERROR — Inténtalo de nuevo o llama por teléfono.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t" style={{ borderColor: 'rgba(20,20,20,0.1)' }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.55, letterSpacing: '0.08em' }}>
              JOSÉ ÁNGEL MARTÍN — INGENIERO INDUSTRIAL · PEDRO MUÑOZ, CIUDAD REAL
            </span>
            <div className="flex items-center gap-4">
              <a href={PHONE_HREF} className="rotring" style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.4, color: 'var(--color-ink)', textDecoration: 'none' }}>
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="rotring" style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.4, color: 'var(--color-ink)', textDecoration: 'none' }}>
                {EMAIL}
              </a>
            </div>
          </div>
          <a
            href="https://www.coitclm.com"
            className="rotring opacity-40 hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-technical)', fontSize: 11, color: 'var(--color-ink)', textDecoration: 'none', letterSpacing: '0.06em' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Colegio Ingenieros Industriales CLM ↗
          </a>
        </div>
        <div
          className="mt-4"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 9, opacity: 0.25, letterSpacing: '0.1em' }}
          aria-hidden="true"
        >
          REV. 2026.A — NORMATIVA: DECRETO 54/2011 CLM · RD 2267/2004 · REBT 2002
        </div>
      </footer>
    </section>
  )
}

function Field({
  id, label, type, value, onChange, error, placeholder,
}: {
  id: string; label: string; type: 'text' | 'tel' | 'textarea'
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string; placeholder?: string
}) {
  const base: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${error ? '#C22222' : 'rgba(20,20,20,0.2)'}`,
    padding: '8px 0',
    fontFamily: 'var(--font-technical)',
    fontSize: 13,
    color: 'var(--color-ink)',
    outline: 'none',
    letterSpacing: '0.04em',
    resize: 'none',
  }
  return (
    <div>
      <label htmlFor={id} style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4, display: 'block', marginBottom: 5 }}>
        // {label}
      </label>
      {type === 'textarea'
        ? <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} rows={4} style={base} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} />
        : <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} style={base} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} />
      }
      {error && (
        <p id={`${id}-e`} role="alert" style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: '#C22222', letterSpacing: '0.1em', marginTop: 3 }}>
          ← {error}
        </p>
      )}
    </div>
  )
}
