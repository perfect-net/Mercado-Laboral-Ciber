import type { Roadmap } from "../data/roadmaps";

export function RoadmapBlock({ roadmap }: { roadmap: Roadmap }) {
  return (
    <article
      id={`roadmap-${roadmap.block}`}
      className="scroll-mt-24 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
    >
      <header className="px-6 md:px-8 py-6 border-b border-slate-800 bg-gradient-to-r from-cyan-950/40 to-slate-900">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-cyan-400 tracking-wider">
            🗺️ ROADMAP · BLOQUE {roadmap.block}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">{roadmap.title}</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <span className="text-xs px-3 py-1 bg-cyan-950/60 border border-cyan-900 text-cyan-200 rounded-full font-mono">
            ⏱ {roadmap.duration}
          </span>
          <span className="text-xs px-3 py-1 bg-fuchsia-950/60 border border-fuchsia-900 text-fuchsia-200 rounded-full font-mono">
            🎯 {roadmap.difficulty}
          </span>
        </div>
      </header>

      <div className="p-6 md:p-8 space-y-5">
        {/* Step 1 */}
        <Step
          number="1"
          title="Conocimientos Base Requeridos"
          subtitle="Qué estudiar ANTES de tocar herramientas de ciberseguridad"
          color="blue"
          items={roadmap.base}
        />

        {/* Step 2 */}
        <Step
          number="2"
          title="Laboratorios y Práctica"
          subtitle="Dónde entrenar gratis o a bajo coste"
          color="emerald"
          items={roadmap.labs}
        />

        {/* Step 3 */}
        <Step
          number="3"
          title="Estrategia de Certificaciones"
          subtitle="Orden exacto para NO tirar el dinero"
          color="amber"
          items={roadmap.certPath}
        />

        {/* Step 4 — first job */}
        <div className="relative bg-gradient-to-br from-fuchsia-950/40 to-slate-950/80 border-l-4 border-fuchsia-500 border-y border-r border-y-slate-800 border-r-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-fuchsia-600 text-white font-bold">
              4
            </span>
            <div>
              <h4 className="text-base font-bold text-fuchsia-200">Primer Trabajo Objetivo</h4>
              <p className="text-xs text-slate-400">A qué puesto exacto apuntar como puerta de entrada</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xl font-bold text-white mb-2">🎯 {roadmap.firstJob}</div>
            <p className="text-sm text-slate-300 leading-relaxed">{roadmap.firstJobNote}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Step({
  number,
  title,
  subtitle,
  color,
  items,
}: {
  number: string;
  title: string;
  subtitle: string;
  color: "blue" | "emerald" | "amber";
  items: string[];
}) {
  const colorMap = {
    blue: { bg: "bg-blue-600", text: "text-blue-200", marker: "text-blue-400" },
    emerald: { bg: "bg-emerald-600", text: "text-emerald-200", marker: "text-emerald-400" },
    amber: { bg: "bg-amber-600", text: "text-amber-200", marker: "text-amber-400" },
  }[color];

  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className={`flex items-center justify-center w-9 h-9 rounded-full ${colorMap.bg} text-white font-bold`}>
          {number}
        </span>
        <div>
          <h4 className={`text-base font-bold ${colorMap.text}`}>{title}</h4>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-2 pl-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-slate-300 flex gap-2 leading-relaxed">
            <span className={`${colorMap.marker} font-mono shrink-0`}>{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
