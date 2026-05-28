import type { Role } from "../data/roles";

const blockBorder: Record<number, string> = { 1: "border-sky-500/15", 2: "border-indigo-500/15", 3: "border-rose-500/15", 4: "border-amber-500/15", 5: "border-emerald-500/15", 6: "border-orange-400/15" };
const blockStrip: Record<number, string> = { 1: "from-sky-500/50", 2: "from-indigo-500/50", 3: "from-rose-500/50", 4: "from-amber-500/50", 5: "from-emerald-500/50", 6: "from-orange-400/50" };
const blockDot: Record<number, string> = { 1: "bg-sky-400", 2: "bg-indigo-400", 3: "bg-rose-400", 4: "bg-amber-400", 5: "bg-emerald-400", 6: "bg-orange-400" };
const blockTagColor: Record<number, string> = { 1: "text-sky-400/70", 2: "text-indigo-400/70", 3: "text-rose-400/70", 4: "text-amber-400/70", 5: "text-emerald-400/70", 6: "text-orange-400/70" };

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  return <div className="h-[3px] bg-white/[0.05] rounded-full overflow-hidden"><div className={`h-full rounded-full ${color}`} style={{ width: `${Math.min((value / max) * 100, 100)}%` }} /></div>;
}

export function RoleCard({ role, index, maxVolumeSpain }: { role: Role; index: number; maxVolumeSpain: number }) {
  const burnColor = role.burnout >= 8 ? "bg-rose-500" : role.burnout >= 6 ? "bg-amber-500" : "bg-emerald-500";
  const scColor = role.scarcityValue >= 6 ? "text-rose-300" : role.scarcityValue >= 4 ? "text-indigo-300" : "text-sky-300";

  return (
    <article id={role.id} className={`scroll-mt-24 glass glass-h rounded-xl overflow-hidden relative ${blockBorder[role.block]}`}>
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${blockStrip[role.block]} to-transparent`} />

      <div className="px-6 md:px-8 py-5 border-b border-white/[0.04]">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1"><span className={`w-1.5 h-1.5 rounded-full ${blockDot[role.block]}`} /><span className="text-[9px] font-mono font-bold text-slate-600 tracking-[0.2em] uppercase">Ficha {String(index).padStart(2, "0")}</span></div>
            <h3 className="text-lg font-bold text-white tracking-tight">{role.name}</h3>
            <p className={`text-xs mt-0.5 ${blockTagColor[role.block]}`}>{role.blockName}</p>
          </div>
          <div className="text-right shrink-0"><div className={`text-3xl font-bold font-mono tracking-tighter ${scColor}`}>{role.scarcity.split(" ")[0]}</div><div className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.15em] mt-0.5">Escasez</div></div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { l: "España / mes", v: String(role.volumeSpain), bar: <Bar value={role.volumeSpain} max={maxVolumeSpain} color="bg-slate-400" /> },
            { l: "Hispano / mes", v: String(role.volumeHispano), bar: <Bar value={role.volumeHispano} max={maxVolumeSpain * 3.5} color="bg-slate-500" /> },
            { l: "Escasez", v: role.scarcity.split(" ")[0], bar: <Bar value={role.scarcityValue} max={10} color={role.scarcityValue >= 6 ? "bg-rose-500" : role.scarcityValue >= 4 ? "bg-indigo-400" : "bg-sky-400"} /> },
            { l: "Burnout", v: `${role.burnout}/10`, bar: <Bar value={role.burnout} max={10} color={burnColor} /> },
          ].map(m => <div key={m.l} className="space-y-1.5"><div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500">{m.l}</div><div className="text-lg font-bold text-white font-mono tracking-tight">{m.v}</div>{m.bar}</div>)}
        </div>

        <p className="text-[13px] text-slate-400 leading-relaxed">{role.volume}</p>

        <div className="bg-white/[0.02] rounded-lg p-5 border border-white/[0.04]">
          <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-emerald-400/70 mb-3">Rangos Salariales 2026</div>
          <div className="grid md:grid-cols-3 gap-4 text-[13px]">
            {[["Junior", role.salary.junior], ["Mid", role.salary.mid], ["Senior", role.salary.senior]].map(([l, v]) => <div key={l}><span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.1em] block mb-0.5">{l}</span><p className="text-slate-200">{v}</p></div>)}
          </div>
          <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-white/[0.04]">{role.salary.latam}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div><div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-sky-400/70 mb-2.5">Stack Tecnológico</div><div className="flex flex-wrap gap-1.5">{role.stack.map(s => <span key={s} className="text-[11px] px-2 py-0.5 bg-white/[0.04] text-slate-300 rounded border border-white/[0.06] font-mono">{s}</span>)}</div></div>
          <div><div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-amber-400/70 mb-2.5">Certificaciones Clave</div><ul className="space-y-1">{role.certifications.map(c => <li key={c} className="text-[13px] text-slate-400 flex gap-2"><span className="text-slate-600 shrink-0">▸</span>{c}</li>)}</ul></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div><div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-1">Modalidad</div><p className="text-[13px] text-slate-400 leading-relaxed">{role.modality}</p></div>
          <div><div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-1">Estrés · <span className="text-slate-300">{role.burnout}/10</span></div><p className="text-[13px] text-slate-400 leading-relaxed">{role.burnoutNote}</p></div>
        </div>

        <div className="bg-indigo-500/[0.04] border border-indigo-500/10 rounded-lg p-5">
          <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-indigo-400/80 mb-1.5">Impacto de la IA</div>
          <p className="text-[13px] text-slate-200 leading-relaxed">{role.aiImpact}</p>
        </div>

        <div className="border-l-2 border-white/10 pl-5">
          <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5">Realidad Cruda</div>
          <p className="text-[15px] text-slate-200 leading-[1.7] font-serif italic">{role.reality}</p>
        </div>
      </div>
    </article>
  );
}
