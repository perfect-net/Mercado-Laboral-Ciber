import { roles } from "../data/roles";

function MiniBar({ value, max, label }: { value: number; max: number; label: string }) {
  const pct = Math.max((value / max) * 100, 1.5);
  const color =
    value >= 250 ? "from-emerald-500 to-emerald-400" :
    value >= 180 ? "from-green-500 to-green-400" :
    value >= 120 ? "from-cyan-500 to-cyan-400" :
    value >= 80  ? "from-sky-500 to-sky-400" :
    value >= 50  ? "from-amber-500 to-amber-400" :
    value >= 30  ? "from-orange-500 to-orange-400" :
                   "from-red-500 to-red-400";

  return (
    <div className="group relative">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[10px] text-slate-400 font-mono truncate max-w-[140px]" title={label}>{label}</span>
        <span className="text-[10px] font-mono text-slate-300 font-semibold">{value}</span>
      </div>
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function VolumeComparison() {
  const maxSpain = Math.max(...roles.map((r) => r.volumeSpain));
  const maxHispano = Math.max(...roles.map((r) => r.volumeHispano));

  const blocks = [
    { num: 1, name: "Defensa", color: "from-cyan-500 to-blue-600" },
    { num: 2, name: "Nube / Identidad", color: "from-blue-500 to-indigo-600" },
    { num: 3, name: "Ofensiva", color: "from-fuchsia-500 to-purple-600" },
    { num: 4, name: "DFIR / Intel", color: "from-red-500 to-rose-600" },
    { num: 5, name: "Ingeniería / IA", color: "from-emerald-500 to-teal-600" },
    { num: 6, name: "Gobernanza", color: "from-amber-500 to-orange-600" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <header className="px-6 md:px-8 py-5 bg-gradient-to-r from-cyan-950/60 to-slate-900 border-b border-slate-800">
        <div className="text-xs font-mono text-cyan-400 tracking-widest mb-1">COMPARATIVA RÁPIDA</div>
        <h3 className="text-xl md:text-2xl font-bold text-white">📊 Volumen de Ofertas Mensuales por Rol</h3>
        <p className="text-sm text-slate-400 mt-1">
          Barras escaladas al máximo del mercado ({maxSpain} vacantes/mes España · {maxHispano} hispanohablante). 
          <span className="text-emerald-400"> Verde</span> = alta demanda · 
          <span className="text-cyan-400"> Azul</span> = media · 
          <span className="text-orange-400"> Naranja</span> = baja · 
          <span className="text-red-400"> Rojo</span> = nicho.
        </p>
      </header>

      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* España */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-4">🇪🇸 España (vacantes/mes)</h4>
            <div className="space-y-2.5">
              {roles.map((r) => (
                <MiniBar key={`es-${r.id}`} value={r.volumeSpain} max={maxSpain} label={r.shortName} />
              ))}
            </div>
          </div>

          {/* Hispano */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-4">🌎 Hispanohablante (vacantes/mes)</h4>
            <div className="space-y-2.5">
              {roles.map((r) => (
                <MiniBar key={`hi-${r.id}`} value={r.volumeHispano} max={maxHispano} label={r.shortName} />
              ))}
            </div>
          </div>
        </div>

        {/* Leyenda de bloques */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4">
          {blocks.map((b) => (
            <div key={b.num} className="flex items-center gap-1.5 text-[10px]">
              <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${b.color} opacity-60`} />
              <span className="text-slate-500">B{b.num}</span>
              <span className="text-slate-400">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Returns the max volumeSpain to use across all role cards */
export function getMaxVolumeSpain(): number {
  return Math.max(...roles.map((r) => r.volumeSpain));
}
