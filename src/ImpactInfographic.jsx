import { ArrowLeft, BadgeEuro, BookOpenCheck, Calculator, Clock3, ExternalLink } from "lucide-react";
import { hourModel, summaryByYear } from "./data";

const ORDINARY_WEEKLY_HOURS = hourModel.weeklyOrdinaryHours;
const ORDINARY_HOURS = hourModel.ordinaryHoursPerMonth;
const GUARD_HOURS = hourModel.guardHoursPerMonth;
const GUARD_WEEKLY_EQUIVALENT = hourModel.guardHoursPerWeekEquivalent;
const TOTAL_HOURS = hourModel.totalHoursPerMonth;
const TOTAL_WEEKLY_EQUIVALENT = hourModel.totalHoursPerWeekEquivalent;

const eur = (value, digits = 0) =>
  new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

export function ImpactInfographic() {
  const r1 = summaryByYear[0];
  const r5 = summaryByYear[4];
  const r1Hourly = r1.netWithGuards / TOTAL_HOURS;
  const r5Hourly = r5.netWithGuards / TOTAL_HOURS;
  const guardExtraPct = (GUARD_HOURS / ORDINARY_HOURS) * 100;
  const r1GuardGross = r1.grossWithGuards - r1.grossNoGuards;

  return (
    <main className="standalone-infographic-page">
      <article className="impact-infographic standalone" aria-labelledby="impact-title">
        <div className="impact-topline">
          <span>Respuesta rápida a la tabla del CSIF</span>
          <strong>
            Datos SIMEG/CTO 2026 · escenario con {GUARD_HOURS} h/mes de guardia
            {" "}({eur(GUARD_WEEKLY_EQUIVALENT, 1)} h/semana de media)
          </strong>
        </div>

        <div className="impact-hero">
          <div>
            <span className="kicker">El truco de la tabla</span>
            <h1 id="impact-title">No es sueldo alto. Son horas que no enseñan.</h1>
          </div>
          <div className="impact-verdict">
            <span>R1 real con guardias</span>
            <strong>{eur(r1Hourly, 2)} €/h</strong>
            <small>netos, antes de sumar estudio y formación fuera de jornada</small>
          </div>
        </div>

        <section className="impact-context" aria-label="Contexto de la respuesta">
          <div>
            <span>A quién responde</span>
            <p>
              A un cartel de CSIF que presenta importes netos mensuales de residentes MIR por comunidad
              autónoma y año de residencia.
            </p>
          </div>
          <div>
            <span>Qué omite</span>
            <p>
              La cifra llamativa no es sueldo ordinario: incluye guardias. Sin enseñar las horas, la tabla
              convierte noches, fines de semana y festivos en una supuesta nómina normal y normaliza una
              jornada extraordinaria estructural.
            </p>
          </div>
          <a className="context-link" href="evidence/csif-tabla.jpeg" target="_blank" rel="noreferrer">
            Ver tabla original <ExternalLink size={16} />
          </a>
        </section>

        <div className="impact-compare" aria-label="Comparación entre el mensaje del cartel y el cálculo real">
          <div className="claim-block csif-side">
            <span>Lo que parece decir el cartel</span>
            <strong>{eur(r1.netWithGuards)} € netos</strong>
            <small>R1 con guardias presentado como si fuera sueldo mensual ordinario</small>
          </div>
          <div className="claim-block reality-side">
            <span>Lo que falta dividir</span>
            <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
            <small>
              {eur(TOTAL_WEEKLY_EQUIVALENT, 1)} h/semana de media:
              {" "}{ORDINARY_WEEKLY_HOURS} h/semana ordinarias + {eur(GUARD_WEEKLY_EQUIVALENT, 1)}
              {" "}h/semana de guardia
            </small>
          </div>
        </div>

        <div className="formula-strip" aria-label="Formula del calculo por hora">
          <span>{eur(r1.netWithGuards)} € netos</span>
          <b>/</b>
          <span>{eur(TOTAL_HOURS, 1)} h/mes reales</span>
          <b>=</b>
          <strong>{eur(r1Hourly, 2)} €/h netos</strong>
        </div>

        <aside className="impact-training-note" aria-label="Trabajo formativo no incluido en el calculo">
          <BookOpenCheck aria-hidden="true" />
          <div>
            <span>Y esto sigue siendo conservador</span>
            <p>
              No se añade al cálculo porque no está cuantificado aquí, pero muchos residentes pasan tardes y
              fines de semana estudiando, preparando sesiones, cursando másteres o postgrados, doctorándose,
              asistiendo a congresos, investigando y publicando. Ese trabajo formativo no se retribuye y,
              a menudo, tiene coste directo para el propio residente.
            </p>
          </div>
        </aside>

        <div className="impact-grid">
          <div className="impact-stat">
            <Clock3 aria-hidden="true" />
            <span>Guardias del cartel</span>
            <strong>+{GUARD_HOURS} h/mes</strong>
            <small>
              equivalen a +{eur(GUARD_WEEKLY_EQUIVALENT, 1)} h/semana de media: un {eur(guardExtraPct, 0)}%
              extra sobre la jornada ordinaria anualizada; además, no computa para la jubilación.
            </small>
          </div>
          <div className="impact-stat">
            <BadgeEuro aria-hidden="true" />
            <span>R1 sin guardias</span>
            <strong>{eur(r1.grossNoGuards)} €</strong>
            <small>brutos/mes. La cifra vistosa depende de añadir guardias.</small>
          </div>
          <div className="impact-stat">
            <Calculator aria-hidden="true" />
            <span>Parte bruta de guardias</span>
            <strong>{eur(r1GuardGross)} €</strong>
            <small>el {eur(r1.guardShare * 100, 0)}% del bruto R1 con guardias</small>
          </div>
        </div>

        <div className="impact-hours">
          <div className="impact-hour-label">
            <span>Jornada ordinaria {ORDINARY_WEEKLY_HOURS} h/semana</span>
            <strong>{eur(ORDINARY_HOURS, 1)} h</strong>
          </div>
          <div className="impact-hour-bar">
            <span className="impact-hour-base" style={{ width: `${(ORDINARY_HOURS / TOTAL_HOURS) * 100}%` }} />
            <span className="impact-hour-guard" style={{ width: `${(GUARD_HOURS / TOTAL_HOURS) * 100}%` }} />
          </div>
          <div className="impact-hour-label resident">
            <span>MIR con el escenario del cartel: {eur(TOTAL_WEEKLY_EQUIVALENT, 1)} h/semana</span>
            <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
          </div>
        </div>

        <div className="impact-bottom">
          <p>
            Incluso usando el año con cifra neta más alta, el argumento no cambia: un R5 llega a{" "}
            {eur(r5.netWithGuards)} € netos solo al sumar {GUARD_HOURS} h mensuales de guardia. Dividido entre{" "}
            {eur(TOTAL_HOURS, 1)} h/mes reales ({eur(TOTAL_WEEKLY_EQUIVALENT, 1)} h/semana de media), son{" "}
            <strong>{eur(r5Hourly, 2)} €/h netos</strong>. La comparación honesta debe mostrar tres cosas:
            sueldo base, guardias y horas trabajadas.
          </p>
          <a className="button primary impact-button" href="./">
            <ArrowLeft size={18} /> Volver a la web
          </a>
        </div>
      </article>
    </main>
  );
}
