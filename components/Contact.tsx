'use client'
import { useState, useId, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PHONE_HREF, PHONE_DISPLAY, WHATSAPP_URL, EMAIL } from '@/lib/constants'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 1h3l1.5 3.5-1.5 1a9 9 0 0 0 4 4l1-1.5L14 9.5V13a1.5 1.5 0 0 1-1.5 1.5C5.5 14.5.5 9.5.5 3A1.5 1.5 0 0 1 2.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
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
            Hablamos
          </motion.h2>

          <p style={{ fontFamily: 'var(--font-technical)', fontSize: 13, lineHeight: 1.75, opacity: 0.65 }}>
            La consulta inicial es gratuita. Cuéntame qué necesitas y te digo qué tipo de tramitación
            corresponde y cuánto cuesta.
          </p>

          {/* Botones directos */}
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 transition-opacity hover:opacity-85 active:opacity-75"
              style={{
                backgroundColor: '#25D366',
                color: '#fff',
                fontFamily: 'var(--font-technical)',
                fontSize: 13,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
              aria-label="Escribir por WhatsApp"
            >
              <WhatsAppIcon />
              Escribir por WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 py-4 transition-opacity hover:opacity-75"
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
              Fuera de horario: respondo por WhatsApp
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
                  className="relative overflow-hidden w-full"
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
                  whileHover={reduced ? undefined : { backgroundColor: 'var(--color-ink)', color: 'var(--color-paper)' }}
                  transition={{ duration: 0.2 }}
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje →'}
                </motion.button>

                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-technical)', fontSize: 11, color: '#C22222', letterSpacing: '0.1em' }}>
                    ERROR — Inténtalo de nuevo o usa WhatsApp.
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
