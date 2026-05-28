const lanes = [
  { title: "Acceso operativo", sub: "0–2 años", roles: ["Pentester generalista", "Web / API junior", "SOC N2 orientado a ataque", "Vulnerability Management"] },
  { title: "Especialización", sub: "2–5 años", roles: ["Web / Mobile App Pentester", "Purple Team Operator", "Red Team Operator", "Adversary Emulation"] },
  { title: "Nivel avanzado", sub: "5+ años", roles: ["Offensive Security Lead", "Director Programa Red Team", "Arquitecto validación ofensiva"] },
];

export function OffensiveProgression() {
  return (
    <div className="glass glass-h rounded-xl p-6 md:p-8 mb-10 relative overflow-hidden border-rose-500/15">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500/50 to-transparent" />
      <div className="text-[9px] font-mono font-bold text-rose-400/80 tracking-[0.2em] uppercase mb-1">Progresión ofensiva</div>
      <h4 className="text-lg font-bold text-white tracking-tight mb-2">La seguridad ofensiva no termina en pentesting</h4>
      <p className="text-[13px] text-slate-400 mb-6 max-w-3xl leading-relaxed">
        El bloque se organiza por madurez profesional. En España el mercado junior está saturado; la escasez real aparece en perfiles con AD, aplicaciones modernas, emulación adversaria y liderazgo.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {lanes.map((l, i) => (
          <div key={l.title} className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-5 hover:border-rose-500/20 transition-colors">
            <div className="flex items-center gap-2 mb-0.5"><span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-rose-500" : i === 1 ? "bg-rose-400" : "bg-rose-300"}`} /><span className="text-sm font-bold text-white">{l.title}</span></div>
            <p className="text-[11px] text-slate-500 mb-3 font-mono">{l.sub}</p>
            <div className="space-y-1.5">{l.roles.map(r => <div key={r} className="text-xs text-slate-300 bg-white/[0.03] rounded px-2.5 py-1.5 border border-white/[0.04]">{r}</div>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
