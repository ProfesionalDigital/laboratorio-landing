export function Traceability() {
  return (
    <section className="py-20 bg-[linear-gradient(135deg,#002752,#003B73)] relative overflow-hidden after:content-[''] after:absolute after:right-[-100px] after:top-[-100px] after:w-[500px] after:h-[500px] after:rounded-full after:bg-[radial-gradient(circle,rgba(0,150,199,0.15)_0%,transparent_70%)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-[60px] items-center relative z-[1]">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 text-teal-light text-[13px] font-bold tracking-[1.5px] uppercase mb-3 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-teal-light">
              Trazabilidad metrológica
            </div>
            <h2 className="text-[38px] font-extrabold mb-4">Cadena ininterrumpida hasta el SI</h2>
            <p className="text-[17px] text-white/75 mb-8 leading-[1.7]">
              Nuestros patrones de referencia están calibrados por laboratorios acreditados por un organismo de acreditación firmante del ILAC-MRA, garantizando que sus resultados son comparables internacionalmente.
            </p>
            <a
              href="https://impormedical.my.site.com/solicitudserviciocalibracion"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-orange text-white px-7 py-[14px] rounded-lg font-bold text-[15px] transition-all border-0 cursor-pointer shadow-[0_4px_14px_rgba(232,146,10,0.35)] hover:bg-orange-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,146,10,0.45)]"
            >
              Solicitar calibración ahora →
            </a>
          </div>
          <div className="bg-white/[0.06] border border-white/10 rounded-[20px] p-8">
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-4 py-3.5 border-b border-white/[0.08]">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-sm"
                  style={{ background: 'rgba(0,150,199,0.3)', border: '2px solid #0096C7' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#90E0EF" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4m0 4h.01" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-white text-[13px] font-bold">BIPM / INM / PTB</strong>
                  <span className="text-white/55 text-xs">Institutos Nacionales de Metrología · Nivel internacional</span>
                </div>
              </div>
              <div className="w-0.5 h-5 bg-teal ml-[19px] opacity-60" />
              <div className="flex items-center gap-4 py-3.5 border-b border-white/[0.08]">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-sm"
                  style={{ background: 'rgba(255,107,53,0.2)', border: '2px solid #FF6B35' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFA07A" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-white text-[13px] font-bold">Laboratorio acreditado por un organismo de acreditación firmante del ILAC-MRA</strong>
                  <span className="text-white/55 text-xs">Calibración de nuestros patrones de referencia</span>
                </div>
              </div>
              <div className="w-0.5 h-5 bg-teal ml-[19px] opacity-60" />
              <div className="flex items-center gap-4 py-3.5 border-b border-white/[0.08]">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-sm"
                  style={{ background: 'rgba(18,183,106,0.2)', border: '2px solid #12B76A' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-white text-[13px] font-bold">Lab. Metrología Impormedical</strong>
                  <span className="text-white/55 text-xs">Fluke 700G / CEM TH-001 / CEM TH-007 · Palmira</span>
                </div>
              </div>
              <div className="w-0.5 h-5 bg-teal ml-[19px] opacity-60" />
              <div className="flex items-center gap-4 py-3.5">
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-sm"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-white text-[13px] font-bold">Su equipo calibrado</strong>
                  <span className="text-white/55 text-xs">Certificado con incertidumbre · ISO/IEC 17025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
