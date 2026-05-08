import process from "node:process";
import {
  anteproyectoClaims,
  articleMatrix,
  ccaaEvidenceRows,
  collectiveImpactRows,
  downloads,
  evidenceGaps,
  homeSections,
  jornadaModelRows,
  methodologyPrinciples,
  mirGuardScenarios,
  newsRebuttals,
  quickArguments,
  reivindicaciones,
  sourceGroups,
  sourceRegistry,
} from "../src/data.js";

const errors = [];

function requireField(item, field, collection) {
  if (!item[field]) {
    errors.push(`${collection}: falta "${field}" en ${item.id ?? item.title ?? JSON.stringify(item)}`);
  }
}

function assertUniqueIds(collection, name) {
  const seen = new Set();
  for (const item of collection) {
    requireField(item, "id", name);
    if (!item.id) continue;
    if (seen.has(item.id)) {
      errors.push(`${name}: id duplicado "${item.id}"`);
    }
    seen.add(item.id);
  }
}

function assertSources(ids, collection, itemId) {
  if (!Array.isArray(ids) || ids.length === 0) {
    errors.push(`${collection}: "${itemId}" no tiene fuentes`);
    return;
  }

  for (const id of ids) {
    if (!sourceRegistry[id]) {
      errors.push(`${collection}: "${itemId}" cita una fuente inexistente: "${id}"`);
    }
  }
}

assertUniqueIds(homeSections, "homeSections");
assertUniqueIds(anteproyectoClaims, "anteproyectoClaims");
assertUniqueIds(articleMatrix, "articleMatrix");
assertUniqueIds(ccaaEvidenceRows, "ccaaEvidenceRows");
assertUniqueIds(collectiveImpactRows, "collectiveImpactRows");
assertUniqueIds(newsRebuttals, "newsRebuttals");
assertUniqueIds(reivindicaciones, "reivindicaciones");

for (const item of homeSections) {
  requireField(item, "title", "homeSections");
  requireField(item, "description", "homeSections");
  requireField(item, "cta", "homeSections");
}

for (const item of anteproyectoClaims) {
  for (const field of ["title", "claim", "reality", "whyItMatters", "demand"]) {
    requireField(item, field, "anteproyectoClaims");
  }
  assertSources(item.sources, "anteproyectoClaims", item.id);
}

for (const item of articleMatrix) {
  for (const field of ["topic", "reference", "currentFrame", "proposedChange", "status", "impact", "hiddenRisk", "demand"]) {
    requireField(item, field, "articleMatrix");
  }
  if (!Array.isArray(item.affected) || item.affected.length === 0) {
    errors.push(`articleMatrix: "${item.id}" no tiene colectivos afectados`);
  }
  assertSources(item.evidence, "articleMatrix", item.id);
}

for (const item of collectiveImpactRows) {
  for (const field of ["collective", "impact", "quantitativeStatus", "demand"]) {
    requireField(item, field, "collectiveImpactRows");
  }
  if (!Array.isArray(item.affectedBy) || item.affectedBy.length === 0) {
    errors.push(`collectiveImpactRows: "${item.id}" no tiene referencias de afectación`);
  }
}

for (const item of ccaaEvidenceRows) {
  for (const field of ["ccaa", "source", "r1Base", "r1GrossWith80Guards", "r1NetWith80Guards", "coverage"]) {
    requireField(item, field, "ccaaEvidenceRows");
  }
}

if (mirGuardScenarios.length !== 20) {
  errors.push(`mirGuardScenarios: se esperaban 20 escenarios, hay ${mirGuardScenarios.length}`);
}

for (const item of mirGuardScenarios) {
  for (const field of ["year", "guardCount", "guardHours", "weeklyEquivalent", "grossNoGuards", "estimatedGrossWithGuards", "estimatedGrossPerHour", "guardGrossShare", "note"]) {
    requireField(item, field, "mirGuardScenarios");
  }
}

for (const item of jornadaModelRows) {
  for (const field of ["id", "label", "ordinaryWeeklyHours", "ordinaryMonthlyHours", "totalWith80Guards", "weeklyWith80Guards", "use", "caveat"]) {
    requireField(item, field, "jornadaModelRows");
  }
}

for (const item of newsRebuttals) {
  for (const field of ["title", "outlet", "date", "claim", "response", "keyMessage"]) {
    requireField(item, field, "newsRebuttals");
  }
  assertSources(item.sources, "newsRebuttals", item.id);
}

for (const item of reivindicaciones) {
  for (const field of ["title", "short", "explanation", "category"]) {
    requireField(item, field, "reivindicaciones");
  }
  assertSources(item.sources, "reivindicaciones", item.id);
}

if (!quickArguments.length) {
  errors.push("quickArguments: debe haber al menos una frase");
}

if (!evidenceGaps.length) {
  errors.push("evidenceGaps: debe haber al menos un dato pendiente");
}

for (const item of methodologyPrinciples) {
  for (const field of ["title", "text"]) {
    requireField(item, field, "methodologyPrinciples");
  }
}

for (const [label, href] of downloads) {
  if (!label || !href) {
    errors.push(`downloads: entrada inválida ${JSON.stringify([label, href])}`);
  }
}

for (const group of sourceGroups) {
  requireField(group, "title", "sourceGroups");
  if (!Array.isArray(group.ids) || group.ids.length === 0) {
    errors.push(`sourceGroups: "${group.title}" no tiene fuentes`);
    continue;
  }
  for (const id of group.ids) {
    if (!sourceRegistry[id]) {
      errors.push(`sourceGroups: "${group.title}" contiene fuente inexistente "${id}"`);
    }
  }
}

for (const [id, source] of Object.entries(sourceRegistry)) {
  for (const field of ["title", "type", "institution", "year", "url"]) {
    if (!source[field]) {
      errors.push(`sourceRegistry: "${id}" no tiene "${field}"`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Datos editoriales validados correctamente.");
