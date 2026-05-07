import { ArrowLeft, BadgeEuro, Calculator, Clock3 } from "lucide-react";
import { hourModel, summaryByYear } from "./data";

const ORDINARY_HOURS = hourModel.ordinaryHoursPerMonth;
const GUARD_HOURS = hourModel.guardHoursPerMonth;
const TOTAL_HOURS = hourModel.totalHoursPerMonth;

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
          <span>Respuesta rápida al cartel del CSIF</span>
          <strong>Datos SIMEG/CTO 2026 · escenario con 80 h de guardia al mes</strong>
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

        <div className="impact-compare" aria-label="Comparación entre el mensaje del cartel y el cálculo real">
          <div className="claim-block csif-side">
            <span>Lo que parece decir el cartel</span>
            <strong>{eur(r1.netWithGuards)} € netos</strong>
            <small>R1 con guardias como si fuera sueldo mensual ordinario</small>
          </div>
          <div className="claim-block reality-side">
            <span>Lo que falta dividir</span>
            <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
            <small>
              {eur(ORDINARY_HOURS, 1)} h ordinarias + {GUARD_HOURS} h de guardia
            </small>
          </div>
        </div>

        <div className="formula-strip" aria-label="Formula del calculo por hora">
          <span>{eur(r1.netWithGuards)} € netos</span>
          <b>/</b>
          <span>{eur(TOTAL_HOURS, 1)} horas reales</span>
          <b>=</b>
          <strong>{eur(r1Hourly, 2)} €/h netos</strong>
        </div>

        <div className="impact-grid">
          <div className="impact-stat">
            <Clock3 aria-hidden="true" />
            <span>Guardias mensuales</span>
            <strong>+{GUARD_HOURS} h</strong>
            <small>un {eur(guardExtraPct, 0)}% extra sobre la jornada ordinaria anualizada</small>
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
            <span>Jornada ordinaria</span>
            <strong>{eur(ORDINARY_HOURS, 1)} h</strong>
          </div>
          <div className="impact-hour-bar">
            <span className="impact-hour-base" style={{ width: `${(ORDINARY_HOURS / TOTAL_HOURS) * 100}%` }} />
            <span className="impact-hour-guard" style={{ width: `${(GUARD_HOURS / TOTAL_HOURS) * 100}%` }} />
          </div>
          <div className="impact-hour-label resident">
            <span>MIR con el escenario del cartel</span>
            <strong>{eur(TOTAL_HOURS, 1)} h/mes</strong>
          </div>
        </div>

        <div className="impact-bottom">
          <p>
            Un R5 tampoco desmonta el argumento: {eur(r5.netWithGuards)} € netos con 80 h de guardia son{" "}
            <strong>{eur(r5Hourly, 2)} €/h netos</strong>. La tabla solo funciona si oculta el denominador:
            tardes, noches, fines de semana y festivos.
          </p>
          <a className="button primary impact-button" href="./">
            <ArrowLeft size={18} /> Volver a la web
          </a>
        </div>
      </article>
    </main>
  );
}
