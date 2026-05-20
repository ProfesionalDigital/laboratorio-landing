import { useApp } from '../context/AppContext'
import type { PolicyKey } from '../data/policies'

const policyLinks: { key: PolicyKey; label: string }[] = [
  { key: 'imparcialidad', label: 'Imparcialidad y Confidencialidad' },
  { key: 'calidad', label: 'Política de Calidad' },
  { key: 'postventa', label: 'Postventa y PQR' },
  { key: 'ingreso', label: 'Ingreso a Instalaciones' },
  { key: 'residuos', label: 'Manejo de Residuos' },
  { key: 'sst', label: 'Seguridad y Salud' },
]

export function Footer() {
  const { showPolicy, openPqrsModal } = useApp()

  return (
    <footer className="bg-navy-dark text-white/70 pt-14 pb-7">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-10 mb-12">
          <div>
            <img src="/logo-im.svg" alt="Impormedical" className="h-10 w-auto block" />
            <p className="text-sm leading-[1.7] mt-3 max-w-[280px]">
              Calibración de equipos médicos con trazabilidad al Sistema Internacional de Unidades. Comprometidos con la imparcialidad, la exactitud y la confiabilidad de los resultados.
            </p>
            <p className="text-xs text-white/35 mt-3">
              NIT: 900261089-9 · Impormedical Equipos y Suministros Médicos S.A.
            </p>
          </div>
          <div>
            <h5 className="text-white text-[13px] font-bold tracking-[1px] uppercase mb-4">Servicios</h5>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#servicios" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">Calibración de tensiómetros</a></li>
              <li><a href="#servicios" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">Calibración de termómetros</a></li>
              <li><a href="#servicios" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">Calibración de termohigrómetros</a></li>
              <li>
                <a href="https://impormedical.my.site.com/solicitudserviciocalibracion" target="_blank" rel="noreferrer" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">
                  Solicitar servicio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-[13px] font-bold tracking-[1px] uppercase mb-4">Empresa</h5>
            <ul className="list-none flex flex-col gap-2.5">
              <li><a href="#por-que-nosotros" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">Sobre el laboratorio</a></li>
              <li><a href="#proceso" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">Nuestro proceso</a></li>
              <li><a href="#contacto" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">Contacto</a></li>
              <li>
                <a href="https://www.impormedical.co" target="_blank" rel="noreferrer" className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light">
                  Impormedical.co
                </a>
              </li>
              <li>
                <a
                  onClick={openPqrsModal}
                  className="text-sm text-teal-light font-bold transition-colors cursor-pointer"
                >
                  📋 Radicar PQRSF
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-[13px] font-bold tracking-[1px] uppercase mb-4">Políticas</h5>
            <ul className="list-none flex flex-col gap-2.5">
              {policyLinks.map((p) => (
                <li key={p.key}>
                  <a
                    onClick={() => showPolicy(p.key)}
                    className="text-sm text-white/60 transition-colors cursor-pointer hover:text-teal-light"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="text-[13px] text-white/40">
              © 2026 <span className="text-white/60">Impormedical Equipos y Suministros Médicos S.A.</span> — Todos los derechos reservados.
            </div>
            <div className="text-xs text-white/35 mt-1">
              Carrera 32 No. 15-76, Palmira, Valle del Cauca · servicioalcliente@impormedical.com.co
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-teal/15 border border-teal/30 rounded-md px-2.5 py-[5px] text-[11px] font-bold text-teal-light">
              ISO/IEC 17025:2017
            </div>
            <div className="bg-success/15 border border-success/30 rounded-md px-2.5 py-[5px] text-[11px] font-bold text-[#6EE7B7]">
              Trazabilidad al SI
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
