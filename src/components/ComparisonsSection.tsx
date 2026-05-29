import { roles } from "../data/roles";
import { VolumeComparison } from "./VolumeComparison";
import { GrowthComparison } from "./GrowthComparison";

type SR = { id: string; junior: number | null; mid: number | null; senior: number | null };
const sal: SR[] = [
  { id: "soc-n1", junior: 23.5, mid: 29, senior: null },{ id: "soc-n2", junior: null, mid: 37.5, senior: 48.5 },
  { id: "tec-perimetral", junior: 27, mid: 39.5, senior: 59 },{ id: "edr-xdr", junior: 29, mid: 42, senior: 61 },
  { id: "ing-siem", junior: 31, mid: 47.5, senior: 70 },{ id: "iam-pam", junior: 31.5, mid: 50, senior: 76 },
  { id: "cloud-sec", junior: 36, mid: 56.5, senior: 90 },{ id: "ot-ics", junior: 34, mid: 53.5, senior: 80 },
  { id: "pentester", junior: 27, mid: 42.5, senior: 67.5 },{ id: "web-pentester", junior: 30, mid: 49, senior: 78.5 },
  { id: "red-team-operator", junior: null, mid: 60, senior: 95 },{ id: "adversary-emulation", junior: null, mid: 66.5, senior: 105 },
  { id: "purple-team", junior: null, mid: 55, senior: 87.5 },{ id: "malware-re", junior: 36, mid: 58, senior: 95 },
  { id: "offsec-lead", junior: null, mid: 82.5, senior: 125 },{ id: "dfir", junior: 32, mid: 50, senior: 82.5 },
  { id: "cti", junior: 30.5, mid: 47.5, senior: 75 },{ id: "vuln-mgmt", junior: 28.5, mid: 42, senior: 63.5 },
  { id: "devsecops", junior: 36, mid: 56.5, senior: 87.5 },{ id: "appsec", junior: 34, mid: 53.5, senior: 84 },
  { id: "ai-sec", junior: 43, mid: 67.5, senior: 112.5 },{ id: "arq-sec", junior: null, mid: 65, senior: 105 },
  { id: "grc", junior: 26.5, mid: 42.5, senior: 70 },{ id: "tprm", junior: 29.5, mid: 45, senior: 71.5 },
  { id: "ciso", junior: null, mid: 107.5, senior: 215 },
];
const rm = new Map(roles.map(r => [r.id, r]));

/* Unified bar — all comparisons use a single neutral bar color so they read clean */
function CB({ label, value, max, suffix, barColor, textColor }: { label: string; value: number; max: number; suffix: string; barColor: string; textColor: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1 items-center gap-2">
        <span className="text-[11px] text-slate-500 truncate">{label}</span>
        <span className={`text-[11px] font-mono font-bold tabular-nums shrink-0 ${textColor}`}>{Number.isInteger(value) ? value : value.toFixed(1)}{suffix}</span>
      </div>
      <div className="h-[3px] bg-white/[0.05] rounded-full overflow-hidden"><div className={`h-full rounded-full ${barColor}`} style={{ width: `${Math.max((value / max) * 100, 2)}%` }} /></div>
    </div>
  );
}

function salBarColor(v: number, mx: number) {
  const pct = v / mx;
  if (pct >= 0.85) return "bg-indigo-400";
  if (pct >= 0.65) return "bg-indigo-500";
  if (pct >= 0.45) return "bg-blue-500";
  if (pct >= 0.30) return "bg-blue-600";
  return "bg-blue-800";
}
function salTextColor(v: number, mx: number) {
  const pct = v / mx;
  if (pct >= 0.65) return "text-indigo-300";
  if (pct >= 0.30) return "text-blue-300";
  return "text-blue-400";
}

function SalCol({ title, field }: { title: string; field: "junior" | "mid" | "senior" }) {
  const rows = sal.map(s => ({ ...s, role: rm.get(s.id), v: s[field] })).filter((r): r is typeof r & { role: NonNullable<typeof r.role>; v: number } => Boolean(r.role && r.v !== null)).sort((a, b) => b.v - a.v);
  const mx = Math.max(...rows.map(r => r.v));
  return (
    <div>
      <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">{title}</div>
      <div className="space-y-3">
        {rows.map(r => <CB key={`${field}-${r.id}`} label={r.role.shortName} value={r.v} max={mx} suffix=" K€" barColor={salBarColor(r.v, mx)} textColor={salTextColor(r.v, mx)} />)}
      </div>
    </div>
  );
}

function Panel({ tag, title, tagColor, children }: { tag: string; title: string; tagColor: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="px-6 md:px-8 py-5 border-b border-white/[0.04]">
        <div className={`text-[9px] font-mono font-bold ${tagColor} tracking-[0.2em] uppercase mb-1`}>{tag}</div>
        <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}

export function ComparisonsSection() {
  const sorted = [...roles].sort((a, b) => b.scarcityValue - a.scarcityValue);
  const maxSc = Math.max(...sorted.map(r => r.scarcityValue));
  const sortedBurn = [...roles].sort((a, b) => b.burnout - a.burnout);

  return (
    <section id="comparativas" className="scroll-mt-24 space-y-6">
      <div>
        <div className="text-[9px] font-mono font-bold text-slate-500 tracking-[0.25em] uppercase mb-2">Comparativas</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Panel Comparativo</h2>
        <p className="text-slate-400 mt-2 max-w-3xl text-[13px]">Lectura rápida: volumen, salarios, escasez, desgaste y crecimiento sectorial.</p>
      </div>
      <VolumeComparison />
      <Panel tag="Salarios" title="Salarios España por Nivel" tagColor="text-indigo-400/70">
        <div className="grid lg:grid-cols-3 gap-8"><SalCol title="Junior 0–2 años" field="junior" /><SalCol title="Mid 2–5 años" field="mid" /><SalCol title="Senior 5+ años" field="senior" /></div>
      </Panel>
      <Panel tag="Escasez" title="Ofertas por Candidato Cualificado" tagColor="text-fuchsia-400/70">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {sorted.map(r => <CB key={`sc-${r.id}`} label={r.shortName} value={r.scarcityValue} max={maxSc} suffix="x" barColor={r.scarcityValue >= 6 ? "bg-fuchsia-500/70" : r.scarcityValue >= 4 ? "bg-indigo-400/60" : "bg-slate-500/50"} textColor={r.scarcityValue >= 6 ? "text-fuchsia-300" : r.scarcityValue >= 4 ? "text-indigo-300" : "text-slate-400"} />)}
        </div>
      </Panel>
      <Panel tag="Estrés" title="Índice de Burnout" tagColor="text-rose-400/70">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {sortedBurn.map(r => <CB key={`bu-${r.id}`} label={r.shortName} value={r.burnout} max={10} suffix="/10" barColor={r.burnout >= 8 ? "bg-rose-500/70" : r.burnout >= 6 ? "bg-amber-500/60" : "bg-emerald-500/50"} textColor={r.burnout >= 8 ? "text-rose-300" : r.burnout >= 6 ? "text-amber-300" : "text-emerald-300"} />)}
        </div>
      </Panel>
      <GrowthComparison />
    </section>
  );
}
