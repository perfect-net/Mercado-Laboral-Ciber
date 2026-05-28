const lanes = [
  {
    title: "Acceso operativo",
    subtitle: "Primeros 0-2 años. Mucha ejecución guiada y reporting.",
    tone: "border-cyan-500 text-cyan-300",
    roles: ["Pentester generalista", "Web/API junior", "SOC N2 orientado a ataque", "VM como puerta lateral"],
  },
  {
    title: "Especialización",
    subtitle: "2-5 años. Diferenciación técnica y menor competencia.",
    tone: "border-fuchsia-500 text-fuchsia-300",
    roles: ["Web/Mobile Application Pentester", "Purple Team", "Red Team Operator", "Adversary Emulation"],
  },
  {
    title: "Nivel avanzado / experto",
    subtitle: "5+ años. Mercado pequeño, salarios altos y reputación crítica.",
    tone: "border-amber-500 text-amber-300",
    roles: ["Offensive Security Lead", "Programa Red Team", "Estrategia ofensiva", "Validacion de controles"],
  },
];

const auditRows = [
  ["Pentester", "Se mantiene", "Rol de entrada y base operativa, no techo profesional."],
  ["DFIR / CTI / Malware / VM", "Reubicados", "Encajan mejor en respuesta, inteligencia y gestion de exposicion que en ofensiva pura."],
  ["Web + Mobile", "Fusionados", "Movil existe, pero en Espana suele ser capacidad dentro de App Pentest, no siempre puesto aislado."],
  ["Red Team / Emulacion / Purple", "Se mantienen", "Son las capas avanzadas que faltaban y explican que pentesting no es el techo."],
  ["Exploit Dev / Social Eng.", "Sin ficha propia", "Nichos o capacidades dentro de Red Team; no tienen mercado suficiente en España como puesto independiente."],
];

export function OffensiveProgression() {
  return (
    <div className="mb-6 space-y-5">
      <div className="bg-gradient-to-br from-slate-950 via-purple-950/25 to-slate-950 border border-purple-900/40 rounded-2xl p-6 shadow-2xl">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-400 mb-2">
          Auditoria del bloque ofensivo
        </div>
        <h4 className="text-2xl font-bold text-white mb-3">La seguridad ofensiva no termina en pentesting</h4>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          El bloque se ha separado por madurez profesional: acceso, especialización y nivel experto. En España el
          mercado junior sigue saturado, pero la escasez aparece en perfiles capaces de trabajar con Active Directory,
          aplicaciones modernas, emulación adversaria, detección y liderazgo de programa ofensivo.
        </p>
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {lanes.map((lane) => (
            <div key={lane.title} className={`bg-slate-950/70 border-l-4 ${lane.tone.split(" ")[0]} border-y border-r border-y-slate-800 border-r-slate-800 rounded-xl p-4`}>
              <h5 className={`font-bold ${lane.tone.split(" ")[1]} mb-1`}>{lane.title}</h5>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">{lane.subtitle}</p>
              <div className="space-y-1.5">
                {lane.roles.map((role) => (
                  <div key={role} className="text-xs text-slate-200 bg-slate-900/80 border border-slate-800 rounded-md px-2.5 py-1.5">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-950/60 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-800">
          <h5 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Criterio de reorganizacion</h5>
        </div>
        <div className="divide-y divide-slate-800/70">
          {auditRows.map(([role, status, note]) => (
            <div key={role} className="grid md:grid-cols-[180px_130px_1fr] gap-3 px-5 py-3 text-sm">
              <span className="font-semibold text-slate-200">{role}</span>
              <span className="font-mono text-xs text-cyan-300">{status}</span>
              <span className="text-slate-400 leading-relaxed">{note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}