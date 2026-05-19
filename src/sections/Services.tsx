import { TensiometroCard } from './services/TensiometroCard'
import { TermometroCard } from './services/TermometroCard'
import { TermohigrometroCard } from './services/TermohigrometroCard'

export function Services() {
  return (
    <section className="py-[90px] bg-white" id="servicios">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-teal text-[13px] font-bold tracking-[1.5px] uppercase mb-3 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-teal">
            Servicios de calibración
          </div>
          <h2 className="text-[38px] font-extrabold text-navy mb-4">Precisión en cada medición</h2>
          <p className="text-[17px] text-text-light">Calibramos con métodos normalizados internacionalmente y generamos certificados con estimación de incertidumbre conforme a la GUM.</p>
        </div>
        <div className="flex flex-col gap-7">
          <TensiometroCard />
          <TermometroCard />
          <TermohigrometroCard />
        </div>
      </div>
    </section>
  )
}
