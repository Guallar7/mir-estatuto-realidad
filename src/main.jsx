import { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  LayoutGroup,
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  BadgeEuro,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartPulse,
  Menu,
  Music2,
  ListChecks,
  Newspaper,
  Scale,
  ShieldAlert,
  Stethoscope,
  X,
} from "lucide-react";
import {
  anteproyectoClaims,
  articleMatrix,
  ccaaRows,
  ccaaEvidenceRows,
  collectiveImpactRows,
  coreMessage,
  downloads,
  evidenceGaps,
  homeSections,
  hourModel,
  jornadaModelRows,
  keyIdeas,
  methodologyPrinciples,
  mirGuardScenarios,
  newsRebuttals,
  quickArguments,
  reivindicaciones,
  residenceYears,
  sourceGroups,
  sourceRegistry,
  sitePages,
  summaryByYear,
} from "./data";
import { cn } from "./utils";
import "./styles.css";

const ORDINARY_WEEKLY_HOURS = hourModel.weeklyOrdinaryHours;
const ORDINARY_HOURS = hourModel.ordinaryHoursPerMonth;
const GUARD_HOURS = hourModel.guardHoursPerMonth;
const GUARD_WEEKLY_EQUIVALENT = hourModel.guardHoursPerWeekEquivalent;
const TOTAL_HOURS = hourModel.totalHoursPerMonth;
const TOTAL_WEEKLY_EQUIVALENT = hourModel.totalHoursPerWeekEquivalent;
const HOURS_37_5_MODEL = (37.5 * 52) / 12 + GUARD_HOURS;
const HOURS_37_5_WEEKLY_MODEL = 37.5 + GUARD_WEEKLY_EQUIVALENT;

const eur = (value, digits = 0) =>
  new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

function App() {
  const [yearIndex, setYearIndex] = useState(0);
  const [selectedCcaa, setSelectedCcaa] = useState("Madrid");
  const [sortMode, setSortMode] = useState("guardias");
  const [expandedClaim, setExpandedClaim] = useState("guardias-17-24");
  const ccaaHighlightRef = useRef(null);
  const shouldScrollToCcaaHighlightRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const scaleX = reduceMotion ? scrollYProgress : smoothScaleX;

  const current = summaryByYear[yearIndex];
  const currentMirScenarios = mirGuardScenarios.filter((scenario) => scenario.year === current.year);
  const selected = ccaaRows.find((row) => row.ccaa === selectedCcaa) ?? ccaaRows[0];
  const selectedNet = selected.withGuardsNet[yearIndex];
  const selectedGross = selected.withGuardsGross[yearIndex];
  const selectedBase = selected.base[yearIndex];
  const selectedHourly = selectedNet / TOTAL_HOURS;
  const currentHourly = current.netWithGuards / TOTAL_HOURS;

  const sortedRows = useMemo(() => {
    const rows = [...ccaaRows];
    if (sortMode === "guardias") {
      rows.sort(
        (a, b) =>
          b.withGuardsGross[yearIndex] -
          b.base[yearIndex] -
          (a.withGuardsGross[yearIndex] - a.base[yearIndex]),
      );
    } else if (sortMode === "base") {
      rows.sort((a, b) => b.base[yearIndex] - a.base[yearIndex]);
    } else {
      rows.sort((a, b) => a.ccaa.localeCompare(b.ccaa, "es"));
    }
    return rows;
  }, [sortMode, yearIndex]);

  const selectCcaa = (ccaa, scrollToHighlight = false) => {
    shouldScrollToCcaaHighlightRef.current = scrollToHighlight;
    setSelectedCcaa(ccaa);
  };

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const element = document.getElementById(id);
      if (element) {
        window.setTimeout(() => element.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  useEffect(() => {
    if (!shouldScrollToCcaaHighlightRef.current) return;
    shouldScrollToCcaaHighlightRef.current = false;
    window.requestAnimationFrame(() => {
      ccaaHighlightRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [selectedCcaa, reduceMotion]);

  return (
    <main className="portal-page">
      <Motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <SiteHeader />

      <section className="portal-hero" id="inicio">
        <div className="portal-hero-inner">
          <Motion.div
            className="eyebrow portal-eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.45 }}
          >
            <Stethoscope size={18} />
            Centralización de datos, argumentos y materiales por un Estatuto Médico propio
          </Motion.div>
          <Motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.08 }}
          >
            Estatuto Médico Propio
          </Motion.h1>
          <Motion.p
            className="portal-lead"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.16 }}
          >
            No pedimos decidir por nadie. Pedimos que nadie decida por nosotros.
          </Motion.p>
          <p className="portal-hero-copy">
            Reclamamos un Estatuto Médico y Facultativo propio: un marco de negociación específico para una
            profesión con responsabilidad clínica directa, guardias, formación prolongada, presión asistencial
            y riesgo médico-legal propios.
          </p>
          <p className="portal-hero-copy">
            Esta web reúne datos, fuentes y argumentos para explicar por qué guardias, jornada, descansos,
            conciliación, clasificación profesional, jubilación y derechos laborales médicos deben negociarse
            con voz médica y facultativa propia.
          </p>
          <div className="hero-actions portal-actions">
            <a className="button primary" href="#reivindicaciones">
              Qué reclamamos <ArrowDown size={18} />
            </a>
            <a className="button urgent" href="#anteproyecto">
              Desmontar anteproyecto <Scale size={18} />
            </a>
            <a className="button ghost" href="#mir">
              Caso MIR <BadgeEuro size={18} />
            </a>
            <a
              className="button song"
              href="https://www.youtube.com/shorts/AfkLTBqXR50"
              target="_blank"
              rel="noreferrer"
            >
              Canción de la huelga <Music2 size={18} />
            </a>
          </div>
        </div>

        <aside className="portal-hero-panel" aria-label="Resumen estratégico">
          <div className="hero-panel-top">
            <span>Eje de la lucha</span>
            <strong>
              No pedimos decidir por nadie. Pedimos que nadie decida por nosotros.
            </strong>
          </div>
          <div className="hero-proof-grid">
            <HeroProof label="Objetivo" value="Estatuto propio" />
            <HeroProof label="Condición política" value="Mesa propia" />
            <HeroProof label="Línea roja" value="Guardias computables" />
            <HeroProof label="Derecho básico" value="Descanso real" />
          </div>
          <small>
            Datos, fuentes, desmontajes y material descargable para defender una negociación médica y facultativa propia.
          </small>
        </aside>
      </section>

      <RevealSection className="portal-section index-section" id="indice">
        <SectionHeading
          kicker="Mapa de la lucha"
          title="Primero la reivindicación, después los datos que la sostienen."
          text="Primero, las reivindicaciones; después, los documentos, datos y respuestas públicas que permiten defenderlas con argumentos verificables."
        />
        <div className="index-grid">
          {homeSections.map((section, index) => (
            <IndexCard section={section} index={index + 1} key={section.id} />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="portal-section thesis-section" id="idea-central">
        <div className="thesis-layout">
          <div>
            <span className="kicker">Manifiesto</span>
            <h2>{coreMessage.title}</h2>
            <p>{coreMessage.body}</p>
          </div>
          <ul className="key-ideas">
            {keyIdeas.map((idea) => (
              <li key={idea}>
                <CheckCircle2 size={19} />
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>

      <RevealSection className="portal-section methodology-section" id="metodo">
        <SectionHeading
          kicker="Método y límites"
          title="El argumento gana fuerza cuando enseña cómo se ha construido."
          text="Cada bloque separa hechos, interpretación, límites y fuentes comprobables para que el lector sepa qué está documentado y qué requiere contraste adicional."
        />

        <div className="method-grid">
          {methodologyPrinciples.map((item) => (
            <article className="method-card" key={item.title}>
              <CheckCircle2 size={20} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="limits-panel">
          <div>
            <span className="kicker">Alcance del análisis</span>
            <h3>Lo documentado, lo calculado y lo que exige fuente territorial.</h3>
            <p>
              Los datos económicos MIR están cuantificados. El impacto sobre adjuntos, primaria,
              urgencias, emergencias, tutorías y jefaturas se formula con base jurídica y queda
              pendiente de tablas homogéneas cuando falta una fuente comparable.
            </p>
          </div>
          <ul>
            {evidenceGaps.map((gap) => (
              <li key={gap}>
                <ClipboardList size={18} />
                <span>{gap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="jornada-models">
          {jornadaModelRows.map((model) => (
            <article className="jornada-card" key={model.id}>
              <span>{model.label}</span>
              <strong>{eur(model.totalWith80Guards, 1)} h/mes</strong>
              <p>
                {eur(model.weeklyWith80Guards, 1)} h/semana con 80 h/mes de guardia. {model.use}
              </p>
              <small>{model.caveat}</small>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="portal-section mir-section" id="mir">
        <SectionHeading
          kicker="Ejemplo visible"
          title="MIR: no es sueldo, son guardias"
          text="El caso MIR muestra con claridad por qué una cifra salarial no puede separarse de las horas, guardias, noches y festivos que la sostienen."
        />

        <div className="stat-grid mir-snapshot" aria-label="Resumen MIR con guardias">
          <StatTile
            icon={<GraduationCap />}
            label={`${summaryByYear[0].year} medio sin guardias`}
            value={`${eur(summaryByYear[0].grossNoGuards)} €`}
            note="brutos/mes"
          />
          <StatTile
            icon={<Clock3 />}
            label="Guardias añadidas"
            value={`+${GUARD_HOURS} h/mes`}
            note={`${eur(GUARD_WEEKLY_EQUIVALENT, 1)} h/semana adicionales a la jornada ordinaria`}
            tone="warning"
          />
          <StatTile
            icon={<BadgeEuro />}
            label={`${summaryByYear[0].year} con 80 h de guardia`}
            value={`${eur(summaryByYear[0].netWithGuards)} €`}
            note={`${eur(summaryByYear[0].netWithGuards / TOTAL_HOURS, 2)} €/h netos`}
            tone="danger"
          />
          <StatTile
            icon={<BookOpenCheck />}
            label="Fuera del cálculo"
            value="Formación"
            note="estudio, sesiones, congresos, investigación y publicaciones no cuantificados"
          />
        </div>

        <div className="mir-tool-strip" aria-label="Material rápido sobre MIR">
          <article>
            <span>Respuesta visual</span>
            <h3>Infografía rápida: la tabla solo se entiende al dividir por horas.</h3>
            <p>
              Comparte una pieza breve con el cálculo MIR desglosado por sueldo ordinario, guardias
              y horas reales.
            </p>
            <a className="button urgent" href="infografia.html">
              Abrir infografía HTML <ExternalLink size={18} />
            </a>
          </article>
          <article>
            <span>Campaña</span>
            <h3>Canción de la huelga</h3>
            <p>
              Material de campaña para acompañar la movilización y reforzar el mensaje común por
              un Estatuto Médico y Facultativo propio.
            </p>
            <a
              className="button song dark-song"
              href="https://www.youtube.com/shorts/AfkLTBqXR50"
              target="_blank"
              rel="noreferrer"
            >
              Escuchar canción <Music2 size={18} />
            </a>
          </article>
        </div>

        <YearSelector yearIndex={yearIndex} setYearIndex={setYearIndex} reduceMotion={reduceMotion} />

        <div className="calc-grid">
          <SpotlightPanel className="panel calculation">
            <div className="calc-row">
              <span>Jornada ordinaria {ORDINARY_WEEKLY_HOURS} h/semana</span>
              <strong>{eur(ORDINARY_HOURS, 1)} h/mes</strong>
            </div>
            <div className="calc-row danger">
              <span>
                Guardias extra del escenario: +{eur(GUARD_WEEKLY_EQUIVALENT, 1)} h/semana de media
                adicionales a la jornada ordinaria
              </span>
              <strong>+{GUARD_HOURS} h/mes</strong>
            </div>
            <div className="divider" />
            <div className="calc-row total">
              <span>
                Jornada ordinaria + guardias extra: {eur(TOTAL_WEEKLY_EQUIVALENT, 1)} h/semana de media
              </span>
              <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
            </div>
            <p className="calc-note">
              El sueldo mensual se divide por horas mensuales porque el dato salarial es mensual; el equivalente
              semanal muestra la carga de trabajo frente a la jornada. Las 80 h/mes de guardia se suman encima.
              Con 37,5 h/semana, el divisor sube a {eur(HOURS_37_5_MODEL, 1)} h/mes (
              {eur(HOURS_37_5_WEEKLY_MODEL, 1)} h/semana de media) y el €/h baja.
            </p>
          </SpotlightPanel>

          <SpotlightPanel className="panel result-card">
            <BadgeEuro size={32} />
            <p>Media {current.year} con 80 h mensuales de guardia</p>
            <strong className="result-amount">
              <span>{eur(current.netWithGuards)} €</span>
              <small>netos/mes</small>
            </strong>
            <span>
              equivale a <b>{eur(currentHourly, 2)} €/h netos</b>
            </span>
          </SpotlightPanel>
        </div>

        <SpotlightPanel className="stacked-card">
          <div>
            <h3>{current.year}: de dónde sale el bruto</h3>
            <p>
              Una parte sustancial del bruto publicado no es sueldo ordinario: depende de guardias. Eso no es un
              privilegio, es tiempo adicional y penoso sosteniendo la asistencia.
            </p>
          </div>
          <StackedBar
            base={current.grossNoGuards}
            total={current.grossWithGuards}
            label={`Media ${current.year}`}
            reduceMotion={reduceMotion}
          />
        </SpotlightPanel>

        <SpotlightPanel className="hours-compare-card">
          <div className="hours-copy">
            <span className="kicker">Horas frente a salario</span>
            <h3>{current.year}: jornada ordinaria frente a jornada real con guardias</h3>
            <p>
              Usamos {ORDINARY_WEEKLY_HOURS} h/semana anualizadas como referencia principal:{" "}
              {eur(ORDINARY_HOURS, 1)} h/mes. El escenario añade {GUARD_HOURS} h/mes de guardias por encima
              de esa jornada. Resultado: {eur(TOTAL_HOURS, 1)} h/mes, o{" "}
              {eur(TOTAL_WEEKLY_EQUIVALENT, 1)} h/semana de media, sin convertir en horas de cálculo todo el
              trabajo formativo no retribuido que queda fuera.
            </p>
          </div>

          <div className="hours-visual" aria-label="Comparación de horas mensuales y semanales">
            <div className="hour-line">
              <div className="hour-line-label">
                <span>Jornada ordinaria {ORDINARY_WEEKLY_HOURS} h/semana</span>
                <strong>{eur(ORDINARY_HOURS, 1)} h/mes</strong>
              </div>
              <span className="hour-track">
                <span className="hour-fill standard" style={{ width: `${(ORDINARY_HOURS / TOTAL_HOURS) * 100}%` }} />
              </span>
            </div>
            <div className="hour-line resident">
              <div className="hour-line-label">
                <span>
                  MIR: jornada ordinaria + {GUARD_HOURS} h/mes de guardia extra (
                  {eur(TOTAL_WEEKLY_EQUIVALENT, 1)} h/semana)
                </span>
                <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
              </div>
              <span className="hour-track">
                <span className="hour-fill ordinary" style={{ width: `${(ORDINARY_HOURS / TOTAL_HOURS) * 100}%` }} />
                <span className="hour-fill guard" style={{ width: `${(GUARD_HOURS / TOTAL_HOURS) * 100}%` }} />
              </span>
            </div>
          </div>

          <div className="hour-summary">
            <span>{ORDINARY_WEEKLY_HOURS} h/semana ordinarias</span>
            <span>{eur(ORDINARY_HOURS, 1)} h/mes ordinarias</span>
            <span>
              + {GUARD_HOURS} h/mes guardias extra ({eur(GUARD_WEEKLY_EQUIVALENT, 1)} h/semana)
            </span>
            <strong>
              = {eur(TOTAL_HOURS, 1)} h/mes = {eur(TOTAL_WEEKLY_EQUIVALENT, 1)} h/semana
            </strong>
          </div>

          <div className="hour-price">
            <span>Precio medio real empleado</span>
            <strong>{eur(currentHourly, 2)} €/h netos</strong>
            <small>
              Media nacional {current.year}: {eur(current.netWithGuards)} € netos/mes con 80 h adicionales
              de guardia / {eur(TOTAL_HOURS, 1)} h/mes reales.
            </small>
          </div>
        </SpotlightPanel>

        <section className="mir-scenarios" aria-labelledby="mir-scenarios-title">
          <div>
            <span className="kicker">Sensibilidad de guardias</span>
            <h3 id="mir-scenarios-title">{current.year}: qué pasa con 3, 4, 5 o 6 guardias</h3>
            <p>
              Estimación bruta lineal a partir del escenario publicado con 80 h/mes. Sirve para ver cómo cambia
              el denominador de horas y cuánto peso adquieren las guardias; no sustituye una nómina real.
            </p>
          </div>
          <div className="scenario-table" role="table" aria-label={`Escenarios ${current.year} con 3 a 6 guardias`}>
            <div className="scenario-row scenario-head" role="row">
              <span>Guardias</span>
              <span>Horas guardia</span>
              <span>h/sem real</span>
              <span>Bruto estimado</span>
              <span>€/h bruto</span>
              <span>Peso guardias</span>
            </div>
            {currentMirScenarios.map((scenario) => (
              <div className="scenario-row" role="row" key={scenario.id}>
                <span>{scenario.guardCount}</span>
                <span>{scenario.guardHours} h/mes</span>
                <span>{eur(scenario.weeklyEquivalent, 1)}</span>
                <span>{eur(scenario.estimatedGrossWithGuards)} €</span>
                <span>{eur(scenario.estimatedGrossPerHour, 2)} €</span>
                <span>{eur(scenario.guardGrossShare * 100, 0)}%</span>
              </div>
            ))}
          </div>
        </section>

        <div className="ccaa-module" id="ccaa">
          <SectionHeading
            kicker="Tu comunidad"
            title="Compara salario ordinario y guardias."
            text="Elige CCAA y año. La visualización separa sueldo sin guardias de la parte que algunas tablas meten dentro del total."
          />

          <div className="controls-row">
            <label>
              Comunidad autónoma
              <select value={selectedCcaa} onChange={(event) => selectCcaa(event.target.value)}>
                {ccaaRows.map((row) => (
                  <option key={row.ccaa} value={row.ccaa}>
                    {row.ccaa}
                  </option>
                ))}
              </select>
            </label>
            <div className="sort-tabs" role="group" aria-label="Ordenar comunidades">
              <button
                aria-pressed={sortMode === "guardias"}
                className={sortMode === "guardias" ? "active" : ""}
                onClick={() => setSortMode("guardias")}
                type="button"
              >
                Más guardia
              </button>
              <button
                aria-pressed={sortMode === "base"}
                className={sortMode === "base" ? "active" : ""}
                onClick={() => setSortMode("base")}
                type="button"
              >
                Más base
              </button>
              <button
                aria-pressed={sortMode === "az"}
                className={sortMode === "az" ? "active" : ""}
                onClick={() => setSortMode("az")}
                type="button"
              >
                A-Z
              </button>
            </div>
          </div>

          <div className="ccaa-highlight-target" ref={ccaaHighlightRef}>
            <SpotlightPanel className="ccaa-highlight panel">
              <div>
                <h3>
                  {selected.ccaa} · {current.year}
                </h3>
                <p>
                  Sin guardias: <strong>{eur(selectedBase)} € brutos/mes</strong>. Con 80 h adicionales de
                  guardia: <strong>{eur(selectedGross)} € brutos/mes</strong>.
                </p>
                <p className="hourly">
                  Neto estimado por hora real: <strong>{eur(selectedHourly, 2)} €/h</strong>
                </p>
              </div>
              <div className="mini-stats">
                <span>Guardia laboral: {eur(selected.guardHours[yearIndex][0], 2)} €/h</span>
                <span>Festivo: {eur(selected.guardHours[yearIndex][1], 2)} €/h</span>
                <span>Especial: {eur(selected.guardHours[yearIndex][2], 2)} €/h</span>
              </div>
            </SpotlightPanel>
          </div>

          <div className="bars-list">
            {sortedRows.map((row) => (
              <CompactBar
                key={row.ccaa}
                row={row}
                yearIndex={yearIndex}
                selected={row.ccaa === selectedCcaa}
                onClick={() => selectCcaa(row.ccaa, true)}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          <section className="ccaa-evidence" aria-labelledby="ccaa-evidence-title">
            <div>
              <span className="kicker">Cobertura CCAA</span>
              <h3 id="ccaa-evidence-title">Qué datos autonómicos están documentados y cuáles requieren verificación adicional.</h3>
              <p>
                Hay datos MIR básicos para todas las comunidades autónomas. La jornada ordinaria territorial,
                guardias localizadas y cumplimiento efectivo del descanso requieren una normalización separada.
              </p>
            </div>
            <div className="ccaa-evidence-grid">
              {ccaaEvidenceRows.map((row) => (
                <article key={row.id}>
                  <h4>{row.ccaa}</h4>
                  <span>{row.source}</span>
                  <p>
                    R1 base {eur(row.r1Base)} €. Con 80 h: {eur(row.r1GrossWith80Guards)} € brutos /{" "}
                    {eur(row.r1NetWith80Guards)} € netos. Guardia R1: {eur(row.r1LaborableGuardHour, 2)} /{" "}
                    {eur(row.r1FestiveGuardHour, 2)} / {eur(row.r1SpecialGuardHour, 2)} €/h.
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </RevealSection>

      <RevealSection className="portal-section anteproyecto-section" id="anteproyecto">
        <SectionHeading
          kicker="Anteproyecto de Estatuto Marco"
          title="Qué se anuncia, qué queda sin garantizar y qué reclamamos."
          text="El Ministerio presenta el nuevo texto como una mejora general. Esta sección separa el anuncio público de la garantía real para médicos y facultativos, mostrando referencias documentales por tema."
        />

        <div className="claim-grid">
          {anteproyectoClaims.map((item) => (
            <ClaimRebuttal
              item={item}
              expanded={expandedClaim === item.id}
              onToggle={() => setExpandedClaim(expandedClaim === item.id ? "" : item.id)}
              key={item.id}
            />
          ))}
        </div>

        <section className="article-matrix" aria-labelledby="article-matrix-title">
          <div className="matrix-heading">
            <span className="kicker">Matriz pública</span>
            <h3 id="article-matrix-title">Artículo, cambio, impacto, riesgo y demanda.</h3>
            <p>
              La matriz resume cada punto del anteproyecto por cambio propuesto, impacto práctico,
              riesgo abierto y demanda médica pendiente.
            </p>
          </div>
          <div className="matrix-list">
            {articleMatrix.map((row) => (
              <article className="matrix-card" key={row.id}>
                <div className="matrix-card-head">
                  <span>{row.reference}</span>
                  <strong>{row.status}</strong>
                </div>
                <h4>{row.topic}</h4>
                <dl>
                  <div>
                    <dt>Marco actual</dt>
                    <dd>{row.currentFrame}</dd>
                  </div>
                  <div>
                    <dt>Cambio propuesto</dt>
                    <dd>{row.proposedChange}</dd>
                  </div>
                  <div>
                    <dt>Impacto</dt>
                    <dd>{row.impact}</dd>
                  </div>
                  <div>
                    <dt>Riesgo oculto</dt>
                    <dd>{row.hiddenRisk}</dd>
                  </div>
                  <div>
                    <dt>Qué reclamamos</dt>
                    <dd>{row.demand}</dd>
                  </div>
                </dl>
                <div className="affected-tags">
                  {row.affected.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                <SourceBadges ids={row.evidence} />
              </article>
            ))}
          </div>
        </section>
      </RevealSection>

      <RevealSection className="portal-section news-section" id="noticias">
        <SectionHeading
          kicker="Noticias y declaraciones desmontadas"
          title="Respuesta a titulares, comunicados y argumentarios públicos."
          text="Cada ficha sigue el mismo patrón: qué se afirma, respuesta, mensaje clave y fuentes."
        />

        <div className="news-grid">
          {newsRebuttals.map((item) => (
            <NewsRebuttal item={item} key={item.id} />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="portal-section demands-section" id="reivindicaciones">
        <SectionHeading
          kicker="Qué reclamamos"
          title="Un programa claro, no una lista de quejas."
          text="Las reivindicaciones se formulan de forma directa para que puedan compartirse, discutirse y contrastarse."
        />

        <div className="demands-grid">
          {reivindicaciones.map((item, index) => (
            <DemandCard item={item} index={index + 1} key={item.id} />
          ))}
        </div>

        <section className="collective-impact" aria-labelledby="collective-impact-title">
          <div>
            <span className="kicker">Impacto por colectivo</span>
            <h3 id="collective-impact-title">Qué sabemos ya y qué requiere datos homogéneos.</h3>
          </div>
          <div className="impact-table">
            {collectiveImpactRows.map((row) => (
              <article key={row.id}>
                <h4>{row.collective}</h4>
                <p>{row.impact}</p>
                <span>{row.quantitativeStatus}</span>
                <strong>{row.demand}</strong>
                <div>
                  {row.affectedBy.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </RevealSection>

      <RevealSection className="portal-section argument-section" id="argumentario">
        <div className="argument-layout">
          <div>
            <span className="kicker">Argumentario rápido</span>
            <h2>Respuestas breves para redes, asambleas y prensa.</h2>
            <p>
              El objetivo es repetir una estructura simple: qué dicen, qué oculta, por qué no basta y qué
              reclamamos.
            </p>
          </div>
          <div className="quick-arguments">
            {quickArguments.map((argument) => (
              <article key={argument}>
                <ClipboardList size={18} />
                <p>{argument}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="portal-section sources-section" id="fuentes">
        <SectionHeading
          kicker="Auditable"
          title="Fuentes, documentos y descargas."
          text="El argumento debe poder comprobarse. Las fuentes se organizan por tipo y las descargas separan el material general del bloque MIR."
        />

        <div className="downloads download-grid" id="descargas">
          {downloads.map(([label, href]) => (
            <a className="download-card" href={href} download key={href}>
              <Download size={20} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="source-group-grid">
          {sourceGroups.map((group) => (
            <article className="source-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="source-list">
                {group.ids.map((id) => (
                  <SourceLink id={id} key={id} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <footer className="portal-footer">
        <strong>Un Estatuto Médico propio no es corporativismo ni privilegio.</strong>
        <span>Es voz propia, responsabilidad reconocida, conciliación real y derechos laborales.</span>
      </footer>
    </main>
  );
}

function SiteHeader({ pageId = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = sitePages.filter((page) => page.id !== "home");

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={cn("site-header", menuOpen && "menu-open")}>
      <a className="site-brand" href="index.html" onClick={() => setMenuOpen(false)}>
        <Stethoscope size={20} />
        <span>Estatuto Médico Propio</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className="site-nav" id="site-navigation" aria-label="Secciones principales">
        {navItems.map((page) => (
          <a className={page.id === pageId ? "active" : ""} href={page.path} onClick={() => setMenuOpen(false)} key={page.id}>
            {page.navLabel}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroProof({ label, value }) {
  return (
    <div className="hero-proof">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading portal-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function IndexCard({ section, index }) {
  const icons = {
    mir: <BadgeEuro />,
    anteproyecto: <Scale />,
    noticias: <Newspaper />,
    reivindicaciones: <ListChecks />,
    fuentes: <FileText />,
    argumentario: <ClipboardList />,
  };
  const targetPage = sitePages.find((page) => page.id === section.id);

  return (
    <a className="index-card" href={targetPage?.path ?? `#${section.id}`}>
      <span className="index-number">{index.toString().padStart(2, "0")}</span>
      <i aria-hidden="true">{icons[section.id] ?? <FileText />}</i>
      <h3>{section.title}</h3>
      <p>{section.description}</p>
      <strong>
        {section.cta} <ExternalLink size={16} />
      </strong>
    </a>
  );
}

function StatTile({ icon, label, value, note, tone }) {
  return (
    <article className={cn("stat-tile", tone && `tone-${tone}`)}>
      {icon}
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function ClaimRebuttal({ item, expanded, onToggle }) {
  return (
    <article className={cn("claim-card", expanded && "open")}>
      <button type="button" onClick={onToggle} aria-expanded={expanded} aria-controls={`claim-${item.id}`}>
        <span>{item.title}</span>
        <strong>{item.claim}</strong>
      </button>
      {expanded ? (
        <div className="claim-body" id={`claim-${item.id}`}>
          <RebuttalBlock icon={<ShieldAlert />} title="Lo que ocurre realmente" text={item.reality} />
          <RebuttalBlock icon={<HeartPulse />} title="Por qué no basta" text={item.whyItMatters} />
          <RebuttalBlock icon={<Scale />} title="Qué reclamamos" text={item.demand} />
          {item.refs?.length ? (
            <div className="claim-refs" aria-label="Referencias del punto">
              <span>Referencias concretas</span>
              <div>
                {item.refs.map((ref) => (
                  <small key={ref}>{ref}</small>
                ))}
              </div>
            </div>
          ) : null}
          <SourceBadges ids={item.sources} />
        </div>
      ) : null}
    </article>
  );
}

function RebuttalBlock({ icon, title, text }) {
  return (
    <section className="rebuttal-block">
      {icon}
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </section>
  );
}

function NewsRebuttal({ item }) {
  return (
    <article className="news-card">
      <div className="news-meta">
        <span>{item.outlet}</span>
        <time dateTime={item.date}>{new Intl.DateTimeFormat("es-ES").format(new Date(item.date))}</time>
      </div>
      <h3>{item.title}</h3>
      <div className="news-field">
        <span>Qué se afirma</span>
        <p>{item.claim}</p>
      </div>
      <div className="news-field">
        <span>Respuesta</span>
        <p>{item.response}</p>
      </div>
      <div className="news-key">
        <strong>La clave</strong>
        <p>{item.keyMessage}</p>
      </div>
      <SourceBadges ids={item.sources} />
    </article>
  );
}

function DemandCard({ item, index }) {
  return (
    <article className="demand-card">
      <span className="demand-index">{index}</span>
      <small>{item.category}</small>
      <h3>{item.title}</h3>
      <strong>{item.short}</strong>
      <p>{item.explanation}</p>
      <SourceBadges ids={item.sources} compact />
    </article>
  );
}

function SourceBadges({ ids, compact = false }) {
  return (
    <div className={cn("source-badges", compact && "compact")}>
      {ids.map((id) => {
        const source = sourceRegistry[id];
        if (!source) return null;
        return (
          <a href={source.url} target="_blank" rel="noreferrer" key={id}>
            {source.institution}
            <ExternalLink size={13} />
          </a>
        );
      })}
    </div>
  );
}

function SourceLink({ id }) {
  const source = sourceRegistry[id];
  if (!source) return null;

  return (
    <a href={source.url} target="_blank" rel="noreferrer">
      <span>
        <strong>{source.title}</strong>
        <small>
          {source.institution} · {source.type} · {source.documentDate ?? source.year}
          {source.version ? ` · ${source.version}` : ""}
        </small>
      </span>
      <ExternalLink size={16} />
    </a>
  );
}

function YearSelector({ yearIndex, setYearIndex, reduceMotion }) {
  return (
    <LayoutGroup>
      <div className="year-selector" role="group" aria-label="Año de residencia">
        {residenceYears.map((year, index) => (
          <button
            className={cn(yearIndex === index && "active")}
            key={year}
            aria-pressed={yearIndex === index}
            onClick={() => setYearIndex(index)}
            type="button"
          >
            {yearIndex === index && (
              <Motion.span className="active-pill" layoutId={reduceMotion ? undefined : "year-pill"} />
            )}
            <span className="button-label">{year}</span>
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
}

function StackedBar({ base, total, label, reduceMotion }) {
  const guard = total - base;
  const basePct = (base / total) * 100;
  return (
    <div className="stacked">
      <div className="stacked-label">
        <span>{label}</span>
        <strong>{eur(total)} € brutos/mes</strong>
      </div>
      <div className="stacked-track">
        <Motion.span
          className="base"
          initial={reduceMotion ? { width: `${basePct}%` } : { width: 0 }}
          whileInView={{ width: `${basePct}%` }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        />
        <Motion.span
          className="guard"
          initial={reduceMotion ? { width: `${100 - basePct}%` } : { width: 0 }}
          whileInView={{ width: `${100 - basePct}%` }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
        />
      </div>
      <div className="legend">
        <span>
          <i className="base-dot" /> {eur(base)} € sueldo sin guardias
        </span>
        <span>
          <i className="guard-dot" /> {eur(guard)} € guardias
        </span>
      </div>
    </div>
  );
}

function CompactBar({ row, yearIndex, selected, onClick, reduceMotion }) {
  const base = row.base[yearIndex];
  const total = row.withGuardsGross[yearIndex];
  const guard = total - base;
  const maxTotal = Math.max(...ccaaRows.map((item) => item.withGuardsGross[yearIndex]));
  const totalPct = (total / maxTotal) * 100;
  const basePct = (base / total) * 100;

  return (
    <Motion.button
      aria-pressed={selected}
      className={`compact-bar ${selected ? "selected" : ""}`}
      onClick={onClick}
      type="button"
      layout={reduceMotion ? false : true}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <span className="name">{row.ccaa}</span>
      <span className="bar" style={{ width: `${totalPct}%` }}>
        <Motion.i
          className="base-part"
          initial={reduceMotion ? { width: `${basePct}%` } : { width: 0 }}
          whileInView={{ width: `${basePct}%` }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : undefined}
        />
        <Motion.i
          className="guard-part"
          initial={reduceMotion ? { width: `${100 - basePct}%` } : { width: 0 }}
          whileInView={{ width: `${100 - basePct}%` }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : undefined}
        />
      </span>
      <span className="amounts">
        {eur(base)} + {eur(guard)} = <b>{eur(total)} €</b>
      </span>
    </Motion.button>
  );
}

function RevealSection({ children, className, id }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      className={className}
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
    >
      {children}
    </Motion.section>
  );
}

function SpotlightPanel({ children, className }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.div
      className={cn("spotlight", className)}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 280, damping: 24 }}
    >
      {children}
    </Motion.div>
  );
}

function PortalApp() {
  const root = document.getElementById("root");
  const pageId = root?.dataset.page ?? "home";
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const scaleX = reduceMotion ? scrollYProgress : smoothScaleX;

  return (
    <main className="portal-page multipage-page">
      <Motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <SiteHeader pageId={pageId} />
      {pageId === "reivindicaciones" ? <ReivindicacionesPage /> : null}
      {pageId === "anteproyecto" ? <AnteproyectoPage /> : null}
      {pageId === "mir" ? <MirPage /> : null}
      {pageId === "noticias" ? <NoticiasPage /> : null}
      {pageId === "fuentes" ? <FuentesPage /> : null}
      {pageId === "argumentario" ? <ArgumentarioPage /> : null}
      {pageId === "home" || !sitePages.some((page) => page.id === pageId) ? <HomePage /> : null}
      <PortalFooter />
    </main>
  );
}

function HomePage() {
  return (
    <>
      <section className="portal-hero home-hero" id="inicio">
        <div className="portal-hero-inner">
          <div className="eyebrow portal-eyebrow">
            <Stethoscope size={18} />
            Portal médico-facultativo por un Estatuto propio
          </div>
          <h1>Estatuto Médico Propio</h1>
          <p className="portal-lead">No pedimos decidir por nadie. Pedimos que nadie decida por nosotros.</p>
          <p className="portal-hero-copy">
            Datos, fuentes, desmontajes y materiales para defender un Estatuto Médico y Facultativo propio:
            guardias, jornada, descanso, conciliación, responsabilidad clínica, formación, clasificación,
            jubilación y derechos laborales.
          </p>
          <div className="hero-actions portal-actions">
            <a className="button primary" href="reivindicaciones.html">
              Ver reivindicaciones <ListChecks size={18} />
            </a>
            <a className="button urgent" href="anteproyecto.html">
              Analizar anteproyecto <Scale size={18} />
            </a>
            <a className="button ghost" href="mir.html">
              Caso MIR <BadgeEuro size={18} />
            </a>
          </div>
        </div>
        <aside className="portal-hero-panel" aria-label="Resumen estratégico">
          <div className="hero-proof-grid">
            <HeroProof label="Objetivo" value="Estatuto propio" />
            <HeroProof label="Condición política" value="Mesa propia" />
            <HeroProof label="Línea roja" value="Guardias computables" />
            <HeroProof label="Derecho básico" value="Descanso real" />
          </div>
          <small>La portada es un directorio. El desarrollo completo está organizado en páginas específicas.</small>
        </aside>
      </section>

      <RevealSection className="portal-section home-program-section" id="programa">
        <SectionHeading
          kicker="Programa en 20 segundos"
          title="La reivindicación, antes que el detalle."
          text="Cuatro ideas bastan para orientar al visitante antes de entrar en datos, fuentes o desmontajes."
        />
        <div className="demands-grid compact-demands">
          {reivindicaciones.slice(0, 4).map((item, index) => (
            <DemandCard item={item} index={index + 1} key={item.id} />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="portal-section index-section" id="directorio">
        <SectionHeading
          kicker="Directorio"
          title="Cada tema en su página. Nada de scroll interminable."
          text="Elige el bloque que necesitas: programa, anteproyecto, MIR, noticias, fuentes o argumentario."
        />
        <div className="index-grid">
          {homeSections.map((section, index) => (
            <IndexCard section={section} index={index + 1} key={section.id} />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="portal-section argument-section home-argument-section" id="mensajes">
        <div className="argument-layout">
          <div>
            <span className="kicker">Mensajes clave</span>
            <h2>Tres frases para fijar el marco.</h2>
            <p>La portada no intenta contarlo todo: deja clara la posición y dirige al detalle.</p>
          </div>
          <div className="quick-arguments">
            {quickArguments.slice(0, 3).map((argument) => (
              <article key={argument}>
                <ClipboardList size={18} />
                <p>{argument}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </>
  );
}

function ReivindicacionesPage() {
  const navItems = [
    { id: "programa", label: "Programa" },
    { id: "impacto", label: "Impacto por colectivo" },
    { id: "descarga", label: "Descarga" },
  ];

  return (
    <>
      <PageHero
        kicker="Qué reclamamos"
        title="Un programa claro por un Estatuto Médico y Facultativo propio."
        text="No es una lista de quejas. Es una propuesta de negociación específica para responsabilidades específicas."
      />
      <PageShell navItems={navItems}>
        <section className="page-card-stack" id="programa">
          {reivindicaciones.map((item, index) => (
            <AccordionCard
              defaultOpen={index === 0}
              eyebrow={`${index + 1}. ${item.category}`}
              title={item.title}
              summary={item.short}
              key={item.id}
            >
              <p>{item.explanation}</p>
              <SourceBadges ids={item.sources} compact />
            </AccordionCard>
          ))}
        </section>

        <section className="collective-impact page-contained" id="impacto">
          <div>
            <span className="kicker">Impacto por colectivo</span>
            <h3>Qué sabemos ya y qué requiere datos homogéneos.</h3>
          </div>
          <div className="impact-table">
            {collectiveImpactRows.map((row) => (
              <article key={row.id}>
                <h4>{row.collective}</h4>
                <p>{row.impact}</p>
                <span>{row.quantitativeStatus}</span>
                <strong>{row.demand}</strong>
                <div>
                  {row.affectedBy.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-download-panel" id="descarga">
          <h3>Documento base</h3>
          <p>Programa y tesis general en formato descargable.</p>
          <DownloadCard label="Dossier Estatuto Médico Propio" href="downloads/dossier_estatuto_medico_propio.md" />
        </section>
      </PageShell>
    </>
  );
}

function AnteproyectoPage() {
  const navItems = [
    { id: "desmontaje", label: "Desmontaje" },
    { id: "matriz", label: "Matriz" },
    { id: "metodo", label: "Método" },
  ];

  return (
    <>
      <PageHero
        kicker="Anteproyecto de Estatuto Marco"
        title="Qué se anuncia, qué queda sin garantizar y qué reclamamos."
        text="Análisis médico-facultativo de guardias, jornada, descanso, conciliación, jubilación, clasificación y negociación propia."
      />
      <PageShell navItems={navItems}>
        <section className="page-card-stack" id="desmontaje">
          {anteproyectoClaims.map((item, index) => (
            <AccordionCard
              defaultOpen={index === 0}
              eyebrow={item.title}
              title={item.claim}
              summary={item.reality}
              key={item.id}
            >
              <RebuttalBlock icon={<ShieldAlert />} title="Lo que ocurre realmente" text={item.reality} />
              <RebuttalBlock icon={<HeartPulse />} title="Por qué no basta" text={item.whyItMatters} />
              <RebuttalBlock icon={<Scale />} title="Qué reclamamos" text={item.demand} />
              {item.refs?.length ? <TagList items={item.refs} /> : null}
              <SourceBadges ids={item.sources} />
            </AccordionCard>
          ))}
        </section>

        <section className="page-card-stack" id="matriz">
          <SectionHeading
            kicker="Matriz pública"
            title="Artículo, efecto práctico, riesgo y demanda."
            text="Cada punto queda resumido para escanear rápido y ampliado bajo demanda."
          />
          {articleMatrix.map((row, index) => (
            <AccordionCard
              defaultOpen={index === 0}
              eyebrow={row.reference}
              title={row.topic}
              summary={row.impact}
              aside={<StatusBadge status={row.status} />}
              key={row.id}
            >
              <DefinitionGrid
                rows={[
                  ["Marco actual", row.currentFrame],
                  ["Cambio propuesto", row.proposedChange],
                  ["Impacto", row.impact],
                  ["Riesgo abierto", row.hiddenRisk],
                  ["Qué reclamamos", row.demand],
                ]}
              />
              <TagList items={row.affected} />
              <SourceBadges ids={row.evidence} />
            </AccordionCard>
          ))}
        </section>

        <section className="limits-panel page-limits" id="metodo">
          <div>
            <span className="kicker">Método y límites</span>
            <h3>Hechos, lectura crítica y demandas separados.</h3>
            <p>Cada afirmación importante debe poder llevar a una fuente, un artículo, una tabla o una limitación explícita.</p>
          </div>
          <ul>
            {evidenceGaps.map((gap) => (
              <li key={gap}>
                <ClipboardList size={18} />
                <span>{gap}</span>
              </li>
            ))}
          </ul>
        </section>
      </PageShell>
    </>
  );
}

function MirPage() {
  const [yearIndex, setYearIndex] = useState(0);
  const [selectedCcaa, setSelectedCcaa] = useState("Madrid");
  const [sortMode, setSortMode] = useState("guardias");
  const reduceMotion = useReducedMotion();
  const ccaaHighlightRef = useRef(null);
  const shouldScrollToCcaaHighlightRef = useRef(false);
  const current = summaryByYear[yearIndex];
  const currentMirScenarios = mirGuardScenarios.filter((scenario) => scenario.year === current.year);
  const selected = ccaaRows.find((row) => row.ccaa === selectedCcaa) ?? ccaaRows[0];
  const selectedNet = selected.withGuardsNet[yearIndex];
  const selectedGross = selected.withGuardsGross[yearIndex];
  const selectedBase = selected.base[yearIndex];
  const selectedHourly = selectedNet / TOTAL_HOURS;
  const currentHourly = current.netWithGuards / TOTAL_HOURS;
  const sortedRows = useMemo(() => {
    const rows = [...ccaaRows];
    if (sortMode === "guardias") {
      rows.sort(
        (a, b) =>
          b.withGuardsGross[yearIndex] -
          b.base[yearIndex] -
          (a.withGuardsGross[yearIndex] - a.base[yearIndex]),
      );
    } else if (sortMode === "base") {
      rows.sort((a, b) => b.base[yearIndex] - a.base[yearIndex]);
    } else {
      rows.sort((a, b) => a.ccaa.localeCompare(b.ccaa, "es"));
    }
    return rows;
  }, [sortMode, yearIndex]);

  const selectCcaa = (ccaa, scrollToHighlight = false) => {
    shouldScrollToCcaaHighlightRef.current = scrollToHighlight;
    setSelectedCcaa(ccaa);
  };

  useEffect(() => {
    if (!shouldScrollToCcaaHighlightRef.current) return;
    shouldScrollToCcaaHighlightRef.current = false;
    window.requestAnimationFrame(() => {
      ccaaHighlightRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [selectedCcaa, reduceMotion]);

  return (
    <>
      <PageHero
        kicker="Caso demostrativo"
        title="MIR: no es sueldo, son guardias."
        text="El caso MIR muestra por qué una cifra salarial no puede separarse de horas reales, noches, festivos y guardias."
      />
      <PageShell navItems={[
        { id: "resumen", label: "Resumen" },
        { id: "calculadora", label: "Cálculo" },
        { id: "escenarios", label: "Escenarios" },
        { id: "ccaa", label: "CCAA" },
      ]}>
        <section id="resumen">
          <div className="stat-grid mir-snapshot" aria-label="Resumen MIR con guardias">
            <StatTile icon={<GraduationCap />} label={`${summaryByYear[0].year} medio sin guardias`} value={`${eur(summaryByYear[0].grossNoGuards)} €`} note="brutos/mes" />
            <StatTile icon={<Clock3 />} label="Guardias añadidas" value={`+${GUARD_HOURS} h/mes`} note={`${eur(GUARD_WEEKLY_EQUIVALENT, 1)} h/semana adicionales`} tone="warning" />
            <StatTile icon={<BadgeEuro />} label={`${summaryByYear[0].year} con 80 h de guardia`} value={`${eur(summaryByYear[0].netWithGuards)} €`} note={`${eur(summaryByYear[0].netWithGuards / TOTAL_HOURS, 2)} €/h netos`} tone="danger" />
            <StatTile icon={<BookOpenCheck />} label="Fuera del cálculo" value="Formación" note="estudio, sesiones, congresos, investigación y publicaciones no cuantificados" />
          </div>
          <div className="mir-tool-strip" aria-label="Material rápido sobre MIR">
            <article>
              <span>Respuesta visual</span>
              <h3>Infografía rápida: la tabla solo se entiende al dividir por horas.</h3>
              <p>Comparte una pieza breve con el cálculo MIR desglosado por sueldo ordinario, guardias y horas reales.</p>
              <a className="button urgent" href="infografia.html">Abrir infografía HTML <ExternalLink size={18} /></a>
            </article>
            <article>
              <span>Campaña</span>
              <h3>Canción de la huelga</h3>
              <p>Material de campaña para acompañar la movilización por un Estatuto Médico y Facultativo propio.</p>
              <a className="button song dark-song" href="https://www.youtube.com/shorts/AfkLTBqXR50" target="_blank" rel="noreferrer">Escuchar canción <Music2 size={18} /></a>
            </article>
          </div>
        </section>

        <section className="page-card-stack" id="calculadora">
          <YearSelector yearIndex={yearIndex} setYearIndex={setYearIndex} reduceMotion={reduceMotion} />
          <div className="calc-grid">
            <SpotlightPanel className="panel calculation">
              <div className="calc-row"><span>Jornada ordinaria {ORDINARY_WEEKLY_HOURS} h/semana</span><strong>{eur(ORDINARY_HOURS, 1)} h/mes</strong></div>
              <div className="calc-row danger"><span>Guardias extra del escenario: +{eur(GUARD_WEEKLY_EQUIVALENT, 1)} h/semana</span><strong>+{GUARD_HOURS} h/mes</strong></div>
              <div className="divider" />
              <div className="calc-row total"><span>Jornada ordinaria + guardias extra</span><strong>{eur(TOTAL_HOURS, 1)} h/mes</strong></div>
              <p className="calc-note">Con 37,5 h/semana, el divisor sube a {eur(HOURS_37_5_MODEL, 1)} h/mes ({eur(HOURS_37_5_WEEKLY_MODEL, 1)} h/semana de media) y el €/h baja.</p>
            </SpotlightPanel>
            <SpotlightPanel className="panel result-card">
              <BadgeEuro size={32} />
              <p>Media {current.year} con 80 h mensuales de guardia</p>
              <strong className="result-amount"><span>{eur(current.netWithGuards)} €</span><small>netos/mes</small></strong>
              <span>equivale a <b>{eur(currentHourly, 2)} €/h netos</b></span>
            </SpotlightPanel>
          </div>
          <SpotlightPanel className="stacked-card">
            <div>
              <h3>{current.year}: de dónde sale el bruto</h3>
              <p>Una parte sustancial del bruto publicado no es sueldo ordinario: depende de guardias.</p>
            </div>
            <StackedBar base={current.grossNoGuards} total={current.grossWithGuards} label={`Media ${current.year}`} reduceMotion={reduceMotion} />
          </SpotlightPanel>
        </section>

        <section className="mir-scenarios" id="escenarios" aria-labelledby="mir-scenarios-title">
          <div>
            <span className="kicker">Sensibilidad de guardias</span>
            <h3 id="mir-scenarios-title">{current.year}: qué pasa con 3, 4, 5 o 6 guardias</h3>
            <p>Estimación bruta lineal a partir del escenario publicado con 80 h/mes. No sustituye una nómina real.</p>
          </div>
          <div className="scenario-table" role="table" aria-label={`Escenarios ${current.year} con 3 a 6 guardias`}>
            <div className="scenario-row scenario-head" role="row"><span>Guardias</span><span>Horas guardia</span><span>h/sem real</span><span>Bruto estimado</span><span>€/h bruto</span><span>Peso guardias</span></div>
            {currentMirScenarios.map((scenario) => (
              <div className="scenario-row" role="row" key={scenario.id}>
                <span>{scenario.guardCount}</span><span>{scenario.guardHours} h/mes</span><span>{eur(scenario.weeklyEquivalent, 1)}</span><span>{eur(scenario.estimatedGrossWithGuards)} €</span><span>{eur(scenario.estimatedGrossPerHour, 2)} €</span><span>{eur(scenario.guardGrossShare * 100, 0)}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ccaa-module" id="ccaa">
          <SectionHeading kicker="Tu comunidad" title="Compara salario ordinario y guardias." text="Elige CCAA y año. La visualización separa sueldo sin guardias de la parte que algunas tablas meten dentro del total." />
          <div className="controls-row">
            <label>Comunidad autónoma<select value={selectedCcaa} onChange={(event) => selectCcaa(event.target.value)}>{ccaaRows.map((row) => <option key={row.ccaa} value={row.ccaa}>{row.ccaa}</option>)}</select></label>
            <div className="sort-tabs" role="group" aria-label="Ordenar comunidades">
              <button aria-pressed={sortMode === "guardias"} className={sortMode === "guardias" ? "active" : ""} onClick={() => setSortMode("guardias")} type="button">Más guardia</button>
              <button aria-pressed={sortMode === "base"} className={sortMode === "base" ? "active" : ""} onClick={() => setSortMode("base")} type="button">Más base</button>
              <button aria-pressed={sortMode === "az"} className={sortMode === "az" ? "active" : ""} onClick={() => setSortMode("az")} type="button">A-Z</button>
            </div>
          </div>
          <div className="ccaa-highlight-target" ref={ccaaHighlightRef}>
            <SpotlightPanel className="ccaa-highlight panel">
              <div>
                <h3>{selected.ccaa} · {current.year}</h3>
                <p>Sin guardias: <strong>{eur(selectedBase)} € brutos/mes</strong>. Con 80 h adicionales de guardia: <strong>{eur(selectedGross)} € brutos/mes</strong>.</p>
                <p className="hourly">Neto estimado por hora real: <strong>{eur(selectedHourly, 2)} €/h</strong></p>
              </div>
              <div className="mini-stats"><span>Guardia laboral: {eur(selected.guardHours[yearIndex][0], 2)} €/h</span><span>Festivo: {eur(selected.guardHours[yearIndex][1], 2)} €/h</span><span>Especial: {eur(selected.guardHours[yearIndex][2], 2)} €/h</span></div>
            </SpotlightPanel>
          </div>
          <div className="bars-list">
            {sortedRows.map((row) => <CompactBar key={row.ccaa} row={row} yearIndex={yearIndex} selected={row.ccaa === selectedCcaa} onClick={() => selectCcaa(row.ccaa, true)} reduceMotion={reduceMotion} />)}
          </div>
        </section>
      </PageShell>
    </>
  );
}

function NoticiasPage() {
  return (
    <>
      <PageHero kicker="Noticias y declaraciones" title="Respuesta a titulares, comunicados y argumentarios públicos." text="Fichas breves: qué se afirma, respuesta, mensaje clave y fuentes." />
      <PageShell navItems={newsRebuttals.map((item) => ({ id: item.id, label: item.outlet }))}>
        <section className="page-card-stack">
          {newsRebuttals.map((item, index) => (
            <AccordionCard defaultOpen={index === 0} eyebrow={`${item.outlet} · ${new Intl.DateTimeFormat("es-ES").format(new Date(item.date))}`} title={item.title} summary={item.claim} key={item.id} id={item.id}>
              <div className="news-field"><span>Respuesta</span><p>{item.response}</p></div>
              <div className="news-key"><strong>La clave</strong><p>{item.keyMessage}</p></div>
              <SourceBadges ids={item.sources} />
            </AccordionCard>
          ))}
        </section>
      </PageShell>
    </>
  );
}

function FuentesPage() {
  return (
    <>
      <PageHero kicker="Auditable" title="Fuentes, documentos y descargas." text="Documentos oficiales, posición médica, acuerdo sindical, prensa, tablas retributivas y materiales descargables separados por tipo." />
      <PageShell navItems={[{ id: "descargas", label: "Descargas" }, ...sourceGroups.map((group) => ({ id: group.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-"), label: group.title }))]}>
        <section id="descargas" className="downloads download-grid page-downloads">
          {downloads.map(([label, href]) => <DownloadCard label={label} href={href} key={href} />)}
        </section>
        <section className="page-card-stack">
          {sourceGroups.map((group, index) => {
            const id = group.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
            return (
              <AccordionCard defaultOpen={index === 0} eyebrow="Fuente documental" title={group.title} summary={`${group.ids.length} referencias`} key={group.title} id={id}>
                <div className="source-list">{group.ids.map((sourceId) => <SourceLink id={sourceId} key={sourceId} />)}</div>
              </AccordionCard>
            );
          })}
        </section>
      </PageShell>
    </>
  );
}

function ArgumentarioPage() {
  return (
    <>
      <PageHero kicker="Argumentario rápido" title="Respuestas breves para redes, asambleas y prensa." text="Frases cortas, repetibles y alineadas con la reivindicación de un Estatuto Médico y Facultativo propio." />
      <PageShell navItems={[{ id: "frases", label: "Frases" }, { id: "metodo", label: "Método" }, { id: "descargas", label: "Descargas" }]}>
        <section className="quick-arguments page-quick-arguments" id="frases">
          {quickArguments.map((argument) => <article key={argument}><ClipboardList size={18} /><p>{argument}</p></article>)}
        </section>
        <section className="method-grid" id="metodo">
          {methodologyPrinciples.map((item) => <article className="method-card" key={item.title}><CheckCircle2 size={20} /><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </section>
        <section className="page-download-panel" id="descargas">
          <h3>Material compartible</h3>
          <p>Argumentario general y respuesta base para titulares sobre el Estatuto Marco.</p>
          <DownloadCard label="Argumentario Estatuto Médico" href="downloads/argumentario_estatuto_medico.md" />
          <DownloadCard label="Respuesta noticia Estatuto Marco" href="downloads/respuesta_noticia_estatuto_marco.md" />
        </section>
      </PageShell>
    </>
  );
}

function PageHero({ kicker, title, text }) {
  return (
    <section className="page-hero">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function PageShell({ children, navItems }) {
  return (
    <div className="page-shell">
      <aside className="page-side-nav" aria-label="Índice de página">
        <details>
          <summary>Índice de página</summary>
          <nav>{navItems.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</nav>
        </details>
        <nav className="desktop-page-nav">{navItems.map((item) => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}</nav>
      </aside>
      <div className="page-main-content">{children}</div>
    </div>
  );
}

function AccordionCard({ eyebrow, title, summary, children, defaultOpen = false, aside, id }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = `${id ?? title.toLowerCase().replace(/[^a-z0-9]+/gi, "-")}-content`;

  return (
    <article className={cn("accordion-card", open && "open")} id={id}>
      <button type="button" aria-expanded={open} aria-controls={contentId} onClick={() => setOpen((value) => !value)}>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
        {summary ? <small>{summary}</small> : null}
        {aside}
        <i>{open ? "Cerrar" : "Abrir"}</i>
      </button>
      {open ? <div className="accordion-content" id={contentId}>{children}</div> : null}
    </article>
  );
}

function StatusBadge({ status }) {
  return <span className={cn("status-badge", `status-${status}`)}>{status.replaceAll("-", " ")}</span>;
}

function TagList({ items }) {
  return <div className="tag-list">{items.map((item) => <small key={item}>{item}</small>)}</div>;
}

function DefinitionGrid({ rows }) {
  return (
    <dl className="definition-grid">
      {rows.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
    </dl>
  );
}

function DownloadCard({ label, href }) {
  return (
    <a className="download-card" href={href} download>
      <Download size={20} />
      <span>{label}</span>
    </a>
  );
}

function PortalFooter() {
  return (
    <footer className="portal-footer">
      <strong>Un Estatuto Médico propio no es corporativismo ni privilegio.</strong>
      <span>Es voz propia, responsabilidad reconocida, conciliación real y derechos laborales.</span>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<PortalApp />);
