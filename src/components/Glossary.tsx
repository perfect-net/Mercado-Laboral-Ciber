const terms: [string, string][] = [
  ["SOC", "Security Operations Center — centro de operaciones de seguridad que monitoriza alertas 24/7."],
  ["SIEM", "Security Information and Event Management — plataforma que centraliza y correlaciona logs de seguridad (ej. Splunk, Sentinel)."],
  ["EDR / XDR", "Endpoint / Extended Detection and Response — herramientas que monitorizan endpoints y responden a amenazas (ej. CrowdStrike, Defender XDR)."],
  ["IAM / PAM", "Identity & Access Management / Privileged Access Management — gestión de identidades, accesos y cuentas privilegiadas (ej. CyberArk, Okta)."],
  ["DFIR", "Digital Forensics and Incident Response — análisis forense digital y respuesta a incidentes de seguridad."],
  ["CTI", "Cyber Threat Intelligence — recopilación y análisis de información sobre amenazas, adversarios y TTPs."],
  ["TTPs", "Tactics, Techniques and Procedures — comportamientos observados de adversarios, catalogados en frameworks como MITRE ATT&CK."],
  ["MITRE ATT&CK", "Framework público que cataloga tácticas y técnicas usadas por adversarios reales."],
  ["OSCP", "Offensive Security Certified Professional — certificación práctica de pentesting de OffSec, filtro habitual en España."],
  ["OSWE", "Offensive Security Web Expert — certificación avanzada de seguridad web de OffSec."],
  ["CRTO", "Certified Red Team Operator — certificación de Red Team de Zero-Point Security."],
  ["CISSP", "Certified Information Systems Security Professional — certificación senior de ISC2, referencia para arquitectos y CISOs."],
  ["CISA / CISM", "CISA: Certified Information Systems Auditor. CISM: Certified Information Security Manager. Ambas de ISACA, referentes en GRC y dirección."],
  ["ENS", "Esquema Nacional de Seguridad — normativa española obligatoria para sector público y sus proveedores (RD 311/2022)."],
  ["NIS2", "Directiva europea de ciberseguridad (2022/2555) que amplía obligaciones de seguridad a sectores esenciales e importantes."],
  ["DORA", "Digital Operational Resilience Act — regulación UE para la resiliencia digital del sector financiero (banca, seguros)."],
  ["EPSS", "Exploit Prediction Scoring System — modelo de probabilidad de explotación de una vulnerabilidad en los próximos 30 días."],
  ["CVSS", "Common Vulnerability Scoring System — sistema de puntuación de severidad de vulnerabilidades (versión actual: 4.0)."],
  ["KEV", "Known Exploited Vulnerabilities — catálogo de CISA con CVEs con explotación activa confirmada."],
  ["CNAPP", "Cloud-Native Application Protection Platform — plataforma que combina CSPM, CWPP y seguridad de IaC (ej. Wiz, Prisma Cloud)."],
  ["IaC", "Infrastructure as Code — definir infraestructura con código (ej. Terraform, CloudFormation)."],
  ["SAST / SCA / DAST", "SAST: análisis estático de código. SCA: análisis de dependencias. DAST: pruebas dinámicas sobre aplicación desplegada."],
  ["ASIM / OCSF", "ASIM: Advanced Security Information Model (Microsoft). OCSF: Open Cybersecurity Schema Framework. Estándares de normalización de logs."],
  ["MAGERIT", "Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información — metodología española de análisis de riesgos del CCN."],
  ["CCN-CERT", "Centro Criptológico Nacional CERT — organismo español de referencia en ciberseguridad del sector público."],
  ["INCIBE", "Instituto Nacional de Ciberseguridad de España — organismo público que ofrece formación, servicios y alertas de ciberseguridad."],
  ["MSSP", "Managed Security Services Provider — proveedor de servicios de seguridad gestionados que opera SOC para terceros."],
  ["Big4", "Deloitte, PwC, EY y KPMG — las cuatro grandes firmas de consultoría y auditoría."],
  ["SGSI", "Sistema de Gestión de Seguridad de la Información — marco documental y de procesos exigido por ISO 27001."],
  ["SoA", "Statement of Applicability — documento ISO 27001 que declara qué controles aplican y cuáles no."],
];

export function Glossary() {
  return (
    <section id="glosario" className="scroll-mt-24 mb-16">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <header className="px-6 md:px-10 py-6 bg-gradient-to-r from-slate-900 to-slate-900/50 border-b border-slate-800">
          <div className="text-xs font-mono text-slate-400 tracking-widest mb-2">REFERENCIA</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">📖 Glosario Técnico</h2>
          <p className="text-sm text-slate-400 mt-1">Términos, acrónimos y certificaciones mencionados en el informe.</p>
        </header>
        <div className="p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-1 divide-y md:divide-y-0 divide-slate-800/60">
            {terms.map(([term, definition]) => (
              <div key={term} className="py-3 border-b border-slate-800/40 last:border-0">
                <dt className="text-sm font-bold text-cyan-300 font-mono">{term}</dt>
                <dd className="text-xs text-slate-400 leading-relaxed mt-0.5">{definition}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
