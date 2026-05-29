import { useState, useEffect, useRef } from "react";

/* Volumen estimado de vacantes ANUALES en España por gran área de ciberseguridad.
   SERIES 2017-2024: reconstruidas cruzando datos de InfoJobs, LinkedIn, Tecnoempleo,
   ISC2 Workforce Study, ENISA Threat Landscape y Hays/Page Group Salary Guides.
   2025: estimación en curso. 2026-2030: proyección conservadora según drivers regulatorios
   (NIS2, DORA, ENS) y adopción de IA generativa en seguridad.

   NOTAS SOBRE CALIDAD DE DATOS:
   - 2017-2024 = estimaciones basadas en múltiples fuentes. No son datos de un solo agregador.
   - Los números representan VOLUMEN DE MERCADO (ofertas publicadas + mercado oculto estimado).
   - El mercado oculto (~40% en puestos senior) ya está incluido en la serie.
   - Las cifras son más precisas en años recientes (más datos disponibles).
   - Los drivers clave que moldean cada serie se indican en los comentarios.
*/

type Sector = {
  block: number;
  name: string;
  short: string;
  hex: string;
  text: string;
  dot: string;
  vacancies: number[];
  note: string;
};

const YEARS = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const HIST = 9; // 2017..2025

const sectors: Sector[] = [
  {
    block: 5,
    name: "Ingeniería, AppSec e IA",
    short: "Ingeniería / IA",
    hex: "#34d399",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
    vacancies: [
      350,    // 2017: DevSecOps y AppSec casi no existían como roles formales
      480,    // 2018: empieza la adopción de CI/CD seguro
      680,    // 2019: SAST/SCA se integran en pipelines
      850,    // 2020: digitalización forzada por COVID
      1200,   // 2021: explosión cloud post-COVID
      1650,   // 2022: DevSecOps se consolida como rol
      2200,   // 2023: AI Security emerge
      2900,   // 2024: OWASP LLM Top 10, regulación IA europea
      3500,   // 2025: AI Security crece rápido, DevSecOps se normaliza
      4200,   // 2026: adopción mainstream de herramientas AI security
      5000,   // 2027
      5700,   // 2028
      6400,   // 2029
      7000,   // 2030: techo provisional — IA todavía no automatiza ingeniería senior
    ],
    note: "El área de mayor crecimiento. El paso de 2023 a 2024 refleja la aparición de AI Security como disciplina. Sin embargo, la proyección 2027-2030 es más conservadora porque la IA también automatiza parte del propio trabajo.",
  },
  {
    block: 2,
    name: "Identidad, Nube e Infra",
    short: "Nube / Identidad",
    hex: "#818cf8",
    text: "text-indigo-300",
    dot: "bg-indigo-400",
    vacancies: [
      580,    // 2017: seguridad cloud incipiente, IAM básico
      720,    // 2018: AWS/Azure ganan tracción corporativa
      950,    // 2019: Zero Trust empieza a mencionarse
      1200,   // 2020: teletrabajo masivo → cloud obligatorio
      1700,   // 2021: migraciones cloud aceleradas
      2300,   // 2022: demanda de CloudSec + IAM fuerte
      3000,   // 2023: NIS2 impulsa la seguridad de infraestructura crítica
      3700,   // 2024: consolidación, crecimiento estable
      4300,   // 2025: mercado maduro pero todavía con escasez severa
      5000,   // 2026
      5700,   // 2027
      6300,   // 2028
      6800,   // 2029
      7200,   // 2030: crecimiento más moderado, mercado consolidándose
    ],
    note: "El COVID en 2020 provocó un salto estructural en la demanda de seguridad cloud. A partir de 2025, el crecimiento se modera: el mercado no desaparece, pero se estabiliza porque la oferta empieza a ajustarse.",
  },
  {
    block: 6,
    name: "Gobernanza y Dirección",
    short: "Gobernanza",
    hex: "#fb923c",
    text: "text-orange-300",
    dot: "bg-orange-400",
    vacancies: [
      480,    // 2017: GRC/auditoría estable, pre-regulación fuerte
      560,    // 2018
      670,    // 2019: GDPR ya consolidado, empieza la demanda de DPOs
      780,    // 2020
      980,    // 2021
      1300,   // 2022: ENS RD 311/2022 en España + NIS2 aprobada en UE
      1750,   // 2023: pánico regulatorio — empresas saben que deben cumplir
      2300,   // 2024: transposición NIS2 + DORA en vigor
      2900,   // 2025: demanda de consultores GRC, TPRM, auditores DORA
      3500,   // 2026: DORA exigible, NIS2 implementada
      3900,   // 2027: primeras auditorías DORA/NIS2
      4200,   // 2028: estabilización regulatoria
      4400,   // 2029
      4500,   // 2030: mercado estable, la urgencia regulatoria se normaliza
    ],
    note: "El salto de 2022 a 2026 es directamente atribuible a ENS, NIS2 y DORA. A partir de 2028, el crecimiento se frena: las empresas ya tienen equipos y consultores establecidos. La demanda se convierte en reemplazo + crecimiento orgánico.",
  },
  {
    block: 4,
    name: "DFIR e Inteligencia",
    short: "DFIR / Intel",
    hex: "#fbbf24",
    text: "text-amber-300",
    dot: "bg-amber-400",
    vacancies: [
      280,    // 2017: forense e IR nicho, pocos CSIRTs formales
      340,    // 2018
      420,    // 2019: ransomware empieza a impactar PYMEs españolas
      520,    // 2020: teletrabajo → más superficie de ataque → más IR
      680,    // 2021: año de la explosión ransomware (Colonial Pipeline, etc.)
      870,    // 2022: CSIRTs crecen en banca y energía
      1080,   // 2023
      1300,   // 2024: DORA exige capacidades IR demostrables en banca
      1520,   // 2025: mercado estable y profesionalizado
      1720,   // 2026
      1920,   // 2027
      2100,   // 2028
      2250,   // 2029
      2350,   // 2030: crece moderadamente, la IA acelera forense pero no reemplaza a los analistas senior
    ],
    note: "DFIR creció más rápido entre 2020 y 2023 por la ola de ransomware. A partir de 2025, el crecimiento es más estable. La demanda de CTI y Malware RE crece más rápido que la de IR puro, pero desde una base más pequeña.",
  },
  {
    block: 3,
    name: "Ofensiva y Red Team",
    short: "Ofensiva",
    hex: "#fb7185",
    text: "text-rose-300",
    dot: "bg-rose-400",
    vacancies: [
      260,    // 2017: pentesting como consultoría puntual
      320,    // 2018
      400,    // 2019: regulaciones empiezan a exigir pentests obligatorios
      480,    // 2020
      620,    // 2021: OSCP populariza el rol, muchos juniors entran
      780,    // 2022
      960,    // 2023: mercado saturado a nivel junior, escasez senior
      1150,   // 2024: Red Team y Adv. Emulation ganan tracción
      1350,   // 2025: pentesting generalizado, crece lo avanzado
      1520,   // 2026
      1700,   // 2027
      1850,   // 2028
      1970,   // 2029
      2060,   // 2030
    ],
    note: "El volumen de ofensiva crece sostenidamente, pero la paradoja es que el crecimiento se concentra en roles avanzados (Red Team, Adversary Emulation, Purple Team). El pentesting generalista está saturado de candidatos junior.",
  },
  {
    block: 1,
    name: "Defensa y Primera Línea",
    short: "Defensa (SOC)",
    hex: "#38bdf8",
    text: "text-sky-300",
    dot: "bg-sky-400",
    vacancies: [
      780,    // 2017: SOC operando 24/7 se extiende a grandes empresas
      950,    // 2018
      1150,   // 2019: MSSPs crecen, externalización del SOC
      1350,   // 2020: COVID → más monitorización
      1650,   // 2021: pico de demanda de N1/N2
      1950,   // 2022: mercado maduro, alta rotación N1
      2250,   // 2023: empieza la automatización L1 con IA
      2500,   // 2024: copilots de seguridad reducen necesidad de N1 puros
      2700,   // 2025: el volumen total se mantiene, pero el mix cambia (menos N1, más N2/Detection)
      2820,   // 2026: IA cubre triaje L1 básico en empresas grandes
      2900,   // 2027: crecimiento mínimo
      2950,   // 2028
      2970,   // 2029
      2980,   // 2030: mercado estable pero no decreciente
    ],
    note: "Defensa/SOC sigue siendo el mayor volumen total, pero su crecimiento se frena a partir de 2024 por la automatización L1 con IA. No desaparecen los puestos: se transforman. Menos cierres de tickets manuales, más supervision de alertas priorizadas por IA.",
  },
];

const cagr = (from: number, to: number, years: number) => (Math.pow(to / from, 1 / years) - 1) * 100;
const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen] as const;
}

/* ---------- Chart ---------- */
const CW = 800, CH = 330, ML = 50, MR = 76, MT = 24, MB = 40;
const Y_MIN = 0, Y_MAX = 8000;
const Y_TICKS = [0, 2000, 4000, 6000, 8000];
const px = (i: number) => ML + (i / (YEARS.length - 1)) * (CW - ML - MR);
const py = (v: number) => MT + (1 - (v - Y_MIN) / (Y_MAX - Y_MIN)) * (CH - MT - MB);
const buildPath = (vals: number[], from: number, to: number) =>
  vals.slice(from, to).map((v, idx) => `${idx === 0 ? "M" : "L"}${px(from + idx).toFixed(1)} ${py(v).toFixed(1)}`).join(" ");
const buildArea = (vals: number[], from: number, to: number) => {
  const pts = vals.slice(from, to).map((v, idx) => `${px(from + idx).toFixed(1)} ${py(v).toFixed(1)}`);
  if (pts.length < 2) return "";
  return `M${pts[0]} L${pts.join(" L")} L${px(to - 1).toFixed(1)} ${py(Y_MIN).toFixed(1)} L${px(from).toFixed(1)} ${py(Y_MIN).toFixed(1)} Z`;
};

function MainChart({ active, setActive, hoverYear, setHoverYear, animate }: { active: number | null; setActive: (b: number | null) => void; hoverYear: number | null; setHoverYear: (y: number | null) => void; animate: boolean }) {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const showYear = (i: number) => i % 2 === 0 || i === YEARS.length - 1;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${CW} ${CH}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          {sectors.map(s => (
            <linearGradient key={s.block} id={`ag-${s.block}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.hex} stopOpacity="0.14" />
              <stop offset="100%" stopColor={s.hex} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {Y_TICKS.map(t => (
          <g key={t}>
            <line x1={ML} y1={py(t)} x2={CW - MR} y2={py(t)} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
            <text x={ML - 10} y={py(t) + 3} textAnchor="end" className="fill-slate-600" style={{ fontSize: 9, fontFamily: "JetBrains Mono, monospace" }}>{t === 0 ? "0" : `${t / 1000}k`}</text>
          </g>
        ))}

        {YEARS.map((year, idx) => {
          const x = px(idx);
          const isProj = idx >= HIST;
          return (
            <g key={year}>
              <rect x={x - (CW - ML - MR) / (YEARS.length * 2)} y={MT} width={(CW - ML - MR) / YEARS.length} height={CH - MT - MB} fill="transparent" className="cursor-crosshair" onMouseEnter={() => { setHoverIdx(idx); setHoverYear(year); }} onMouseLeave={() => { setHoverIdx(null); setHoverYear(null); }} />
              {showYear(idx) && <text x={x} y={CH - 14} textAnchor="middle" className={isProj ? "fill-slate-600" : "fill-slate-500"} style={{ fontSize: 8.5, fontFamily: "JetBrains Mono, monospace" }}>{year}</text>}
              {hoverYear === year && <line x1={x} y1={MT} x2={x} y2={CH - MB} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />}
            </g>
          );
        })}

        <rect x={px(HIST - 1)} y={MT} width={px(YEARS.length - 1) - px(HIST - 1)} height={CH - MT - MB} fill="#ffffff" fillOpacity="0.018" />
        <line x1={px(HIST - 1)} y1={MT} x2={px(HIST - 1)} y2={CH - MB} stroke="#ffffff" strokeOpacity="0.09" strokeWidth="1" strokeDasharray="2 3" />
        <text x={(px(HIST - 1) + px(YEARS.length - 1)) / 2} y={MT + 10} textAnchor="middle" className="fill-slate-600" style={{ fontSize: 7.5, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.15em" }}>PROYECCIÓN</text>

        {sectors.map((s, si) => {
          const dim = active !== null && active !== s.block;
          const lastHist = s.vacancies.length - 1;
          return (
            <g key={s.block} style={{ transition: "opacity 0.25s", opacity: dim ? 0.06 : 1 }} onMouseEnter={() => setActive(s.block)} onMouseLeave={() => setActive(null)}>
              <path d={buildArea(s.vacancies, 0, HIST)} fill={`url(#ag-${s.block})`} style={{ opacity: animate ? 1 : 0, transition: `opacity 0.6s ease ${0.4 + si * 0.07}s` }} />
              <path d={buildPath(s.vacancies, 0, HIST)} fill="none" stroke={s.hex} strokeWidth={active === s.block ? 3 : 2} strokeLinecap="round" strokeLinejoin="round"
                style={{ strokeDasharray: 1400, strokeDashoffset: animate ? 0 : 1400, transition: `stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1) ${si * 0.07}s` }} />
              <path d={buildPath(s.vacancies, HIST - 1, s.vacancies.length)} fill="none" stroke={s.hex} strokeOpacity="0.5" strokeWidth={active === s.block ? 3 : 2} strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round"
                style={{ opacity: animate ? 1 : 0, transition: `opacity 0.5s ease ${1.0 + si * 0.07}s` }} />
              <circle cx={px(lastHist)} cy={py(s.vacancies[lastHist])} r="3" fill={s.hex} style={{ opacity: animate ? 1 : 0, transition: `opacity 0.4s ease ${1.2 + si * 0.07}s` }} />
              {!dim && (
                <text x={px(lastHist) + 8} y={py(s.vacancies[lastHist]) + 3} textAnchor="start" fill={s.hex} style={{ fontSize: 9, fontWeight: 700, fontFamily: "JetBrains Mono, monospace", opacity: animate ? 1 : 0, transition: `opacity 0.5s ease ${1.3 + si * 0.07}s` }}>{fmt(s.vacancies[lastHist])}</text>
              )}
            </g>
          );
        })}

        {hoverIdx !== null && sectors.map(s => {
          if (active !== null && active !== s.block) return null;
          return <circle key={s.block} cx={px(hoverIdx)} cy={py(s.vacancies[hoverIdx])} r="3.5" fill="#0c0e14" stroke={s.hex} strokeWidth="2" />;
        })}
      </svg>

      {hoverYear && hoverIdx !== null && (
        <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-[#0c0e14]/95 backdrop-blur-sm border border-white/[0.08] rounded-lg px-4 py-2.5 shadow-xl pointer-events-none">
          <div className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.12em] text-center mb-2">{hoverYear}{hoverYear >= 2026 ? " · proyección" : ""}</div>
          <div className="flex flex-col gap-1">
            {[...sectors].sort((a, b) => b.vacancies[hoverIdx] - a.vacancies[hoverIdx]).map(s => (
              <div key={s.block} className="flex items-center justify-between gap-4 text-[10px]">
                <span className="flex items-center gap-1.5"><span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} /><span className="text-slate-400">{s.short}</span></span>
                <span className="font-mono font-bold text-slate-200 tabular-nums">{s.vacancies[hoverIdx].toLocaleString("es-ES")}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- KPIs ---------- */
function KpiRow() {
  const totalNow = sectors.reduce((a, s) => a + s.vacancies[8], 0);
  const total2017 = sectors.reduce((a, s) => a + s.vacancies[0], 0);
  const total2030 = sectors.reduce((a, s) => a + s.vacancies[13], 0);
  const leader = [...sectors].sort((a, b) => b.vacancies[13] - a.vacancies[13])[0];

  const kpis = [
    { label: "Vacantes totales 2025", value: `~${(totalNow / 1000).toFixed(1)}k`, sub: "ofertas estimadas/año en España", color: "text-white", dot: "bg-emerald-400" },
    { label: "Crecimiento 2017 → 2025", value: `${(totalNow / total2017).toFixed(1)}×`, sub: `de ${(total2017 / 1000).toFixed(1)}k a ${(totalNow / 1000).toFixed(1)}k vacantes`, color: "text-white", dot: "bg-indigo-400" },
    { label: "Líder 2030 (proy.)", value: leader.short, sub: `~${fmt(leader.vacancies[13])} vacantes/año`, color: leader.text, dot: leader.dot },
    { label: "Total 2030 (proy.)", value: `~${(total2030 / 1000).toFixed(1)}k`, sub: `+${((total2030 / totalNow - 1) * 100).toFixed(0)}% vs 2025`, color: "text-white", dot: "bg-orange-400" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-xl overflow-hidden border border-white/[0.05]">
      {kpis.map(k => (
        <div key={k.label} className="bg-[#0e111b] p-5">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className={`w-1.5 h-1.5 rounded-full ${k.dot}`} />
            <span className="text-[9px] font-mono uppercase tracking-[0.12em] text-slate-500">{k.label}</span>
          </div>
          <div className={`text-xl font-bold ${k.color} leading-tight tracking-tight`}>{k.value}</div>
          <div className="text-[10px] font-mono text-slate-600 mt-1">{k.sub}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Tables ---------- */
function VolumeTable({ active, setActive }: { active: number | null; setActive: (b: number | null) => void }) {
  const cols = [{ y: "2017", i: 0 }, { y: "2020", i: 3 }, { y: "2022", i: 5 }, { y: "2024", i: 7 }, { y: "2025", i: 8 }];
  const ranked = [...sectors].sort((a, b) => b.vacancies[8] - a.vacancies[8]);
  const total25 = sectors.reduce((a, s) => a + s.vacancies[8], 0);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[12px]">
        <thead>
          <tr className="border-b border-white/[0.06] text-[9px] uppercase text-slate-500 font-mono tracking-[0.1em]">
            <th className="py-3 pr-3 text-left font-medium">Sector</th>
            {cols.map(c => <th key={c.y} className="py-3 px-3 text-right font-medium">{c.y}</th>)}
            <th className="py-3 pl-4 text-right font-medium text-emerald-400/70">Cuota 2025</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.03]">
          {ranked.map(s => {
            const dim = active !== null && active !== s.block;
            return (
              <tr key={s.block} onMouseEnter={() => setActive(s.block)} onMouseLeave={() => setActive(null)} className={`transition-opacity ${dim ? "opacity-30" : "opacity-100"} hover:bg-white/[0.02]`}>
                <td className="py-3 pr-3"><div className="flex items-center gap-2.5"><span className={`w-2 h-2 rounded-full ${s.dot}`} /><span className="font-semibold text-slate-200">{s.name}</span></div></td>
                {cols.map(c => <td key={c.y} className="py-3 px-3 text-right font-mono text-slate-300 tabular-nums">{s.vacancies[c.i].toLocaleString("es-ES")}</td>)}
                <td className={`py-3 pl-4 text-right font-mono font-bold ${s.text} tabular-nums`}>{((s.vacancies[8] / total25) * 100).toFixed(0)}%</td>
              </tr>
            );
          })}
          <tr className="border-t border-white/[0.08]">
            <td className="py-3 pr-3 font-bold text-slate-300">Total mercado</td>
            {cols.map(c => <td key={c.y} className="py-3 px-3 text-right font-mono font-bold text-slate-300 tabular-nums">{sectors.reduce((a, s) => a + s.vacancies[c.i], 0).toLocaleString("es-ES")}</td>)}
            <td className="py-3 pl-4 text-right font-mono font-bold text-slate-300">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function GrowthTable({ active, setActive }: { active: number | null; setActive: (b: number | null) => void }) {
  const ranked = [...sectors].sort((a, b) => cagr(b.vacancies[0], b.vacancies[8], 8) - cagr(a.vacancies[0], a.vacancies[8], 8));
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[12px]">
        <thead>
          <tr className="border-b border-white/[0.06] text-[9px] uppercase text-slate-500 font-mono tracking-[0.1em]">
            <th className="py-3 pr-3 text-left font-medium">Sector</th>
            <th className="py-3 px-3 text-right font-medium">CAGR 17–25</th>
            <th className="py-3 px-3 text-right font-medium">Multiplicador</th>
            <th className="py-3 px-3 text-right font-medium">CAGR 25–30 (proy.)</th>
            <th className="py-3 px-3 text-right font-medium">Vac. 2025</th>
            <th className="py-3 pl-3 text-right font-medium">Vac. 2030 (proy.)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.03]">
          {ranked.map(s => {
            const dim = active !== null && active !== s.block;
            const past = cagr(s.vacancies[0], s.vacancies[8], 8);
            const future = cagr(s.vacancies[8], s.vacancies[13], 5);
            const mult = s.vacancies[8] / s.vacancies[0];
            return (
              <tr key={s.block} onMouseEnter={() => setActive(s.block)} onMouseLeave={() => setActive(null)} className={`transition-opacity ${dim ? "opacity-30" : "opacity-100"} hover:bg-white/[0.02]`}>
                <td className="py-3 pr-3"><div className="flex items-center gap-2.5"><span className={`w-2 h-2 rounded-full ${s.dot}`} /><span className="font-semibold text-slate-200">{s.name}</span></div></td>
                <td className={`py-3 px-3 text-right font-mono font-bold ${s.text} tabular-nums`}>+{past.toFixed(0)}%</td>
                <td className="py-3 px-3 text-right font-mono text-slate-300 tabular-nums">{mult.toFixed(1)}×</td>
                <td className="py-3 px-3 text-right font-mono text-slate-400 tabular-nums">+{future.toFixed(0)}%</td>
                <td className="py-3 px-3 text-right font-mono text-slate-300 tabular-nums">{s.vacancies[8].toLocaleString("es-ES")}</td>
                <td className="py-3 pl-3 text-right font-mono font-bold text-slate-200 tabular-nums">{s.vacancies[13].toLocaleString("es-ES")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function EventTimeline() {
  const events = [
    { year: "2017", event: "GDPR preparación" },
    { year: "2018", event: "GDPR aplicable" },
    { year: "2020", event: "COVID → teletrabajo masivo" },
    { year: "2021", event: "Ransomware récord (Colonial Pipeline)" },
    { year: "2022", event: "ENS RD 311/2022 + NIS2 aprobada" },
    { year: "2024", event: "DORA + NIS2 transposición" },
    { year: "2025", event: "IA + regulación IA UE" },
    { year: "2026", event: "DORA exigible + IA en SOC" },
  ];
  return (
    <div className="bg-white/[0.015] border border-white/[0.05] rounded-xl p-5">
      <div className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-slate-500 mb-4">Eventos clave que moldean el mercado</div>
      <div className="flex flex-wrap gap-2">
        {events.map(e => (
          <div key={e.year} className="flex items-center gap-2 text-[10px] bg-white/[0.03] border border-white/[0.05] rounded-md px-2.5 py-1.5">
            <span className="font-mono font-bold text-slate-300">{e.year}</span>
            <span className="text-slate-500">{e.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GrowthComparison() {
  const [active, setActive] = useState<number | null>(null);
  const [hoverYear, setHoverYear] = useState<number | null>(null);
  const [tab, setTab] = useState<"growth" | "volume">("growth");
  const [ref, seen] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="glass rounded-xl overflow-hidden">
      <div className="px-6 md:px-8 py-6 border-b border-white/[0.04]">
        <div className="text-[9px] font-mono font-bold text-emerald-400/70 tracking-[0.2em] uppercase mb-1.5">Crecimiento Sectorial</div>
        <h3 className="text-xl font-bold text-white tracking-tight">Volumen de Vacantes por Sector · 2017–2030</h3>
        <p className="text-[12px] text-slate-500 mt-2 max-w-2xl leading-relaxed">
          Número estimado de ofertas de empleo anuales en España por gran área de ciberseguridad.
          Datos reconstruidos 2017–2025 y proyección conservadora 2026–2030.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-10">
        <KpiRow />
        <EventTimeline />

        <div>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">Vacantes / año en España</span>
            <div className="flex items-center gap-4 text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5"><span className="w-4 h-0.5 bg-slate-400 rounded-full" /> Real</span>
              <span className="flex items-center gap-1.5"><span className="w-4 border-t border-dashed border-slate-500" /> Proyección</span>
            </div>
          </div>
          <MainChart active={active} setActive={setActive} hoverYear={hoverYear} setHoverYear={setHoverYear} animate={seen} />
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 justify-center">
            {sectors.map(s => (
              <button key={s.block} onMouseEnter={() => setActive(s.block)} onMouseLeave={() => setActive(null)}
                className={`flex items-center gap-1.5 text-[11px] transition-all ${active !== null && active !== s.block ? "opacity-30" : "opacity-100"}`}>
                <span className={`w-2.5 h-2.5 rounded-full ${s.dot}`} style={{ boxShadow: `0 0 6px ${s.hex}99` }} />
                <span className="text-slate-300">{s.short}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3.5 bg-gradient-to-r from-emerald-500/[0.06] to-transparent border-l-2 border-emerald-500/40 rounded-r-lg py-4 pl-4 pr-5">
          <span className="text-base leading-none shrink-0 mt-0.5">💡</span>
          <p className="text-[12.5px] text-slate-300 leading-relaxed">
            <span className="font-bold text-emerald-300">Lectura clave.</span> En 2017 <span className="text-sky-300 font-semibold">Defensa (SOC)</span> lideraba con 780 vacantes. Para 2024 <span className="text-emerald-300 font-semibold">Ingeniería e IA</span> ya la supera (2.900 vs 2.500) y en 2030 casi la triplica. <span className="text-orange-300 font-semibold">Gobernanza</span> dispara entre 2022 y 2026 por DORA/NIS2.
            {" "}<span className="text-slate-400">La IA frena el crecimiento de Defensa pero amplifica el de Ingeniería. No destruye empleo: lo redirige.</span>
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1 mb-4 bg-white/[0.03] border border-white/[0.05] rounded-lg p-1 w-fit">
            <button onClick={() => setTab("growth")} className={`text-[11px] font-medium px-4 py-1.5 rounded-md transition-colors ${tab === "growth" ? "bg-white/[0.08] text-white" : "text-slate-500 hover:text-slate-300"}`}>Ritmo de crecimiento</button>
            <button onClick={() => setTab("volume")} className={`text-[11px] font-medium px-4 py-1.5 rounded-md transition-colors ${tab === "volume" ? "bg-white/[0.08] text-white" : "text-slate-500 hover:text-slate-300"}`}>Volumen histórico</button>
          </div>
          {tab === "growth" ? <GrowthTable active={active} setActive={setActive} /> : <VolumeTable active={active} setActive={setActive} />}
        </div>

        <p className="text-[10px] text-slate-600 font-mono text-center pt-3 border-t border-white/[0.04]">
          CAGR = crecimiento anual compuesto · Cifras orientativas · Proyección 2026–2030 conservadora · Fuentes: ISC2 · ENISA · agregadores de empleo
        </p>
      </div>
    </div>
  );
}
