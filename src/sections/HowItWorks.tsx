const steps = [
  {
    num: 1,
    title: 'Solicitud en línea',
    description: 'Diligencie el formulario de solicitud con los datos de su equipo y requerimientos específicos.',
  },
  {
    num: 2,
    title: 'Revisión técnica',
    description: 'Verificamos el método aplicable, trazabilidad de patrones, condiciones y viabilidad del servicio.',
  },
  {
    num: 3,
    title: 'Ejecución y registro',
    description: 'Personal autorizado ejecuta la calibración y registra todos los datos crudos en el software.',
  },
  {
    num: 4,
    title: 'Certificado de calibración',
    description: 'Entregamos certificado con resultados, incertidumbre de medición y declaración de conformidad.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-[90px] bg-white" id="proceso">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-teal text-[13px] font-bold tracking-[1.5px] uppercase mb-3 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-teal">
            Proceso de calibración
          </div>
          <h2 className="text-[38px] font-extrabold text-navy mb-4">Simple, ágil y completamente trazable</h2>
          <p className="text-[17px] text-text-light">Desde la solicitud hasta la entrega del certificado, cada paso está documentado y gestionado en nuestro sistema de información.</p>
        </div>
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6 mt-14 relative before:content-[''] before:absolute before:top-9 before:left-[12.5%] before:right-[12.5%] before:h-0.5 before:bg-[linear-gradient(90deg,#0096C7,#003B73)] before:z-0 max-[900px]:before:hidden">
          {steps.map((s) => (
            <div key={s.num} className="text-center relative z-[1]">
              <div className="w-[72px] h-[72px] rounded-full bg-navy text-white text-2xl font-extrabold font-display flex items-center justify-center mx-auto mb-5 border-4 border-white shadow-[0_0_0_2px_#0096C7]">
                {s.num}
              </div>
              <h4 className="text-base font-bold text-navy mb-2">{s.title}</h4>
              <p className="text-[13px] text-text-light">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
