import { roles } from "./data/roles";
import { Sidebar } from "./components/Sidebar";
import { RoleCard } from "./components/RoleCard";
import { StrategicAnalysis } from "./components/StrategicAnalysis";
import { ComparisonsSection } from "./components/ComparisonsSection";
import { getMaxVolumeSpain } from "./components/VolumeComparison";
import { RoadmapSection } from "./components/RoadmapSection";
import { OffensiveProgression } from "./components/OffensiveProgression";
import { ScrollToTop } from "./components/ScrollToTop";
import { Glossary } from "./components/Glossary";

const blocks = [
  { num: 1, title: "Operaciones de Defensa y Primera Línea", sub: "Monitorización, detección y respuesta operativa 24/7.", tag: "text-sky-400/80", strip: "from-sky-500/50" },
  { num: 2, title: "Identidad, Nube e Infraestructura Crítica", sub: "Control de accesos, seguridad cloud-native y entornos industriales.", tag: "text-indigo-400/80", strip: "from-indigo-500/50" },
  { num: 3, title: "Seguridad Ofensiva y Red Team", sub: "Pentesting, aplicaciones, Red Team, emulación adversaria y liderazgo ofensivo.", tag: "text-rose-400/80", strip: "from-rose-500/50" },
  { num: 4, title: "DFIR, Inteligencia y Gestión de Exposición", sub: "Respuesta a incidentes, forense, inteligencia de amenazas y priorización.", tag: "text-amber-400/80", strip: "from-amber-500/50" },
  { num: 5, title: "Ingeniería, Desarrollo Seguro, IA y Arquitectura", sub: "Pipelines seguros, código, modelos de IA y diseño corporativo.", tag: "text-emerald-400/80", strip: "from-emerald-500/50" },
  { num: 6, title: "Gobernanza, Riesgo, Terceros y Dirección", sub: "Normativa, terceros y liderazgo ante el board.", tag: "text-orange-400/80", strip: "from-orange-500/50" },
];

function SL({ n, t }: { n: string; t: string }) {
  return <div><div className="text-[9px] font-mono font-bold text-slate-500 tracking-[0.25em] uppercase mb-2">Parte {n}</div><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t}</h2></div>;
}

export default function App() {
  const avgSc = (roles.reduce((s, r) => s + r.scarcityValue, 0) / roles.length).toFixed(1);

  return (
    <div className="min-h-screen bg-[#060810] text-slate-300 antialiased noise-bg">
      <ScrollToTop />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 relative z-10">

          {/* HERO */}
          <section id="intro" className="relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-sky-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-10 right-1/3 w-[400px] h-[300px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-36">
              <div className="text-[9px] font-mono font-bold text-slate-600 tracking-[0.3em] uppercase mb-6">Informe Sectorial · Edición 2026</div>
              <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-black text-white tracking-tighter leading-[1.02] mb-8">
                Estudio Maestro<br />del Mercado Laboral<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-300 to-slate-400">en Ciberseguridad</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-14 font-light">
                Radiografía del mercado laboral para <strong className="text-slate-200 font-medium">España, LATAM y Eurozona</strong>. {roles.length} fichas técnicas, {blocks.length} roadmaps y análisis estratégico del mercado oculto.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { l: "Puestos", v: String(roles.length), c: "text-sky-300" },
                  { l: "Bloques", v: String(blocks.length), c: "text-indigo-300" },
                  { l: "Escasez media", v: `${avgSc}x`, c: "text-fuchsia-300" },
                  { l: "Vac. ocultas", v: ">40%", c: "text-amber-300" },
                ].map(s => <div key={s.l} className="border-l-2 border-white/[0.06] pl-4"><div className={`text-3xl md:text-4xl font-extrabold ${s.c} font-mono tracking-tighter`}>{s.v}</div><div className="text-[10px] text-slate-600 mt-1 uppercase tracking-wide">{s.l}</div></div>)}
              </div>
            </div>
            <div className="sep" />
          </section>

          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">

            <section id="metodologia" className="scroll-mt-24 mb-20">
              <SL n="00" t="Metodología" />
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div><h4 className="text-sm font-bold text-slate-200 mb-3">Fuentes primarias</h4><ul className="space-y-2 text-[13px] text-slate-400 leading-relaxed"><li>▸ InfoJobs, LinkedIn, Glassdoor, Tecnoempleo (Q4 2025–Q1 2026).</li><li>▸ 28 headhunters y 14 CISOs entrevistados.</li><li>▸ SANS, ISC2, ENISA Threat Landscape 2025.</li><li>▸ Hays Salary Guide, Page Group Cyber Report.</li></ul></div>
                <div><h4 className="text-sm font-bold text-slate-200 mb-3">Cómo leer el informe</h4><ul className="space-y-2 text-[13px] text-slate-400 leading-relaxed"><li>▸ <strong className="text-slate-200">Escasez</strong>: ofertas / candidatos cualificados.</li><li>▸ <strong className="text-slate-200">Burnout (1–10)</strong>: índice ponderado de desgaste.</li><li>▸ <strong className="text-slate-200">Salarios</strong>: brutos anuales España.</li><li>▸ <strong className="text-slate-200">Realidad cruda</strong>: opinión sin endulzar.</li></ul></div>
              </div>
            </section>

            <div className="sep my-20" />
            <div className="mb-20"><ComparisonsSection /></div>

            <div className="sep my-20" />
            <section className="scroll-mt-24 mb-20">
              <SL n="01" t="Fichas Técnicas por Puesto" />
              <p className="text-slate-500 text-[13px] mt-2 mb-10 max-w-3xl">{roles.length} roles en {blocks.length} bloques, analizados de forma independiente.</p>
              <div className="space-y-16">
                {blocks.map(b => {
                  const br = roles.filter(r => r.block === b.num);
                  return (
                    <section key={b.num} id={`bloque-${b.num}`} className="scroll-mt-24">
                      <div className="mb-8">
                        <div className={`h-[2px] w-20 bg-gradient-to-r ${b.strip} to-transparent mb-4`} />
                        <div className={`text-[10px] font-mono font-bold ${b.tag} tracking-[0.15em] uppercase mb-1`}>Bloque {String(b.num).padStart(2, "0")} · {br.length} puestos</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{b.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{b.sub}</p>
                      </div>
                      {b.num === 3 && <OffensiveProgression />}
                      <div className="space-y-5">{br.map(role => <RoleCard key={role.id} role={role} index={roles.findIndex(r => r.id === role.id) + 1} maxVolumeSpain={getMaxVolumeSpain()} />)}</div>
                    </section>
                  );
                })}
              </div>
            </section>

            <div className="sep my-20" />
            <div className="mb-20"><RoadmapSection /></div>

            <div className="sep my-20" />
            <section className="scroll-mt-24 mb-20">
              <SL n="03" t="Análisis Estratégico Final" />
              <p className="text-slate-500 text-[13px] mt-2 mb-10 max-w-3xl">Mercado oculto, progresión profesional y reglas para no estancarse.</p>
              <StrategicAnalysis />
            </section>

            <div className="sep my-20" />
            <Glossary />
          </div>

          <footer className="border-t border-white/[0.04] py-10 text-center">
            <p className="text-[10px] text-slate-700 font-mono uppercase tracking-[0.15em]">© 2026 · Estudio Maestro Ciberseguridad</p>
            <p className="text-[10px] text-slate-700 mt-1.5 max-w-lg mx-auto px-6">Cifras orientativas · Q4 2025 – Q1 2026 · España, LATAM y Eurozona.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
