import type { ReactNode } from "react";
import { roadmaps, type Roadmap } from "../data/roadmaps";

const meta: Record<number, { entry: string; next: string; target: string; risk: string }> = {
  1: { entry: "SOC N1", next: "SOC N2, EDR, SIEM o VM", target: "Detection Engineer / Threat Hunter", risk: "Quedarse en turnos N1 más de 24 meses" },
  2: { entry: "SysAdmin / IAM / Cloud jr", next: "Cloud Security / PAM / OT", target: "Arquitectura cloud, IAM sr u OT lead", risk: "Saltar a cloud sin entender identidad" },
  3: { entry: "VM / Pentest / Web jr", next: "Web, Purple o Red Team", target: "Red Team, Adv. Emulation u OffSec Lead", risk: "Confundir labs con experiencia" },
  4: { entry: "SOC N2 / VM / DFIR jr", next: "DFIR, CTI, Malware RE", target: "IR Lead, CTI Lead o Exposure Lead", risk: "Confundir IOCs con decisiones" },
  5: { entry: "Dev / QA / DevOps", next: "DevSecOps / AppSec / Cloud Sec", target: "Principal Security Eng / Architect", risk: "No saber programar de verdad" },
  6: { entry: "GRC jr / auditoría / TPRM", next: "GRC sr / Risk Mgr / BISO", target: "Head of GRC / CISO", risk: "Quedarse en compliance documental" },
};

const blockTag: Record<number, string> = { 1: "text-sky-400/70", 2: "text-indigo-400/70", 3: "text-rose-400/70", 4: "text-amber-400/70", 5: "text-emerald-400/70", 6: "text-orange-400/70" };
const blockStrip: Record<number, string> = { 1: "from-sky-500/40", 2: "from-indigo-500/40", 3: "from-rose-500/40", 4: "from-amber-500/40", 5: "from-emerald-500/40", 6: "from-orange-400/40" };

const portfolioByBlock: Record<number, { name: string; note: string; tag: string }[]> = {
  1: [{ name: "Mini-SOC local", note: "Wazuh + Sysmon documentado", tag: "Proyecto" }, { name: "Splunk BOTS write-up", note: "Timeline de incidente", tag: "Lab" }],
  2: [{ name: "Landing zone segura", note: "AWS/Azure con IAM y logs", tag: "Proyecto" }, { name: "Terraform + tfsec", note: "IaC con controles", tag: "Portfolio" }],
  3: [{ name: "3 informes profesionales", note: "Web, AD interno y API", tag: "Portfolio" }, { name: "PortSwigger + HTB", note: "50+ máquinas", tag: "Lab" }],
  4: [{ name: "Caso DFIR documentado", note: "Timeline e impacto", tag: "Portfolio" }, { name: "Informe CTI", note: "Versión SOC y negocio", tag: "Intel" }],
  5: [{ name: "Pipeline DevSecOps", note: "SAST, SCA, containers", tag: "Proyecto" }, { name: "Threat model STRIDE", note: "Arquitectura a backlog", tag: "Portfolio" }],
  6: [{ name: "SGSI ficticio", note: "Riesgos, SoA, políticas", tag: "Proyecto" }, { name: "Matriz ISO-ENS-DORA", note: "Mapeo cruzado", tag: "Portfolio" }],
};

function Card({ title, tone, children }: { title: string; tone: string; children: ReactNode }) {
  return <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-5 hover:border-white/[0.08] transition-colors"><div className={`text-[9px] font-mono font-bold uppercase tracking-[0.15em] mb-3 ${tone}`}>{title}</div>{children}</div>;
}

function BL({ items }: { items: string[] }) {
  return <ul className="space-y-2">{items.map((it, i) => <li key={i} className="text-[13px] text-slate-400 leading-relaxed flex gap-2"><span className="text-slate-600 shrink-0 mt-px">▸</span><span>{it}</span></li>)}</ul>;
}

function Article({ roadmap }: { roadmap: Roadmap }) {
  const m = meta[roadmap.block];
  const portfolio = portfolioByBlock[roadmap.block];

  return (
    <article id={`roadmap-${roadmap.block}`} className="scroll-mt-24 glass glass-h rounded-xl overflow-hidden relative">
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${blockStrip[roadmap.block]} to-transparent`} />

      <div className="px-6 md:px-8 py-5 border-b border-white/[0.04]">
        <div className={`text-[9px] font-mono font-bold ${blockTag[roadmap.block]} tracking-[0.15em] uppercase mb-1`}>Roadmap · Bloque {String(roadmap.block).padStart(2, "0")}</div>
        <h3 className="text-xl font-bold text-white tracking-tight mb-3">{roadmap.title}</h3>
        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
          <span className="bg-white/[0.03] border border-white/[0.05] rounded px-2.5 py-1 font-mono">⏱ {roadmap.duration}</span>
          <span className="bg-white/[0.03] border border-white/[0.05] rounded px-2.5 py-1 font-mono">{roadmap.difficulty}</span>
        </div>
      </div>

      <div className="p-6 md:p-8 grid lg:grid-cols-[1.4fr_1fr] gap-8">
        <div className="space-y-5">
          <Card title="1. Fundamentos Técnicos" tone="text-sky-400/60"><BL items={roadmap.base} /></Card>
          <Card title="2. Laboratorios y Portfolio" tone="text-emerald-400/60"><BL items={roadmap.labs} /></Card>
          <Card title="3. Certificaciones con Retorno" tone="text-amber-400/60"><BL items={roadmap.certPath} /></Card>
        </div>
        <aside className="space-y-5">
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-5">
            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">Progresión realista</div>
            {[["Entrada", m.entry], ["Evolución", m.next], ["Destino", m.target]].map(([l, v], i) => (
              <div key={l} className="flex gap-3 items-start mb-3 last:mb-0">
                <div className="w-5 h-5 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-400 flex items-center justify-center text-[9px] font-mono shrink-0">{i + 1}</div>
                <div><div className="text-[9px] uppercase tracking-wider text-slate-600 font-mono">{l}</div><div className="text-xs text-slate-200 font-medium mt-0.5">{v}</div></div>
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.04] text-[11px] text-amber-400/70">⚠ Riesgo: {m.risk}.</div>
          </div>
          <div className="border-l-2 border-white/[0.08] pl-4">
            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-1">Primer puesto objetivo</div>
            <p className="text-sm font-bold text-white mb-1">{roadmap.firstJob}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{roadmap.firstJobNote}</p>
          </div>
          <div>
            <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-2.5">Proyectos clave</div>
            <div className="grid grid-cols-2 gap-2">{portfolio.map(p => <div key={p.name} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3 hover:border-white/[0.07] transition-colors"><div className="text-[8px] font-mono text-slate-600 uppercase tracking-wider mb-0.5">{p.tag}</div><div className="text-xs font-bold text-slate-200">{p.name}</div><div className="text-[10px] text-slate-500 mt-0.5">{p.note}</div></div>)}</div>
          </div>
        </aside>
      </div>

      <div className="px-6 md:px-8 py-4 border-t border-white/[0.04] bg-white/[0.01]">
        <details className="group">
          <summary className="cursor-pointer text-xs text-slate-600 uppercase tracking-wider flex items-center gap-2 hover:text-slate-300 transition-colors">
            <svg className="w-3 h-3 transition-transform group-open:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            Vías académicas opcionales en España
          </summary>
          <div className="mt-4 grid md:grid-cols-2 gap-3">{roadmap.education.educational.map(e => <div key={e} className="flex gap-2 text-xs text-slate-500 leading-relaxed"><span className="text-slate-700 shrink-0">▸</span>{e}</div>)}</div>
          <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-white/[0.04]"><span className="text-slate-400 font-medium">Nota:</span> {roadmap.education.details}</p>
        </details>
      </div>
    </article>
  );
}

export function RoadmapSection() {
  return (
    <section id="roadmaps" className="scroll-mt-24 space-y-6">
      <div><div className="text-[9px] font-mono font-bold text-slate-500 tracking-[0.25em] uppercase mb-2">Parte 02</div><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Roadmaps Profesionales</h2><p className="text-slate-500 text-[13px] mt-2 max-w-3xl">Fundamentos, práctica, portfolio, certificaciones y primer puesto objetivo. La formación reglada aparece como vía secundaria.</p></div>
      <div className="space-y-6">{roadmaps.map(rm => <Article key={rm.block} roadmap={rm} />)}</div>
    </section>
  );
}
