import type { Role } from "../data/roles";

function StressBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = (value / max) * 100;
  const color =
    value >= 8 ? "bg-red-500" : value >= 6 ? "bg-orange-500" : value >= 4 ? "bg-yellow-500" : "bg-emerald-500";
  return (
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function ScarcityBar({ value }: { value: number }) {
  const pct = Math.min((value / 10) * 100, 100);
  const color =
    value >= 6 ? "bg-fuchsia-500" : value >= 4 ? "bg-cyan-400" : value >= 2 ? "bg-cyan-600" : "bg-slate-500";
  return (
    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function VolumeBar({ value, max }: { value: number; max: number }) {
  const pct = (value / max) * 100;
  const color =
    value >= 250 ? "from-emerald-400 to-emerald-500" :
    value >= 180 ? "from-emerald-400 to-green-500" :
    value >= 120 ? "from-cyan-400 to-cyan-600" :
    value >= 80  ? "from-cyan-500 to-sky-600" :
    value >= 50  ? "from-amber-400 to-amber-600" :
    value >= 30  ? "from-orange-400 to-orange-600" :
                   "from-red-400 to-red-600";

  return (
    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        style={{ width: `${Math.max(pct, 2)}%` }}
      />
    </div>
  );
}

export function RoleCard({ role, index, maxVolumeSpain }: { role: Role; index: number; maxVolumeSpain: number }) {
  return (
    <article
      id={role.id}
      className="scroll-mt-24 bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <header className="px-6 md:px-8 py-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-900/30">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-cyan-400/80 tracking-wider">
                FICHA #{String(index).padStart(2, "0")} · BLOQUE {role.block}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {role.name}
            </h3>
            <p className="text-sm text-slate-400 mt-1">{role.blockName}</p>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="text-right">
              <div className="text-xs uppercase tracking-widest text-slate-500">Ratio Escasez</div>
              <div className="text-3xl font-mono font-bold text-fuchsia-400">{role.scarcity.split(" ")[0]}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
        {/* Volumen y escasez */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">📊 Volumen de Ofertas</h4>
              <span className="text-2xl font-mono font-bold text-cyan-300">{role.volumeSpain}<span className="text-xs text-slate-500">/mes ES</span></span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">{role.volume}</p>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-mono uppercase">ESPAÑA</span>
                <span className="text-cyan-400 font-mono font-bold">{role.volumeSpain} vac./mes</span>
              </div>
              <VolumeBar value={role.volumeSpain} max={maxVolumeSpain} />
              <div className="flex items-center justify-between text-[10px] mt-2">
                <span className="text-slate-500 font-mono uppercase">HISPANOHABLANTE</span>
                <span className="text-slate-400 font-mono font-bold">{role.volumeHispano} vac./mes</span>
              </div>
              <VolumeBar value={role.volumeHispano} max={maxVolumeSpain * 3.5} />
            </div>
          </div>
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
            <h4 className="text-xs uppercase tracking-widest text-fuchsia-400 font-semibold mb-2">⚖️ Ratio de Escasez</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">{role.scarcity}</p>
            <ScarcityBar value={role.scarcityValue} />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>EQUILIBRADO</span>
              <span>ESCASEZ CRÍTICA</span>
            </div>
          </div>
        </div>

        {/* Salarios */}
        <div className="md:col-span-2 bg-gradient-to-br from-emerald-950/40 to-slate-950/60 border border-emerald-900/40 rounded-xl p-5">
          <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">💰 Rangos Salariales 2026</h4>
          <div className="grid md:grid-cols-3 gap-3 mb-3">
            <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3">
              <div className="text-[10px] uppercase font-mono text-slate-500 mb-1">Junior (0–2 años)</div>
              <div className="text-sm text-slate-200">{role.salary.junior}</div>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3">
              <div className="text-[10px] uppercase font-mono text-slate-500 mb-1">Mid (2–5 años)</div>
              <div className="text-sm text-slate-200">{role.salary.mid}</div>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3">
              <div className="text-[10px] uppercase font-mono text-slate-500 mb-1">Senior (5+ años)</div>
              <div className="text-sm text-slate-200">{role.salary.senior}</div>
            </div>
          </div>
          <div className="text-xs text-emerald-300/80 italic border-t border-emerald-900/40 pt-2">
            🌍 {role.salary.latam}
          </div>
        </div>

        {/* Stack */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <h4 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">🛠️ Stack Tecnológico</h4>
          <div className="flex flex-wrap gap-2">
            {role.stack.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 bg-blue-950/40 border border-blue-900/50 text-blue-200 rounded-md font-mono">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">🎓 Certificaciones Clave</h4>
          <ul className="space-y-1.5">
            {role.certifications.map((c) => (
              <li key={c} className="text-sm text-slate-300 flex gap-2">
                <span className="text-amber-500 mt-0.5">▸</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modalidad */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <h4 className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">🏠 Modalidad de Trabajo</h4>
          <p className="text-sm text-slate-300 leading-relaxed">{role.modality}</p>
        </div>

        {/* Burnout */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <h4 className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-2">
            🔥 Índice de Burnout <span className="text-slate-500">·</span> <span className="text-2xl font-mono text-red-300">{role.burnout}/10</span>
          </h4>
          <StressBar value={role.burnout} />
          <p className="text-sm text-slate-300 leading-relaxed mt-3">{role.burnoutNote}</p>
        </div>

        {/* AI */}
        <div className="md:col-span-2 bg-gradient-to-br from-indigo-950/40 to-slate-950/60 border border-indigo-900/40 rounded-xl p-5">
          <h4 className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-2">🤖 Impacto de la IA en el Rol</h4>
          <p className="text-sm text-slate-200 leading-relaxed">{role.aiImpact}</p>
        </div>

        {/* Realidad cruda */}
        <div className="md:col-span-2 bg-gradient-to-br from-red-950/30 to-slate-950/60 border-l-4 border-red-500 border-y border-r border-y-slate-800 border-r-slate-800 rounded-xl p-5">
          <h4 className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-2">⚠️ La Realidad Cruda del Puesto</h4>
          <p className="text-sm text-slate-200 leading-relaxed italic">{role.reality}</p>
        </div>
      </div>
    </article>
  );
}
