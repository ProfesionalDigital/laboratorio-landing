import { CheckIcon } from './CheckIcon'
import { ExtraPointsNotice } from './ExtraPointsNotice'

interface PointRow {
  dotClass: 'key' | 'mid' | 'repeat'
  label: string
  value: string
  description: string
}

const points: PointRow[] = [
  { dotClass: 'key', label: 'PRE', value: 'Precarga', description: '1 ciclo hasta presión máxima y descarga — previo a la secuencia' },
  { dotClass: 'key', label: 'P1', value: '0 mmHg', description: 'Punto cero (verificación)' },
  { dotClass: 'mid', label: 'P2', value: '50 mmHg', description: 'Serie ascendente ↑ y descendente ↓' },
  { dotClass: 'mid', label: 'P3', value: '100 mmHg', description: 'Serie ascendente ↑ y descendente ↓' },
  { dotClass: 'mid', label: 'P4', value: '150 mmHg', description: 'Serie ascendente ↑ y descendente ↓' },
  { dotClass: 'mid', label: 'P5', value: '200 mmHg', description: 'Serie ascendente ↑ y descendente ↓' },
  { dotClass: 'mid', label: 'P6', value: '250 mmHg', description: 'Serie ascendente ↑ y descendente ↓' },
  { dotClass: 'key', label: 'P7', value: '280 / 290 / 300 mmHg', description: 'Punto máximo — aneroides: 280 · digitales: 290' },
]

const uncertaintySources = [
  'Patrón de referencia (calibrado por laboratorio acreditado por un organismo de acreditación firmante del ILAC-MRA)',
  'Deriva entre calibraciones del patrón',
  'Histéresis (diferencia ascendente/descendente)',
  'Resolución del patrón',
  'Resolución del instrumento bajo calibración',
]

const dotClasses: Record<PointRow['dotClass'], string> = {
  key: 'bg-navy text-white',
  mid: 'bg-light-blue text-navy border-2 border-navy',
  repeat: 'bg-[#FFF3CD] text-[#856404] border-2 border-orange',
}

export function TensiometroCard() {
  return (
    <div className="border border-brand-border rounded-[20px] overflow-hidden transition-all shadow-brand-sm hover:border-teal hover:shadow-brand-lg">
      <div className="bg-navy px-8 py-6 flex items-center gap-5 max-[768px]:flex-wrap">
        <div className="w-[52px] h-[52px] rounded-[14px] bg-white/[0.12] flex items-center justify-center shrink-0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
            <path d="M3 3v18h18" />
            <path d="M18 12L12 6 6 12" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-[22px] font-extrabold text-white mb-1">Esfigmomanómetros / Tensiómetros</h3>
          <p className="text-sm text-white/65">Calibración de manómetros aneroides y digitales para medición de presión arterial · Método DKD-R 6-1 Secuencia C</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-[10px] font-bold text-white/50 uppercase tracking-[1.2px]">Alcance de la magnitud</div>
          <div className="flex gap-2 flex-wrap justify-end">
            <span className="bg-orange text-white px-4 py-1.5 rounded-[20px] text-sm font-extrabold whitespace-nowrap shadow-[0_2px_8px_rgba(232,146,10,0.4)] tracking-[0.3px]">0 – 300 mmHg</span>
            <span className="bg-white/[0.12] border border-white/20 text-white/85 px-3 py-[5px] rounded-[20px] text-xs font-semibold whitespace-nowrap">DKD-R 6-1</span>
            <span className="bg-white/[0.12] border border-white/20 text-white/85 px-3 py-[5px] rounded-[20px] text-xs font-semibold whitespace-nowrap">OIML R148-1 / R149-1</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-[768px]:grid-cols-1">
        <div className="px-8 py-7">
          <div className="text-[11px] font-bold tracking-[1px] uppercase text-teal mb-4 flex items-center gap-1.5 before:content-[''] before:block before:w-4 before:h-0.5 before:bg-teal">
            Secuencia de puntos nominales
          </div>
          <div className="flex flex-col gap-1.5">
            {points.map((p, idx) => (
              <div key={p.label}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[11px] font-extrabold ${dotClasses[p.dotClass]}`}>
                    {p.label}
                  </div>
                  <div className="text-sm font-bold text-navy min-w-[80px]">{p.value}</div>
                  <div className="text-xs text-text-light">{p.description}</div>
                </div>
                {idx < points.length - 1 && <div className="w-0.5 h-3.5 bg-brand-border ml-[15px]" />}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-light-blue rounded-lg px-3 py-2 mt-2.5">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-navy">↑ Ascendente</span>
            <span className="text-brand-border text-base">+</span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-navy">↓ Descendente</span>
            <span className="text-xs text-text-light ml-2">por cada punto nominal (P2 – P7)</span>
          </div>
          <ExtraPointsNotice>
            Podemos incluir puntos nominales adicionales dentro del alcance de la magnitud{' '}
            <strong>(0 – 300 mmHg)</strong> con costo adicional. Indíquelo al momento de solicitar el servicio.
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
              Controlador de presión Fluke 700G05 (rango bajo) y Fluke 700G06 (rango alto)
            </li>
          </ul>
          <div className="text-[11px] font-bold text-text-light uppercase tracking-[0.8px] mt-3.5 mb-1.5">Criterios de conformidad</div>
          <div className="bg-[#FFF8E7] border border-[#FFE0A0] rounded-lg px-3.5 py-2.5 mt-2">
            <strong className="block text-xs text-[#7A4F00] font-bold mb-0.5">Aneroides (OIML R148-1)</strong>
            <span className="block text-xs text-[#7A4F00]">Error máximo permitido: ±3 mmHg o ±2% de la lectura, el mayor de los dos</span>
          </div>
          <div className="bg-[#FFF8E7] border border-[#FFE0A0] rounded-lg px-3.5 py-2.5 mt-2">
            <strong className="block text-xs text-[#7A4F00] font-bold mb-0.5">Digitales (OIML R149-1)</strong>
            <span className="block text-xs text-[#7A4F00]">Error máximo permitido: ±3 mmHg o ±2% de la lectura, el mayor de los dos</span>
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
