export type PolicyKey =
  | 'imparcialidad'
  | 'calidad'
  | 'postventa'
  | 'ingreso'
  | 'residuos'
  | 'sst'

export interface Policy {
  title: string
  code: string
  content: string
}

export const policies: Record<PolicyKey, Policy> = {
  imparcialidad: {
    title: 'Política de Imparcialidad, Confidencialidad e Independencia',
    code: 'LAB-PL-001 · Versión 001',
    content: `
      <div class="policy-code">📄 LAB-PL-001 · Laboratorio de Metrología Impormedical · Versión 001 · Oct. 2025</div>
      <h3>Compromiso con la imparcialidad</h3>
      <p>El Laboratorio de Metrología de Impormedical Equipos y Suministros Médicos S.A. se compromete a realizar todas sus actividades de calibración de forma imparcial, sin interferencia de presiones comerciales, financieras o de cualquier otra naturaleza que puedan comprometer la objetividad de los resultados.</p>
      <p>La Dirección del Laboratorio identifica y gestiona continuamente los riesgos que puedan afectar la imparcialidad, registrándolos en la Matriz de Riesgos y Oportunidades (LAB-FR-001) y estableciendo controles para mitigarlos.</p>
      <h3>Confidencialidad de la información</h3>
      <p>Toda la información proporcionada por los clientes, así como los resultados generados durante la prestación del servicio de calibración, se tratan como confidencial. El laboratorio garantiza que:</p>
      <ul>
        <li>La información del cliente únicamente es accedida por personal autorizado con usuario y contraseña individual.</li>
        <li>No se divulga información a terceros sin consentimiento expreso del cliente, salvo requerimiento legal.</li>
        <li>Los sistemas de información (Salesforce, Drive, Slack) están protegidos con controles de acceso por perfiles.</li>
        <li>La confidencialidad se mantiene durante 5 años después de terminada la relación contractual.</li>
      </ul>
      <h3>Independencia del personal</h3>
      <p>Todo el personal que actúe en nombre del laboratorio suscribe un "Compromiso de Imparcialidad, Confidencialidad e Independencia" (LAB-FR-008), el cual tiene carácter legalmente vinculante. El incumplimiento puede dar lugar a acciones disciplinarias, administrativas, civiles y penales.</p>
      <h3>Gestión de conflictos de interés</h3>
      <p>Cuando se identifique un conflicto de interés, el laboratorio aplica medidas proporcionales al riesgo:</p>
      <ul>
        <li>Cambio de personal en casos de riesgo alto por vínculos familiares o personales.</li>
        <li>Declaración formal de conflicto en casos limítrofes, con seguimiento por la Dirección.</li>
        <li>Cancelación del servicio si la imparcialidad no puede garantizarse.</li>
      </ul>
      <p>Esta política es de obligatorio cumplimiento para todo el personal interno y externo con acceso a las instalaciones, información o actividades del laboratorio.</p>
      <p style="margin-top:32px;font-size:13px;color:var(--text-light);">Elaborada por: Maria Teresa Ortiz · Aprobada por: Cindy Johana Fonseca · Dirección del Laboratorio</p>
    `,
  },
  calidad: {
    title: 'Política de Calidad',
    code: 'ES-PL-001 · Sistema de Gestión',
    content: `
      <div class="policy-code">📄 ES-PL-001 · Impormedical Equipos y Suministros Médicos S.A.</div>
      <h3>Compromiso con la calidad</h3>
      <p>Impormedical Equipos y Suministros Médicos S.A. y su Laboratorio de Metrología están comprometidos con la prestación de servicios de calibración que cumplan con los más altos estándares de exactitud, confiabilidad y trazabilidad metrológica.</p>
      <h3>Principios de calidad del laboratorio</h3>
      <ul>
        <li><strong>Competencia técnica:</strong> Solo personal competente, evaluado y autorizado formalmente por la Dirección del Laboratorio realiza actividades de calibración.</li>
        <li><strong>Métodos normalizados:</strong> Aplicamos únicamente métodos publicados por entidades referentes en metrología (OIML, CEM, DKD, JCGM).</li>
        <li><strong>Trazabilidad metrológica:</strong> Todos los resultados son trazables al Sistema Internacional de Unidades (SI) a través de cadenas ininterrumpidas de calibración.</li>
        <li><strong>Mejora continua:</strong> El sistema de gestión se revisa y mejora periódicamente mediante auditorías internas, revisiones por la Dirección y análisis de indicadores.</li>
        <li><strong>Satisfacción del cliente:</strong> Respondemos quejas y retroalimentación dentro de los tiempos comprometidos, buscando siempre superar las expectativas.</li>
      </ul>
      <h3>Sistema de gestión</h3>
      <p>El Laboratorio opera bajo los requisitos de la norma ISO/IEC 17025:2017 (opción A - sistema de gestión completo), con un sistema de gestión orientado a demostrar competencia, imparcialidad y operación coherente.</p>
      <p>Los documentos del sistema de gestión están disponibles en la plataforma Daruma y los registros en Salesforce, garantizando acceso controlado y trazabilidad completa.</p>
    `,
  },
  postventa: {
    title: 'Política de Postventa y Gestión de PQR',
    code: 'GT-PL-003 · LAB-PR-011',
    content: `
      <div class="policy-code">📄 GT-PL-003 / LAB-PR-011 · Laboratorio de Metrología Impormedical</div>
      <h3>Canales de atención</h3>
      <p>El Laboratorio de Metrología de Impormedical dispone de múltiples canales para recibir peticiones, quejas, reclamos y felicitaciones (PQRF):</p>
      <ul>
        <li><strong>Correo electrónico:</strong> servicioalcliente@impormedical.com.co</li>
        <li><strong>WhatsApp:</strong> +57 310 493 6998</li>
        <li><strong>Presencial:</strong> Carrera 32 No. 15-76, Palmira, Valle del Cauca</li>
        <li><strong>Formulario en línea:</strong> impormedical.my.site.com/solicitudserviciocalibracion</li>
      </ul>
      <h3>Tiempos de respuesta</h3>
      <ul>
        <li>Notificación de recepción de la queja: <strong>5 días hábiles</strong></li>
        <li>Respuesta formal completa: <strong>8 días hábiles</strong></li>
        <li>Respuesta cuando se requiere recalibración: <strong>15 días hábiles</strong></li>
        <li>Segunda instancia (apelaciones): <strong>10 días hábiles</strong> — dirigida directamente a la Dirección del Laboratorio</li>
      </ul>
      <h3>Proceso de gestión de quejas</h3>
      <p>Toda queja relacionada con servicios de calibración es registrada en el objeto "Casos" de Salesforce con número secuencial automático. El proceso incluye: recepción, validación, investigación, análisis de causa raíz, respuesta al cliente y acciones para evitar recurrencia.</p>
      <p>La revisión de la persona que trata la queja es independiente de quien prestó el servicio que la originó, garantizando imparcialidad en el análisis.</p>
      <h3>Satisfacción del cliente</h3>
      <p>El laboratorio realiza seguimiento semestral a la satisfacción del cliente mediante encuestas y análisis consolidado por la Dirección Técnica junto con el equipo de Experiencia de Producto.</p>
    `,
  },
  ingreso: {
    title: 'Política de Ingreso y Permanencia en Instalaciones',
    code: 'GT-PL-002 · Laboratorio de Metrología',
    content: `
      <div class="policy-code">📄 GT-PL-002 · Instalaciones del Laboratorio de Metrología · Palmira</div>
      <h3>Control de acceso</h3>
      <p>El acceso a las instalaciones del Laboratorio de Metrología de Impormedical está controlado para garantizar la integridad de las calibraciones, la seguridad de los equipos patrón y la confidencialidad de la información.</p>
      <h3>Personal autorizado</h3>
      <ul>
        <li>El personal propio del laboratorio accede mediante claves de seguridad individuales.</li>
        <li>Visitantes y personal externo deben tener autorización previa y registrarse en el objeto "Ingreso y salida de personal" de Salesforce mediante código QR.</li>
        <li>Todo visitante debe estar acompañado por personal autorizado (Gerencia General, Gerencias de Dirección o Gestión Administrativa).</li>
        <li>Se exceptúan del acompañamiento el personal de aseo y logística, bajo condiciones definidas.</li>
      </ul>
      <h3>Normas de comportamiento en el laboratorio</h3>
      <ul>
        <li>No ingresar alimentos ni bebidas a las áreas de calibración.</li>
        <li>Usar los elementos de protección personal definidos para cada área.</li>
        <li>No manipular equipos patrón ni ítems en calibración sin autorización expresa.</li>
        <li>Respetar la semaforización de áreas (cuarentena, aprobado, rechazado, calibrado).</li>
        <li>Mantener el orden y la limpieza conforme al programa ADM-PG-001.</li>
      </ul>
      <h3>Condiciones ambientales</h3>
      <p>Las instalaciones cuentan con sistemas de climatización para mantener las condiciones de temperatura y humedad requeridas por los procedimientos de calibración. En caso de desviaciones que comprometan la validez de los resultados, se suspenden las actividades y se activa el plan de contingencia (LAB-PR-003).</p>
    `,
  },
  residuos: {
    title: 'Política de Manejo de Residuos',
    code: 'GT-PL-004 · SST-PG-002',
    content: `
      <div class="policy-code">📄 GT-PL-004 / SST-PG-002 · Impormedical Equipos y Suministros Médicos S.A.</div>
      <h3>Compromiso ambiental</h3>
      <p>Impormedical y su Laboratorio de Metrología se comprometen a gestionar los residuos generados en las actividades de calibración de manera responsable, minimizando el impacto ambiental y cumpliendo con la normatividad ambiental vigente en Colombia.</p>
      <h3>Clasificación y separación de residuos</h3>
      <ul>
        <li><strong>Residuos ordinarios:</strong> Empaques, papeles no contaminados, materiales de oficina.</li>
        <li><strong>Residuos especiales:</strong> Baterías, elementos electrónicos en desuso, equipos de medición no aptos para reparación.</li>
        <li><strong>Residuos de riesgo biológico:</strong> Materiales que hayan tenido contacto con equipos médicos potencialmente contaminados.</li>
      </ul>
      <h3>Disposición final de equipos</h3>
      <p>Los equipos patrón y equipos de medición que llegan al fin de su vida útil o no son aptos para reparación se someten a disposición final conforme a la política GT-PL-004, utilizando gestores autorizados por las autoridades ambientales competentes.</p>
      <h3>Registro y trazabilidad</h3>
      <p>Las actividades de limpieza y gestión de residuos se registran en el formato ADM-FR-014 "Registro de limpieza y aseo" conforme al programa ADM-PG-001. El personal de aseo aplica el instructivo ADM-IN-001 "Actividades básicas y métodos de limpieza".</p>
      <p>Los residuos sólidos se gestionan según el programa SST-PG-002 "Manejo de residuos sólidos", coordinado por el área de Seguridad y Salud en el Trabajo.</p>
    `,
  },
  sst: {
    title: 'Política de Seguridad y Salud en el Trabajo',
    code: 'SST-PL-001 · SST-PL-002 · SST-PL-003',
    content: `
      <div class="policy-code">📄 SST-PL-001 / SST-PL-002 / SST-PL-003 · Impormedical</div>
      <h3>Compromiso con la seguridad laboral</h3>
      <p>Impormedical Equipos y Suministros Médicos S.A. se compromete a proporcionar un ambiente de trabajo seguro y saludable para todo el personal del Laboratorio de Metrología, previniendo lesiones, enfermedades laborales y condiciones inseguras.</p>
      <h3>Principios del Sistema de Gestión SST</h3>
      <ul>
        <li>Identificación, evaluación y control de peligros y riesgos laborales (SST-PR-008).</li>
        <li>Cumplimiento de la normatividad colombiana en Seguridad y Salud en el Trabajo.</li>
        <li>Participación activa del COPASST en inspecciones y análisis de condiciones.</li>
        <li>Realización de exámenes médicos ocupacionales de ingreso, periódicos y de egreso.</li>
        <li>Investigación y reporte oportuno de accidentes e incidentes de trabajo.</li>
      </ul>
      <h3>Política de prevención de alcohol, drogas y tabaquismo (SST-PL-002)</h3>
      <p>Se prohíbe el consumo, porte o distribución de alcohol, drogas o sustancias psicoactivas en las instalaciones del laboratorio. El incumplimiento constituye falta grave y puede dar lugar a la terminación del contrato.</p>
      <h3>Política de seguridad vial (SST-PL-003)</h3>
      <p>Todo desplazamiento realizado en nombre de la organización debe seguir las normas de tránsito vigentes. Se prohíbe el uso de dispositivos móviles mientras se conduce y se exige el uso de elementos de seguridad vial.</p>
      <h3>Protección del personal del laboratorio</h3>
      <p>El personal del laboratorio cuenta con elementos de protección personal (EPP) adecuados para las actividades de calibración. Los planes de emergencia y evacuación están definidos y socializados conforme al programa de gestión del riesgo del SG-SST.</p>
    `,
  },
}
