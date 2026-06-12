'use client'
import { useState, useId, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const EMAIL = 'info@joseangelmartininge.es'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const reduced = useReducedMotion()
  const id = useId()
  const [emailHover, setEmailHover] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [msgRef, setMsgRef] = useState('0000')

  useEffect(() => {
    setMsgRef(String(Math.floor(Math.random() * 9000) + 1000))
  }, [])
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'CAMPO REQUERIDO'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'EMAIL INVÁLIDO'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'MÍNIMO 10 CARACTERES'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('sending')
    // Simular envío (en producción: conectar a API real)
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
  }

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-40 px-6 md:px-12"
      aria-label="06.0 — Contacto"
    >
      {/* Número sección */}
      <div
        className="mb-12 md:mb-20 opacity-35"
        style={{ fontFamily: 'var(--font-technical)', fontSize: 10, letterSpacing: '0.18em' }}
        aria-hidden="true"
      >
        06.0 — CONTACTO
      </div>

      {/* Email gigante con hover "tacha y reescribe" */}
      <div className="mb-16 md:mb-24 overflow-hidden">
        <motion.a
          href={`mailto:${EMAIL}`}
          className="font-display leading-none block relative"
          style={{
            fontSize: 'clamp(2rem, 6vw, 8rem)',
            color: 'var(--color-ink)',
            textDecoration: 'none',
          }}
          onMouseEnter={() => setEmailHover(true)}
          onMouseLeave={() => setEmailHover(false)}
          data-cursor="CORREO"
          aria-label={`Enviar email a ${EMAIL}`}
        >
          <AnimatePresence mode="wait">
            {!emailHover ? (
              <motion.span
                key="normal"
                initial={reduced ? undefined : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0, x: -8 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'block' }}
              >
                {EMAIL}
              </motion.span>
            ) : (
              <motion.span
                key="hover"
                initial={reduced ? undefined : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'block', color: 'var(--color-accent)' }}
              >
                {EMAIL}
              </motion.span>
            )}
          </AnimatePresence>
          {/* Tachado on hover */}
          <motion.div
            className="absolute left-0 right-0 pointer-events-none"
            style={{ top: '52%', height: 3, backgroundColor: 'var(--color-ink)', transformOrigin: 'left' }}
            animate={{ scaleX: emailHover ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
        </motion.a>
      </div>

      {/* Formulario */}
      <div className="max-w-2xl">
        <div
          className="mb-8"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4 }}
          aria-hidden="true"
        >
          // FORMULARIO DE CONTACTO · REF. {msgRef}
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 flex flex-col gap-4"
            >
              <div
                className="font-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', color: 'var(--color-accent)' }}
              >
                MENSAJE REGISTRADO
              </div>
              <div
                style={{ fontFamily: 'var(--font-technical)', fontSize: 12, letterSpacing: '0.1em', opacity: 0.6 }}
              >
                REF. #{msgRef} — RECIBIRÁS RESPUESTA EN 24–48H LABORABLES
              </div>
              <div className="flex gap-2 mt-4">
                <span className="stamp">OK</span>
                <span className="stamp">REV. 2026.A</span>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FormField
                id={`${id}-name`}
                label="NOMBRE"
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                error={errors.name}
                placeholder="Tu nombre completo"
              />
              <FormField
                id={`${id}-email`}
                label="EMAIL"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                error={errors.email}
                placeholder="tu@email.com"
              />
              <FormField
                id={`${id}-message`}
                label="MENSAJE"
                type="textarea"
                value={form.message}
                onChange={handleChange('message')}
                error={errors.message}
                placeholder="Describe tu proyecto o consulta…"
              />

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="relative overflow-hidden"
                style={{
                  border: '1px solid var(--color-ink)',
                  backgroundColor: 'transparent',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-technical)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  cursor: 'inherit',
                  width: '100%',
                }}
                whileHover={reduced ? undefined : { backgroundColor: 'var(--color-ink)', color: 'var(--color-paper)' }}
                transition={{ duration: 0.2 }}
                data-cursor="ENVIAR"
              >
                {status === 'sending' ? 'ENVIANDO…' : 'ENVIAR MENSAJE →'}
              </motion.button>

              {status === 'error' && (
                <div style={{ fontFamily: 'var(--font-technical)', fontSize: 11, color: '#C22', letterSpacing: '0.1em' }}>
                  ERROR — INTENTA DE NUEVO O ESCRIBE A {EMAIL}
                </div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-ink/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span
            style={{ fontFamily: 'var(--font-technical)', fontSize: 11, opacity: 0.45, letterSpacing: '0.08em' }}
          >
            JOSÉ ÁNGEL MARTÍN — REV. 2026.A · PEDRO MUÑOZ, CIUDAD REAL
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/joseangelmartininge"
              className="rotring opacity-50 hover:opacity-100 transition-opacity"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.08em', textDecoration: 'none', color: 'var(--color-ink)' }}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VER"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.coitclm.com"
              className="rotring opacity-50 hover:opacity-100 transition-opacity"
              style={{ fontFamily: 'var(--font-technical)', fontSize: 11, letterSpacing: '0.08em', textDecoration: 'none', color: 'var(--color-ink)' }}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VER"
            >
              Colegio IICLM ↗
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

function FormField({
  id,
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
}: {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  placeholder?: string
}) {
  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${error ? '#C22' : 'rgba(20,20,20,0.25)'}`,
    padding: '8px 0',
    fontFamily: 'var(--font-technical)',
    fontSize: 13,
    color: 'var(--color-ink)',
    outline: 'none',
    letterSpacing: '0.04em',
    resize: 'none',
    cursor: 'inherit',
  }

  return (
    <div>
      <label
        htmlFor={id}
        style={{ fontFamily: 'var(--font-technical)', fontSize: 9, letterSpacing: '0.15em', opacity: 0.4, display: 'block', marginBottom: 6 }}
      >
        // {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          style={inputStyle}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={inputStyle}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <div
          id={`${id}-error`}
          role="alert"
          style={{ fontFamily: 'var(--font-technical)', fontSize: 10, color: '#C22', letterSpacing: '0.1em', marginTop: 4 }}
        >
          ← {error}
        </div>
      )}
    </div>
  )
}
