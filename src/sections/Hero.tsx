export function Hero() {
  return (
    <section className="hero-pattern relative overflow-hidden pt-[100px] pb-20 bg-[linear-gradient(135deg,#002752_0%,#003B73_50%,#004E9A_100%)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-[60px] items-center relative z-[1]">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal-light px-[14px] py-[6px] rounded-[20px] text-xs font-semibold tracking-[1px] uppercase mb-5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Sistema de gestión bajo ISO/IEC 17025:2017
            </div>
            <h1 className="text-[52px] max-[900px]:text-[36px] max-[600px]:text-[30px] font-extrabold text-white leading-[1.1] mb-5">
              Resultados de<br />
              calibración <span className="text-teal-light">confiables</span>
              <br />y trazables
            </h1>
            <p className="text-[18px] text-white/75 mb-9 max-w-[500px] leading-[1.7]">
              Calibramos tensiómetros, termómetros y termohigrómetros con métodos normalizados internacionalmente y trazabilidad al Sistema Internacional de Unidades (SI).
            </p>
            <div className="flex gap-[14px] flex-wrap mb-12">
              <a
                href="https://impormedical.my.site.com/solicitudserviciocalibracion"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-orange text-white px-7 py-[14px] rounded-lg font-bold text-[15px] transition-all border-0 cursor-pointer shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-orange-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,146,10,0.45)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="2" />
                </svg>
                Solicitar servicio de calibración
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 bg-transparent text-white px-[27px] py-[13px] rounded-lg font-semibold text-[15px] transition-all border-2 border-white/50 cursor-pointer hover:bg-white/10 hover:border-white"
              >
                Ver servicios
              </a>
            </div>
            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-white/65 text-[13px] font-medium">
                <svg className="text-teal-light shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Trazabilidad al SI
              </div>
              <div className="flex items-center gap-2 text-white/65 text-[13px] font-medium">
                <svg className="text-teal-light shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Imparcialidad garantizada
              </div>
              <div className="flex items-center gap-2 text-white/65 text-[13px] font-medium">
                <svg className="text-teal-light shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Personal certificado
              </div>
            </div>
          </div>
          <div className="max-[900px]:hidden">
            <div className="bg-white/[0.06] border border-white/[0.12] backdrop-blur-[10px] rounded-[20px] p-9">
              <div className="text-white/60 text-xs font-bold tracking-[1px] uppercase mb-5">Servicios disponibles</div>
              <div className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.1] rounded-xl px-[18px] py-[14px] mb-2.5 transition-all hover:bg-white/[0.12] hover:border-teal/40">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: 'rgba(0,150,199,0.2)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#90E0EF" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 12L12 6 6 12" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-white text-sm font-semibold">Tensiómetros (Presión)</strong>
                  <span className="text-white/55 text-xs">0 – 300 mmHg · OIML R148/R149 · DKD-R 6-1</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.1] rounded-xl px-[18px] py-[14px] mb-2.5 transition-all hover:bg-white/[0.12] hover:border-teal/40">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: 'rgba(255,107,53,0.2)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFA07A" strokeWidth="2">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-white text-sm font-semibold">Termómetros (Temperatura)</strong>
                  <span className="text-white/55 text-xs">35 – 41 °C · CEM TH-001 · OIML R115</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.1] rounded-xl px-[18px] py-[14px] mb-2.5 transition-all hover:bg-white/[0.12] hover:border-teal/40">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: 'rgba(18,183,106,0.2)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2">
                    <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-white text-sm font-semibold">Termohigrómetros</strong>
                  <span className="text-white/55 text-xs">10–40 °C · 30–90 %rh · CEM TH-007</span>
                </div>
              </div>
              <div className="bg-teal/15 border border-teal/30 rounded-[10px] px-[18px] py-[14px] mt-4 text-teal-light text-[13px] font-semibold flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                ISO/IEC 17025:2017 · Trazabilidad metrológica al SI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
