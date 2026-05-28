import { useState } from "react";
import { roles } from "../data/roles";

const blocks = [
  { num: 1, name: "Operaciones de Defensa", dot: "bg-sky-400", text: "text-sky-400/90", glow: "shadow-sky-400/40" },
  { num: 2, name: "Identidad, Nube e Infra", dot: "bg-indigo-400", text: "text-indigo-400/90", glow: "shadow-indigo-400/40" },
  { num: 3, name: "Ofensiva y Red Team", dot: "bg-rose-400", text: "text-rose-400/90", glow: "shadow-rose-400/40" },
  { num: 4, name: "DFIR e Inteligencia", dot: "bg-amber-400", text: "text-amber-400/90", glow: "shadow-amber-400/40" },
  { num: 5, name: "Ingeniería, AppSec e IA", dot: "bg-emerald-400", text: "text-emerald-400/90", glow: "shadow-emerald-400/40" },
  { num: 6, name: "Gobernanza y Dirección", dot: "bg-orange-400", text: "text-orange-400/90", glow: "shadow-orange-400/40" },
];

function NL({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return <a href={href} onClick={onClick} className="block px-4 py-1.5 text-xs text-slate-500 hover:text-slate-200 hover:bg-white/[0.03] rounded-md transition-colors">{children}</a>;
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="lg:hidden fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center bg-[#0a0d15]/90 backdrop-blur border border-white/10 text-slate-300 rounded-lg shadow-xl" aria-label="Menú">
        {open ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>}
      </button>
      {open && <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={close} />}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#060810] border-r border-white/[0.04] overflow-y-auto z-40 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="px-6 py-6 border-b border-white/[0.04]">
          <div className="text-[9px] font-mono font-bold text-slate-600 tracking-[0.3em] uppercase mb-2">Informe · 2026</div>
          <div className="text-base font-bold text-white tracking-tight leading-snug">Estudio Maestro<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">Ciberseguridad</span></div>
        </div>
        <nav className="p-4 space-y-0.5">
          <NL href="#intro" onClick={close}>Resumen Ejecutivo</NL>
          <NL href="#metodologia" onClick={close}>Metodología</NL>
          <NL href="#comparativas" onClick={close}>Panel Comparativo</NL>
          <div className="pt-4 pb-1 px-4 text-[8px] font-mono font-bold uppercase text-slate-600 tracking-[0.2em]">Fichas Técnicas</div>
          {blocks.map(b => (
            <div key={b.num} className="mb-1.5">
              <a href={`#bloque-${b.num}`} onClick={close} className={`flex items-center gap-2.5 px-4 py-1.5 text-xs font-semibold ${b.text} hover:text-white hover:bg-white/[0.04] rounded-md transition-colors`}>
                <span className={`w-1.5 h-1.5 rounded-full ${b.dot} shadow-[0_0_5px] ${b.glow}`} />{b.name}
              </a>
              <div className="ml-8 border-l border-white/[0.04] pl-3 space-y-0 mt-0.5">
                {roles.filter(r => r.block === b.num).map(r => <a key={r.id} href={`#${r.id}`} onClick={close} className="block py-[3px] text-[11px] text-slate-600 hover:text-slate-300 transition-colors">{r.shortName}</a>)}
              </div>
            </div>
          ))}
          <div className="pt-4 pb-1 px-4 text-[8px] font-mono font-bold uppercase text-slate-600 tracking-[0.2em]">Roadmaps</div>
          {blocks.map(b => <a key={b.num} href={`#roadmap-${b.num}`} onClick={close} className={`flex items-center gap-2.5 px-4 py-1.5 text-xs ${b.text} opacity-70 hover:opacity-100 hover:bg-white/[0.03] rounded-md transition-all`}><span className={`w-1 h-1 rounded-full ${b.dot}`} />{b.name}</a>)}
          <div className="pt-4 pb-1 px-4 text-[8px] font-mono font-bold uppercase text-slate-600 tracking-[0.2em]">Estrategia</div>
          <NL href="#mercado-oculto" onClick={close}>Mercado Oculto</NL>
          <NL href="#career-paths" onClick={close}>Progresión Profesional</NL>
          <NL href="#conclusion" onClick={close}>Conclusiones</NL>
          <NL href="#glosario" onClick={close}>Glosario Técnico</NL>
        </nav>
      </aside>
    </>
  );
}
