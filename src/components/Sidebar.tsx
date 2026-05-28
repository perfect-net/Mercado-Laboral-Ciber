import { useState } from "react";
import { roles } from "../data/roles";

const blocks = [
  { num: 1, name: "Operaciones de Defensa", icon: "🛡️", color: "from-cyan-500 to-blue-600" },
  { num: 2, name: "Identidad, Nube e Infra", icon: "☁️", color: "from-blue-500 to-indigo-600" },
  { num: 3, name: "Ofensiva y Red Team", icon: "⚔️", color: "from-fuchsia-500 to-purple-600" },
  { num: 4, name: "DFIR e Inteligencia", icon: "🔍", color: "from-red-500 to-rose-600" },
  { num: 5, name: "Ingeniería, AppSec e IA", icon: "⚙️", color: "from-emerald-500 to-teal-600" },
  { num: 6, name: "Gobernanza y Dirección", icon: "⚖️", color: "from-amber-500 to-orange-600" },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-slate-900 border border-slate-700 text-white p-3 rounded-xl shadow-xl"
        aria-label="Menú"
      >
        {open ? "✕" : "☰"}
      </button>

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-80 bg-slate-950 border-r border-slate-800 overflow-y-auto z-40 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-slate-800">
          <div className="text-[10px] font-mono text-cyan-400 tracking-widest mb-1">INFORME · 2026</div>
          <h1 className="text-lg font-bold text-white leading-tight">
            Estudio Maestro
            <br />
            <span className="text-cyan-400">Ciberseguridad</span>
          </h1>
        </div>

        <nav className="p-4 space-y-1">
          <a
            href="#intro"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
          >
            🏠 Resumen Ejecutivo
          </a>
          <a
            href="#metodologia"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
          >
            📐 Metodología
          </a>
          <a
            href="#comparativas"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
          >
            📊 Comparativas
          </a>

          <div className="pt-3 pb-1 px-3 text-[10px] font-mono uppercase text-slate-500 tracking-widest">
            Parte 1 · Fichas Técnicas
          </div>

          {blocks.map((b) => (
            <div key={b.num} className="mb-2">
              <a
                href={`#bloque-${b.num}`}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${b.color} mb-1`}
              >
                BLOQUE {b.num} — {b.name}
              </a>
              <ul className="pl-3 space-y-0.5 border-l border-slate-800 ml-2">
                {roles
                  .filter((r) => r.block === b.num)
                  .map((r) => (
                    <li key={r.id}>
                      <a
                        href={`#${r.id}`}
                        onClick={() => setOpen(false)}
                        className="block pl-3 py-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                      >
                        {r.shortName}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div className="pt-3 pb-1 px-3 text-[10px] font-mono uppercase text-slate-500 tracking-widest">
            Parte 2 · Roadmaps
          </div>
          {blocks.map((b) => (
            <a
              key={b.num}
              href={`#roadmap-${b.num}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg flex items-center gap-2"
            >
              <span className="text-base">{b.icon}</span>
              <span>{b.name}</span>
            </a>
          ))}

          <div className="pt-3 pb-1 px-3 text-[10px] font-mono uppercase text-slate-500 tracking-widest">
            Parte 3 · Estrategia
          </div>
          <a
            href="#mercado-oculto"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
          >
            🕵️ Mercado Oculto
          </a>
          <a
            href="#career-paths"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
          >
            🚀 Mapa de Progresión
          </a>
          <a
            href="#conclusion"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
          >
            📝 Conclusión
          </a>

          <div className="pt-3 pb-1 px-3 text-[10px] font-mono uppercase text-slate-500 tracking-widest">
            Referencia
          </div>
          <a
            href="#glosario"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
          >
            📖 Glosario Técnico
          </a>
        </nav>

        <div className="p-6 border-t border-slate-800 mt-4">
          <p className="text-[10px] text-slate-500 leading-relaxed">
            Informe sectorial elaborado con datos de mercado de España, LATAM y Eurozona. Cifras orientativas basadas en
            agregadores de ofertas (InfoJobs, LinkedIn, Glassdoor) y entrevistas con headhunters Q4 2025–Q1 2026.
          </p>
        </div>
      </aside>
    </>
  );
}
