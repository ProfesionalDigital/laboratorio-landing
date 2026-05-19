import type { ReactNode } from 'react'

export function ExtraPointsNotice({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3.5 bg-[linear-gradient(135deg,#EAF3FB,#F4F8FC)] border-[1.5px] border-dashed border-teal rounded-[10px] px-4 py-3 flex items-start gap-2.5">
      <svg
        className="shrink-0 mt-0.5 text-teal"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <div>
        <strong className="block text-xs font-bold text-navy mb-[3px]">¿Necesita puntos adicionales?</strong>
        <span className="block text-xs text-text-mid leading-[1.55]">{children}</span>
      </div>
    </div>
  )
}
