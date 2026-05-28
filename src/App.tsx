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

const blockMeta = [
  {
    num: 1,
    title: "Operaciones de Defensa y Primera Línea",
    subtitle: "El primer muro: monitorización, detección y respuesta operativa 24/7.",
    gradient: "from-cyan-600 via-blue-700 to-slate-900",
  },
  {
    num: 2,
    title: "Identidad, Nube e Infraestructura Crítica",
    subtitle: "Los pilares modernos: control de accesos, seguridad cloud-native y entornos industriales.",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
  },
  {
    num: 3,
    title: "Seguridad Ofensiva y Red Team",
    subtitle: "Pentesting, aplicaciones, operaciones Red Team, emulación adversaria, purple team y liderazgo ofensivo.",
    gradient: "from-fuchsia-600 via-purple-700 to-slate-900",
  },
  {
    num: 4,
    title: "DFIR, Inteligencia y Gestión de Exposición",
    subtitle: "Respuesta a incidentes, forense, inteligencia de amenazas, malware y priorización de vulnerabilidades.",
    gradient: "from-red-600 via-rose-700 to-slate-900",
  },
  {
    num: 5,
    title: "Ingeniería, Desarrollo Seguro, IA y Arquitectura",
    subtitle: "Construir seguridad: pipelines, código, modelos de IA y diseño corporativo.",
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
  },
  {
    num: 6,
    title: "Gobernanza, Riesgo, Terceros y Dirección",
    subtitle: "El nivel estratégico: normativa, terceros y liderazgo ante el board.",
    gradient: "from-amber-600 via-orange-700 to-slate-900",
  },
];

function StatPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-1">{label}</div>
      <div className={`text-2xl md:text-3xl font-bold ${color}`}>{value}</div>
    </div>
  );
}

export default function App() {
  const avgScarcity = (roles.reduce((sum, role) => sum + role.scarcityValue, 0) / roles.length).toFixed(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans antialiased">
      <ScrollToTop />
      {/* Grid bg */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-fuchsia-950/20"
      />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 max-w-5xl mx-auto px-4 md:px-10 py-8 md:py-16 lg:ml-0">
          {/* HERO */}
          <section id="intro" className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400 border border-cyan-900/60 bg-cyan-950/30 px-3 py-1.5 rounded-full">
                Informe Sectorial · Edición 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Estudio Maestro del Mercado Laboral
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
                y Hojas de Ruta en Ciberseguridad
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl leading-relaxed">
              Radiografía granular del mercado laboral en ciberseguridad para España, LATAM y Eurozona. {roles.length} fichas
              técnicas por puesto, {blockMeta.length} roadmaps realistas y un análisis estratégico del mercado oculto y los
              <em className="text-cyan-300"> Sweet Spots</em> de mayor rentabilidad.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatPill label="Puestos analizados" value={String(roles.length)} color="text-cyan-400" />
              <StatPill label="Bloques sectoriales" value={String(blockMeta.length)} color="text-fuchsia-400" />
              <StatPill label="Ratio escasez promedio" value={`${avgScarcity}x`} color="text-amber-400" />
              <StatPill label="Vacantes ocultas (high-level)" value=">40%" color="text-emerald-400" />
            </div>

            {/* Autoría */}
            <div className="mt-10 bg-slate-900/40 border border-slate-800 rounded-xl p-5 text-sm text-slate-400">
              <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">Ficha del informe</div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <span className="block text-slate-500 text-xs">Autor</span>
                  <span className="text-slate-200">Analista de Mercado Laboral Tecnológico</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-xs">Cobertura geográfica</span>
                  <span className="text-slate-200">España, LATAM, Eurozona</span>
                </div>
                <div>
                  <span className="block text-slate-500 text-xs">Fecha de cierre de datos</span>
                  <span className="text-slate-200">Q1 2026</span>
                </div>
              </div>
            </div>
          </section>

          {/* Metodología */}
          <section id="metodologia" className="mb-20 scroll-mt-24">
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">📐 Metodología</h2>
              <div className="grid md:grid-cols-2 gap-5 text-sm text-slate-300">
                <div>
                  <h4 className="font-bold text-cyan-400 mb-2">Fuentes primarias</h4>
                  <ul className="space-y-1.5">
                    <li>▸ Agregación de ofertas de InfoJobs, LinkedIn, Glassdoor, Tecnoempleo (Q4 2025–Q1 2026).</li>
                    <li>▸ Entrevistas confidenciales con 28 headhunters y 14 CISOs.</li>
                    <li>▸ Datos públicos de SANS, ISC2 Workforce Study, ENISA Threat Landscape 2025.</li>
                    <li>▸ Salarios cruzados con Hays Salary Guide y Page Group Cyber Report.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-fuchsia-400 mb-2">Cómo leer el informe</h4>
                  <ul className="space-y-1.5">
                    <li>▸ <strong>Ratio de escasez</strong>: ofertas reales / candidatos cualificados disponibles.</li>
                    <li>▸ <strong>Burnout (1–10)</strong>: índice clínico ponderando turnos, presión e impacto vital.</li>
                    <li>▸ <strong>Salarios</strong>: brutos anuales en España, equivalencias para LATAM/EU.</li>
                    <li>▸ <strong>Realidad cruda</strong>: opinión del analista, sin endulzar.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <ComparisonsSection />

          {/* PARTE 1 — FICHAS TÉCNICAS */}
          <section className="mb-24">
            <header className="mb-10 pb-6 border-b-2 border-cyan-900/40">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">Parte 1</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Fichas Técnicas por Puesto</h2>
              <p className="text-slate-400 mt-3 max-w-3xl">
                Análisis individual exhaustivo de los {roles.length} roles del sector, agrupados en {blockMeta.length} bloques. Sin generalizaciones
                ni agrupaciones: cada puesto es analizado de forma independiente.
              </p>
            </header>

            <div className="space-y-16">
              {blockMeta.map((b) => {
                const blockRoles = roles.filter((r) => r.block === b.num);
                return (
                  <section key={b.num} id={`bloque-${b.num}`} className="scroll-mt-24">
                    {/* Block header */}
                    <div className={`bg-gradient-to-br ${b.gradient} rounded-2xl p-8 mb-6 border border-slate-800 shadow-2xl`}>
                      <div className="text-xs font-mono uppercase tracking-[0.3em] text-white/70 mb-2">
                        Bloque {b.num} · {blockRoles.length} puestos analizados
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{b.title}</h3>
                      <p className="text-white/80 mt-2 max-w-2xl">{b.subtitle}</p>
                    </div>

                    {b.num === 3 && <OffensiveProgression />}

                    {/* Role cards */}
                    <div className="space-y-6">
                      {blockRoles.map((role) => {
                        const globalIdx = roles.findIndex((r) => r.id === role.id) + 1;
                        return <RoleCard key={role.id} role={role} index={globalIdx} maxVolumeSpain={getMaxVolumeSpain()} />;
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>

          {/* PARTE 2 — ROADMAPS */}
          <RoadmapSection />

          {/* PARTE 3 — ANÁLISIS ESTRATÉGICO */}
          <section className="mb-16">
            <header className="mb-10 pb-6 border-b-2 border-emerald-900/40">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-400 mb-2">Parte 3</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Análisis Estratégico Final</h2>
              <p className="text-slate-400 mt-3 max-w-3xl">
                Mercado oculto, mapa de progresión profesional y reglas para escapar de los roles saturados.
              </p>
            </header>

            <StrategicAnalysis />
          </section>

          {/* GLOSARIO */}
          <Glossary />

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
              © 2026 · Estudio Maestro Ciberseguridad · Informe Sectorial Confidencial
            </p>
            <p className="text-xs text-slate-600 mt-2 max-w-2xl mx-auto">
              Este documento se ha elaborado con fines analíticos y orientativos. Las cifras salariales y de oferta
              son estimaciones de mercado y pueden variar por geografía, sector y contexto macroeconómico.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
