export type Roadmap = {
  block: number;
  title: string;
  duration: string;
  difficulty: string;
  education: {
    title: string;
    educational: string[];
    details: string;
  };
  base: string[];
  labs: string[];
  certPath: string[];
  firstJob: string;
  firstJobNote: string;
};

export const roadmaps: Roadmap[] = [
  {
    block: 1,
    title: "Roadmap — Operaciones de Defensa y Primera Línea",
    duration: "9-14 meses con 15h/semana; 18-30 meses si se compagina con FP o trabajo actual.",
    difficulty: "Accesible. Es la vía de entrada más realista, pero exige base sólida y tolerancia a turnos.",
    education: {
      title: "Vías académicas opcionales en España",
      educational: [
        "ASIR aporta contexto en sistemas, redes y servicios. Útil si partes completamente de cero.",
        "Cursos de especialización en ciberseguridad (post-FP) pueden ayudar a estructurar el conocimiento de forma guiada.",
        "Grados o másteres no son requisito para SOC N1; aportan valor a largo plazo si apuntas a management o sector público.",
      ],
      details: "La formación reglada en España ayuda a estructurar conocimientos y pasar primeros filtros, pero no sustituye la soltura real con SIEM, análisis de logs y comprensión de alertas.",
    },
    base: [
      "Networking: OSI, TCP/IP, DNS, HTTP/S, VPN. Entender tráfico de red y lectura fluida de PCAP.",
      "Sistemas Operativos: Windows Internals (procesos, servicios, registro, Event Logs) y Linux (permisos, bash, systemd, logs).",
      "Identidad: Conceptos de Active Directory, LDAP, Kerberos y MFA.",
      "Seguridad Operativa: Framework MITRE ATT&CK, Cyber Kill Chain, diferencia entre IoC e IoA.",
      "Inglés Técnico: Nivel B2 funcional obligatorio para documentar tickets y operar herramientas comerciales.",
    ],
    labs: [
      "Desplegar un mini-SOC local: Elastic SIEM o Wazuh + Sysmon en Windows. Generar tráfico atacante y documentar alertas.",
      "Plataformas de entrenamiento guiado: Completar el path 'SOC Level 1' en TryHackMe.",
      "Simulación de incidentes: Analizar 15-20 alertas en plataformas como LetsDefend o BlueTeamLabs Online.",
      "Investigación realista: Resolver el dataset 'Splunk Boss of the SOC' y redactar un timeline del incidente.",
    ],
    certPath: [
      "CompTIA Security+: Útil si necesitas pasar el primer filtro de RR.HH. en consultoras (no es suficiente por sí sola).",
      "Microsoft SC-200: Alta empleabilidad en España por la enorme cuota de mercado de Sentinel/Defender.",
      "BTL1 (Blue Team Level 1): Certificación práctica; aporta mucho más valor técnico real que opciones tipo test.",
      "CySA+ / BTL2: Tras 12-18 meses de experiencia, para dar el salto a SOC N2, EDR o SIEM Engineer.",
    ],
    firstJob: "Analista SOC N1 / Técnico de Monitorización L1",
    firstJobNote: "Target: MSSPs e integradores (ej. Telefónica Tech, NTT Data, Accenture, S2 Grupo). Estrategia: entrar aceptando turnos (24x7) para ganar experiencia real. Objetivo: salir a N2 o Threat Hunting en máximo 18-24 meses para evitar el estancamiento.",
  },
  {
    block: 2,
    title: "Roadmap — Identidad, Nube e Infraestructura Crítica",
    duration: "12-24 meses si ya tienes base Sysadmin/DevOps; +36 meses si partes de cero.",
    difficulty: "Media-Alta. No se recomienda entrar directamente sin experiencia previa en IT tradicional.",
    education: {
      title: "Vías académicas opcionales en España",
      educational: [
        "ASIR es una buena rampa de lanzamiento si se complementa con AWS/Azure y scripting real.",
        "DAM/DAW suma valor si tu objetivo es Cloud Security enfocado a automatización, Terraform y APIs.",
        "Ingenierías (Industrial/Telecomunicaciones) aportan contexto clave para la seguridad OT/ICS.",
      ],
      details: "En España este bloque contrata por experiencia demostrable: sysadmin, redes, soporte AD o DevOps. La vía académica suma, pero el salto lo garantizan proyectos cloud sólidos y certificaciones técnicas.",
    },
    base: [
      "Sistemas y Redes: Linux server avanzado, Windows Server, DNS, PKI y arquitecturas de red.",
      "Identidad Corporativa: Active Directory, Kerberos, LDAP, RBAC y ciclo de vida de usuarios.",
      "Identidad Moderna y Cloud: OAuth2, OIDC, SAML, SCIM, federation y fundamentos Zero Trust.",
      "Cloud Foundations: IAM cloud, VPCs, grupos de seguridad, cifrado (KMS), serverless y storage.",
      "Automatización (IaC): Python o Bash, Terraform básico, lectura de JSON/YAML.",
    ],
    labs: [
      "Arquitectura Cloud Segura: Desplegar en AWS/Azure una landing zone con IAM (mínimo privilegio), VPCs aisladas, logging y alertas.",
      "Despliegue IaC: Usar Terraform para levantar infraestructura y tfsec/checkov para validarla antes del despliegue.",
      "Laboratorio AD local: Montar un bosque AD, configurar GPOs, entender delegación y auditar permisos.",
      "Integración SSO: Conectar una aplicación de prueba con Auth0 o Entra ID usando SAML/OIDC.",
    ],
    certPath: [
      "Azure AZ-900 / AWS Cloud Practitioner: Solo si partes de cero, para entender vocabulario y servicios base.",
      "Azure AZ-500 / AWS Security Specialty: Alto valor en España. Demuestran conocimiento específico de seguridad en la plataforma.",
      "SC-300 (Identity Azure): Muy demandada si quieres enfocar tu carrera a IAM / PAM.",
      "CCSP: Opcional, para perfiles senior. Como primera certificación tiene bajo retorno operativo.",
    ],
    firstJob: "Cloud Security Junior, IAM Analyst Junior o Técnico de Sistemas Seguros",
    firstJobNote: "Target: Consultoras IT, integradores cloud (NTT, Capgemini) y departamentos de sistemas de cliente final. Estrategia: es muy difícil entrar a Cloud Security puro sin haber sido antes Sysadmin. Posiciónate como perfil de infraestructura que aplica seguridad por diseño.",
  },
  {
    block: 3,
    title: "Roadmap — Seguridad Ofensiva y Red Team",
    duration: "18-30 meses para un pentest sólido; 3-6 años para Red Team u operaciones avanzadas.",
    difficulty: "Alta. El mercado junior está altamente saturado; la diferenciación es obligatoria.",
    education: {
      title: "Vías académicas opcionales en España",
      educational: [
        "ASIR u otros CFGS aportan base de redes y sistemas, indispensable para no ser un mero ejecutor de herramientas.",
        "DAM/DAW otorgan ventaja competitiva masiva si te especializas en Web/App Pentesting o AppSec.",
        "Másteres ofensivos pueden aportar networking y estructura, pero revisa si incluyen labs reales y preparación OSCP.",
      ],
      details: "En la ofensiva española manda la demostración visible de impacto: OSCP, repositorios GitHub, CTFs locales (RootedCON), CVEs y reportes redactados. La titulación no convalida la falta de portfolio.",
    },
    base: [
      "Redes Ofensivas: Protocolos (TCP/IP, HTTP/S, SMB), routing, proxying, tunneling e intercepción de tráfico.",
      "Sistemas Internals: Linux (privesc, permisos, SUID) y Windows Internals (procesos, LSASS, UAC).",
      "Web y APIs: OWASP Top 10, mecanismos de auth (JWT, OAuth), inyecciones, deserialización y lógica de negocio.",
      "Scripting y automatización: Soltura con Python y Bash para adaptar exploits y no depender ciegamente de herramientas de terceros.",
      "OPSEC y Metodología: Reglas de enganche (RoE), explotación segura, evaluación de impacto real y reporting ejecutivo.",
    ],
    labs: [
      "Entornos guiados Web: Completar PortSwigger Web Security Academy (imprescindible para entender web/API moderna).",
      "Máquinas vulnerables: Resolver 50+ máquinas en HackTheBox / Proving Grounds enfocadas a escalada de privilegios y AD.",
      "Active Directory: Desplegar y comprometer un entorno AD con metodologías modernas (BloodHound, Impacket, Kerberoasting).",
      "Portfolio de informes: Redactar al menos 3 informes profesionales sobre laboratorios completados. El entregable es el informe, no la captura del shell.",
    ],
    certPath: [
      "eJPT / PNPT / CPTS: Excelentes para ganar metodología estructurada, aunque tienen menor tracción HR que OSCP.",
      "OSCP: Sigue siendo el filtro absoluto en España para entrar en consultoras ofensivas. Demuestra tenacidad técnica.",
      "Burp Suite Certified Practitioner / OSWE: Diferenciadores críticos si te especializas en Web y APIs.",
      "CRTO / OSEP: Únicamente para dar el salto a Red Team avanzado cuando ya dominas pentesting interno y AD.",
    ],
    firstJob: "Pentester Junior, Web/API Pentester Junior o rol ofensivo en VM",
    firstJobNote: "Target: Consultoras especializadas (Tarlogic, S21Sec, Deloitte, EY). Estrategia: El acceso directo es duro; destácate con tu GitHub, escribiendo un buen informe de prueba técnica y haciendo networking en CONs locales. VM es una puerta lateral excelente para conocer redes antes de atacarlas.",
  },
  {
    block: 4,
    title: "Roadmap — DFIR, Inteligencia y Gestión de Exposición",
    duration: "12-24 meses como transición desde SOC/VM; 3-5 años para niveles de respuesta experta.",
    difficulty: "Media-Alta. Exige método riguroso, capacidad analítica y comunicación bajo presión.",
    education: {
      title: "Vías académicas opcionales en España",
      educational: [
        "ASIR aporta conocimientos clave sobre sistemas de archivos, procesos y servicios que son la materia prima del forense.",
        "Grados en Informática o Criminología Tecnológica pueden sumar contexto metodológico para investigación y cadena de custodia.",
        "Formación de INCIBE o CCN-CERT ofrece contexto directo sobre la gestión de crisis y amenazas en España.",
      ],
      details: "A estos roles rara vez se entra desde cero. Vienen alimentados por analistas de SOC, administradores EDR o consultores de riesgo técnico. La universidad ordena conceptos; el valor diferencial es escribir un buen timeline de incidente.",
    },
    base: [
      "Artefactos Forenses (Windows): Event Logs, Sysmon, Registro, Prefetch, Amcache, MFT y memoria RAM.",
      "Respuesta a Incidentes: Ciclo PICERL (Preparación, Identificación, Contención, Erradicación, Recuperación, Lecciones).",
      "Inteligencia de Amenazas (CTI): Consumo de feeds, ciclo de inteligencia, TTPs, framework MITRE ATT&CK.",
      "Redes y Logs: Análisis de tráfico (PCAP), telemetría EDR, firewalls, DNS y lateral movement.",
      "Exposición y Vulnerabilidades: Priorización basada en contexto real (EPSS, KEV, activos críticos) frente a CVSS puro.",
    ],
    labs: [
      "Casos Forenses: Resolver incidentes en CyberDefenders o BlueTeamLabs documentando la línea de tiempo (timeline).",
      "Colección y Triage: Desplegar Velociraptor o KAPE en entorno local, extraer y analizar artefactos clave.",
      "Inteligencia Accionable: Redactar un reporte CTI técnico y otro ejecutivo sobre una amenaza reciente (ej. ransomware).",
      "Gestión de Exposición: Construir un panel o script que cruce un escaneo de Nessus/Qualys con datos de EPSS y KEV para priorizar.",
    ],
    certPath: [
      "SC-200 / BTL1: Sólida base si transicionas desde monitorización en un SOC.",
      "BTL2 / GCDA: Excelente relación calidad-precio para habilidades de respuesta e investigación técnica.",
      "GCIH / GCFA (SANS): El Gold Standard internacional en DFIR, pero prohibitivos ($8K). Suelen ser financiados por la empresa.",
      "Certificaciones Qualys/Tenable: Solo relevantes si enfocas la carrera directamente hacia Vulnerability Management.",
    ],
    firstJob: "SOC N2, Vulnerability Management Specialist o Analista DFIR/CTI Junior",
    firstJobNote: "Target: Equipos internos de grandes corporaciones (Banca, Energía) o CSIRT/CERT en integradores. Estrategia: Entrar directo a DFIR es raro; demuestra capacidad analítica desde SOC N2 o liderando el programa de parcheo (VM), y desde ahí pivota a respuesta o inteligencia.",
  },
  {
    block: 5,
    title: "Roadmap — Ingeniería, Desarrollo Seguro, IA y Arquitectura",
    duration: "12-18 meses si ya eres desarrollador; 24-36 meses si vienes de IT tradicional.",
    difficulty: "Alta. Combina la complejidad del desarrollo de software con la ingeniería de seguridad.",
    education: {
      title: "Vías académicas opcionales en España",
      educational: [
        "DAM/DAW es una de las mejores rampas de lanzamiento si te quieres enfocar en automatización, pipelines o AppSec.",
        "Ingeniería Informática aporta fundamentos críticos de arquitectura de software, bases de datos y sistemas distribuidos.",
        "Especializaciones en IA o másteres DevSecOps aceleran la adopción de herramientas específicas y marcos de desarrollo seguro.",
      ],
      details: "Este bloque prioriza el código. En España, demostrar que sabes levantar un pipeline seguro en GitHub Actions o auditar un pull request cuenta mucho más que el currículum puramente académico.",
    },
    base: [
      "Desarrollo de Software: Fluidez en lenguajes modernos (Python, Go, Java, TypeScript), Git y APIs.",
      "DevOps: Linux, contenedores (Docker), fundamentos de Kubernetes, CI/CD, IaC y observabilidad.",
      "AppSec: OWASP Top 10, Threat Modeling (STRIDE), autenticación segura y gestión de secretos.",
      "Pipelines Seguros: Integración de herramientas SAST, SCA y DAST en el ciclo de integración continua.",
      "Seguridad AI/Cloud: Modelo de responsabilidad compartida, OPA/Kyverno para K8s y OWASP LLM Top 10.",
    ],
    labs: [
      "Pipeline Seguro: Configurar GitHub Actions/GitLab CI integrando Semgrep (SAST) y Trivy (SCA/Containers), rompiendo la build ante fallos críticos.",
      "Secure Code Review: Auditar aplicaciones intencionadamente vulnerables y proponer/implementar los parches exactos.",
      "Infraestructura inmutable: Escribir manifiestos Terraform/K8s seguros desde el diseño, escaneados con Checkov.",
      "Seguridad LLM: Desplegar un modelo local (Ollama) y vulnerarlo documentadamente evaluando prompt injection y mitigaciones.",
    ],
    certPath: [
      "Certified DevSecOps Professional: Curso muy práctico y valorado para aprender la integración real de herramientas.",
      "CKS (Certified Kubernetes Security Specialist): Imprescindible si la arquitectura de la empresa está basada en microservicios.",
      "OSWE / CSSLP: OSWE para un enfoque más profundo en auditoría web; CSSLP para ciclo de vida de desarrollo seguro.",
      "AI-102 (Azure) + OWASP LLM: Para IA Security, es crucial entender la plataforma subyacente y aplicar el framework de riesgo.",
    ],
    firstJob: "DevSecOps Engineer Junior, AppSec Specialist o Cloud Security Engineer",
    firstJobNote: "Target: Scale-ups, empresas de producto digital (e-commerce, fintech), banca tecnológica o boutiques de transformación digital. Estrategia: Si vienes de dev o QA, el salto es directo mostrando tus pipelines seguros. Si vienes de ciberseguridad, demuestra que puedes programar y leer código, no solo operar herramientas comerciales.",
  },
  {
    block: 6,
    title: "Roadmap — Gobernanza, Riesgo, Terceros y Dirección",
    duration: "9-18 meses para GRC Junior; 7-12 años para Head of GRC; 12-15+ años para CISO.",
    difficulty: "Accesible desde áreas no técnicas, pero exige rigor documental, política y visión de negocio.",
    education: {
      title: "Vías académicas opcionales en España",
      educational: [
        "Grados en Derecho, ADE o Auditoría Financiera tienen un encaje excelente en GRC, privacidad y TPRM.",
        "Ingeniería Informática suma mucho diferencial si quieres ser un GRC con criterio técnico profundo.",
        "Másteres de compliance o protección de datos ayudan a pasar filtros en consultoría Big4.",
        "Sector público: Oposiciones TIC del Estado son una vía muy sólida en España para organismos regulados.",
      ],
      details: "El GRC es la vía más amable en España para perfiles de letras o negocio. Sin embargo, no te quedes en el papel: el salto de categoría salarial ocurre cuando aprendes a auditar evidencias tecnológicas reales y dialogar con los ingenieros.",
    },
    base: [
      "Marcos Normativos: Dominio de ISO 27001 (controles y SGSI), ENS (obligatorio en sector público/proveedores), RGPD, NIS2 y DORA.",
      "Gestión de Riesgos: Metodologías de evaluación (MAGERIT/ISO 27005), cálculo de impacto, matrices y tratamiento de riesgos.",
      "Técnica Base: Entender redes, IAM, cloud, backups, EDR, planes de continuidad (BCP) y disaster recovery (DRP).",
      "Riesgo de Terceros (TPRM): Revisión de cadena de suministro, informes SOC 2 Type II y cláusulas contractuales.",
      "Comunicación Ejecutiva: Capacidad de traducir fallos técnicos a impacto de negocio para convencer al Comité de Dirección.",
    ],
    labs: [
      "Diseño de SGSI Ficticio: Definir alcance, política de seguridad, Declaración de Aplicabilidad (SoA) y plan de tratamiento.",
      "Mapeo de Controles: Crear una matriz cruzada mapeando controles de ISO 27001 contra medidas del ENS y DORA.",
      "Auditoría Simulada: Evaluar un SaaS externo basándote en la lectura crítica de su informe SOC 2 y cuestionario CAIQ.",
      "Dashboard Ejecutivo: Preparar un board pack de 5 slides mostrando riesgo, estado de cumplimiento y retorno de inversión.",
    ],
    certPath: [
      "ISO 27001 Lead Implementer / Auditor: Excelente primera inversión para ganar estructura, vocabulario y abrir procesos de selección.",
      "CISA (ISACA): 'Gold Standard' absoluto en España para auditoría IT y consultoría.",
      "CISM / CRISC (ISACA): CISM para progresar hacia gestión; CRISC si te especializas en TPRM o riesgo tecnológico puro.",
      "Cursos DORA / NIS2: Formación emergente con altísima demanda inmediata en empresas reguladas (IBEX, Banca, Energía).",
    ],
    firstJob: "Consultor GRC Junior, Auditor IT o Analista TPRM",
    firstJobNote: "Target: Big4 (Deloitte, EY, PwC, KPMG), firmas boutique de GRC o departamentos de auditoría interna corporativos. Estrategia: Las Big4 son la mejor escuela en España. Paga el precio formativo del primer par de años, absorbe la metodología, y salta a un cliente final con +30% de salario y mejor calidad de vida.",
  },
];