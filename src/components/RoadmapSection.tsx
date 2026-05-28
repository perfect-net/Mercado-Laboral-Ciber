import type { ReactNode } from "react";
import { roadmaps, type Roadmap } from "../data/roadmaps";

const blockMeta: Record<number, { entry: string; next: string; target: string; risk: string }> = {
  1: {
    entry: "SOC N1 / monitorizacion",
    next: "SOC N2, EDR, SIEM o VM",
    target: "Detection Engineer / Threat Hunter",
    risk: "Quedarse en turnos N1 mas de 24 meses",
  },
  2: {
    entry: "SysAdmin, IAM junior o Cloud junior",
    next: "Cloud Security / PAM / OT",
    target: "Arquitectura cloud, IAM senior u OT lead",
    risk: "Saltar a cloud sin entender identidad ni redes",
  },
  3: {
    entry: "VM, Pentest junior o Web junior",
    next: "Web, Mobile, Purple o Red Team",
    target: "Red Team, Adversary Emulation u OffSec Lead",
    risk: "Confundir labs con experiencia profesional",
  },
  4: {
    entry: "SOC N2, VM o DFIR junior",
    next: "DFIR, CTI tecnico, Malware RE o Exposure Mgmt",
    target: "IR Lead, CTI Lead o Detection/Exposure Lead",
    risk: "Confundir recopilar IOCs con producir decisiones utiles",
  },
  5: {
    entry: "Dev, QA, DevOps o AppSec junior",
    next: "DevSecOps / AppSec / Cloud Sec",
    target: "Principal Security Engineer / Architect",
    risk: "No saber programar de verdad",
  },
  6: {
    entry: "GRC junior, auditoria o TPRM",
    next: "GRC senior, Risk Manager o BISO",
    target: "Head of GRC / CISO",
    risk: "Quedarse en compliance documental sin criterio tecnico",
  },
};

const resourcesByBlock: Record<number, { name: string; note: string; category: string }[]> = {
  1: [
    { name: "Wazuh/Elastic + Sysmon", note: "Mini-SOC local documentado", category: "Proyecto" },
    { name: "TryHackMe SOC Level 1", note: "Practica guiada para triaje", category: "Lab" },
    { name: "Splunk BOTS", note: "Dataset realista para investigar", category: "Lab" },
    { name: "INCIBE y CCN-CERT", note: "Contexto y guias espanolas", category: "Espana" },
  ],
  2: [
    { name: "Landing zone segura", note: "Azure/AWS con logging e IAM minimo", category: "Proyecto" },
    { name: "Terraform security", note: "Controles IaC reutilizables", category: "Portfolio" },
    { name: "AD hardening lab", note: "Tiering, permisos y Kerberos", category: "Lab" },
    { name: "Microsoft Learn / AWS Skill Builder", note: "Ruta oficial de plataforma", category: "Formacion" },
  ],
  3: [
    { name: "3 informes profesionales", note: "Web, interno AD y API", category: "Portfolio" },
    { name: "PortSwigger Academy", note: "Web security manual", category: "Lab" },
    { name: "HackTheBox AD/Web", note: "Maquinas con write-up privado", category: "Lab" },
    { name: "RootedCON / Navaja Negra", note: "Networking tecnico en Espana", category: "Mercado" },
  ],
  4: [
    { name: "Caso DFIR documentado", note: "Timeline, alcance e impacto", category: "Portfolio" },
    { name: "Velociraptor/KAPE lab", note: "Coleccion y triage remoto", category: "Lab" },
    { name: "Informe CTI accionable", note: "Version SOC y version negocio", category: "Intel" },
    { name: "Dashboard EPSS/KEV", note: "Priorizacion de exposicion", category: "Proyecto" },
  ],
  5: [
    { name: "Pipeline DevSecOps", note: "SAST, SCA, secrets y containers", category: "Proyecto" },
    { name: "Threat model STRIDE", note: "De arquitectura a backlog", category: "Portfolio" },
    { name: "Semgrep/CodeQL rules", note: "Reglas propias publicables", category: "Proyecto" },
    { name: "Promptfoo/PyRIT", note: "Evaluacion basica de LLM", category: "AI Sec" },
  ],
  6: [
    { name: "SGSI ficticio", note: "Alcance, riesgos, SoA y politicas", category: "Proyecto" },
    { name: "Matriz ISO-ENS-DORA", note: "Mapeo de controles", category: "Portfolio" },
    { name: "Auditoria cloud simulada", note: "Evidencias y plan de accion", category: "Lab" },
    { name: "Board pack de riesgo", note: "5 slides ejecutivas", category: "Negocio" },
  ],
};

function SectionCard({ title, children, tone }: { title: string; children: ReactNode; tone: string }) {
  return (
    <div className="bg-slate-950/65 border border-slate-800 rounded-xl p-5">
      <h4 className={`text-xs uppercase tracking-widest font-semibold mb-3 ${tone}`}>{title}</h4>
      {children}
    </div>
  );
}

function BulletList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-slate-300 leading-relaxed flex gap-2">
          <span className={`${color} shrink-0 mt-0.5`}>▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CareerRail({ meta }: { meta: (typeof blockMeta)[number] }) {
  const steps = [
    ["Entrada", meta.entry],
    ["Evolucion", meta.next],
    ["Destino", meta.target],
  ];

  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5">
      <h4 className="text-xs uppercase tracking-widest text-fuchsia-300 font-semibold mb-4">Progresion profesional realista</h4>
      <div className="space-y-3">
        {steps.map(([label, value], idx) => (
          <div key={label} className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-fuchsia-950 border border-fuchsia-800 text-fuchsia-300 flex items-center justify-center text-xs font-mono shrink-0">
              {idx + 1}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">{label}</div>
              <div className="text-sm text-slate-200 font-semibold">{value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-amber-300 leading-relaxed">
        Riesgo de estancamiento: {meta.risk}.
      </div>
    </div>
  );
}

function PortfolioBlock({ block }: { block: number }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {resourcesByBlock[block].map((resource) => (
        <div key={resource.name} className="bg-slate-900/70 border border-slate-800 rounded-lg p-3">
          <div className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono mb-1">{resource.category}</div>
          <div className="text-sm font-bold text-slate-100">{resource.name}</div>
          <div className="text-xs text-slate-400 mt-1 leading-relaxed">{resource.note}</div>
        </div>
      ))}
    </div>
  );
}

function EducationOptional({ roadmap }: { roadmap: Roadmap }) {
  return (
    <div className="mt-6 border-t border-slate-800/60 pt-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-slate-500">🎓</span>
        <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Vías académicas opcionales en España</h4>
      </div>
      <p className="text-xs text-slate-500 mb-4 leading-relaxed max-w-3xl">
        La formación reglada ayuda a estructurar conocimientos y puede facilitar los primeros filtros de RR.HH., pero no sustituye práctica, laboratorios, inglés ni proyectos demostrables.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {roadmap.education.educational.map((item) => (
          <div key={item} className="bg-slate-900/40 border border-slate-800/50 rounded-lg p-3 flex gap-3">
            <span className="text-slate-600 shrink-0">▸</span>
            <p className="text-xs text-slate-400 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-slate-950 border border-slate-800/50 rounded-lg p-3 flex gap-3 items-start">
        <span className="text-emerald-500 shrink-0">💡</span>
        <p className="text-xs text-slate-400 leading-relaxed">
          <span className="text-slate-300 font-semibold">Resumen del analista:</span> {roadmap.education.details}
        </p>
      </div>
    </div>
  );
}

function RoadmapArticle({ roadmap }: { roadmap: Roadmap }) {
  const meta = blockMeta[roadmap.block];
  const blockIcons: Record<number, string> = { 1: "🛡️", 2: "☁️", 3: "⚔️", 4: "🔍", 5: "⚙️", 6: "⚖️" };

  return (
    <article
      id={`roadmap-${roadmap.block}`}
      className="scroll-mt-24 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
    >
      <header className="px-6 md:px-8 py-6 border-b border-slate-800 bg-slate-900/50">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-500 mb-2 flex items-center gap-1.5">
          <span className="text-sm">{blockIcons[roadmap.block]}</span>
          <span>Hoja de Ruta · Bloque {roadmap.block}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{roadmap.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5">
            <span className="text-slate-500">⏱ Horizonte:</span>
            <span className="text-slate-200 font-medium">{roadmap.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5">
            <span className="text-slate-500">📊 Barrera de entrada:</span>
            <span className="text-slate-200 font-medium">{roadmap.difficulty}</span>
          </div>
        </div>
      </header>

      <div className="p-6 md:p-8 space-y-8">
        <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-8">
          {/* Main Path */}
          <div className="space-y-6">
            <SectionCard title="1. Fundamentos Técnicos" tone="text-blue-400">
              <BulletList items={roadmap.base} color="text-blue-500" />
            </SectionCard>

            <SectionCard title="2. Laboratorios y Portfolio Demostrable" tone="text-emerald-400">
              <BulletList items={roadmap.labs} color="text-emerald-500" />
            </SectionCard>

            <SectionCard title="3. Certificaciones con Retorno" tone="text-amber-400">
              <BulletList items={roadmap.certPath} color="text-amber-500" />
            </SectionCard>
          </div>

          {/* Sidebar / Targets */}
          <aside className="space-y-6">
            <CareerRail meta={meta} />

            <div className="bg-slate-900/40 border-l-4 border-fuchsia-500 border-y border-r border-y-slate-800 border-r-slate-800 rounded-xl p-5">
              <h4 className="text-xs uppercase tracking-widest text-fuchsia-400 font-semibold mb-3">Primer puesto objetivo</h4>
              <p className="text-base font-bold text-white mb-2">{roadmap.firstJob}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{roadmap.firstJobNote}</p>
            </div>

            <SectionCard title="Proyectos clave para portfolio" tone="text-cyan-400">
              <PortfolioBlock block={roadmap.block} />
            </SectionCard>
          </aside>
        </div>

        <EducationOptional roadmap={roadmap} />
      </div>
    </article>
  );
}

export function RoadmapSection() {
  return (
    <section id="roadmaps" className="mb-24 scroll-mt-24">
      <header className="mb-12 pb-6 border-b-2 border-cyan-900/40">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">Parte 2</div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Roadmaps Profesionales para España</h2>
        <p className="text-slate-400 mt-3 max-w-4xl leading-relaxed">
          La ruta principal no es academica: fundamentos, practica, portfolio, certificaciones con retorno y primer
          puesto objetivo. La formacion reglada española aparece como opcion secundaria porque puede ayudar, pero no
          reemplaza experiencia, ingles tecnico, laboratorios ni proyectos demostrables.
        </p>
      </header>

      <div className="mb-8 bg-slate-950/70 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-3">Criterio de lectura</h3>
        <div className="grid md:grid-cols-4 gap-3 text-sm">
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-3">
            <div className="text-blue-300 font-semibold mb-1">Núcleo</div>
            <p className="text-slate-400 text-xs leading-relaxed">Lo que debes dominar antes de venderte para ese bloque.</p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-3">
            <div className="text-emerald-300 font-semibold mb-1">Portfolio</div>
            <p className="text-slate-400 text-xs leading-relaxed">Evidencia visible: labs, informes, repositorios, write-ups y proyectos.</p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-3">
            <div className="text-amber-300 font-semibold mb-1">Certificaciones</div>
            <p className="text-slate-400 text-xs leading-relaxed">Solo las que desbloquean entrevistas o validan practica real.</p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-3">
            <div className="text-slate-300 font-semibold mb-1">Formación reglada</div>
            <p className="text-slate-400 text-xs leading-relaxed">Contexto opcional en España: FP, grado o master pueden ordenar, no garantizar.</p>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {roadmaps.map((roadmap) => (
          <RoadmapArticle key={roadmap.block} roadmap={roadmap} />
        ))}
      </div>
    </section>
  );
}
