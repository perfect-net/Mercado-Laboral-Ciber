export function StrategicAnalysis() {
  return (
    <div className="space-y-12">
      {/* Mercado oculto */}
      <section id="mercado-oculto" className="scroll-mt-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <header className="px-6 md:px-10 py-8 bg-gradient-to-r from-purple-950/40 via-fuchsia-950/30 to-slate-900 border-b border-slate-800">
            <div className="text-xs font-mono text-fuchsia-400 tracking-widest mb-2">PARTE 3 · §1</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">🕵️ El Mercado Oculto en Ciberseguridad</h2>
            <p className="text-slate-400 mt-2">Cómo se cubren los puestos críticos sin pasar por LinkedIn</p>
          </header>

          <div className="p-6 md:p-10 space-y-6 text-slate-200">
            <blockquote className="border-l-4 border-fuchsia-500 pl-5 italic text-lg text-slate-300">
              "Más del 40% de las vacantes high-level en Ciberseguridad nunca se publican. Y de ese 40%, prácticamente
              el 100% de las plazas de CISO, Arquitecto Senior y Red Team Lead se cierran en círculos cerrados."
            </blockquote>

            <p className="leading-relaxed">
              La paradoja del mercado de ciberseguridad de 2026 es brutal: hay <strong className="text-cyan-300">decenas de miles
              de candidatos junior</strong> peleándose por ofertas públicas en InfoJobs y LinkedIn, mientras los puestos
              que de verdad cambian una carrera (y un sueldo) se mueven en canales que un junior nunca pisará.
              Existen cuatro mecanismos concretos por los que esto ocurre:
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <MercadoCard
                num="01"
                title="Headhunters de boutique con cuotas exclusivas"
                body="Firmas como Stanton House, Barclay Simpson, Acumin, Tech Talent o las practices de Robert Walters Cyber operan bajo acuerdos de exclusividad. La empresa contratante paga 25–35% del salario anual del candidato a cambio de NO publicar la oferta. Razones: evitar señalar a sus competidores quién acaba de irse, no alertar a su propio equipo de una reestructuración, o porque la búsqueda es para reemplazar a alguien que todavía no sabe que va a ser despedido."
              />
              <MercadoCard
                num="02"
                title="Referrals internos (la 'mafia' del SOC)"
                body="Más del 55% de las plazas de SOC N2, DFIR y Pentest senior se cubren por recomendación interna. Los profesionales senior se conocen entre sí desde DEF CON, EkoParty, RootedCON o c0r0n4CON. Un mensaje por Signal cierra una vacante en 72h. Si no estás en esos círculos, simplemente la oferta no existe para ti."
              />
              <MercadoCard
                num="03"
                title="LinkedIn Recruiter activo (no las ofertas)"
                body="Los recruiters técnicos buscan perfiles por skill exacto (ej. 'CrowdStrike CCFR + Falcon LogScale en banca'). No publican: te buscan. Si tu perfil de LinkedIn no contiene las keywords correctas en el headline y los hits de experiencia, eres invisible. El 70% del mercado mid-senior se mueve así."
              />
              <MercadoCard
                num="04"
                title="Comunidades cerradas (Slack/Discord/WhatsApp)"
                body="Grupos como CyberMonday ES, OWASP Madrid Slack, MujeresHackers, c1b3rWall, grupos de TGs de threat intel… Ofertas top circulan ahí 7–10 días antes de publicarse (si llegan a publicarse). Pertenecer a esos foros vale más que tres certificaciones."
              />
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 mt-4">
              <h4 className="text-sm font-bold text-fuchsia-300 mb-3">¿Por qué las empresas evitan publicar?</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-left text-xs uppercase text-slate-500 font-mono">
                    <th className="py-2 pr-3">Motivo</th>
                    <th className="py-2">Consecuencia para el candidato</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="py-3 pr-3 text-slate-300">Sigilo competitivo</td>
                    <td className="py-3 text-slate-400">No sabrás que un competidor monta un equipo Red Team hasta verlo en prensa</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 text-slate-300">Volumen ingobernable de CVs juniors</td>
                    <td className="py-3 text-slate-400">Filtros automáticos brutales; un humano nunca leerá tu CV</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 text-slate-300">Confidencialidad del puesto (CISO, IR Lead)</td>
                    <td className="py-3 text-slate-400">Solo accedes por contacto previo. Networking &gt; certificaciones</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 text-slate-300">Negociación con el actual ocupante</td>
                    <td className="py-3 text-slate-400">La oferta solo se hace pública si el plan A no acepta</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/30 to-slate-950/60 border-l-4 border-cyan-500 border-y border-r border-y-slate-800 border-r-slate-800 rounded-xl p-5">
              <h4 className="font-bold text-cyan-300 mb-2">⚡ Cómo entrar en el mercado oculto (en orden)</h4>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-300">
                <li>Publica research técnico (blog, charlas, CVE asignados, herramientas open source).</li>
                <li>Asiste y habla en CON nacionales: RootedCON, c0r0n4CON, Navaja Negra, MorterueloCON, EkoParty.</li>
                <li>Optimiza LinkedIn con keywords exactas de los productos que dominas (no genéricas).</li>
                <li>Construye relaciones con 3–5 reclutadores de boutique (responden, no spamean).</li>
                <li>Únete a Slacks/Discords especializados — observa 90 días antes de hablar.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section id="career-paths" className="scroll-mt-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <header className="px-6 md:px-10 py-8 bg-gradient-to-r from-emerald-950/40 to-slate-900 border-b border-slate-800">
            <div className="text-xs font-mono text-emerald-400 tracking-widest mb-2">PARTE 3 · §2</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">🚀 Mapa de Progresión Profesional (Career Paths)</h2>
            <p className="text-slate-400 mt-2">Cómo saltar de roles saturados a los "Sweet Spots" de alta rentabilidad</p>
          </header>

          <div className="p-6 md:p-10 space-y-10 text-slate-200">
            <p className="leading-relaxed">
              No todos los roles tienen la misma <strong className="text-emerald-300">elasticidad de carrera</strong>. Algunos
              son <em className="text-red-300">trampas de salario</em> (techo bajo, alta competencia), otros son
              <em className="text-cyan-300"> trampolines</em> (entrada accesible, salida hacia roles top), y unos pocos
              son <em className="text-fuchsia-300">Sweet Spots</em>: alta demanda, baja competencia, gran salario y
              libertad geográfica.
            </p>

            {/* Tabla termómetro COMPLETA — 22 puestos */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-1">🌡️ Termómetro de Mercado: los 22 puestos</h3>
              <p className="text-xs text-slate-500 mb-4">Ordenados por potencial de techo salarial en España. Techos aproximados para nivel senior (5+ años).</p>
              <table className="w-full text-sm min-w-[680px]">
                <thead>
                  <tr className="border-b border-slate-800 text-left text-xs uppercase text-slate-500 font-mono">
                    <th className="py-2 pr-3">Puesto</th>
                    <th className="py-2 pr-3">Categoría</th>
                    <th className="py-2 pr-3">Techo (ES)</th>
                    <th className="py-2">Lectura del analista</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">SOC N1</td>
                    <td className="py-2.5 pr-3">🔴 Trampa salarial</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~30 K€</td>
                    <td className="py-2.5 text-slate-400">Trampolín obligatorio. Salir a N2 en ≤18 meses o estancarse.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Pentester Generalista</td>
                    <td className="py-2.5 pr-3">🔴 Saturado (junior)</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~80 K€</td>
                    <td className="py-2.5 text-slate-400">Junior saturado (~30 K€). Senior con OSCP+AD llega a 80 K€ pero compite con Red Team.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">GRC Junior Big4</td>
                    <td className="py-2.5 pr-3">🟡 Trampolín</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~30 K€</td>
                    <td className="py-2.5 text-slate-400">3 años de Big4 → cliente final con +30%. Carrera predecible y segura.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Técnico Seguridad Perimetral</td>
                    <td className="py-2.5 pr-3">🟢 Sólido</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~68 K€</td>
                    <td className="py-2.5 text-slate-400">Estable, buena conciliación. Generación mayor envejeciendo: oportunidad.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">EDR/XDR Admin</td>
                    <td className="py-2.5 pr-3">🟢 Sólido</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~70 K€</td>
                    <td className="py-2.5 text-slate-400">Mercado dorado en 2026. Conciliación excelente. Si te certificas, entras.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">SIEM Engineer</td>
                    <td className="py-2.5 pr-3">🟢 Sólido</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~82 K€</td>
                    <td className="py-2.5 text-slate-400">Mejor esfuerzo/recompensa del bloque defensivo. Demanda NIS2/DORA.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">SOC N2</td>
                    <td className="py-2.5 pr-3">🟢 Sólido</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~55 K€</td>
                    <td className="py-2.5 text-slate-400">Estable, demanda creciente NIS2. Pivote natural a DFIR, Cloud o Purple Team.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Vulnerability Management</td>
                    <td className="py-2.5 pr-3">🟢 Infravalorado</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~75 K€</td>
                    <td className="py-2.5 text-slate-400">Puerta lateral excelente a CTI, AppSec o Red Team si automatizas con Python.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Purple Team</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~105 K€</td>
                    <td className="py-2.5 text-slate-400">Sin elegir bando: ataque + detección. Función emergente en banca y MSSP.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">CTI Analyst</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~90 K€</td>
                    <td className="py-2.5 text-slate-400">Geopolítica + técnica. Pocos perfiles bilingües con criterio de inteligencia.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Adversary Emulation</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~125 K€</td>
                    <td className="py-2.5 text-slate-400">Casi siempre senior. Combina CTI, Red Team, MITRE y diseño de ejercicios.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Web/Mobile App Pentester</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~95 K€</td>
                    <td className="py-2.5 text-slate-400">Más empleable que Red Team puro. Mejor evolución hacia AppSec.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Malware Analyst / RE</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~115 K€</td>
                    <td className="py-2.5 text-slate-400">Encaje natural en DFIR/CTI. Pocas plazas, mucha barrera técnica.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">IAM/PAM Specialist</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~90 K€</td>
                    <td className="py-2.5 text-slate-400">Irreemplazable una vez dentro. CyberArk o SailPoint a fondo = cheque en blanco.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Cloud Security Engineer</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~110 K€</td>
                    <td className="py-2.5 text-slate-400">El mejor ROI del sector. Dos clouds + K8s + Terraform = eliges empleo.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">DevSecOps</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~105 K€</td>
                    <td className="py-2.5 text-slate-400">Ideal si vienes de dev. Unicornio: programa + entiende seguridad.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">OT/ICS Specialist</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~95 K€</td>
                    <td className="py-2.5 text-slate-400">Si toleras viajar a plantas: niche de oro con demanda NIS2 industrial.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Red Team Operator</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~115 K€</td>
                    <td className="py-2.5 text-slate-400">No es pentest: es simulación adversarial con OPSEC. Mercado pequeño, reputación.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">OffSec Lead</td>
                    <td className="py-2.5 pr-3">💎 Top</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~150 K€</td>
                    <td className="py-2.5 text-slate-400">Gestión de programa ofensivo, presupuesto y equipo. Requiere 7-10 años.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">TPRM Specialist</td>
                    <td className="py-2.5 pr-3">🟢 Emergente</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~85 K€</td>
                    <td className="py-2.5 text-slate-400">Nicho joven disparado por DORA. Acceso fácil desde GRC. Carrera cómoda.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">AppSec Specialist</td>
                    <td className="py-2.5 pr-3">💎 Sweet Spot</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~100 K€</td>
                    <td className="py-2.5 text-slate-400">Oro puro si vienes de desarrollo. Muy escaso en senior con code review real.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">AI Security Engineer</td>
                    <td className="py-2.5 pr-3">🚀 Frontera</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~140 K€+</td>
                    <td className="py-2.5 text-slate-400">Techo no fijado. Autodidactas con portfolio público bienvenidos. +220% YoY.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">Arquitecto de Seguridad</td>
                    <td className="py-2.5 pr-3">💎 Top</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~130 K€</td>
                    <td className="py-2.5 text-slate-400">Tras 7-10 años de senior técnico. Excelente conciliación, salarios top.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-3 font-semibold text-slate-200">CISO / BISO</td>
                    <td className="py-2.5 pr-3">👑 Cima</td>
                    <td className="py-2.5 pr-3 text-emerald-300 font-mono">~280 K€</td>
                    <td className="py-2.5 text-slate-400">Carrera de 12-15 años. Responsabilidad legal personal (NIS2). Vida útil media: 26 meses.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Progresiones cruzadas */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white">🔀 Progresiones cruzadas realistas</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-2">
                No todas las carreras van en línea recta. Estas son las transiciones más frecuentes que observamos
                en el mercado español, con tiempo y certificaciones clave.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <CrossPath
                  from="SOC N1"
                  via="SOC N2 (2 años)"
                  to="Cloud Security / DFIR / SIEM Engineer"
                  time="Año 3-4"
                  certs="AZ-500 / GCFA / Splunk Architect"
                />
                <CrossPath
                  from="SOC N2"
                  via="Vulnerability Management"
                  to="CTI / Purple Team / AppSec"
                  time="Año 4-6"
                  certs="GCTI / BTL2 / Burp BSCP"
                />
                <CrossPath
                  from="Pentester Junior"
                  via="OSCP + 2 años consultora"
                  to="Red Team Operator / Adversary Emulation / Purple Team"
                  time="Año 4-7"
                  certs="OSEP / CRTO / MITRE ATT&CK"
                />
                <CrossPath
                  from="Web/Mobile Pentester"
                  via="OSWE + API Security"
                  to="AppSec Specialist / DevSecOps"
                  time="Año 3-5"
                  certs="OSWE / CKS / CSSLP"
                />
                <CrossPath
                  from="VM / EDR Admin"
                  via="Automatización Python + Cloud"
                  to="Exposure Management / Cloud Security"
                  time="Año 3-5"
                  certs="AZ-500 / Wiz / Tenable Pro"
                />
                <CrossPath
                  from="GRC Junior (Big4)"
                  via="3 años + CISA"
                  to="GRC Senior / TPRM / BISO"
                  time="Año 5-8"
                  certs="CISA / CISM / CRISC"
                />
                <CrossPath
                  from="DevSecOps"
                  via="Portfolio IA + PyRIT/Garak"
                  to="AI Security Engineer"
                  time="Año 3-5"
                  certs="AI-102 + OWASP LLM"
                />
                <CrossPath
                  from="Cualquier rol senior (8+ años)"
                  via="CISSP + MBA + red de contactos"
                  to="CISO mid-market"
                  time="Año 10-15"
                  certs="CISSP / CISM / MBA"
                />
              </div>
            </div>

            {/* Itinerarios */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-white">🛤️ Itinerarios estratégicos recomendados</h3>

              <ItineraryCard
                title="Itinerario 'Blue → Cloud → Arquitectura' (el más rentable)"
                steps={[
                  "Año 1–2 · SOC N1 (entrada con Security+ y SC-200)",
                  "Año 2–4 · SOC N2 (CySA+, BTL2)",
                  "Año 4–6 · Cloud Security Engineer (AZ-500, AWS Security Specialty)",
                  "Año 6–9 · Senior Cloud Security / DevSecOps (CKS, HashiCorp Vault)",
                  "Año 9+ · Arquitecto de Seguridad (CISSP, SABSA, TOGAF)",
                ]}
                color="cyan"
                salary="De 22K€ a 100K+ en 9 años"
              />

              <ItineraryCard
                title="Itinerario 'Ofensivo Realista' (sin atajos)"
                steps={[
                  "Año 1 · Vulnerability Management (entrada accesible)",
                  "Año 2–3 · Pentester / Web & App Pentester Junior en consultora (OSCP)",
                  "Año 3–5 · Pentester Senior / Red Team (OSEP, CRTO)",
                  "Año 5–7 · Adversary Emulation o Purple Team",
                  "Año 7+ · Offensive Security Lead o Principal AppSec",
                ]}
                color="fuchsia"
                salary="De 24K€ a 125K+ en 7 años"
              />

              <ItineraryCard
                title="Itinerario 'GRC → BISO → CISO' (no técnico)"
                steps={[
                  "Año 1–3 · Consultor GRC Junior en Big4 (ISO 27001 LA, CISA)",
                  "Año 3–5 · GRC Senior en cliente final (CISM, CRISC)",
                  "Año 5–8 · Head of GRC / Risk Manager / TPRM (DORA, NIS2 specialist)",
                  "Año 8–12 · BISO (Business Information Security Officer)",
                  "Año 12+ · CISO mid-market → CISO IBEX (CISSP + MBA)",
                ]}
                color="amber"
                salary="De 23K€ a 200K+ en 15 años"
              />

              <ItineraryCard
                title="Itinerario 'Dev → DevSecOps → AI Security' (frontera)"
                steps={[
                  "Año 0–2 · Desarrollador backend (Python/Go) con foco en testing y CI/CD",
                  "Año 2–3 · DevSecOps Engineer Junior (CKS, Snyk, Semgrep)",
                  "Año 3–5 · DevSecOps Senior + portfolio público de AI red teaming",
                  "Año 5+ · AI Security Engineer / LLM Red Teamer en producto global",
                  "Año 7+ · Principal Security Engineer en BigTech / scale-up de IA",
                ]}
                color="emerald"
                salary="De 32K€ a 140K+ en 7 años"
              />

              <ItineraryCard
                title="Itinerario 'Defensa → Respuesta → Inteligencia' (analítico)"
                steps={[
                  "Año 1–2 · SOC N1 (monitorización y triaje)",
                  "Año 2–4 · SOC N2 / DFIR Junior (respuesta, forense básico)",
                  "Año 4–6 · DFIR Senior / Malware Analyst (GCFA, GREM)",
                  "Año 6–9 · CTI Lead / IR Manager (GCTI, liderazgo)",
                  "Año 9+ · Head of Threat Intelligence / CISO",
                ]}
                color="rose"
                salary="De 22K€ a 120K+ en 10 años"
              />
            </div>

            <div className="bg-gradient-to-br from-amber-950/30 to-slate-950/60 border-l-4 border-amber-500 border-y border-r border-y-slate-800 border-r-slate-800 rounded-xl p-5">
              <h4 className="font-bold text-amber-300 mb-2">🧭 Reglas de oro para no estancarse</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-amber-400">▸</span><span><strong>Cambia de empresa cada 2–3 años</strong> hasta los 35. Es la única forma de saltar de 25K€ a 70K€ en menos de 7 años.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">▸</span><span><strong>Especialízate vertical, no horizontal.</strong> Es más rentable ser top-tier en CyberArk que mediocre en 5 herramientas.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">▸</span><span><strong>El inglés C1 multiplica tu salario por 1.4x.</strong> Sin él, mercado limitado a España. Con él, acceso remoto a EU/US.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">▸</span><span><strong>Construye marca personal pública.</strong> Una charla en RootedCON, un write-up técnico o una herramienta open source valen más que tres certificaciones de papel.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">▸</span><span><strong>Aprende a contar historias de negocio.</strong> Quien traduce riesgo técnico a € llega a CISO. Quien no, se queda en analista senior.</span></li>
                <li className="flex gap-2"><span className="text-amber-400">▸</span><span><strong>Las certificaciones abren puertas, el portfolio las cierra.</strong> Sin proyecto visible (GitHub, blog, CVE), tu cert es solo un PDF en el escritorio del recruiter.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section id="conclusion" className="scroll-mt-24">
        <div className="bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-950 border border-cyan-900/40 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-xs font-mono text-cyan-400 tracking-widest mb-2">CIERRE DEL INFORME</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">📝 Conclusiones del Analista</h2>
          <div className="space-y-4 text-slate-200 leading-relaxed">
            <p>
              El mercado laboral en ciberseguridad de 2026 no está saturado: está <strong className="text-cyan-300">mal distribuido</strong>.
              La paradoja de tener escasez crítica de talento (ratio promedio {averageScarcity()}x) conviviendo con miles de juniors
              sin colocar se explica por una sola palabra: <em>especialización</em>.
            </p>
            <p>
              La IA generativa <strong className="text-fuchsia-300">no está destruyendo puestos</strong> en ciberseguridad: está
              redistribuyendo el valor. Los roles de Tier 1 (SOC N1, VM repetitivo) pierden plazas; los roles de juicio,
              arquitectura, integración y respuesta crecen. Las empresas que en 2024 contrataban 12 analistas N1, en 2026
              contratan 4 N1 + 2 N2 + 1 Detection Engineer + 1 AI Security Specialist.
            </p>
            <p>
              Para el profesional que entra ahora, la recomendación clínica es contundente:
              <strong className="text-emerald-300"> elegir un trampolín claro</strong> (SOC N1, VM, GRC Big4, DevOps),
              <strong className="text-cyan-300"> fijar un horizonte de salida</strong> de 18–24 meses,
              y <strong className="text-fuchsia-300">apuntar siempre a un Sweet Spot</strong> (Cloud Sec, DevSecOps, IAM, AI Security, Purple Team, Adversary Emulation).
              Quien siga este camino con disciplina alcanzará los 70 K€ antes de los 30 años, sin excepciones.
            </p>
            <p className="text-slate-400 italic pt-4 border-t border-slate-800">
              Este informe es una radiografía del mercado y una hoja de ruta, no una promesa.
              La ciberseguridad sigue siendo un sector duro, exigente y meritocrático. Pero también el más rentable, dinámico
              e intelectualmente vivo del ecosistema tecnológico actual.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function averageScarcity() {
  // 22 roles: SOC N1(1.1), SOC N2(2.8), Perimetral(3.1), EDR(3.4), SIEM(4.2),
  // IAM(5.1), Cloud(6.5), OT(7.8), Pentester(2.5), Web/Mobile(3.9), Red Team(6.8),
  // Adv.Emulation(7.2), Purple(5.9), Malware RE(6.6), OffSec Lead(7.0),
  // DFIR(5.5), CTI(4.0), VM(3.2), DevSecOps(5.8), AppSec(6.2), AI Sec(8.5),
  // Arq(5.0), GRC(3.5), TPRM(4.5), CISO(6.0)
  const values = [1.1, 2.8, 3.1, 3.4, 4.2, 5.1, 6.5, 7.8, 2.5, 3.9, 6.8, 7.2, 5.9, 6.6, 7.0, 5.5, 4.0, 3.2, 5.8, 6.2, 8.5, 5.0, 3.5, 4.5, 6.0];
  return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
}

function CrossPath({ from, via, to, time, certs }: { from: string; via: string; to: string; time: string; certs: string }) {
  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center gap-1 pt-1">
          <div className="w-3 h-3 rounded-full bg-cyan-500" />
          <div className="w-0.5 h-8 bg-slate-700" />
          <div className="w-3 h-3 rounded-full bg-fuchsia-500" />
          <div className="w-0.5 h-8 bg-slate-700" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-200">{from}</span>
            <span className="text-[10px] font-mono text-slate-500">{time}</span>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-1">
            <span className="text-fuchsia-400">↓</span> {via}
          </div>
          <div className="text-sm font-semibold text-emerald-300">{to}</div>
          <div className="text-[10px] text-slate-500 font-mono">Certs clave: {certs}</div>
        </div>
      </div>
    </div>
  );
}

function ItineraryCard({
  title,
  steps,
  color,
  salary,
}: {
  title: string;
  steps: string[];
  color: "cyan" | "fuchsia" | "amber" | "emerald" | "rose";
  salary: string;
}) {
  const colorMap = {
    cyan: { border: "border-cyan-500", text: "text-cyan-300", numBg: "bg-cyan-600" },
    fuchsia: { border: "border-fuchsia-500", text: "text-fuchsia-300", numBg: "bg-fuchsia-600" },
    amber: { border: "border-amber-500", text: "text-amber-300", numBg: "bg-amber-600" },
    emerald: { border: "border-emerald-500", text: "text-emerald-300", numBg: "bg-emerald-600" },
    rose: { border: "border-rose-500", text: "text-rose-300", numBg: "bg-rose-600" },
  }[color];

  return (
    <div className={`bg-slate-950/60 border-l-4 ${colorMap.border} border-y border-r border-y-slate-800 border-r-slate-800 rounded-xl p-5`}>
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <h4 className={`font-bold ${colorMap.text}`}>{title}</h4>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-900 px-2 py-1 rounded">
          {salary}
        </span>
      </div>
      <ol className="space-y-2">
        {steps.map((s, i) => (
          <li key={i} className="text-sm text-slate-300 flex gap-3 items-start">
            <span className={`shrink-0 w-5 h-5 rounded-full ${colorMap.numBg} text-white flex items-center justify-center text-[10px] font-bold`}>
              {i + 1}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function MercadoCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
      <div className="text-xs font-mono text-fuchsia-400 mb-1">MECANISMO {num}</div>
      <h4 className="font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-300 leading-relaxed">{body}</p>
    </div>
  );
}
