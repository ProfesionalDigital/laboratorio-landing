import type { ReactNode } from 'react'

interface WhyItem {
  icon: ReactNode
  title: string
  description: string
}

const items: WhyItem[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#90E0EF" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Trazabilidad metrológica al SI',
    description:
      'Cadena ininterrumpida de calibraciones hasta el Sistema Internacional de Unidades, conforme a la política ILAC-P10:07/2020 sobre trazabilidad metrológica.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#90E0EF" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Personal competente y autorizado',
    description:
      'Metrólogos evaluados, calificados y autorizados formalmente por la Dirección del Laboratorio, con supervisión continua.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#90E0EF" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="11" y2="17" />
      </svg>
    ),
    title: 'Certificados con incertidumbre de medición',
    description:
      'Emitimos certificados conforme a la ISO/IEC 17025:2017 con presupuesto de incertidumbre evaluado según la GUM.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#90E0EF" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Confidencialidad garantizada',
    description:
      'Toda información del cliente es tratada como confidencial. Personal con compromiso firmado de imparcialidad e independencia.',
  },
]

const norms: { badge: string; title: string; subtitle: string }[] = [
  { badge: 'ISO', title: 'ISO/IEC 17025:2017', subtitle: 'Competencia de laboratorios de calibración' },
  { badge: 'OIML', title: 'OIML R148-1 / R149-1', subtitle: 'Esfigmomanómetros aneroides y digitales' },
  { badge: 'CEM', title: 'TH-001 / TH-007', subtitle: 'Termómetros y termohigrómetros' },
  { badge: 'DKD', title: 'DKD-R 6-1', subtitle: 'Instrumentos de medición de presión' },
  { badge: 'GUM', title: 'JCGM 100 (GUM)', subtitle: 'Guía para la expresión de la incertidumbre' },
]

export function WhyUs() {
  return (
    <section className="py-[90px] bg-[linear-gradient(180deg,#EAF3FB_0%,#FFFFFF_100%)]" id="por-que-nosotros">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-[60px] items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-teal text-[13px] font-bold tracking-[1.5px] uppercase mb-3 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-teal">
              ¿Por qué elegirnos?
            </div>
            <h2 className="text-[38px] font-extrabold text-navy mb-4">Un laboratorio comprometido con la calidad y la imparcialidad</h2>
            <p className="text-[17px] text-text-light mb-9">
              Nuestro sistema de gestión garantiza resultados técnicamente válidos, trazables y emitidos por personal competente y autorizado.
            </p>
            <ul className="list-none flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 items-start bg-white border border-brand-border rounded-xl px-5 py-4 transition-all hover:border-teal hover:shadow-brand-sm"
                >
                  <div className="w-11 h-11 rounded-[10px] bg-navy flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block text-[15px] text-navy font-bold mb-1">{item.title}</strong>
                    <p className="text-[13px] text-text-light">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-navy rounded-[20px] p-10 text-white">
              <div className="text-sm font-bold tracking-[1px] uppercase text-teal-light mb-6">Marcos normativos aplicados</div>
              {norms.map((n) => (
                <div key={n.badge} className="bg-white/[0.08] border border-white/[0.12] rounded-xl px-5 py-4 mb-3 flex items-center gap-4">
                  <div className="bg-teal text-white rounded-lg px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap">
                    {n.badge}
                  </div>
                  <div>
                    <strong className="block text-sm font-bold mb-0.5">{n.title}</strong>
                    <span className="text-xs text-white/60">{n.subtitle}</span>
                  </div>
                </div>
              ))}
              <div className="bg-[linear-gradient(135deg,rgba(0,150,199,0.2),rgba(0,150,199,0.05))] border border-teal/30 rounded-xl p-5 mt-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-sm font-bold text-white">Laboratorio bajo ISO/IEC 17025:2017</strong>
                  <span className="text-xs text-white/65">Patrones calibrados por laboratorios acreditados por un organismo de acreditación firmante del ILAC-MRA · Colombia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
