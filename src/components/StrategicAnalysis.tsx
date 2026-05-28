function Panel({ tag, title, sub, children }: { tag: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="px-6 md:px-8 py-5 border-b border-white/[0.04]">
        <div className="text-[9px] font-mono font-bold text-slate-500 tracking-[0.15em] uppercase mb-1">{tag}</div>
        <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
        {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}

const catColor: Record<string, string> = {
  "🔴 Trampa": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "🔴 Saturado (jr)": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "🟡 Trampolín": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "🟢 Sólido": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "🟢 Infravalorado": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "🟢 Emergente": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "💎 Sweet Spot": "text-cyan-300 bg-cyan-500/8 border-cyan-500/15",
  "💎 Top": "text-violet-300 bg-violet-500/8 border-violet-500/15",
  "🚀 Frontera": "text-fuchsia-300 bg-fuchsia-500/8 border-fuchsia-500/15",
  "👑 Cima": "text-amber-200 bg-amber-500/8 border-amber-500/15",
};

export function StrategicAnalysis() {
  return (
    <div className="space-y-6">
      <section id="mercado-oculto" className="scroll-mt-24">
        <Panel tag="Parte 03 · §1" title="El Mercado Oculto en Ciberseguridad" sub="Cómo se cubren los puestos críticos sin publicar">
          <div className="space-y-6">
            <blockquote className="border-l-2 border-white/10 pl-4 text-[15px] text-slate-200 font-serif italic leading-[1.7]">"Más del 40% de las vacantes high-level nunca se publican."</blockquote>
            <p className="text-[13px] text-slate-400 leading-relaxed">Hay <strong className="text-slate-200">decenas de miles de candidatos junior</strong> peleándose por ofertas públicas, mientras los puestos que cambian una carrera se mueven en canales cerrados.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[["01","Headhunters de boutique","Exclusividad. 25–35% del salario a cambio de no publicar."],["02","Referrals internos","+55% de plazas SOC N2, DFIR y Pentest senior por recomendación."],["03","LinkedIn Recruiter activo","Buscan por skill exacto. Sin keywords, invisible."],["04","Comunidades cerradas","Slack, Discord. Ofertas 7–10 días antes de publicarse."]].map(([n,t,b]) => (
                <div key={n} className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4 hover:border-white/[0.08] transition-colors">
                  <div className="text-[9px] font-mono text-slate-600 mb-1">MECANISMO {n}</div>
                  <h4 className="text-sm font-bold text-white mb-1">{t}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </section>

      <section id="career-paths" className="scroll-mt-24">
        <Panel tag="Parte 03 · §2" title="Mapa de Progresión Profesional" sub="De roles saturados a Sweet Spots de alta rentabilidad">
          <div className="space-y-8">
            <p className="text-[13px] text-slate-400 leading-relaxed">Algunos roles son <strong className="text-rose-300">trampas</strong>, otros <strong className="text-amber-300">trampolines</strong> y unos pocos <strong className="text-cyan-300">Sweet Spots</strong>.</p>

            <div className="overflow-x-auto">
              <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-3">Termómetro · Todos los puestos</div>
              <table className="w-full text-[13px] min-w-[640px]">
                <thead><tr className="border-b border-white/[0.06] text-left text-[9px] uppercase text-slate-600 font-mono tracking-wider"><th className="py-2 pr-3">Puesto</th><th className="py-2 pr-3">Categoría</th><th className="py-2 pr-3">Techo</th><th className="py-2">Lectura</th></tr></thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {[
                    ["SOC N1","🔴 Trampa","~30K","Salir a N2 en ≤18 meses."],["Pentester","🔴 Saturado (jr)","~80K","Junior ~30K. Senior OSCP+AD ~80K."],
                    ["GRC Junior","🟡 Trampolín","~30K","3 años Big4 → cliente final +30%."],["Sec. Perimetral","🟢 Sólido","~68K","Generación envejeciendo."],
                    ["EDR/XDR","🟢 Sólido","~70K","Mercado dorado 2026."],["SOC N2","🟢 Sólido","~55K","Pivote a DFIR o Cloud."],
                    ["SIEM Engineer","🟢 Sólido","~82K","Mejor ROI defensivo."],["Vuln Mgmt","🟢 Infravalorado","~75K","Puerta a CTI o AppSec."],
                    ["Web/Mobile PT","💎 Sweet Spot","~95K","Más empleable que Red Team."],["Purple Team","💎 Sweet Spot","~105K","Sin elegir bando."],
                    ["CTI","💎 Sweet Spot","~90K","Geopolítica + técnica."],["Adv. Emulation","💎 Sweet Spot","~125K","CTI + Red Team + MITRE."],
                    ["Red Teamer","💎 Sweet Spot","~115K","OPSEC adversarial."],["Malware RE","💎 Sweet Spot","~115K","Alta barrera técnica."],
                    ["IAM/PAM","💎 Sweet Spot","~90K","Irreemplazable."],["Cloud Sec","💎 Sweet Spot","~110K","Mejor ROI global."],
                    ["DevSecOps","💎 Sweet Spot","~105K","Unicornio."],["AppSec","💎 Sweet Spot","~100K","Oro si vienes de dev."],
                    ["OT/ICS","💎 Sweet Spot","~95K","Si toleras viajar."],["TPRM","🟢 Emergente","~85K","DORA lo disparó."],
                    ["OffSec Lead","💎 Top","~150K","Gestión + presupuesto."],["AI Security","🚀 Frontera","~140K+","+220% YoY."],
                    ["Arquitecto","💎 Top","~130K","Tras 7–10 años."],["CISO","👑 Cima","~280K","12–15 años carrera."],
                  ].map(r => (
                    <tr key={r[0]} className="hover:bg-white/[0.015] transition-colors">
                      <td className="py-2 pr-3 font-semibold text-slate-200">{r[0]}</td>
                      <td className="py-2 pr-3 whitespace-nowrap"><span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${catColor[r[1]] || "text-slate-400"}`}>{r[1]}</span></td>
                      <td className="py-2 pr-3 font-mono font-bold text-emerald-300/80">{r[2]}</td>
                      <td className="py-2 text-slate-500 text-xs">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-3">Progresiones cruzadas</div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  ["SOC N1","SOC N2 (2a)","Cloud / DFIR / SIEM","3–4a","AZ-500 / GCFA"],
                  ["SOC N2","VM","CTI / Purple / AppSec","4–6a","GCTI / BTL2"],
                  ["Pentester","OSCP + consultora","Red Team / Adv. Emulation","4–7a","OSEP / CRTO"],
                  ["Web PT","OSWE + API","AppSec / DevSecOps","3–5a","OSWE / CKS"],
                  ["VM / EDR","Python + Cloud","Exposure / Cloud Sec","3–5a","AZ-500 / Wiz"],
                  ["GRC Jr","3a + CISA","GRC Sr / TPRM / BISO","5–8a","CISA / CISM"],
                  ["DevSecOps","Portfolio IA","AI Security","3–5a","AI-102 + OWASP"],
                  ["Senior 8+","CISSP + MBA","CISO","10–15a","CISSP / MBA"],
                ].map(([f,v,t,ti,c]) => (
                  <div key={f} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-4 flex gap-3 hover:border-white/[0.07] transition-colors">
                    <div className="flex flex-col items-center gap-1.5 pt-0.5 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-slate-500" /><div className="w-px h-5 bg-white/[0.06]" /><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /></div>
                    <div className="flex-1 min-w-0"><div className="flex justify-between text-xs"><span className="font-bold text-slate-200">{f}</span><span className="text-slate-600 font-mono">{ti}</span></div><div className="text-[10px] text-slate-600 my-0.5">↓ {v}</div><div className="text-sm font-bold text-slate-100">{t}</div><div className="text-[9px] text-slate-600 font-mono mt-1">Certs: {c}</div></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-3">Itinerarios estratégicos</div>
              <div className="space-y-3">
                {[
                  { t: "Blue → Cloud → Arquitectura", s: "22K → 100K+", steps: ["SOC N1","SOC N2","Cloud Sec","Senior Cloud/DevSecOps","Arquitecto"], c: "border-sky-500/30" },
                  { t: "Ofensivo Realista", s: "24K → 125K+", steps: ["VM","Pentester/Web PT","Red Team","Adv.Emulation/Purple","OffSec Lead"], c: "border-rose-500/30" },
                  { t: "GRC → BISO → CISO", s: "23K → 200K+", steps: ["GRC Jr Big4","GRC Sr","Head GRC/TPRM","BISO","CISO"], c: "border-orange-500/30" },
                  { t: "Dev → DevSecOps → AI", s: "32K → 140K+", steps: ["Backend","DevSecOps Jr","DevSecOps Sr+IA","AI Sec Eng","Principal SecEng"], c: "border-emerald-500/30" },
                  { t: "Defensa → Respuesta → Intel", s: "22K → 120K+", steps: ["SOC N1","SOC N2/DFIR Jr","DFIR Sr/Malware","CTI Lead/IR Mgr","Head Threat Intel"], c: "border-amber-500/30" },
                ].map(it => (
                  <div key={it.t} className={`border-l-2 ${it.c} pl-4 py-1`}>
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-sm font-bold text-white">{it.t}</h4>
                      <span className="text-[10px] font-mono text-emerald-300/80 bg-emerald-500/8 border border-emerald-500/15 rounded px-2 py-0.5">{it.s}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">{it.steps.map((s, i) => <span key={i} className="text-[11px] text-slate-400 flex items-center gap-1">{i > 0 && <span className="text-slate-700 font-mono">→</span>}<span className="bg-white/[0.03] border border-white/[0.05] rounded px-2 py-0.5">{s}</span></span>)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-5">
              <h4 className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">Reglas de oro</h4>
              <ul className="space-y-2 text-[13px] text-slate-400 leading-relaxed">
                <li>▸ <strong className="text-slate-200">Cambia de empresa cada 2–3 años</strong> hasta los 35.</li>
                <li>▸ <strong className="text-slate-200">Especialízate vertical.</strong> Top-tier en CyberArk &gt; mediocre en 5 herramientas.</li>
                <li>▸ <strong className="text-slate-200">Inglés C1 multiplica salario ×1.4.</strong></li>
                <li>▸ <strong className="text-slate-200">Marca personal pública.</strong> Una charla en RootedCON vale más que tres certs.</li>
                <li>▸ <strong className="text-slate-200">Traduce riesgo técnico a euros.</strong> Quien lo hace llega a CISO.</li>
                <li>▸ <strong className="text-slate-200">Certs abren puertas, portfolio las cierra.</strong></li>
              </ul>
            </div>
          </div>
        </Panel>
      </section>

      <section id="conclusion" className="scroll-mt-24">
        <Panel tag="Cierre" title="Conclusiones del Analista">
          <div className="space-y-4 text-[13px] text-slate-400 leading-relaxed">
            <p>El mercado 2026 no está saturado: está <strong className="text-slate-200">mal distribuido</strong>. Escasez + desempleo junior = <em className="text-slate-300">especialización</em>.</p>
            <p>La IA <strong className="text-slate-200">no destruye puestos</strong>: redistribuye valor. Tier 1 pierde plazas; juicio, arquitectura e integración crecen.</p>
            <p>Recomendación: <strong className="text-slate-200">elegir un trampolín</strong>, fijar salida en 18–24 meses y apuntar a un Sweet Spot. Quien siga este camino alcanzará <strong className="text-white">70K€ antes de los 30</strong>.</p>
            <p className="text-slate-500 font-serif italic text-[15px] leading-[1.7] pt-4 border-t border-white/[0.04]">Este informe es una radiografía y una hoja de ruta, no una promesa. La ciberseguridad sigue siendo un sector duro, exigente y meritocrático.</p>
          </div>
        </Panel>
      </section>
    </div>
  );
}
