import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

interface PqrsModalProps {
  open: boolean
  onClose: () => void
}

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string

const fieldClasses =
  'w-full px-3.5 py-[11px] border-[1.5px] border-brand-border rounded-lg text-sm text-text-dark bg-white transition-colors outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,150,199,0.1)] font-sans'

const labelClasses =
  "block text-xs font-bold text-text-dark mb-[5px] tracking-[0.3px] [&_span]:text-[#E53E3E]"

function executeRecaptcha(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha || typeof window.grecaptcha.ready !== 'function') {
      reject(new Error('reCAPTCHA aún no se ha cargado. Intente nuevamente en unos segundos.'))
      return
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha!
        .execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
        .then(resolve)
        .catch(reject)
    })
  })
}

export function PqrsModal({ open, onClose }: PqrsModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [captchaError, setCaptchaError] = useState<string | null>(null)
  const [formValid, setFormValid] = useState(false)

  function handleFormChange() {
    setFormValid(formRef.current?.checkValidity() ?? false)
  }

  const formRef = useRef<HTMLFormElement>(null)
  const tipoRef = useRef<HTMLSelectElement>(null)
  const asuntoRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const recaptchaTokenRef = useRef<HTMLInputElement>(null)
  const captchaSettingsRef = useRef<HTMLInputElement>(null)
  const submittedRef = useRef(false)

  useEffect(() => {
    submittedRef.current = submitted
  }, [submitted])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => {
    if (!open) return
    const interval = setInterval(() => {
      const tokenInput = recaptchaTokenRef.current
      if (tokenInput && tokenInput.value.trim() !== '') return
      const settings = captchaSettingsRef.current
      if (!settings) return
      try {
        const elems = JSON.parse(settings.value) as Record<string, string>
        elems.ts = JSON.stringify(Date.now())
        settings.value = JSON.stringify(elems)
      } catch {
        // ignore malformed settings
      }
    }, 500)
    return () => clearInterval(interval)
  }, [open])

  function handleClose() {
    onClose()
    setTimeout(() => {
      setShowSuccess(false)
      setSubmitted(false)
      setSubmitting(false)
      setCaptchaError(null)
      setFormValid(false)
      formRef.current?.reset()
      if (subjectRef.current) subjectRef.current.value = ''
      if (recaptchaTokenRef.current) recaptchaTokenRef.current.value = ''
    }, 300)
  }

  function handleBackgroundClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) handleClose()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const tipo = tipoRef.current?.value ?? ''
    if (!tipo) {
      alert('Por favor seleccione el tipo de solicitud.')
      return
    }

    const asunto = (asuntoRef.current?.value ?? '').trim()

    setSubmitting(true)
    setCaptchaError(null)

    try {
      const token = await executeRecaptcha()
      if (recaptchaTokenRef.current) {
        recaptchaTokenRef.current.value = token
      }
      if (subjectRef.current) {
        subjectRef.current.value = `[${tipo}] ${asunto}`
      }

      setSubmitted(true)
      formRef.current?.submit()
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'No se pudo verificar el reCAPTCHA. Intente nuevamente.'
      setCaptchaError(message)
      setSubmitting(false)
    }
  }

  function handleFrameLoad() {
    if (submittedRef.current) {
      setShowSuccess(true)
      setSubmitted(false)
    }
  }

  return (
    <>
      <div
        id="pqrs-modal"
        className={`${open ? 'flex' : 'hidden'} fixed inset-0 z-[9999] bg-[rgba(0,21,51,0.7)] backdrop-blur-[5px] items-center justify-center p-5`}
        onClick={handleBackgroundClick}
      >
        <div className="bg-white rounded-[20px] max-w-[580px] w-full max-h-[92vh] flex flex-col shadow-[0_32px_80px_rgba(0,59,115,0.3)] [animation:modalIn_0.22s_ease-out]">
          <div className="bg-navy px-7 py-6 rounded-t-[20px] flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 bg-white/[0.12] rounded-xl flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-extrabold text-white mb-0.5">Radicar PQRSF</h3>
              <p className="text-[13px] text-white/60">Petición · Queja · Reclamo · Sugerencia — Laboratorio de Metrología</p>
            </div>
            <button
              className="w-9 h-9 bg-white/10 border border-white/[0.15] rounded-lg cursor-pointer text-white/70 text-lg font-bold flex items-center justify-center transition-all hover:bg-white/20 hover:text-white"
              onClick={handleClose}
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {!showSuccess && (
            <form
              className="flex flex-col flex-1 min-h-0"
              ref={formRef}
              id="pqrs-form"
              action="https://webto.salesforce.com/servlet/servlet.WebToCase"
              method="POST"
              target="pqrs-hidden-frame"
              onSubmit={handleSubmit}
              onInput={handleFormChange}
              onChange={handleFormChange}
            >
              <input type="hidden" name="orgid" value="00D3t000001N5bX" />
              <input type="hidden" name="retURL" value={`${window.location.origin}/pqrs-ok.html`} />
              <input type="hidden" name="encoding" value="UTF-8" />
              <input type="hidden" name="recordType" value="0123t000000mhYB" />
              <input type="hidden" name="type" value="Laboratorio" />
              <input type="hidden" name="origin" value="Web" />
              <input type="hidden" name="external" value="1" />
              <input
                ref={captchaSettingsRef}
                type="hidden"
                name="captcha_settings"
                defaultValue='{"keyname":"recaptchaWebToCase","fallback":"true","orgId":"00D3t000001N5bX","ts":""}'
              />
              <input ref={subjectRef} type="hidden" id="sf-subject" name="subject" defaultValue="" />
              <input ref={recaptchaTokenRef} type="hidden" name="g-recaptcha-response" defaultValue="" />

              <div className="px-7 pt-6 pb-2 overflow-y-auto flex-1 min-h-0">
                <div className="mb-4">
                  <label className={labelClasses}>
                    Tipo de solicitud <span>*</span>
                  </label>
                  <select ref={tipoRef} id="pqrs-tipo" name="00N6Q000003PSHM" required defaultValue="" className={fieldClasses}>
                    <option value="">Seleccione el tipo...</option>
                    <option value="Petición">📋 Petición — Solicitud de información o servicio</option>
                    <option value="Queja">⚠️ Queja — Inconformidad con la atención recibida</option>
                    <option value="Reclamo">🔔 Reclamo — Inconformidad con el servicio prestado</option>
                    <option value="Sugerencia">💡 Sugerencia — Propuesta de mejora</option>
                    <option value="Felicitaciones">⭐ Felicitaciones — Reconocimiento a la labor realizada</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="mb-4">
                    <label className={labelClasses}>
                      Nombre completo <span>*</span>
                    </label>
                    <input type="text" name="00N6Q000002lYIA" id="pqrs-name" placeholder="Su nombre" required className={fieldClasses} />
                  </div>
                  <div className="mb-4">
                    <label className={labelClasses}>
                      Correo electrónico <span>*</span>
                    </label>
                    <input type="email" name="email" placeholder="correo@ejemplo.com" required className={fieldClasses} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="mb-4">
                    <label className={labelClasses}>Teléfono / WhatsApp</label>
                    <input type="tel" name="phone" placeholder="+57 300 000 0000" className={fieldClasses} />
                  </div>
                  <div className="mb-4">
                    <label className={labelClasses}>Empresa / Institución</label>
                    <input type="text" name="company" placeholder="Opcional" className={fieldClasses} />
                  </div>
                </div>

                <div className="mb-4">
                  <label className={labelClasses}>
                    Asunto <span>*</span>
                  </label>
                  <input
                    ref={asuntoRef}
                    type="text"
                    id="pqrs-asunto"
                    placeholder="Resuma brevemente su solicitud"
                    required
                    className={fieldClasses}
                  />
                </div>

                <div className="mb-4">
                  <label className={labelClasses}>
                    Descripción detallada <span>*</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describa con detalle su petición, queja, reclamo o sugerencia. Entre más información, mejor podremos atenderle."
                    required
                    className={`${fieldClasses} resize-y min-h-[100px] leading-[1.55]`}
                  />
                </div>

              </div>

              <div className="px-7 py-4 border-t border-brand-border shrink-0 rounded-b-[20px] bg-white">
                <label className="flex items-start gap-2.5 mb-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acepta_politicas"
                    required
                    className="mt-[3px] w-4 h-4 accent-teal cursor-pointer shrink-0"
                  />
                  <span className="text-[12px] text-text-mid leading-[1.5]">
                    He leído y acepto la{' '}
                    <a
                      href="https://www.gmd.com.co/politica-de-privacidad-y-habeas-data"
                      target="_blank"
                      rel="noreferrer"
                      className="text-navy font-semibold underline"
                    >
                      Política de Tratamiento de Datos
                    </a>{' '}
                    y autorizo el uso de mi información para gestionar esta solicitud. <span className="text-[#E53E3E]">*</span>
                  </span>
                </label>

                {captchaError && (
                  <div className="mb-3 text-[12px] text-[#E53E3E] font-semibold text-center">
                    {captchaError}
                  </div>
                )}

                <button
                  type="submit"
                  id="pqrs-submit-btn"
                  disabled={submitting || !formValid}
                  className="w-full p-3.5 bg-navy text-white border-0 rounded-[10px] text-[15px] font-bold cursor-pointer transition-all font-sans flex items-center justify-center gap-2 hover:bg-navy-light hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,59,115,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:hover:bg-navy"
                >
                  {submitting ? (
                    'Enviando…'
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Enviar solicitud PQRSF
                    </>
                  )}
                </button>
                <p className="text-[11px] text-text-light text-center mt-3 leading-[1.5]">
                  Su solicitud queda registrada como caso en Salesforce y recibirá respuesta en un plazo máximo de <strong>15 días hábiles</strong>, al correo indicado.
                </p>
                <p className="text-[10px] text-text-light text-center mt-1.5 leading-[1.5]">
                  Este sitio está protegido por reCAPTCHA y se aplican la{' '}
                  <a href="https://www.gmd.com.co/politica-de-privacidad-y-habeas-data" target="_blank" rel="noreferrer" className="underline">
                    Política de Privacidad
                  </a>{' '}
                  y los{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline">
                    Términos del Servicio
                  </a>{' '}
                  de Google.
                </p>
              </div>
            </form>
          )}

          {showSuccess && (
            <div className="px-8 py-12 text-center">
              <div className="w-[76px] h-[76px] bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-[22px] font-extrabold text-navy mb-2.5">¡PQRSF radicada con éxito!</h3>
              <p className="text-sm text-text-light leading-[1.7] mb-7 max-w-[380px] mx-auto">
                Su solicitud ha sido registrada en nuestro sistema de gestión. Recibirá una notificación al correo indicado y le daremos respuesta en un plazo máximo de <strong>15 días hábiles</strong>.
              </p>
              <button
                onClick={handleClose}
                className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3 rounded-lg font-bold text-sm cursor-pointer border-0 font-sans"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
      <iframe
        name="pqrs-hidden-frame"
        id="pqrs-hidden-frame"
        className="hidden"
        onLoad={handleFrameLoad}
      />
    </>
  )
}
