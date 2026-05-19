import { CheckIcon } from './CheckIcon'
import { ExtraPointsNotice } from './ExtraPointsNotice'

const uncertaintySources = [
  'Patrón de referencia (CEM TH-007)',
  'Uniformidad espacial y estabilidad temporal de la cámara',
  'Repetibilidad de las indicaciones del instrumento',
  'Resolución del instrumento bajo calibración',
]

export function TermohigrometroCard() {
  return (
    <div className="border border-brand-border rounded-[20px] overflow-hidden transition-all shadow-brand-sm hover:border-teal hover:shadow-brand-lg">
      <div className="bg-navy px-8 py-6 flex items-center gap-5 max-[768px]:flex-wrap">
        <div className="w-[52px] h-[52px] rounded-[14px] bg-white/[0.12] flex items-center justify-center shrink-0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
            <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
            <circle cx="12" cy="9" r="3" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-[22px] font-extrabold text-white mb-1">Termohigrómetros · Medidores Ambientales</h3>
          <p className="text-sm text-white/65">
            Calibración de temperatura ambiental y humedad relativa en cámara climática controlada · Método CEM TH-007 ·{' '}
            <strong className="text-[#FFD580]">Se calibran 2 magnitudes en un mismo servicio</strong>
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-[10px] font-bold text-white/50 uppercase tracking-[1.2px]">Alcance de las magnitudes</div>
          <div className="flex gap-2 flex-wrap justify-end">
            <span className="bg-orange text-white px-4 py-1.5 rounded-[20px] text-sm font-extrabold whitespace-nowrap shadow-[0_2px_8px_rgba(232,146,10,0.4)] tracking-[0.3px]">10 – 40 °C</span>
            <span className="bg-orange text-white px-4 py-1.5 rounded-[20px] text-sm font-extrabold whitespace-nowrap shadow-[0_2px_8px_rgba(232,146,10,0.4)] tracking-[0.3px]">30 – 90 %rh</span>
            <span className="bg-white/[0.12] border border-white/20 text-white/85 px-3 py-[5px] rounded-[20px] text-xs font-semibold whitespace-nowrap">CEM TH-007</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
        <div className="px-8 py-7">
          <div className="text-[11px] font-bold tracking-[1px] uppercase text-teal mb-4 flex items-center gap-1.5 before:content-[''] before:block before:w-4 before:h-0.5 before:bg-teal">
            Puntos nominales por magnitud
          </div>

          <div className="border border-brand-border rounded-xl mb-3 overflow-hidden">
            <div className="bg-light-blue px-4 py-2.5 flex items-center justify-between">
              <strong className="text-[13px] font-bold text-navy">🌡️ Temperatura ambiental</strong>
              <span className="text-[11px] text-text-light">a humedad relativa fija de 50 %rh</span>
            </div>
            <div className="px-4 py-3.5">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">10 °C</span>
                <span className="text-teal text-sm font-black">→</span>
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">20 °C</span>
                <span className="text-teal text-sm font-black">→</span>
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">30 °C</span>
                <span className="text-teal text-sm font-black">→</span>
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">40 °C</span>
              </div>
              <div className="mt-2 flex gap-2 items-center flex-wrap">
                <span className="inline-flex items-center gap-1 bg-[#E8F5E9] border border-[#A5D6A7] text-[#1B5E20] rounded-md px-2.5 py-1 text-[11px] font-bold">↑ Serie ascendente</span>
                <span className="inline-flex items-center gap-1 bg-[#E8F5E9] border border-[#A5D6A7] text-[#1B5E20] rounded-md px-2.5 py-1 text-[11px] font-bold">4 puntos nominales</span>
                <span className="text-xs text-text-light">Condición A (uniformidad + estabilidad)</span>
              </div>
            </div>
          </div>

          <div className="border border-brand-border rounded-xl mb-3 overflow-hidden last:mb-0">
            <div className="bg-light-blue px-4 py-2.5 flex items-center justify-between">
              <strong className="text-[13px] font-bold text-navy">💧 Humedad relativa</strong>
              <span className="text-[11px] text-text-light">a temperatura fija de 20 °C</span>
            </div>
            <div className="px-4 py-3.5">
              <div className="bg-[#FFF3E0] border border-[#FFD580] rounded-md px-2.5 py-1.5 text-[11px] text-[#7A4F00] font-semibold mb-2.5">
                ⚠️ Secado del instrumento requerido antes del primer punto
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">30 %rh</span>
                <span className="text-teal text-sm font-black">→</span>
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">40 %rh</span>
                <span className="text-teal text-sm font-black">→</span>
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">60 %rh</span>
                <span className="text-teal text-sm font-black">→</span>
                <span className="bg-navy text-white rounded-md px-2.5 py-1 text-xs font-extrabold">90 %rh</span>
              </div>
              <div className="mt-2 flex gap-2 items-center flex-wrap">
                <span className="inline-flex items-center gap-1 bg-[#E8F5E9] border border-[#A5D6A7] text-[#1B5E20] rounded-md px-2.5 py-1 text-[11px] font-bold">↑ Serie ascendente</span>
                <span className="inline-flex items-center gap-1 bg-[#E8F5E9] border border-[#A5D6A7] text-[#1B5E20] rounded-md px-2.5 py-1 text-[11px] font-bold">4 puntos nominales</span>
                <span className="text-xs text-text-light">Condición B (estabilidad temporal)</span>
              </div>
            </div>
          </div>

          <div className="bg-light-blue rounded-lg px-3.5 py-2.5 text-xs text-navy font-semibold flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Total: <strong>8 puntos de calibración</strong> — 4 temperatura + 4 humedad relativa
          </div>
          <ExtraPointsNotice>
            Podemos incluir puntos nominales adicionales dentro del alcance de cada magnitud — temperatura{' '}
            <strong>(10 – 40 °C)</strong> y humedad relativa <strong>(30 – 90 %rh)</strong> — con costo adicional. Indíquelo al momento de solicitar el servicio.
          </ExtraPointsNotice>
        </div>
        <div className="px-8 py-7 border-l border-brand-border bg-off-white max-[768px]:border-l-0 max-[768px]:border-t max-[768px]:border-t-brand-border">
          <div className="text-[11px] font-bold tracking-[1px] uppercase text-teal mb-4 flex items-center gap-1.5 before:content-[''] before:block before:w-4 before:h-0.5 before:bg-teal">
            Especificaciones técnicas
          </div>
          <div className="text-[11px] font-bold text-text-light uppercase tracking-[0.8px] mt-3.5 mb-1.5">Equipo patrón</div>
          <ul className="list-none flex flex-col gap-2 mt-1">
            <li className="flex items-start gap-2 text-[13px] text-text-mid leading-[1.5]">
              <CheckIcon />
              Patrón de referencia CEM TH-007 calibrado por laboratorio acreditado por un organismo de acreditación firmante del ILAC-MRA
            </li>
            <li className="flex items-start gap-2 text-[13px] text-text-mid leading-[1.5]">
              <CheckIcon />
              Cámara climática con control de temperatura y humedad relativa
            </li>
          </ul>
          <div className="text-[11px] font-bold text-text-light uppercase tracking-[0.8px] mt-3.5 mb-1.5">Criterios de aceptación</div>
          <div className="bg-[#FFF8E7] border border-[#FFE0A0] rounded-lg px-3.5 py-2.5 mt-2">
            <strong className="block text-xs text-[#7A4F00] font-bold mb-0.5">Condición A — Uniformidad y estabilidad</strong>
            <span className="block text-xs text-[#7A4F00]">Evalúa que la cámara mantiene condiciones homogéneas durante la medición (gradiente espacial y temporal)</span>
          </div>
          <div className="bg-[#FFF8E7] border border-[#FFE0A0] rounded-lg px-3.5 py-2.5 mt-2">
            <strong className="block text-xs text-[#7A4F00] font-bold mb-0.5">Condición B — Estabilidad temporal</strong>
            <span className="block text-xs text-[#7A4F00]">Evalúa la deriva del instrumento bajo calibración a lo largo del tiempo en cada punto nominal</span>
          </div>
          <div className="text-[11px] font-bold text-text-light uppercase tracking-[0.8px] mt-3.5 mb-1.5">Incertidumbre — fuentes evaluadas</div>
          <ul className="list-none flex flex-col gap-2 mt-1">
            {uncertaintySources.map((src) => (
              <li key={src} className="flex items-start gap-2 text-[13px] text-text-mid leading-[1.5]">
                <CheckIcon />
                {src}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
