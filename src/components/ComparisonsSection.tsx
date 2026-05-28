import { roles } from "../data/roles";
import { VolumeComparison } from "./VolumeComparison";

type SalaryRow = {
  id: string;
  junior: number | null;
  mid: number | null;
  senior: number | null;
};

const salaryRows: SalaryRow[] = [
  { id: "soc-n1", junior: 23.5, mid: 29, senior: null },
  { id: "soc-n2", junior: null, mid: 37.5, senior: 48.5 },
  { id: "tec-perimetral", junior: 27, mid: 39.5, senior: 59 },
  { id: "edr-xdr", junior: 29, mid: 42, senior: 61 },
  { id: "ing-siem", junior: 31, mid: 47.5, senior: 70 },
  { id: "iam-pam", junior: 31.5, mid: 50, senior: 76 },
  { id: "cloud-sec", junior: 36, mid: 56.5, senior: 90 },
  { id: "ot-ics", junior: 34, mid: 53.5, senior: 80 },
  { id: "pentester", junior: 27, mid: 42.5, senior: 67.5 },
  { id: "web-pentester", junior: 30, mid: 49, senior: 78.5 },
  { id: "red-team-operator", junior: null, mid: 60, senior: 95 },
  { id: "adversary-emulation", junior: null, mid: 66.5, senior: 105 },
  { id: "purple-team", junior: null, mid: 55, senior: 87.5 },
  { id: "malware-re", junior: 36, mid: 58, senior: 95 },
  { id: "offsec-lead", junior: null, mid: 82.5, senior: 125 },
  { id: "dfir", junior: 32, mid: 50, senior: 82.5 },
  { id: "cti", junior: 30.5, mid: 47.5, senior: 75 },
  { id: "vuln-mgmt", junior: 28.5, mid: 42, senior: 63.5 },
  { id: "devsecops", junior: 36, mid: 56.5, senior: 87.5 },
  { id: "appsec", junior: 34, mid: 53.5, senior: 84 },
  { id: "ai-sec", junior: 43, mid: 67.5, senior: 112.5 },
  { id: "arq-sec", junior: null, mid: 65, senior: 105 },
  { id: "grc", junior: 26.5, mid: 42.5, senior: 70 },
  { id: "tprm", junior: 29.5, mid: 45, senior: 71.5 },
  { id: "ciso", junior: null, mid: 107.5, senior: 215 },
];

const roleById = new Map(roles.map((role) => [role.id, role]));

function getSalaryColor(value: number) {
  if (value >= 120) return "from-fuchsia-500 to-red-500";
  if (value >= 90) return "from-purple-500 to-fuchsia-500";
  if (value >= 70) return "from-emerald-400 to-emerald-600";
  if (value >= 50) return "from-cyan-400 to-blue-500";
  if (value >= 35) return "from-amber-400 to-orange-500";
  return "from-orange-500 to-red-500";
}

function getScarcityColor(value: number) {
  if (value >= 7) return "from-red-500 to-fuchsia-500";
  if (value >= 5) return "from-fuchsia-500 to-purple-500";
  if (value >= 3.5) return "from-cyan-400 to-blue-500";
  if (value >= 2) return "from-amber-400 to-orange-500";
  return "from-slate-500 to-slate-600";
}

function getStressColor(value: number) {
  if (value >= 8) return "from-red-500 to-red-700";
  if (value >= 6) return "from-orange-400 to-red-500";
  if (value >= 5) return "from-amber-400 to-orange-500";
  return "from-emerald-400 to-green-600";
}

function ComparisonBar({
  label,
  value,
  max,
  suffix,
  color,
  block,
}: {
  label: string;
  value: number;
  max: number;
  suffix: string;
  color: string;
  block?: number;
}) {
  const pct = Math.max((value / max) * 100, 2);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-1">
        <div className="flex items-center gap-2 min-w-0">
          {block ? (
            <span className="shrink-0 text-[9px] font-mono text-slate-500 border border-slate-800 rounded px-1.5 py-0.5">
              B{block}
            </span>
          ) : null}
          <span className="text-xs text-slate-300 truncate" title={label}>
            {label}
          </span>
        </div>
        <span className="shrink-0 text-xs font-mono font-bold text-white">
          {Number.isInteger(value) ? value : value.toFixed(1)}{suffix}
        </span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function SalaryColumn({ title, field }: { title: string; field: keyof Pick<SalaryRow, "junior" | "mid" | "senior"> }) {
  const rows = salaryRows
    .map((row) => ({ ...row, role: roleById.get(row.id), value: row[field] }))
    .filter((row): row is SalaryRow & { role: NonNullable<ReturnType<typeof roleById.get>>; value: number } =>
      Boolean(row.role && row.value !== null)
    )
    .sort((a, b) => b.value - a.value);
  const max = Math.max(...rows.map((row) => row.value));

  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
      <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-4">{title}</h4>
      <div className="space-y-3">
        {rows.map(({ role, value }) => (
          <ComparisonBar
            key={`${field}-${role.id}`}
            label={role.shortName}
            value={value}
            max={max}
            suffix="K"
            color={getSalaryColor(value)}
            block={role.block}
          />
        ))}
      </div>
    </div>
  );
}

function SalaryComparison() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <header className="px-6 md:px-8 py-5 bg-gradient-to-r from-emerald-950/50 to-slate-900 border-b border-slate-800">
        <div className="text-xs font-mono text-emerald-400 tracking-widest mb-1">COMPARATIVA SALARIAL</div>
        <h3 className="text-xl md:text-2xl font-bold text-white">Salarios España por Nivel</h3>
        <p className="text-sm text-slate-400 mt-1">
          Barras sobre el punto medio del rango bruto anual en España. Valores en miles de euros. Los roles sin nivel
          junior real se excluyen de esa columna.
        </p>
      </header>
      <div className="p-6 md:p-8 grid lg:grid-cols-3 gap-5">
        <SalaryColumn title="Junior 0-2 años" field="junior" />
        <SalaryColumn title="Mid 2-5 años" field="mid" />
        <SalaryColumn title="Senior 5+ años" field="senior" />
      </div>
    </div>
  );
}

function ScarcityComparison() {
  const sorted = [...roles].sort((a, b) => b.scarcityValue - a.scarcityValue);
  const max = Math.max(...sorted.map((role) => role.scarcityValue));

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <header className="px-6 md:px-8 py-5 bg-gradient-to-r from-fuchsia-950/50 to-slate-900 border-b border-slate-800">
        <div className="text-xs font-mono text-fuchsia-400 tracking-widest mb-1">COMPARATIVA DE ESCASEZ</div>
        <h3 className="text-xl md:text-2xl font-bold text-white">Ofertas por Candidato Cualificado</h3>
        <p className="text-sm text-slate-400 mt-1">
          Cuanto más larga la barra, mayor poder negociador tiene el candidato. Rojo/fucsia indica escasez crítica.
        </p>
      </header>
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-x-8 gap-y-3">
        {sorted.map((role) => (
          <ComparisonBar
            key={`scarcity-${role.id}`}
            label={role.shortName}
            value={role.scarcityValue}
            max={max}
            suffix="x"
            color={getScarcityColor(role.scarcityValue)}
            block={role.block}
          />
        ))}
      </div>
    </div>
  );
}

function StressComparison() {
  const sorted = [...roles].sort((a, b) => b.burnout - a.burnout);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <header className="px-6 md:px-8 py-5 bg-gradient-to-r from-red-950/50 to-slate-900 border-b border-slate-800">
        <div className="text-xs font-mono text-red-400 tracking-widest mb-1">COMPARATIVA DE ESTRÉS</div>
        <h3 className="text-xl md:text-2xl font-bold text-white">Nivel de Estrés / Burnout</h3>
        <p className="text-sm text-slate-400 mt-1">
          Escala 1-10 ponderando turnos, guardias, presión de incidentes, viajes, responsabilidad legal y desgaste político.
        </p>
      </header>
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-x-8 gap-y-3">
        {sorted.map((role) => (
          <ComparisonBar
            key={`stress-${role.id}`}
            label={role.shortName}
            value={role.burnout}
            max={10}
            suffix="/10"
            color={getStressColor(role.burnout)}
            block={role.block}
          />
        ))}
      </div>
    </div>
  );
}

export function ComparisonsSection() {
  return (
    <section id="comparativas" className="mb-24 scroll-mt-24">
      <header className="mb-10 pb-6 border-b-2 border-emerald-900/40">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-400 mb-2">Comparativas</div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Panel Comparativo Ejecutivo</h2>
        <p className="text-slate-400 mt-3 max-w-3xl">
          Lectura rápida antes de entrar en las fichas técnicas: volumen de mercado, salarios, escasez de talento y
          desgaste psicológico comparados entre todos los roles.
        </p>
      </header>

      <div className="space-y-8">
        <VolumeComparison />
        <SalaryComparison />
        <ScarcityComparison />
        <StressComparison />
      </div>
    </section>
  );
}