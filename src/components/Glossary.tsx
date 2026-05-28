const terms: [string, string][] = [
  ["SOC","Security Operations Center — centro de operaciones de seguridad 24/7."],
  ["SIEM","Security Information and Event Management — centraliza y correlaciona logs."],
  ["EDR / XDR","Endpoint / Extended Detection and Response — monitoriza endpoints."],
  ["IAM / PAM","Identity & Access / Privileged Access Management."],
  ["DFIR","Digital Forensics and Incident Response."],
  ["CTI","Cyber Threat Intelligence — análisis de amenazas y TTPs."],
  ["TTPs","Tactics, Techniques and Procedures — MITRE ATT&CK."],
  ["OSCP","Offensive Security Certified Professional."],
  ["CISSP","Certified Information Systems Security Professional."],
  ["ENS","Esquema Nacional de Seguridad — RD 311/2022."],
  ["NIS2","Directiva europea 2022/2555 de seguridad."],
  ["DORA","Digital Operational Resilience Act — sector financiero UE."],
  ["EPSS","Exploit Prediction Scoring System."],
  ["CVSS","Common Vulnerability Scoring System (v4.0)."],
  ["CNAPP","Cloud-Native Application Protection Platform."],
  ["SAST / SCA / DAST","Análisis estático / dependencias / pruebas dinámicas."],
  ["MAGERIT","Metodología española de gestión de riesgos."],
  ["CCN-CERT","Centro Criptológico Nacional CERT."],
  ["INCIBE","Instituto Nacional de Ciberseguridad de España."],
  ["MSSP","Managed Security Services Provider."],
  ["Big4","Deloitte, PwC, EY y KPMG."],
  ["SGSI","Sistema de Gestión de Seguridad de la Información."],
];

export function Glossary() {
  return (
    <section id="glosario" className="scroll-mt-24">
      <div className="text-[9px] font-mono font-bold text-slate-500 tracking-[0.25em] uppercase mb-2">Referencia</div>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Glosario Técnico</h2>
      <div className="glass rounded-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-x-8">
          {terms.map(([t, d]) => (
            <div key={t} className="py-2.5 border-b border-white/[0.04] last:border-0">
              <dt className="text-sm font-bold text-slate-200 font-mono">{t}</dt>
              <dd className="text-xs text-slate-500 leading-relaxed mt-0.5">{d}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
