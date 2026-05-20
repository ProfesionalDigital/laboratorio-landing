import { useApp } from '../context/AppContext'
import { policies } from '../data/policies'

export function PolicyPage() {
  const { showPage, activePolicy } = useApp()
  const policy = activePolicy ? policies[activePolicy] : null

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-[100] bg-navy border-b border-white/[0.08] shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[70px] gap-6">
          <a
            className="shrink-0 cursor-pointer"
            onClick={() => showPage('main')}
            aria-label="Impormedical · inicio"
          >
            <img src="/logo-im.svg" alt="Impormedical" className="h-10 w-auto block" />
          </a>
          <a
            href="https://impormedical.my.site.com/solicitudserviciocalibracion"
            target="_blank"
            rel="noreferrer"
            className="bg-orange text-white px-5 py-[9px] rounded-[7px] text-sm font-bold transition-all whitespace-nowrap hover:bg-orange-hover"
          >
            Solicitar calibración →
          </a>
        </div>
      </nav>
      <div className="bg-navy pt-12 pb-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 text-white/70 text-sm font-semibold cursor-pointer transition-colors bg-white/[0.08] border border-white/[0.12] px-4 py-2 rounded-lg mb-5 w-fit hover:text-white"
            onClick={() => showPage('main')}
          >
            ← Volver al sitio principal
          </div>
          <h1 className="text-[34px] font-extrabold text-white mb-2">{policy?.title ?? 'Política'}</h1>
          <div className="text-white/60 text-sm">
            {policy ? `${policy.code} · Laboratorio de Metrología Impormedical` : 'Laboratorio de Metrología Impormedical'}
          </div>
        </div>
      </div>
      <div className="py-[60px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div
            className="policy-content max-w-[760px]"
            dangerouslySetInnerHTML={{ __html: policy?.content ?? '' }}
          />
        </div>
      </div>
      <footer className="bg-navy-dark text-white/70 pt-14 pb-7">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-3">
            <div className="text-[13px] text-white/40">
              © 2026 <span className="text-white/60">Impormedical Equipos y Suministros Médicos S.A.</span> · NIT 900261089-9
            </div>
            <div>
              <a
                onClick={() => showPage('main')}
                className="text-white/60 text-sm cursor-pointer hover:text-teal-light"
              >
                ← Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
