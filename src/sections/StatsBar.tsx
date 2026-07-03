const stats = [
  { num: '3', label: 'Magnitudes calibradas' },
  { num: 'SI', label: 'Trazabilidad internacional' },
  { num: 'ILAC-MRA', label: 'Trazabilidad metrológica' },
  { num: 'ISO 17025', label: 'Sistema de gestión' },
]

export function StatsBar() {
  return (
    <section className="bg-off-white border-b border-brand-border py-7">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-4 gap-0 max-[900px]:grid-cols-2">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`text-center px-5 border-r border-brand-border last:border-r-0 ${idx === 1 ? 'max-[900px]:border-r-0' : ''}`}
            >
              <div className="text-[32px] font-extrabold text-navy font-display">{s.num}</div>
              <div className="text-[13px] text-text-light font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
