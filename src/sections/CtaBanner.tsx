export function CtaBanner() {
  return (
    <section className="py-20 bg-[linear-gradient(135deg,#C97A08,#E8920A)] text-center">
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="text-[40px] font-extrabold text-white mb-4">¿Listo para calibrar sus equipos?</h2>
        <p className="text-[18px] text-white/90 mb-9 max-w-[540px] mx-auto">
          Solicite su servicio de calibración ahora. Revisamos su requerimiento y le enviamos oferta en breve.
        </p>
        <a
          href="https://impormedical.my.site.com/solicitudserviciocalibracion"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 bg-white text-navy px-8 py-4 rounded-[10px] font-extrabold text-base transition-all shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:-translate-y-[3px] hover:shadow-[0_10px_32px_rgba(0,0,0,0.2)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="2" />
          </svg>
          Diligenciar solicitud de servicio
        </a>
        <div className="mt-5 text-[13px] text-white/75 flex items-center justify-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          ¿Prefiere hablar con nosotros? WhatsApp: +57 310 493 6998
        </div>
      </div>
    </section>
  )
}
