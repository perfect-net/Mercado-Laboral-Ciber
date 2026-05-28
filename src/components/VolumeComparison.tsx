import { roles } from "../data/roles";

const barColor: Record<number, string> = { 1: "bg-sky-400", 2: "bg-indigo-400", 3: "bg-rose-400", 4: "bg-amber-400", 5: "bg-emerald-400", 6: "bg-orange-400" };
const dotColor: Record<number, string> = { 1: "bg-sky-400", 2: "bg-indigo-400", 3: "bg-rose-400", 4: "bg-amber-400", 5: "bg-emerald-400", 6: "bg-orange-400" };

function MiniBar({ value, max, label, block }: { value: number; max: number; label: string; block: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1 items-center gap-2">
        <div className="flex items-center gap-1.5 min-w-0"><span className={`w-1 h-1 rounded-full ${dotColor[block]} shrink-0`} /><span className="text-[11px] text-slate-500 truncate">{label}</span></div>
        <span className="text-[11px] font-mono font-bold text-slate-300 tabular-nums shrink-0">{value}</span>
      </div>
      <div className="h-[3px] bg-white/[0.05] rounded-full overflow-hidden"><div className={`h-full rounded-full ${barColor[block]} opacity-70`} style={{ width: `${Math.max((value / max) * 100, 2)}%` }} /></div>
    </div>
  );
}

export function VolumeComparison() {
  const maxS = Math.max(...roles.map(r => r.volumeSpain));
  const maxH = Math.max(...roles.map(r => r.volumeHispano));
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="px-6 md:px-8 py-5 border-b border-white/[0.04]">
        <div className="text-[9px] font-mono font-bold text-slate-500 tracking-[0.2em] uppercase mb-1">Volumen</div>
        <h3 className="text-lg font-bold text-white tracking-tight">Vacantes Mensuales por Rol</h3>
      </div>
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-10">
        <div><div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.15em] mb-5">España</div><div className="space-y-3">{roles.map(r => <MiniBar key={`s-${r.id}`} value={r.volumeSpain} max={maxS} label={r.shortName} block={r.block} />)}</div></div>
        <div><div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.15em] mb-5">Hispanohablante</div><div className="space-y-3">{roles.map(r => <MiniBar key={`h-${r.id}`} value={r.volumeHispano} max={maxH} label={r.shortName} block={r.block} />)}</div></div>
      </div>
    </div>
  );
}

export function getMaxVolumeSpain() { return Math.max(...roles.map(r => r.volumeSpain)); }
