import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AnimatePresence,
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
  CalendarClock,
  Download,
  ExternalLink,
  FileWarning,
  HeartPulse,
  Scale,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";
import {
  ccaaRows,
  downloads,
  estatutoIssues,
  hourModel,
  residenceYears,
  sources,
  summaryByYear,
} from "./data";
import { cn } from "./utils";
import "./styles.css";

const ORDINARY_HOURS = hourModel.ordinaryHoursPerMonth;
const GUARD_HOURS = hourModel.guardHoursPerMonth;
const TOTAL_HOURS = hourModel.totalHoursPerMonth;
const HOURS_37_5_MODEL = 37.5 * 52 / 12 + GUARD_HOURS;

const eur = (value, digits = 0) =>
  new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

function useYearData(yearIndex) {
  return summaryByYear[yearIndex];
}

function App() {
  const [yearIndex, setYearIndex] = useState(0);
  const [selectedCcaa, setSelectedCcaa] = useState("Madrid");
  const [expandedIssue, setExpandedIssue] = useState(0);
  const [sortMode, setSortMode] = useState("guardias");

  const current = useYearData(yearIndex);
  const selected = ccaaRows.find((row) => row.ccaa === selectedCcaa) ?? ccaaRows[0];
  const selectedNet = selected.withGuardsNet[yearIndex];
  const selectedGross = selected.withGuardsGross[yearIndex];
  const selectedBase = selected.base[yearIndex];
  const selectedHourly = selectedNet / TOTAL_HOURS;
  const currentHourly = current.netWithGuards / TOTAL_HOURS;
  const { scrollYProgress } = useScroll();
  const smoothScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const reduceMotion = useReducedMotion();
  const scaleX = reduceMotion ? scrollYProgress : smoothScaleX;

  const sortedRows = useMemo(() => {
    const rows = [...ccaaRows];
    if (sortMode === "guardias") {
      rows.sort((a, b) => b.withGuardsGross[yearIndex] - b.base[yearIndex] - (a.withGuardsGross[yearIndex] - a.base[yearIndex]));
    } else if (sortMode === "base") {
      rows.sort((a, b) => b.base[yearIndex] - a.base[yearIndex]);
    } else {
      rows.sort((a, b) => a.ccaa.localeCompare(b.ccaa, "es"));
    }
    return rows;
  }, [sortMode, yearIndex]);

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

  return (
    <main>
      <Motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Secciones">
          <a href="#datos">Datos</a>
          <a href="#estatuto">Estatuto</a>
          <a href="#ccaa">CCAA</a>
          <a href="#fuentes">Fuentes</a>
        </nav>

        <div className="hero-inner">
          <Motion.div
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
          >
            <Stethoscope size={18} />
            Medicina no se defiende con propaganda. Se defiende con datos.
          </Motion.div>
          <Motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.08 }}
          >
            No es sueldo. Son guardias.
          </Motion.h1>
          <Motion.p
            className="lead"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.16 }}
          >
            El cartel que presume de sueldos MIR esconde la clave: para llegar a esas cifras hay que sumar
            unas <strong>80 horas mensuales</strong> de tardes, noches, fines de semana y festivos.
          </Motion.p>
          <div className="hero-actions">
            <a className="button primary" href="#datos">
              Ver el cálculo <ArrowDown size={18} />
            </a>
            <a className="button ghost" href="#descargas">
              Descargar dossier <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-metrics" aria-label="Comparación R1 y R5 con guardias">
          <BaseMetricCard data={summaryByYear[0]} />
          <GuardRateMetricCard data={summaryByYear[0]} />
          <HoursMetricCard />
          <BaseMetricCard data={summaryByYear[4]} />
          <GuardRateMetricCard data={summaryByYear[4]} />
        </div>
      </section>

      <section className="section response-section" id="respuesta-csif">
        <SpotlightPanel className="panel csif-response">
          <div className="csif-copy">
            <span className="kicker">Contexto necesario</span>
            <h2>En respuesta al mensaje descontextualizado del CSIF: información real.</h2>
            <p>
              La receta era vistosa: sumar guardias, complementos, noches, festivos y trienios cuando toque;
              olvidarse del denominador -las horas- y llamar a eso "sueldo". Pequeña magia de hoja de cálculo,
              hasta que aparece la jornada real.
            </p>
          </div>

          <details className="csif-details">
            <summary>Abrir el cartel del CSIF que estamos contestando</summary>
            <figure>
              <img
                src="evidence/csif-tabla.jpeg"
                alt="Cartel del CSIF con una tabla de supuestos sueldos MIR por comunidad autonoma."
                loading="lazy"
              />
              <figcaption>
                Se muestra para contextualizar la respuesta: mezcla sueldo ordinario y guardias, pero no enseña
                las horas que hacen falta para llegar a esas cifras.
              </figcaption>
            </figure>
          </details>
        </SpotlightPanel>
      </section>

      <RevealSection className="section" id="datos">
        <div className="section-heading">
          <span className="kicker">El cálculo que falta</span>
          <h2>Cuando metes las horas, el relato se cae.</h2>
          <p>
            Selecciona año de residencia. La cifra central usa la media nacional publicada en SIMEG/CTO con
            80 horas mensuales de guardia. El cálculo toma como referencia 35 h/semana anualizadas
            ({eur(ORDINARY_HOURS, 1)} h/mes); algunas CCAA pueden tener 37,5 h o cómputos anuales propios.
          </p>
        </div>

        <YearSelector yearIndex={yearIndex} setYearIndex={setYearIndex} reduceMotion={reduceMotion} />

        <div className="calc-grid">
          <SpotlightPanel className="panel calculation">
            <div className="calc-row">
              <span>Jornada ordinaria 35 h/semana</span>
              <strong>{eur(ORDINARY_HOURS, 1)} h/mes</strong>
            </div>
            <div className="calc-row danger">
              <span>Guardias incluidas en el cartel</span>
              <strong>+{GUARD_HOURS} h/mes</strong>
            </div>
            <div className="divider" />
            <div className="calc-row total">
              <span>Horas usadas para el €/h</span>
              <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
            </div>
            <p className="calc-note">
              Es un denominador conservador y anualizado: 35 h x 52 semanas / 12 meses. No se han sumado aquí
              las horas reales de estudio, sesiones, congresos, másteres, investigación o formación postgrado
              que existen por encima de la jornada. Si se aplica 37,5 h/semana, el divisor sube a{" "}
              {eur(HOURS_37_5_MODEL, 1)} h/mes y el €/h baja.
            </p>
          </SpotlightPanel>

          <SpotlightPanel className="panel result-card">
            <BadgeEuro size={32} />
            <p>Media {current.year} con el escenario del cartel</p>
            <strong>{eur(current.netWithGuards)} € netos/mes</strong>
            <span>
              equivale a{" "}
              <b>{eur(currentHourly, 2)} €/h netos</b>
            </span>
          </SpotlightPanel>
        </div>

        <SpotlightPanel className="stacked-card">
          <div>
            <h3>{current.year}: de dónde sale el bruto</h3>
            <p>
              Casi la mitad del bruto publicado no es sueldo ordinario: depende de guardias. Eso no es un
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
            <h3>{current.year}: jornada española frente a jornada MIR real</h3>
            <p>
              Usamos 35 h/semana anualizadas como referencia principal: {eur(ORDINARY_HOURS, 1)} h/mes.
              El escenario del cartel añade 80 h/mes de guardias. Resultado: {eur(TOTAL_HOURS, 1)} h/mes
              antes de contar formación fuera de jornada.
            </p>
          </div>

          <div className="hours-visual" aria-label="Comparación de horas mensuales">
            <div className="hour-line">
              <div className="hour-line-label">
                <span>Jornada ordinaria 35 h/semana</span>
                <strong>{eur(ORDINARY_HOURS, 1)} h/mes</strong>
              </div>
              <span className="hour-track">
                <span className="hour-fill standard" style={{ width: `${(ORDINARY_HOURS / TOTAL_HOURS) * 100}%` }} />
              </span>
            </div>
            <div className="hour-line resident">
              <div className="hour-line-label">
                <span>MIR con 80 h de guardia</span>
                <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
              </div>
              <span className="hour-track">
                <span className="hour-fill ordinary" style={{ width: `${(ORDINARY_HOURS / TOTAL_HOURS) * 100}%` }} />
                <span className="hour-fill guard" style={{ width: `${(GUARD_HOURS / TOTAL_HOURS) * 100}%` }} />
              </span>
            </div>
          </div>

          <div className="hour-summary">
            <span>{eur(ORDINARY_HOURS, 1)} h ordinarias</span>
            <span>+ {GUARD_HOURS} h guardias</span>
            <strong>= {eur(TOTAL_HOURS, 1)} h/mes</strong>
          </div>

          <div className="hour-price">
            <span>Precio medio real empleado</span>
            <strong>{eur(currentHourly, 2)} €/h netos</strong>
            <small>
              Media nacional {current.year}: {eur(current.netWithGuards)} € netos/mes con 80 h de guardia /
              {eur(TOTAL_HOURS, 1)} h reales. La formación no registrada va por encima y no está incluida en
              este divisor.
            </small>
          </div>
        </SpotlightPanel>
      </RevealSection>

      <RevealSection className="section dark" id="estatuto">
        <div className="section-heading">
          <span className="kicker">Anteproyecto de Estatuto Marco</span>
          <h2>No mejora lo esencial: normaliza la excepción.</h2>
          <p>
            La medicina tiene condiciones particulares: responsabilidad clínica, decisiones críticas, noches,
            festivos, formación continuada, guardias y carga asistencial. Necesita un marco propio y una mesa
            propia.
          </p>
        </div>

        <div className="principles">
          <Principle icon={<Scale />} title="Ámbito propio" text="No queremos quedar diluidos. Las condiciones médicas deben negociarse con representación médica real." />
          <Principle icon={<CalendarClock />} title="Guardias reales" text="Toda hora por encima de jornada ordinaria debe reconocerse, pagarse y computar como trabajo." />
          <Principle icon={<HeartPulse />} title="Seguridad clínica" text="La fatiga no es vocación. Cuidar al paciente exige cuidar a quien decide y atiende." />
        </div>

        <LayoutGroup>
        <div className="issues">
          {estatutoIssues.map((issue, index) => (
            <Motion.button
              layout={reduceMotion ? false : true}
              className={`issue ${expandedIssue === index ? "open" : ""}`}
              key={issue.title}
              aria-expanded={expandedIssue === index}
              aria-controls={`issue-answer-${index}`}
              onClick={() => setExpandedIssue(expandedIssue === index ? -1 : index)}
              type="button"
            >
              <span className="issue-title">{issue.title}</span>
              <span className="claim">{issue.claim}</span>
              <AnimatePresence initial={false}>
                {expandedIssue === index && (
                  <Motion.span
                    className="answer"
                    id={`issue-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.22 }}
                  >
                    {issue.answer}
                    <small>{issue.refs.join(" · ")}</small>
                  </Motion.span>
                )}
              </AnimatePresence>
            </Motion.button>
          ))}
        </div>
        </LayoutGroup>
      </RevealSection>

      <RevealSection className="section" id="ccaa">
        <div className="section-heading">
          <span className="kicker">Tu comunidad</span>
          <h2>Compara salario ordinario y guardias.</h2>
          <p>
            Elige CCAA y año. La visualización separa sueldo sin guardias de la parte que el cartel mete
            dentro del total.
          </p>
        </div>

        <div className="controls-row">
          <label>
            Comunidad autónoma
            <select value={selectedCcaa} onChange={(event) => setSelectedCcaa(event.target.value)}>
              {ccaaRows.map((row) => (
                <option key={row.ccaa} value={row.ccaa}>
                  {row.ccaa}
                </option>
              ))}
            </select>
          </label>
          <div className="sort-tabs" role="group" aria-label="Ordenar comunidades">
            <button aria-pressed={sortMode === "guardias"} className={sortMode === "guardias" ? "active" : ""} onClick={() => setSortMode("guardias")} type="button">
              Más guardia
            </button>
            <button aria-pressed={sortMode === "base"} className={sortMode === "base" ? "active" : ""} onClick={() => setSortMode("base")} type="button">
              Más base
            </button>
            <button aria-pressed={sortMode === "az"} className={sortMode === "az" ? "active" : ""} onClick={() => setSortMode("az")} type="button">
              A-Z
            </button>
          </div>
        </div>

        <SpotlightPanel className="ccaa-highlight panel">
          <div>
            <h3>{selected.ccaa} · {current.year}</h3>
            <p>
              Sin guardias: <strong>{eur(selectedBase)} € brutos/mes</strong>. Con 80 h de guardia:
              {" "}<strong>{eur(selectedGross)} € brutos/mes</strong>.
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

        <div className="bars-list">
          {sortedRows.map((row) => (
            <CompactBar
              key={row.ccaa}
              row={row}
              yearIndex={yearIndex}
              selected={row.ccaa === selectedCcaa}
              onClick={() => setSelectedCcaa(row.ccaa)}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section soft">
        <div className="section-heading">
          <span className="kicker">Lo que exigimos</span>
          <h2>Un estatuto propio no es corporativismo. Es seguridad del paciente.</h2>
        </div>
        <div className="demands">
          <Demand icon={<ShieldAlert />} title="Guardias reconocidas" text="Que computen como trabajo real, para descanso, jubilación, carrera y cotización." />
          <Demand icon={<BookOpenCheck />} title="Formación protegida" text="La residencia no puede ser mano de obra barata con formación a costa del tiempo personal." />
          <Demand icon={<FileWarning />} title="Datos honestos" text="Toda tabla pública debe separar sueldo ordinario, guardias, complementos, horas y neto estimado." />
        </div>
      </RevealSection>

      <RevealSection className="section" id="fuentes">
        <div className="section-heading">
          <span className="kicker">Auditable</span>
          <h2>Fuentes y descargas.</h2>
          <p>Todo el argumento debe poder comprobarse. Aquí están los documentos y las fuentes principales.</p>
        </div>

        <div className="downloads" id="descargas">
          {downloads.map(([label, href]) => (
            <a className="download-card" href={href} download key={href}>
              <Download size={20} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="source-list">
          {sources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
              {source.label}
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </RevealSection>

      <footer>
        <strong>La sanidad pública no se sostiene culpando a sus residentes.</strong>
        <span>Se sostiene con condiciones dignas, descanso real y una negociación médica propia.</span>
      </footer>
    </main>
  );
}

function BaseMetricCard({ data }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.div
      className="summary-metric"
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20 }}
    >
      <span>{data.year} medio sin guardias</span>
      <strong>{eur(data.grossNoGuards)} €</strong>
      <small>brutos/mes</small>
    </Motion.div>
  );
}

function HoursMetricCard() {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.div
      className="summary-metric hours"
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20 }}
    >
      <span>Horas reales mínimas</span>
      <strong>{eur(TOTAL_HOURS, 1)} h</strong>
      <small>{eur(ORDINARY_HOURS, 1)} h ordinarias + {GUARD_HOURS} h guardias</small>
    </Motion.div>
  );
}

function GuardRateMetricCard({ data }) {
  const reduceMotion = useReducedMotion();
  const guardGross = data.grossWithGuards - data.grossNoGuards;
  const realNetHour = data.netWithGuards / TOTAL_HOURS;

  return (
    <Motion.div
      className="rate-metric guard-metric"
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="rate-head">
        <span>{data.year} con 80 h de guardia</span>
        <small>media nacional SIMEG/CTO</small>
      </div>
      <strong>{eur(data.netWithGuards)} €</strong>
      <small>netos/mes</small>
      <div className="rate-breakdown">
        <span>{eur(ORDINARY_HOURS, 1)} h ordinarias</span>
        <span>+ {GUARD_HOURS} h guardias</span>
        <b>= {eur(TOTAL_HOURS, 1)} h/mes</b>
      </div>
      <div className="rate-footer">
        <span>
          {eur(data.netWithGuards)} € / {eur(TOTAL_HOURS, 1)} h
        </span>
        <b>{eur(realNetHour, 2)} €/h netos</b>
      </div>
      <small className="rate-context">
        Parte bruta atribuida a guardias: {eur(guardGross)} €.
      </small>
    </Motion.div>
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
          {yearIndex === index && <Motion.span className="active-pill" layoutId={reduceMotion ? undefined : "year-pill"} />}
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
        <span><i className="base-dot" /> {eur(base)} € sueldo sin guardias</span>
        <span><i className="guard-dot" /> {eur(guard)} € guardias</span>
      </div>
    </div>
  );
}

function Principle({ icon, title, text }) {
  return (
    <article className="principle">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Demand({ icon, title, text }) {
  return (
    <article className="demand">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
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

createRoot(document.getElementById("root")).render(<App />);
