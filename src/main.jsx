import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
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
  residenceYears,
  sources,
  summaryByYear,
} from "./data";
import "./styles.css";

const ORDINARY_HOURS = 162.5;
const GUARD_HOURS = 80;
const TOTAL_HOURS = 242.5;
const TRAINING_TOTAL_HOURS = 264.2;

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
  const [includeTraining, setIncludeTraining] = useState(true);
  const [expandedIssue, setExpandedIssue] = useState(0);
  const [sortMode, setSortMode] = useState("guardias");

  const current = useYearData(yearIndex);
  const selected = ccaaRows.find((row) => row.ccaa === selectedCcaa) ?? ccaaRows[0];
  const selectedNet = selected.withGuardsNet[yearIndex];
  const selectedGross = selected.withGuardsGross[yearIndex];
  const selectedBase = selected.base[yearIndex];
  const selectedHourly = selectedNet / (includeTraining ? TRAINING_TOTAL_HOURS : TOTAL_HOURS);

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
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Secciones">
          <a href="#datos">Datos</a>
          <a href="#estatuto">Estatuto</a>
          <a href="#ccaa">CCAA</a>
          <a href="#fuentes">Fuentes</a>
        </nav>

        <div className="hero-inner">
          <div className="eyebrow">
            <Stethoscope size={18} />
            Medicina no se defiende con propaganda. Se defiende con datos.
          </div>
          <h1>No es sueldo. Son guardias.</h1>
          <p className="lead">
            El cartel que presume de sueldos MIR esconde la clave: para llegar a esas cifras hay que sumar
            unas <strong>80 horas mensuales</strong> de tardes, noches, fines de semana y festivos.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#datos">
              Ver el cálculo <ArrowDown size={18} />
            </a>
            <a className="button ghost" href="#descargas">
              Descargar dossier <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-metrics" aria-label="Resumen principal">
          <MetricCard label="R1 medio sin guardias" value={`${eur(current.grossNoGuards)} €`} detail="brutos/mes" />
          <MetricCard label="R1 con 80 h de guardia" value={`${eur(current.netWithGuards)} €`} detail="netos/mes" tone="red" />
          <MetricCard label="Horas reales mínimas" value={`${eur(TOTAL_HOURS, 1)} h`} detail="al mes" tone="amber" />
        </div>
      </section>

      <section className="section" id="datos">
        <div className="section-heading">
          <span className="kicker">El cálculo que falta</span>
          <h2>Cuando metes las horas, el relato se cae.</h2>
          <p>
            Selecciona año de residencia. La cifra central usa la media publicada en SIMEG/CTO con 80 horas
            mensuales de guardia y la compara con la jornada ordinaria.
          </p>
        </div>

        <YearSelector yearIndex={yearIndex} setYearIndex={setYearIndex} />

        <div className="calc-grid">
          <div className="panel calculation">
            <div className="calc-row">
              <span>Jornada ordinaria</span>
              <strong>{eur(ORDINARY_HOURS, 1)} h/mes</strong>
            </div>
            <div className="calc-row danger">
              <span>Guardias incluidas en el cartel</span>
              <strong>+{GUARD_HOURS} h/mes</strong>
            </div>
            {includeTraining && (
              <div className="calc-row muted">
                <span>Estimación prudente de formación no registrada</span>
                <strong>+{eur(TRAINING_TOTAL_HOURS - TOTAL_HOURS, 1)} h/mes</strong>
              </div>
            )}
            <div className="divider" />
            <div className="calc-row total">
              <span>Horas usadas para el €/h</span>
              <strong>{eur(includeTraining ? TRAINING_TOTAL_HOURS : TOTAL_HOURS, 1)} h/mes</strong>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={includeTraining}
                onChange={(event) => setIncludeTraining(event.target.checked)}
              />
              Incluir 5 h/semana de estudio, sesiones, investigación o cursos
            </label>
          </div>

          <div className="panel result-card">
            <BadgeEuro size={32} />
            <p>Media {current.year} con el escenario del cartel</p>
            <strong>{eur(current.netWithGuards)} € netos/mes</strong>
            <span>
              equivale a{" "}
              <b>{eur(includeTraining ? current.realNetHourWithTraining : current.realNetHour, 2)} €/h netos</b>
            </span>
          </div>
        </div>

        <div className="stacked-card">
          <div>
            <h3>{current.year}: de dónde sale el bruto</h3>
            <p>
              Casi la mitad del bruto publicado no es sueldo ordinario: depende de guardias. Eso no es un
              privilegio, es tiempo adicional y penoso sosteniendo la asistencia.
            </p>
          </div>
          <StackedBar base={current.grossNoGuards} total={current.grossWithGuards} label={`Media ${current.year}`} />
        </div>
      </section>

      <section className="section dark" id="estatuto">
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

        <div className="issues">
          {estatutoIssues.map((issue, index) => (
            <button
              className={`issue ${expandedIssue === index ? "open" : ""}`}
              key={issue.title}
              onClick={() => setExpandedIssue(expandedIssue === index ? -1 : index)}
              type="button"
            >
              <span className="issue-title">{issue.title}</span>
              <span className="claim">{issue.claim}</span>
              {expandedIssue === index && (
                <span className="answer">
                  {issue.answer}
                  <small>{issue.refs.join(" · ")}</small>
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="section" id="ccaa">
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
            <button className={sortMode === "guardias" ? "active" : ""} onClick={() => setSortMode("guardias")} type="button">
              Más guardia
            </button>
            <button className={sortMode === "base" ? "active" : ""} onClick={() => setSortMode("base")} type="button">
              Más base
            </button>
            <button className={sortMode === "az" ? "active" : ""} onClick={() => setSortMode("az")} type="button">
              A-Z
            </button>
          </div>
        </div>

        <div className="ccaa-highlight panel">
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
        </div>

        <div className="bars-list">
          {sortedRows.map((row) => (
            <CompactBar
              key={row.ccaa}
              row={row}
              yearIndex={yearIndex}
              selected={row.ccaa === selectedCcaa}
              onClick={() => setSelectedCcaa(row.ccaa)}
            />
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="section-heading">
          <span className="kicker">Lo que exigimos</span>
          <h2>Un estatuto propio no es corporativismo. Es seguridad del paciente.</h2>
        </div>
        <div className="demands">
          <Demand icon={<ShieldAlert />} title="Guardias reconocidas" text="Que computen como trabajo real, para descanso, jubilación, carrera y cotización." />
          <Demand icon={<BookOpenCheck />} title="Formación protegida" text="La residencia no puede ser mano de obra barata con formación a costa del tiempo personal." />
          <Demand icon={<FileWarning />} title="Datos honestos" text="Toda tabla pública debe separar sueldo ordinario, guardias, complementos, horas y neto estimado." />
        </div>
      </section>

      <section className="section" id="fuentes">
        <div className="section-heading">
          <span className="kicker">Auditable</span>
          <h2>Fuentes y descargas.</h2>
          <p>Todo el argumento debe poder comprobarse. Aquí están los documentos y las fuentes principales.</p>
        </div>

        <div className="downloads" id="descargas">
          {downloads.map(([label, href]) => (
            <a className="download-card" href={href} key={href}>
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
      </section>

      <footer>
        <strong>La sanidad pública no se sostiene culpando a sus residentes.</strong>
        <span>Se sostiene con condiciones dignas, descanso real y una negociación médica propia.</span>
      </footer>
    </main>
  );
}

function MetricCard({ label, value, detail, tone = "green" }) {
  return (
    <div className={`metric ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

function YearSelector({ yearIndex, setYearIndex }) {
  return (
    <div className="year-selector" role="group" aria-label="Año de residencia">
      {residenceYears.map((year, index) => (
        <button
          className={yearIndex === index ? "active" : ""}
          key={year}
          onClick={() => setYearIndex(index)}
          type="button"
        >
          {year}
        </button>
      ))}
    </div>
  );
}

function StackedBar({ base, total, label }) {
  const guard = total - base;
  const basePct = (base / total) * 100;
  return (
    <div className="stacked">
      <div className="stacked-label">
        <span>{label}</span>
        <strong>{eur(total)} € brutos/mes</strong>
      </div>
      <div className="stacked-track">
        <span className="base" style={{ width: `${basePct}%` }} />
        <span className="guard" style={{ width: `${100 - basePct}%` }} />
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

function CompactBar({ row, yearIndex, selected, onClick }) {
  const base = row.base[yearIndex];
  const total = row.withGuardsGross[yearIndex];
  const guard = total - base;
  const maxTotal = Math.max(...ccaaRows.map((item) => item.withGuardsGross[yearIndex]));
  const totalPct = (total / maxTotal) * 100;
  const basePct = (base / total) * 100;

  return (
    <button className={`compact-bar ${selected ? "selected" : ""}`} onClick={onClick} type="button">
      <span className="name">{row.ccaa}</span>
      <span className="bar" style={{ width: `${totalPct}%` }}>
        <i className="base-part" style={{ width: `${basePct}%` }} />
        <i className="guard-part" style={{ width: `${100 - basePct}%` }} />
      </span>
      <span className="amounts">
        {eur(base)} + {eur(guard)} = <b>{eur(total)} €</b>
      </span>
    </button>
  );
}

createRoot(document.getElementById("root")).render(<App />);
