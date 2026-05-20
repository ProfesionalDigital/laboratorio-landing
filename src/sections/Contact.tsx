import { useApp } from '../context/AppContext'

export function Contact() {
  const { openPqrsModal } = useApp()

  return (
    <section className="py-20 bg-off-white" id="contacto">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-teal text-[13px] font-bold tracking-[1.5px] uppercase mb-3 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-teal">
          Contáctenos
        </div>
        <h2 className="text-[34px] font-extrabold text-navy mb-3">
          Estamos en Palmira, Valle del Cauca
        </h2>
        <p className="text-[17px] text-text-light mb-10">
          Nuestro laboratorio atiende clientes del sector salud, biomédico e industrial a nivel nacional.
        </p>
        <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-brand-border rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003B73" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="min-w-0">
                <strong className="block text-[13px] text-text-light font-semibold uppercase tracking-[0.5px] mb-1">WhatsApp / Teléfono</strong>
                <a href="https://wa.me/573104936998" target="_blank" rel="noreferrer" className="text-[15px] font-bold text-navy hover:text-teal">
                  +57 310 493 6998
                </a>
              </div>
            </div>
            <div className="bg-white border border-brand-border rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003B73" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="min-w-0">
                <strong className="block text-[13px] text-text-light font-semibold uppercase tracking-[0.5px] mb-1">Correo electrónico</strong>
                <a href="mailto:servicioalcliente@impormedical.com.co" className="block text-[15px] font-bold text-navy hover:text-teal break-all">
                  servicioalcliente@impormedical.com.co
                </a>
              </div>
            </div>
            <div className="bg-white border border-brand-border rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003B73" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="min-w-0">
                <strong className="block text-[13px] text-text-light font-semibold uppercase tracking-[0.5px] mb-1">Dirección del laboratorio</strong>
                <span className="text-[15px] font-bold text-navy">Carrera 32 No. 15-76, Palmira, Valle del Cauca</span>
              </div>
            </div>
            <div className="bg-white border border-brand-border rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003B73" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="min-w-0">
                <strong className="block text-[13px] text-text-light font-semibold uppercase tracking-[0.5px] mb-1">Horario de atención</strong>
                <span className="text-[15px] font-bold text-navy">Lunes a viernes · 8:00 a.m. – 5:00 p.m.</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-brand-border flex flex-col h-full">
            <iframe
              src="https://maps.google.com/maps?q=Carrera+32+%2315-76,+Palmira,+Valle+del+Cauca,+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="border-0 block flex-1 min-h-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Laboratorio de Metrología Impormedical"
            />
            <a
              href="https://maps.google.com/?q=Carrera+32+%2315-76,+Palmira,+Valle+del+Cauca"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-navy text-white px-5 py-[11px] text-[13px] font-bold transition-colors shrink-0 hover:bg-navy-light"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Abrir en Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-8 bg-[linear-gradient(135deg,#002752_0%,#0056A8_100%)] rounded-2xl px-9 py-7 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-start gap-4">
            <div className="w-[52px] h-[52px] bg-white/[0.12] rounded-xl flex items-center justify-center shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[18px] font-extrabold text-white mb-[5px]">¿Tiene una Petición, Queja, Reclamo o Sugerencia?</h4>
              <p className="text-[13px] text-white/65 max-w-[460px] leading-[1.55]">
                Radique su PQRS directamente en nuestro sistema de gestión. Registramos su caso, le asignamos número de radicado y damos respuesta en máximo{' '}
                <strong className="text-white/90">15 días hábiles</strong>.
              </p>
            </div>
          </div>
          <button
            onClick={openPqrsModal}
            className="bg-orange text-white px-[26px] py-[14px] rounded-lg border-0 text-sm font-bold cursor-pointer whitespace-nowrap transition-all shrink-0 shadow-[0_4px_14px_rgba(232,146,10,0.4)] hover:bg-orange-hover hover:-translate-y-0.5"
          >
            Radicar PQRSF →
          </button>
        </div>
      </div>
    </section>
  )
}
