import { useApp } from '../context/AppContext'

export function QuejasPage() {
  const { showPage, showPolicy, openPqrsModal } = useApp()

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-[100] bg-navy border-b border-white/[0.08] shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[70px] gap-6">
          <a
            className="shrink-0 cursor-pointer"
            onClick={() => showPage('main')}
            aria-label="Impormedical · inicio"
          >
            <img src="/logo-im.svg" alt="Impormedical" className="h-10 w-auto block" />
          </a>
          <a
            href="https://impormedical.my.site.com/solicitudserviciocalibracion"
            target="_blank"
            rel="noreferrer"
            className="bg-orange text-white px-5 py-[9px] rounded-[7px] text-sm font-bold transition-all whitespace-nowrap hover:bg-orange-hover"
          >
            Solicitar calibración →
          </a>
        </div>
      </nav>

      <div className="bg-navy pt-12 pb-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 text-white/70 text-sm font-semibold cursor-pointer transition-colors bg-white/[0.08] border border-white/[0.12] px-4 py-2 rounded-lg mb-5 w-fit hover:text-white"
            onClick={() => showPage('main')}
          >
            ← Volver al sitio principal
          </div>
          <h1 className="text-[34px] font-extrabold text-white mb-2">
            Quejas y Retroalimentación de Partes Interesadas
          </h1>
          <div className="text-white/60 text-sm">
            LAB-PR-011 · Versión 002 · Laboratorio de Metrología Impormedical
          </div>
        </div>
      </div>

      <div className="py-[60px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="policy-content max-w-[760px]">
            <div className="policy-code">
              📄 LAB-PR-011 · Laboratorio de Metrología Impormedical · Versión 002 · Jul. 2026
            </div>

            <h3>Objetivo</h3>
            <p>
              Establecer la metodología para la recepción, validación, análisis, tratamiento, seguimiento
              y cierre de las quejas, así como para la recolección y análisis de la retroalimentación de
              clientes y partes interesadas, incluyendo la medición de la satisfacción del cliente,
              garantizando el cumplimiento de los objetivos del laboratorio, de la ISO/IEC 17025:2017 y de
              los principios de imparcialidad, confidencialidad e independencia.
            </p>

            <h3>Alcance</h3>
            <p>
              Este procedimiento aplica a todos los servicios de calibración ofrecidos por el Laboratorio de
              Metrología de Impormedical Equipos y Suministros Médicos S.A., incluyendo actividades técnicas
              y administrativas, así como a la gestión de la retroalimentación de clientes y partes
              interesadas relacionadas con los servicios prestados.
            </p>

            <h3>Responsables</h3>
            <ul>
              <li>
                <strong>Dirección del Laboratorio:</strong> garantizar la implementación, imparcialidad y
                eficacia del proceso de gestión de quejas y retroalimentación, asegurando la objetividad
                administrativa, técnica y documentada, sin conflictos de interés. Provee los recursos
                necesarios y evalúa semestralmente los resultados y tendencias como insumo de la revisión
                por la Dirección.
              </li>
              <li>
                <strong>Dirección Técnica del Laboratorio:</strong> asegurar el cumplimiento del
                procedimiento, garantizando la imparcialidad en la gestión de quejas y la aprobación de las
                decisiones finales, apoyar la validación e investigación, implementar las acciones definidas
                y entregar evidencias objetivas. Cuando haya participado directamente en la actividad que
                originó la queja, podrá aportar información y evidencias, pero no podrá realizar, revisar ni
                aprobar de manera independiente el resultado final comunicado al reclamante.
              </li>
              <li>
                <strong>Dirección de Experiencia de Producto – Servicio al Cliente:</strong> recibir,
                registrar, comunicar y coordinar el tratamiento de quejas y retroalimentación. Controla el
                envío, recepción y análisis de las encuestas de satisfacción, asegurando la trazabilidad de
                los envíos, respuestas y resultados obtenidos.
              </li>
              <li>
                <strong>Metrólogos:</strong> recibir y direccionar adecuadamente las quejas o
                retroalimentación recibidas y actuar con respeto, objetividad y confidencialidad frente al
                cliente.
              </li>
            </ul>

            <h3>Definiciones</h3>
            <ul>
              <li><strong>Cliente:</strong> persona u organización que podría recibir o que recibe un producto o un servicio destinado a esa persona u organización o requerido por ella (ISO 9000:2015).</li>
              <li><strong>Comunicación:</strong> proceso de relación interpersonal para coordinar acuerdos a través de escuchar, informar y comprender las necesidades y expectativas del cliente y/o las condiciones del servicio.</li>
              <li><strong>Imparcialidad:</strong> objetividad con respecto al resultado de una actividad de evaluación de la conformidad (ISO/IEC 17000:2020).</li>
              <li><strong>Laboratorio de metrología:</strong> organismo(s) evaluador(es) de la conformidad.</li>
              <li><strong>Quejoso:</strong> quien origina la queja por insatisfacción con el servicio prestado.</li>
              <li><strong>Parte interesada:</strong> persona u organización que puede afectar, verse afectada o percibirse como afectada por una decisión o actividad (ISO 9000:2015).</li>
              <li><strong>Queja:</strong> expresión de insatisfacción presentada por una persona u organización a un laboratorio, relacionada con las actividades o resultados de ese laboratorio, para la que se espera una respuesta (ISO/IEC 17025:2017).</li>
              <li><strong>Requisito especificado:</strong> necesidad o expectativa establecida (ISO/IEC 17000:2020).</li>
              <li><strong>Requisito legal:</strong> requisito obligatorio especificado por un organismo legislativo (ISO 9000:2015).</li>
              <li><strong>Requisito reglamentario:</strong> requisito obligatorio especificado por una autoridad que recibe el mandato de un órgano legislativo (ISO 9000:2015).</li>
              <li><strong>Retroalimentación:</strong> satisfacción del cliente, opiniones, comentarios y muestras de interés por un producto, un servicio o un proceso de tratamiento de quejas (ISO 9000:2015).</li>
              <li><strong>Satisfacción del cliente:</strong> percepción del cliente sobre el grado en que se han cumplido sus expectativas (ISO 9000:2015).</li>
            </ul>
            <p>
              <em>
                Nota: para efectos del registro operativo, las peticiones, quejas, reclamos y solicitudes
                podrán gestionarse bajo el flujo PQRS; sin embargo, para ISO/IEC 17025 se considerará queja
                la expresión de insatisfacción relacionada con las actividades o resultados del Laboratorio.
              </em>
            </p>

            <h3>Generalidades</h3>
            <p>
              Impormedical Equipos y Suministros Médicos S.A. pone a disposición de sus clientes y partes
              interesadas la información relacionada con el proceso de recepción, tratamiento y resolución
              de quejas a través de los acuerdos contractuales, cotizaciones y demás documentos aplicables
              al servicio. Dicha información describe de manera clara los canales de comunicación, las
              etapas del proceso, los tiempos de respuesta y los principios de la política de imparcialidad,
              confidencialidad e independencia (LAB-PL-001), en cumplimiento de los requisitos establecidos
              en la norma ISO/IEC 17025:2017.
            </p>
            <p>
              Esta descripción del proceso de recepción y tratamiento de quejas está disponible para
              cualquier parte interesada que la solicite, y podrá disponerse mediante los documentos
              contractuales, medios institucionales, la página web u otros mecanismos definidos por la
              organización.
            </p>
            <p>
              El Laboratorio busca de manera sistemática la retroalimentación positiva y negativa de sus
              clientes mediante encuestas de satisfacción u otros mecanismos definidos por la organización.
              La información obtenida es registrada, analizada y utilizada para identificar fortalezas,
              oportunidades de mejora, tendencias, riesgos, desviaciones o necesidades de acción.
            </p>
            <p>
              La retroalimentación negativa no será considerada automáticamente una queja. Cuando su
              contenido corresponda a una expresión de insatisfacción relacionada con las actividades o
              resultados del Laboratorio para la cual se espere una respuesta, se gestionará como queja
              conforme a lo establecido en este procedimiento.
            </p>

            <h3>Lineamientos para la gestión de quejas</h3>
            <ul>
              <li>El Laboratorio de Metrología es responsable de todas las decisiones adoptadas a lo largo del proceso de tratamiento de las quejas, en todos sus niveles, asegurando que sean objetivas, técnicamente fundamentadas y documentadas.</li>
              <li>El cliente podrá recibir notificaciones automáticas asociadas a los cambios de estado del caso: recepción de la queja, inicio de su gestión, avance del tratamiento, solución definida y cierre. Estas comunicaciones tienen carácter informativo y no reemplazan el oficio o respuesta formal de solución emitida por el Laboratorio.</li>
              <li>La parte interesada recibirá la notificación de recepción de la queja y el número de caso asignado en un plazo máximo de dos (2) días hábiles, contados a partir del día hábil siguiente a la recepción formal.</li>
              <li>Cuando se identifique un potencial conflicto de interés durante la gestión de una queja, el colaborador involucrado debe informar de manera inmediata a la Dirección del Laboratorio, con el fin de definir las acciones que garanticen la imparcialidad, objetividad e independencia del proceso.</li>
              <li>Cuando la queja esté relacionada con actividades ejecutadas, revisadas o aprobadas por la Dirección Técnica, los metrólogos u otro personal del Laboratorio, la revisión y aprobación de la respuesta será realizada por una persona competente que no haya participado en las actividades que la originaron. Cuando la Dirección Técnica haya estado involucrada, la revisión y aprobación será realizada por la Dirección del Laboratorio.</li>
              <li>Toda queja, independientemente del medio de recepción, será tratada conforme a la política de imparcialidad, confidencialidad e independencia (LAB-PL-001), garantizando que solo sea accesible para el personal autorizado y que se protejan los intereses de la parte interesada y del laboratorio.</li>
              <li>Todas las quejas se documentan en el sistema interno de gestión, donde se genera de forma automática un número único y secuencial de caso, independientemente del medio por el cual sean recibidas.</li>
              <li>Todas las quejas son analizadas para identificar riesgos, impactos potenciales o tendencias, con el fin de determinar la necesidad de controles adicionales o acciones específicas, de acuerdo con el procedimiento de gestión de riesgos y oportunidades (LAB-PR-022).</li>
              <li>Las peticiones, sugerencias y demás retroalimentaciones recibidas son analizadas para determinar su viabilidad técnica y operativa; independientemente de la decisión adoptada, la Dirección Técnica emite respuesta formal sobre la retroalimentación recibida.</li>
              <li>Semestralmente, la Dirección Técnica y la Dirección de Experiencia de Producto – Servicio al Cliente realizan una revisión consolidada de las quejas, reclamaciones y retroalimentaciones negativas, analizando recurrencia, causas, similitudes, tendencias, riesgos asociados, eficacia de las acciones y comportamiento de los indicadores «Tasa de reclamaciones» y «Tiempo de resolución». Los resultados son entrada para la Revisión por la Dirección (LAB-PR-006).</li>
              <li>Cuando se identifique repetitividad, tendencias negativas, incumplimiento de metas, riesgos para la validez de los resultados u oportunidades de mejora, se definen e implementan acciones conforme al procedimiento de acciones correctivas y de mejora (LAB-PR-021).</li>
            </ul>

            <h3>Canales de recepción</h3>
            <p>
              De acuerdo con la política de postventa GT-PL-003, el Laboratorio dispone de los siguientes
              canales formales para la recepción de quejas, que garantizan el acceso equitativo de los
              clientes y partes interesadas:
            </p>
            <ul>
              <li>Comunicación escrita vía correo electrónico a <strong>servicioalcliente@impormedical.com.co</strong>.</li>
              <li>A través del WhatsApp <strong>+57 310 4936998</strong>.</li>
              <li>Durante la visita a instalaciones realizada por alguno de los representantes autorizados.</li>
              <li>Mediante el <strong>formulario PQRSF</strong> disponible en este sitio web.</li>
            </ul>
            <p>
              Toda queja recibida por cualquiera de estos canales es registrada, trazada documentalmente y
              remitida oportunamente a la Dirección Técnica del Laboratorio para su validación, análisis,
              investigación y tratamiento. Como resultado, la Dirección Técnica emite una respuesta formal,
              técnicamente sustentada y documentada, comunicada al remitente a través de la Dirección de
              Experiencia de Producto – Servicio al Cliente.
            </p>
            <p>El registro de cada queja incluye, como mínimo y según aplique:</p>
            <ul>
              <li>Número del caso</li>
              <li>Nombre de la cuenta</li>
              <li>Número de la factura del cliente</li>
              <li>Tipo de cliente</li>
              <li>Observaciones</li>
              <li>Evidencia inicial</li>
              <li>Tipo de novedad</li>
              <li>Fecha y hora de apertura de la PQRS</li>
              <li>Producto y cantidad (aplica para producto interno)</li>
              <li>Fabricante (aplica para producto interno)</li>
              <li>Descripción de la queja</li>
            </ul>

            <h3>Tiempos de respuesta</h3>
            <ul>
              <li><strong>Dos (2) días hábiles:</strong> confirmación de recepción al cliente, informando el número único de registro asignado, contados a partir del día hábil siguiente a la recepción formal de la PQRS.</li>
              <li><strong>Ocho (8) días hábiles:</strong> respuesta formal al radicado de la PQRS, posteriores a su recepción.</li>
              <li><strong>Quince (15) días hábiles:</strong> cuando el tratamiento requiera recalibración del equipo, revisión técnica complementaria, corrección documental u otra actividad técnica adicional.</li>
              <li><strong>Diez (10) días hábiles:</strong> respuesta definitiva en segunda instancia.</li>
            </ul>

            <h3>Validación de la queja</h3>
            <p>
              La Dirección Técnica del Laboratorio realiza la validación inicial de la queja, en coordinación
              con el metrólogo o personal involucrado, con el fin de determinar si se encuentra relacionada
              con las actividades bajo el alcance del laboratorio.
            </p>
            <p>
              Durante esta etapa se revisa la información disponible y, de ser necesario, se solicitan a la
              parte interesada, a través de Servicio al Cliente, datos adicionales que permitan una decisión
              objetiva y fundamentada. Si se determina que la queja no está relacionada con las actividades
              del laboratorio, se informa formalmente al cliente y se da por finalizado el proceso, dejando
              evidencia documentada en el caso asignado.
            </p>
            <p>
              <em>
                Nota: el personal involucrado podrá aportar información o evidencias, pero no podrá tomar
                decisiones ni aprobar la respuesta cuando esté relacionado con los hechos objeto de la queja.
              </em>
            </p>

            <h3>Investigación y definición de acciones</h3>
            <p>
              Cuando se determina la procedencia de la queja, la Dirección Técnica dispone la investigación
              correspondiente, asegurando que el análisis, la evaluación y la toma de decisiones sean
              realizados por personal competente que no haya estado directamente involucrado en los hechos
              objeto de la reclamación, para preservar la imparcialidad, la independencia y la objetividad
              del proceso.
            </p>
            <p>
              La investigación incluye la revisión de registros del servicio, documentos técnicos,
              entrevistas y cualquier otra evidencia pertinente. Toda la información analizada se registra
              en el formato «General de informes» (LAB-FR-005) y se relaciona dentro del caso asignado,
              incluyendo fechas, códigos, versiones y responsables, asegurando la trazabilidad documental.
            </p>
            <p>
              Con base en los resultados se definen las acciones a implementar, proporcionales al impacto de
              la queja, considerando cuando aplique la declaratoria de trabajo no conforme (LAB-PR-020) y la
              generación de acciones correctivas o de mejora (LAB-PR-021). Estas acciones no son
              discriminatorias y son oportunas, objetivas, equitativas e imparciales para la parte
              interesada que interpuso la queja.
            </p>

            <h3>Seguimiento de la queja</h3>
            <p>
              El seguimiento a las acciones definidas es realizado por la Dirección de Experiencia de
              Producto – Servicio al Cliente y la Dirección Técnica del Laboratorio, verificando su
              cumplimiento dentro de los plazos establecidos. La evidencia se registra en el caso asignado,
              incluyendo fechas de avance, responsables, actividades ejecutadas, soportes, comunicaciones
              realizadas y estado del tratamiento.
            </p>
            <p>
              Para efectos del indicador «Tiempo de resolución» se registran la fecha de apertura de la
              queja, la fecha de acuse de recibo, la fecha de respuesta formal, la fecha de envío del oficio
              de solución y la fecha de cierre del caso. El tiempo de resolución se calcula con base en los
              días hábiles transcurridos entre la fecha de apertura y la fecha de cierre.
            </p>

            <h3>Verificación y cierre</h3>
            <p>
              El cierre de la queja se realiza una vez se ha verificado la implementación de las acciones
              definidas, se ha emitido y enviado al cliente la respuesta formal mediante oficio o correo, y
              se ha dejado evidencia completa del tratamiento en el caso asignado. Posteriormente el caso se
              actualiza al estado «Cerrado», generando, cuando aplique, la notificación automática de cierre
              y el envío de la encuesta de satisfacción.
            </p>
            <p>
              La no respuesta de la encuesta no impide el cierre del caso, siempre que exista evidencia de la
              solución formal y del tratamiento realizado.
            </p>

            <h3>Comunicación con la parte interesada</h3>
            <p>
              Las comunicaciones relacionadas con la recepción, avance, solución y cierre de las quejas son
              gestionadas por la Dirección de Experiencia de Producto – Servicio al Cliente, a través de los
              medios definidos por la organización.
            </p>
            <p>
              Las notificaciones automáticas asociadas a los cambios de estado del caso utilizan plantillas
              previamente revisadas y aprobadas por el Laboratorio. Tienen carácter informativo y permiten
              comunicar la recepción, gestión, avance, solución o cierre del caso; sin embargo, no reemplazan
              la respuesta formal de solución de la queja, la cual se realiza de forma manual.
            </p>
            <p>
              La evidencia de las notificaciones, el correo enviado, el oficio formal, las revisiones,
              aprobaciones y demás soportes de comunicación se conservan en el caso correspondiente,
              garantizando la trazabilidad documental del tratamiento.
            </p>

            <h3>Quejas de organismos de reconocimiento y autoridades competentes</h3>
            <p>
              Cuando se reciben comunicaciones o quejas provenientes de organismos que otorgan
              reconocimiento y/o autoridades competentes, la Dirección Técnica informa a la Dirección del
              Laboratorio y actúa conforme a este procedimiento, asegurando el cumplimiento de los plazos y
              requisitos establecidos por dichos organismos en sus documentos aplicables. En caso de
              requerimientos puntuales, se analiza la necesidad de implementar acciones adicionales.
            </p>
            <p>
              Cuando la queja proceda de autoridades competentes e implique demandas judiciales, activación
              de pólizas y/o sanciones contractuales, la validación se tramita directamente por la Dirección
              del Laboratorio con asesoría legal de un tercero.
            </p>
            <p>
              <em>
                Nota: independientemente del origen de la queja, se mantienen los controles de validación,
                investigación, trazabilidad, imparcialidad, revisión independiente de la respuesta y cierre
                definidos en este procedimiento, salvo que un requisito legal, reglamentario o del organismo
                competente establezca disposiciones adicionales.
              </em>
            </p>

            <h3>Respuesta en segunda instancia</h3>
            <p>
              Cuando el cliente o parte interesada manifieste por escrito su inconformidad frente a la
              respuesta emitida durante el tratamiento de la queja y solicite una nueva revisión, la
              comunicación será remitida a la Dirección del Laboratorio de Impormedical Equipos y Suministros
              Médicos S.A.
            </p>
            <p>
              La Dirección del Laboratorio tiene la autoridad y responsabilidad de tomar la decisión
              definitiva sobre la queja, apoyada en la consulta de una tercera parte con las competencias
              pertinentes de un experto técnico en caso de ser necesario, y dispone de máximo diez (10) días
              hábiles para dar una respuesta definitiva.
            </p>
            <p>
              Si al reclamante no le satisfacen las respuestas emitidas por la organización, podrá elevar su
              inconformidad a las entidades correspondientes, según sea el caso.
            </p>

            <h3>Retroalimentación del cliente</h3>
            <p>
              Las encuestas de satisfacción del cliente son elaboradas por la Dirección Técnica, aprobadas
              por la Dirección del Laboratorio y gestionadas por la Dirección de Experiencia de Producto –
              Servicio al Cliente, de acuerdo con el formato «Encuestas de satisfacción» (LAB-FR-027).
            </p>
            <p>
              La encuesta se envía una vez se ha comunicado formalmente al cliente el resultado final del
              tratamiento de la queja y se ha cerrado el caso correspondiente. La encuesta no reemplaza el
              oficio o respuesta formal de solución, ni constituye por sí misma evidencia del cierre técnico
              de la queja. Cuando la queja requiera actividades adicionales —recalibración, revisión técnica
              complementaria, corrección de certificado u otra acción posterior— la encuesta se envía una vez
              dichas actividades han sido ejecutadas.
            </p>
            <p>
              En el caso de clientes con contratos anuales de servicios del Laboratorio de Metrología, la
              encuesta de satisfacción se envía con periodicidad semestral, con el fin de evaluar la
              percepción del cliente frente al desempeño general del servicio, la oportunidad en la atención,
              la comunicación, el cumplimiento de las condiciones acordadas y la calidad del servicio
              prestado durante el periodo evaluado.
            </p>
            <p>
              La información recolectada se conserva garantizando la trazabilidad, confidencialidad,
              protección de datos personales y acceso únicamente al personal autorizado.
            </p>

            <h4>Escala de calificación</h4>
            <p>
              Las respuestas de las preguntas calificables del formato LAB-FR-027 se valoran mediante una
              escala de uno (1) a cinco (5):
            </p>
            <ul>
              <li><strong>5</strong> – Muy satisfecho / Excelente: se ha cumplido con los requisitos del cliente y se han superado las expectativas.</li>
              <li><strong>4</strong> – Satisfecho / Bueno: conforme con el servicio, pero no siente valor agregado.</li>
              <li><strong>3</strong> – Aceptable / Regular: no se cumplió con todos los requisitos establecidos.</li>
              <li><strong>2</strong> – Insatisfecho / Deficiente: insatisfacción que se puede manifestar por una queja.</li>
              <li><strong>1</strong> – Muy insatisfecho / Muy deficiente.</li>
            </ul>
            <p>
              Para cada pregunta o aspecto evaluado se calcula el porcentaje de satisfacción mediante:
            </p>
            <p>
              <strong>% de satisfacción = (Promedio de las calificaciones obtenidas / Puntaje máximo posible) × 100</strong>
            </p>
            <p>
              Donde el <em>puntaje obtenido</em> es la suma de las calificaciones válidas recibidas y el
              <em> puntaje máximo posible</em> es el número de respuestas válidas multiplicado por cinco (5).
              Esta metodología se aplica para evaluar el indicador «Satisfacción frente a la gestión de
              quejas», de acuerdo con lo definido en el manual de gestión LAB-MN-001.
            </p>
            <p>
              <em>
                Nota: las preguntas cerradas utilizan la escala definida en el formato LAB-FR-027. Cuando el
                formato contemple comentarios u observaciones abiertas, estos son analizados cualitativamente
                y no se incluyen en el cálculo numérico del indicador.
              </em>
            </p>
            <p>
              Los resultados de las encuestas, quejas, reclamaciones y retroalimentaciones se revisan
              semestralmente en el Comité de Experiencia de Producto, analizando satisfacción del cliente,
              comentarios recibidos, recurrencia de quejas, nivel de importancia, causas identificadas,
              tendencias, oportunidades de mejora, eficacia de las acciones implementadas y comportamiento de
              los indicadores «Satisfacción frente a la gestión de quejas», «Tasa de reclamaciones» y «Tiempo
              de resolución». Cuando se identifiquen desviaciones frente a las metas, tendencias negativas,
              reclamaciones recurrentes o tiempos de resolución superiores a los definidos, se establecen las
              acciones correspondientes conforme al procedimiento LAB-PR-021, y los resultados son entrada
              para la Revisión por la Dirección (LAB-PR-006).
            </p>

            <h3>Flujo para el tratamiento de quejas</h3>
            <div className="flow">
              <div className="flow-step">
                <div className="flow-num">1</div>
                <div className="flow-card">
                  <div className="flow-title">Inicio · Recepción de la queja</div>
                  <p>Recepción de la queja por correo electrónico, WhatsApp o durante visita realizada por un representante autorizado.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Experiencia de Producto – Servicio al Cliente</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada vez que se reciba una queja</span>
                    <span className="flow-chip"><b>Registro:</b> Caso en el sistema interno de gestión</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">2</div>
                <div className="flow-card">
                  <div className="flow-title">Registro de la queja</div>
                  <p>Se crea el caso con consecutivo único y se adjuntan evidencias e información del cliente.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Experiencia de Producto – Servicio al Cliente</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada caso</span>
                    <span className="flow-chip"><b>Registro:</b> Caso en el sistema interno de gestión</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">3</div>
                <div className="flow-card">
                  <div className="flow-title">Confirmación de recepción</div>
                  <p>Se confirma al reclamante la recepción de la queja y el número de caso, por correo electrónico o notificación automatizada.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Experiencia de Producto – Servicio al Cliente</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Dentro de los dos (2) días hábiles siguientes a la recepción formal</span>
                    <span className="flow-chip"><b>Registro:</b> Correo electrónico / Caso</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">4</div>
                <div className="flow-card">
                  <div className="flow-title">Validación de la queja</div>
                  <p>Se verifica si la queja corresponde a actividades o resultados bajo responsabilidad del Laboratorio.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Dirección Técnica del Laboratorio</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada caso</span>
                    <span className="flow-chip"><b>Registro:</b> Caso / Tarea</span>
                  </div>
                </div>
              </div>

              <div className="flow-step flow-decision">
                <div className="flow-num"><span>?</span></div>
                <div className="flow-card">
                  <div className="flow-title">¿Aplica al Laboratorio?</div>
                  <p>La Dirección Técnica decide sobre la procedencia de la queja.</p>
                  <div className="flow-branches">
                    <div className="flow-branch flow-branch-no">
                      <div className="flow-branch-label">✕ No</div>
                      <p>La Dirección Técnica documenta la justificación de la no procedencia, Servicio al Cliente comunica formalmente al reclamante la decisión y notifica el cierre. El proceso finaliza aquí.</p>
                    </div>
                    <div className="flow-branch flow-branch-yes">
                      <div className="flow-branch-label">✓ Sí</div>
                      <p>Continuamos con la investigación de la queja (pasos 6 a 14).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">6</div>
                <div className="flow-card">
                  <div className="flow-title">Investigación de la queja</div>
                  <p>Se recopila y verifica la información, y se analizan los hechos, causas e impacto del caso.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Dirección Técnica del Laboratorio</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada caso</span>
                    <span className="flow-chip"><b>Registro:</b> Caso / LAB-FR-005</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">7</div>
                <div className="flow-card">
                  <div className="flow-title">Evaluación de impacto</div>
                  <p>Si la situación puede afectar la validez de los resultados, se evalúa y, cuando aplique, se gestiona como trabajo no conforme según LAB-PR-020.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Dirección Técnica del Laboratorio</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cuando aplique</span>
                    <span className="flow-chip"><b>Registro:</b> Caso / Registro TNC, cuando aplique</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">8</div>
                <div className="flow-card">
                  <div className="flow-title">Definición de acciones</div>
                  <p>Se definen las acciones para resolver la queja y, cuando aplique, acción correctiva o de mejora según LAB-PR-021.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Dirección Técnica del Laboratorio</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada caso o cuando aplique</span>
                    <span className="flow-chip"><b>Registro:</b> Caso / Registro de acción correctiva o de mejora</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">9</div>
                <div className="flow-card">
                  <div className="flow-title">Seguimiento</div>
                  <p>Se verifica el cumplimiento de las acciones y, siempre que sea posible, se informa el avance al reclamante.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Experiencia de Producto – Servicio al Cliente / Dirección Técnica</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Hasta el cierre</span>
                    <span className="flow-chip"><b>Registro:</b> Caso / Comunicaciones y soportes</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">10</div>
                <div className="flow-card">
                  <div className="flow-title">Respuesta formal</div>
                  <p>Se consolida el resultado del análisis y se emite la respuesta formal al reclamante mediante oficio.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Dirección Técnica del Laboratorio</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Dentro del plazo establecido (8 días hábiles, o hasta 15 días hábiles cuando aplique)</span>
                    <span className="flow-chip"><b>Registro:</b> Caso / Oficio de respuesta</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">11</div>
                <div className="flow-card">
                  <div className="flow-title">Revisión y aprobación independiente</div>
                  <p>La respuesta es revisada y aprobada por una persona competente no involucrada en la actividad que originó la queja. Cuando la Dirección Técnica esté involucrada, la aprobación será realizada por la Dirección del Laboratorio.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Dirección Técnica / Dirección del Laboratorio</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada caso</span>
                    <span className="flow-chip"><b>Registro:</b> Caso en el sistema interno de gestión</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">12</div>
                <div className="flow-card">
                  <div className="flow-title">Comunicación del resultado</div>
                  <p>Se comunica formalmente al reclamante el resultado del tratamiento de la queja mediante correo electrónico.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Experiencia de Producto – Servicio al Cliente</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada caso</span>
                    <span className="flow-chip"><b>Registro:</b> Correo electrónico / Caso</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">13</div>
                <div className="flow-card">
                  <div className="flow-title">Verificación y cierre</div>
                  <p>Se verifica la ejecución de las acciones, la comunicación del resultado y los registros; se notifica el cierre y se actualiza el caso a estado «Cerrado».</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Experiencia de Producto – Servicio al Cliente / Dirección Técnica</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Cada caso</span>
                    <span className="flow-chip"><b>Registro:</b> Caso en el sistema interno de gestión</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-num">14</div>
                <div className="flow-card">
                  <div className="flow-title">Encuesta de satisfacción</div>
                  <p>Posterior al cierre del caso, se envía de forma sistemática la encuesta LAB-FR-027 al reclamante para conocer su percepción sobre la gestión de la queja.</p>
                  <div className="flow-meta">
                    <span className="flow-chip"><b>Responsable:</b> Experiencia de Producto – Servicio al Cliente</span>
                    <span className="flow-chip"><b>Frecuencia:</b> Posterior al cierre de cada queja</span>
                    <span className="flow-chip"><b>Registro:</b> Encuesta / Caso</span>
                  </div>
                </div>
              </div>

              <div className="flow-step">
                <div className="flow-end">🏁 Fin · Caso cerrado y registros disponibles para análisis y mejora</div>
              </div>
            </div>

            <h3>Documentos asociados</h3>
            <ul>
              <li><strong>GT-PL-003</strong> Postventa</li>
              <li><strong>LAB-PR-021</strong> Acciones correctivas y de mejora</li>
              <li><strong>LAB-PR-020</strong> Gestión de trabajo no conforme</li>
              <li><strong>LAB-PR-022</strong> Gestión de riesgos y oportunidades</li>
              <li><strong>LAB-PL-001</strong> Imparcialidad, confidencialidad e independencia</li>
              <li><strong>LAB-PR-006</strong> Revisión por la Dirección</li>
              <li><strong>LAB-FR-005</strong> General de informes</li>
              <li><strong>LAB-FR-027</strong> Encuestas de satisfacción</li>
            </ul>

            <h3>Control de cambios</h3>
            <ul>
              <li>
                <strong>Versión 001 · 31/OCT/2025:</strong> elaboración del documento. Responsable: Dirección
                Técnica del Laboratorio.
              </li>
              <li>
                <strong>Versión 002 · 06/JUL/2026:</strong> se actualiza integralmente el procedimiento para
                fortalecer el cumplimiento de los numerales 7.9 y 8.6.2 de la ISO/IEC 17025:2017. Se precisan
                las etapas de validación, investigación, seguimiento, revisión independiente, comunicación y
                cierre; se incluye el flujo de tratamiento de quejas; se ajustan el envío, seguimiento,
                metodología de calificación y análisis de las encuestas de satisfacción. Responsable:
                Dirección Técnica del Laboratorio.
              </li>
            </ul>

            <div className="not-prose mt-10 rounded-xl border border-brand-border bg-navy/[0.03] p-6">
              <h4 className="text-navy text-lg font-bold mb-2">
                ¿Desea radicar una queja o dejarnos su retroalimentación?
              </h4>
              <p className="text-text-mid text-sm mb-4">
                Diligencie el formulario PQRSF y recibirá un número de radicado para el seguimiento de su
                caso. También puede escribirnos a servicioalcliente@impormedical.com.co o al WhatsApp
                +57 310 4936998.
              </p>
              <button
                type="button"
                onClick={openPqrsModal}
                className="bg-orange text-white px-5 py-[11px] rounded-[7px] text-sm font-bold transition-all hover:bg-orange-hover cursor-pointer"
              >
                📋 Radicar PQRSF
              </button>
            </div>

            <p style={{ marginTop: '32px', fontSize: '13px', color: 'var(--text-light)' }}>
              Elaborado por: Valeria Parada Huertas · Revisado por: Maria Teresa Ortiz Ortiz · Aprobado por:
              Cindy Fonseca, Dirección del Laboratorio. Procedimiento alineado con la norma ISO/IEC
              17025:2017, numerales 7.9 y 8.6.2. Ver también la{' '}
              <a
                onClick={() => showPolicy('imparcialidad')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                política de imparcialidad, confidencialidad e independencia
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-navy-dark text-white/70 pt-14 pb-7">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-3">
            <div className="text-[13px] text-white/40">
              © 2026 <span className="text-white/60">Impormedical Equipos y Suministros Médicos S.A.</span> · NIT 900261089-9
            </div>
            <div>
              <a
                onClick={() => showPage('main')}
                className="text-white/60 text-sm cursor-pointer hover:text-teal-light"
              >
                ← Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
