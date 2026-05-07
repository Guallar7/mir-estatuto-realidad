export const residenceYears = ["R1", "R2", "R3", "R4", "R5"];

export const hourModel = {
  weeklyOrdinaryHours: 35,
  ordinaryHoursPerMonth: (35 * 52) / 12,
  guardHoursPerMonth: 80,
  totalHoursPerMonth: (35 * 52) / 12 + 80,
  note:
    "Se usa 35 h/semana anualizada como escenario principal. Algunas CCAA mantienen 37,5 h o cómputos anuales propios.",
};

export const summaryByYear = [
  {
    year: "R1",
    grossNoGuards: 1447,
    netNoGuards: 1225,
    netWithGuards: 2087,
    grossWithGuards: 2806,
    guardShare: 0.484,
  },
  {
    year: "R2",
    grossNoGuards: 1555,
    netWithGuards: 2284,
    grossWithGuards: 3114,
    guardShare: 0.501,
  },
  {
    year: "R3",
    grossNoGuards: 1694,
    netWithGuards: 2486,
    grossWithGuards: 3452,
    guardShare: 0.509,
  },
  {
    year: "R4",
    grossNoGuards: 1833,
    netWithGuards: 2684,
    grossWithGuards: 3790,
    guardShare: 0.516,
  },
  {
    year: "R5",
    grossNoGuards: 1973,
    netNoGuards: 1531,
    netWithGuards: 2758,
    grossWithGuards: 3929,
    guardShare: 0.498,
  },
];

export const ccaaRows = [
  {
    ccaa: "Andalucía",
    source: "SIMEG + SAS",
    base: [1380, 1490, 1628, 1766, 1904],
    withGuardsGross: [2557, 2780, 3134, 3456, 3594],
    withGuardsNet: [1925, 2070, 2296, 2484, 2563],
    guardHours: [
      [14.07, 15.78, 28.14],
      [15.42, 17.28, 30.84],
      [18.02, 20.17, 36.04],
      [20.22, 22.61, 40.44],
      [20.22, 22.61, 40.44],
    ],
  },
  {
    ccaa: "Aragón",
    source: "SIMEG + SALUD",
    base: [1387, 1498, 1637, 1776, 1914],
    withGuardsGross: [2796, 3024, 3280, 3536, 3675],
    withGuardsNet: [2083, 2232, 2386, 2533, 2611],
    guardHours: [
      [17.34, 18.58, 34.68],
      [18.79, 20.13, 37.58],
      [20.23, 21.68, 40.46],
      [21.68, 23.23, 43.36],
      [21.68, 23.23, 43.36],
    ],
  },
  {
    ccaa: "Asturias",
    source: "SIMEG",
    base: [1387, 1498, 1637, 1776, 1914],
    withGuardsGross: [2783, 3084, 3414, 3743, 3881],
    withGuardsNet: [2089, 2285, 2484, 2677, 2757],
    guardHours: [
      [17.01, 18.18, 25.81],
      [19.32, 20.66, 29.32],
      [21.65, 23.14, 32.84],
      [23.97, 25.63, 36.36],
      [23.97, 25.63, 36.36],
    ],
  },
  {
    ccaa: "Baleares",
    source: "SIMEG + Ibsalut",
    base: [1638, 1776, 1915, 2054, 2193],
    withGuardsGross: [3239, 3526, 3865, 4198, 4337],
    withGuardsNet: [2407, 2575, 2771, 2963, 3041],
    guardHours: [
      [19.29, 21.21, 42.44],
      [21.08, 23.18, 46.36],
      [23.49, 25.83, 51.68],
      [25.91, 28.28, 56.99],
      [25.91, 28.28, 56.99],
    ],
  },
  {
    ccaa: "Canarias",
    source: "SIMEG + SCS",
    base: [1591, 1702, 1841, 1979, 2118],
    withGuardsGross: [2689, 3041, 3423, 3801, 3940],
    withGuardsNet: [2012, 2243, 2469, 2691, 2770],
    guardHours: [
      [11.2, 17.92, 22.4],
      [13.66, 21.86, 27.32],
      [16.15, 25.84, 32.3],
      [18.59, 29.74, 37.18],
      [18.59, 29.74, 37.18],
    ],
  },
  {
    ccaa: "Cantabria",
    source: "SIMEG",
    base: [1380, 1489, 1626, 1763, 1899],
    withGuardsGross: [2770, 3041, 3377, 3715, 3851],
    withGuardsNet: [2067, 2243, 2442, 2640, 2717],
    guardHours: [
      [16.8, 19.52, 31.43],
      [19.02, 20.78, 33.46],
      [21.47, 23.41, 37.68],
      [23.95, 26.07, 41.33],
      [23.95, 26.07, 41.33],
    ],
  },
  {
    ccaa: "Castilla y León",
    source: "SIMEG",
    base: [1380, 1490, 1628, 1766, 1904],
    withGuardsGross: [2674, 2971, 3304, 3630, 3768],
    withGuardsNet: [2003, 2197, 2398, 2589, 2667],
    guardHours: [
      [15.48, 17.34, 27.98],
      [17.74, 19.8, 31.9],
      [20.08, 22.38, 36],
      [22.34, 24.88, 40.1],
      [22.34, 24.88, 40.1],
    ],
  },
  {
    ccaa: "Castilla-La Mancha",
    source: "SIMEG + SESCAM",
    base: [1387, 1498, 1637, 1776, 1914],
    withGuardsGross: [2884, 3279, 3630, 4054, 4192],
    withGuardsNet: [2141, 2419, 2641, 2840, 2919],
    guardHours: [
      [18.21, 19.53, 26.34],
      [21.67, 23.23, 30.12],
      [24.28, 25.97, 33.85],
      [27.74, 29.7, 39.52],
      [27.74, 29.7, 39.52],
    ],
  },
  {
    ccaa: "Cataluña",
    source: "SIMEG",
    base: [1504, 1618, 1757, 1897, 2044],
    withGuardsGross: [3066, 3492, 3943, 4237, 4385],
    withGuardsNet: [2279, 2542, 2810, 2982, 3065],
    guardHours: [
      [18.88, 20.6, 41.17],
      [22.66, 24.71, 49.38],
      [26.42, 28.83, 57.63],
      [28.3, 30.86, 61.4],
      [28.3, 30.86, 61.4],
    ],
  },
  {
    ccaa: "Com. Valenciana",
    source: "SIMEG + CESM-CV/SATSE",
    base: [1502, 1622, 1770, 1917, 2065],
    withGuardsGross: [2674, 2995, 3346, 3696, 3843],
    withGuardsNet: [2000, 2210, 2418, 2624, 2708],
    guardHours: [
      [13.9, 15.9, 27.8],
      [16.42, 18.41, 32.84],
      [18.95, 20.95, 37.9],
      [21.48, 23.48, 42.96],
      [21.48, 23.48, 42.96],
    ],
  },
  {
    ccaa: "Extremadura",
    source: "SIMEG + SES",
    base: [1414, 1525, 1664, 1803, 1941],
    withGuardsGross: [2670, 2891, 3156, 3433, 3572],
    withGuardsNet: [2000, 2144, 2309, 2471, 2549],
    guardHours: [
      [15.16, 16.58, 21.96],
      [16.56, 17.94, 23.33],
      [17.94, 19.85, 24.71],
      [19.85, 21.26, 26.08],
      [19.85, 21.26, 26.08],
    ],
  },
  {
    ccaa: "Galicia",
    source: "SIMEG",
    base: [1387, 1498, 1636, 1774, 1912],
    withGuardsGross: [2705, 3007, 3336, 3655, 3793],
    withGuardsNet: [2014, 2211, 2404, 2590, 2667],
    guardHours: [
      [16.05, 17.18, 17.18],
      [18.37, 19.69, 19.69],
      [20.7, 22.17, 22.17],
      [22.9, 24.53, 24.53],
      [22.9, 24.53, 24.53],
    ],
  },
  {
    ccaa: "La Rioja",
    source: "SIMEG",
    base: [1387, 1498, 1637, 1776, 1914],
    withGuardsGross: [2667, 3011, 3266, 3636, 3775],
    withGuardsNet: [1998, 2223, 2375, 2592, 2671],
    guardHours: [
      [15.71, 16.47, 32.94],
      [18.57, 19.46, 38.92],
      [20, 20.96, 41.92],
      [22.85, 23.94, 47.88],
      [22.85, 23.94, 47.88],
    ],
  },
  {
    ccaa: "Madrid",
    source: "SIMEG + BOCM",
    base: [1526, 1637, 1775, 1914, 2053],
    withGuardsGross: [2597, 2907, 3250, 3583, 3722],
    withGuardsNet: [1948, 2151, 2361, 2556, 2635],
    guardHours: [
      [12.5, 14.87, 29.74],
      [15, 17.36, 34.72],
      [17.59, 19.85, 39.7],
      [19.99, 22.33, 44.66],
      [19.99, 22.33, 44.66],
    ],
  },
  {
    ccaa: "Murcia",
    source: "SIMEG",
    base: [1474, 1498, 1637, 1776, 1914],
    withGuardsGross: [2834, 3090, 3394, 3674, 3813],
    withGuardsNet: [2107, 2274, 2452, 2615, 2694],
    guardHours: [
      [16.56, 17.75, 33.12],
      [19, 21.39, 38],
      [21.06, 23.46, 42.12],
      [22.4, 25.95, 44.8],
      [22.4, 25.95, 44.8],
    ],
  },
  {
    ccaa: "Navarra",
    source: "SIMEG",
    base: [1387, 1498, 1637, 1776, 1914],
    withGuardsGross: [2938, 3306, 3703, 4052, 4190],
    withGuardsNet: [2192, 2404, 2615, 2861, 2875],
    guardHours: [
      [19.39, 19.39, 38.78],
      [22.6, 22.6, 45.2],
      [25.83, 25.83, 51.66],
      [28.45, 28.45, 56.9],
      [28.45, 28.45, 56.9],
    ],
  },
  {
    ccaa: "País Vasco",
    source: "SIMEG",
    base: [1484, 1597, 1738, 1879, 2020],
    withGuardsGross: [2910, 3153, 3553, 3991, 4131],
    withGuardsNet: [2216, 2401, 2634, 2918, 2979],
    guardHours: [
      [17.18, 18.9, 34.36],
      [18.75, 20.62, 37.5],
      [21.86, 24.06, 43.72],
      [24.99, 28.74, 49.98],
      [24.99, 28.74, 49.98],
    ],
  },
];

export const estatutoIssues = [
  {
    title: "Falacia 1: regula las guardias, luego mejora la vida del médico",
    claim: "El texto limita y ordena las guardias.",
    answer:
      "Las mantiene como jornada adicional estructural. En médicos/facultativos se prevén guardias de 17 horas y excepciones hasta 24 horas con consentimiento. La reivindicación médica es que lo que excede la jornada ordinaria sea voluntario, extraordinario, justamente retribuido y computable.",
    refs: ["Anteproyecto art. 95-99", "CESM Comité de Huelga 2026"],
  },
  {
    title: "Falacia 2: el problema de los residentes queda resuelto",
    claim: "El anteproyecto introduce límites para personal en formación.",
    answer:
      "Introduce una revisión retributiva progresiva y límites generales de 80 h/mes y 4 módulos físicos. Pero no garantiza una retribución homogénea, ni elimina la dependencia salarial de guardias, ni reconoce todo el tiempo formativo real.",
    refs: ["Anteproyecto DA 22", "SIMEG Retribuciones MIR 2026"],
  },
  {
    title: "Falacia 3: 45 horas semanales resuelven la sobrecarga",
    claim: "La jornada máxima conjunta se fija en 45 h/semana de promedio.",
    answer:
      "El promedio cuatrimestral puede ocultar picos de sobrecarga. Además, el propio texto permite superar la duración máxima conjunta si hay razones organizativas o asistenciales, con consentimiento individual escrito y hasta 150 horas/año adicionales. La pregunta que no responde es la decisiva: si nadie acepta superar ese límite, ¿se contratan médicos o se vuelve a cargar el sistema sobre los mismos? Las guardias por encima de la jornada ordinaria deben ser voluntarias, justamente retribuidas y computables para jubilación; si no, la obligatoriedad sigue incrustada en la profesión médica.",
    refs: ["Anteproyecto arts. 84, 97 y 98", "SIMEG 2026"],
  },
  {
    title: "Falacia 4: hay acuerdo sindical, por tanto hay acuerdo sanitario",
    claim: "SATSE-FSES, CCOO, UGT y CSIF acordaron iniciar la tramitación.",
    answer:
      "Los sindicatos médicos y facultativos no lo respaldan. CESM, SMA, Metges de Catalunya, AMYTS, SME y O'MEGA mantienen movilizaciones y reclaman un estatuto/ámbito propio para negociar condiciones específicas.",
    refs: ["SATSE 26/01/2026", "CESM 22/01/2026", "CESM 08/04/2026"],
  },
  {
    title: "Falacia 5: una tabla de sueldos con guardias sirve para comparar salarios",
    claim: "Los MIR cobran más de 2.000 euros netos al mes.",
    answer:
      "Esa cifra incorpora unas 80 horas mensuales adicionales. Sin guardias, el R1 medio está en torno a 1.447 euros brutos/mes. Con una jornada ordinaria anualizada de 35 h/semana, el cálculo real exige dividir por unas 231,7 h/mes. Y ese divisor ni siquiera suma tardes de estudio, sesiones, congresos, postgrados, másteres, doctorado, investigación o publicaciones, a menudo no retribuidas y con coste para el propio residente.",
    refs: ["SIMEG 2026", "Tabla CSIF/CTO"],
  },
  {
    title: "Falacia 6: los descansos quedan plenamente protegidos",
    claim: "La libranza postguardia queda regulada.",
    answer:
      "El texto habla de jornada realizada a efectos administrativos, pero no siempre de tiempo efectivo de trabajo. También prevé descansos alternativos y suspensiones excepcionales. La reivindicación médica es descanso efectivo y computable, sin ambigüedad organizativa.",
    refs: ["Anteproyecto art. 89-91 y 99", "Foro Profesión Médica 2025"],
  },
  {
    title: "Falacia 7: la jubilación anticipada queda abordada",
    claim: "El estatuto estudiará coeficientes reductores.",
    answer:
      "No reconoce jubilación flexible médica ni anticipada sin penalización. Solo prevé informes técnicos para iniciar, en su caso, procedimientos futuros. Las guardias tampoco quedan computadas de forma directa para adelantar la edad de jubilación.",
    refs: ["Anteproyecto DA 16-17", "CESM reivindicaciones"],
  },
  {
    title: "Falacia 8: la clasificación profesional reconoce la singularidad médica",
    claim: "El nuevo sistema MECU/MECES ordena mejor los grupos.",
    answer:
      "La oposición médica considera insuficiente una clasificación que no se traduzca en reconocimiento retributivo y negociador acorde a formación, especialización, responsabilidad clínica y toma de decisiones.",
    refs: ["Anteproyecto grupos", "Comité de Huelga propuesta 2026"],
  },
  {
    title: "Falacia 9: el régimen de incompatibilidades es equilibrado",
    claim: "La dedicación exclusiva y las incompatibilidades ordenan el sistema.",
    answer:
      "El colectivo médico denuncia restricciones específicas para cargos y jefaturas, con riesgo de pérdida de derechos y sin compensación suficiente. La reivindicación es un régimen no discriminatorio, homogéneo y bien retribuido.",
    refs: ["Anteproyecto art. 34-35 y 99", "CESM-CV líneas rojas"],
  },
  {
    title: "Falacia 10: la movilidad solo mejora concursos voluntarios",
    claim: "El concurso abierto y permanente mejora la movilidad.",
    answer:
      "Puede mejorar la movilidad voluntaria, pero el texto conserva supuestos de movilidad por necesidad asistencial. La profesión reclama garantías frente a desplazamientos forzosos derivados de necesidades organizativas.",
    refs: ["Anteproyecto art. 54-55", "FAQ Ministerio movilidad"],
  },
];

export const sources = [
  {
    label: "Ministerio de Sanidad - Nuevo Estatuto Marco",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/nuevoEstatutoMarco.htm",
  },
  {
    label: "Anteproyecto Estatuto Marco 08/01/2026",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/docs/APL_personal_estatutario_08_01_2026.pdf",
  },
  {
    label: "BOE - Ley 55/2003 Estatuto Marco vigente",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23101",
  },
  {
    label: "BOE - Resolución AGE 35 horas 14/04/2026",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2026-8287",
  },
  {
    label: "SIMEG - Retribuciones MIR 2026",
    url: "https://simeg.org/wp/wp-content/uploads/2026/04/Retribuciones-MIR-2026.pdf",
  },
  {
    label: "CESM - Distribución jornada 35 horas por CCAA",
    url: "https://www.cesm.org/2024/12/18/asi-esta-la-distribucion-de-jornada-laboral-de-35-horas-por-comunidades-autonomas/",
  },
  {
    label: "CSIF - CCAA pendientes de implantar 35 horas",
    url: "https://www.csif.es/es/articulo/nacional/sanidad/89481",
  },
  {
    label: "CESM - Comité de Huelga mantiene movilizaciones",
    url: "https://www.cesm.org/2026/04/08/el-comite-de-huelga-denuncia-que-el-ministerio-entorpece-la-negociacion-para-esconder-su-incapacidad-para-llegar-a-acuerdos-que-atiendan-las-reivindicaciones-del-colectivo/",
  },
  {
    label: "Comité de Huelga - Contrapropuesta 21/04/2026",
    url: "https://www.cesm.org/wp-content/uploads/2026/04/20260420-Contrapropuesta-comite-huelga-APL-Estatuto-Marco.pdf",
  },
  {
    label: "CESM - Convocatoria de huelga nacional",
    url: "https://www.cesm.org/2026/01/22/el-comite-de-huelga-convoca-un-paro-indefinido-a-partir-del-proximo-16-de-febrero-para-conseguir-un-estatuto-medico-y-facultativo/",
  },
  {
    label: "CESM - Reivindicaciones del Comité de Huelga",
    url: "https://www.cesm.org/2025/06/09/estas-son-las-reivindicaciones-del-comite-de-huelga-ante-el-ministerio-de-sanidad/",
  },
  {
    label: "Ministerio de Sanidad - FAQ Estatuto Marco",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/PregFrecEstatutoMarco.htm",
  },
  {
    label: "SATSE - Acuerdo con Sanidad",
    url: "https://www.satse.es/notas-prensa/-/v/85301/acuerdo-inicio-tramitacion-estatuto-marco",
  },
  {
    label: "Foro de la Profesión Médica - Reivindicaciones 2025",
    url: "https://www.medicosypacientes.com/articulo/el-foro-de-la-profesion-medica-defiende-las-reivindicaciones-que-han-llevado-a-la-huelga-del-13-de-junio/",
  },
  {
    label: "CESM-CV - Líneas rojas del Estatuto Marco",
    url: "https://www.cesm-cv.org/reclasificacion-profesional-jornada-laboral-y-regimen-de-incompatibilidades-lineas-rojas-del-borrador-de-estatuto-marco/",
  },
  {
    label: "Metges de Catalunya - Preacuerdo y huelga facultativa",
    url: "https://metgesdecatalunya.cat/es/actualidad/noticias/el-preacuerdo-entre-sanidad-y-los-sindicatos-del-ambito-de-negociacion-para-renovar-el-estatuto-marco-no-suspende-la-huelga-de-facultativos",
  },
  {
    label: "Aragón SALUD - Tablas retributivas 2026",
    url: "https://www.aragon.es/documents/20127/128260043/Tablas_retributivas_personal_estatutario_SALUD_2026.pdf/e527d18c-861e-0a7d-166e-cd07bf2aad77?download=true&t=1771839687505&version=1.0",
  },
  {
    label: "Servicio Andaluz de Salud - Retribuciones 2026",
    url: "https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/guia-laboral/retribuciones",
  },
  {
    label: "Servicio Canario de la Salud - Retribuciones 2026",
    url: "https://www3.gobiernodecanarias.org/sanidad/scs/contenidoGenerico.jsp?idCarpeta=c32fdf85-fc15-11dd-a72f-93771b0e33f6&idDocument=b2540aca-fdab-11dd-b2aa-596c3deb1b4e",
  },
  {
    label: "SESCAM - Anexos y tablas retributivas 2026",
    url: "https://sanidad.castillalamancha.es/sites/sescam.castillalamancha.es/files/documentos/legislacion/20260324/anexos_y_tablas_2026.pdf",
  },
  {
    label: "Ibsalut - Retribuciones",
    url: "https://www.ibsalut.es/professionals/recursos-humans/retribucions",
  },
  {
    label: "SATSE Comunidad Valenciana - Tablas 2026",
    url: "https://comunidadvalenciana.satse.es/noticias/-/v/687184/tablas-2026",
  },
  {
    label: "SES Extremadura - Tablas retributivas 2026",
    url: "https://www.sindicato-sip.es/wp-content/uploads/2026/02/Tablas-retributivas-2026-SES.pdf",
  },
  {
    label: "BOCM Madrid - Retribuciones 2026",
    url: "https://www.bocm.es/boletin/CM_Orden_BOCM/2026/02/09/BOCM-20260209-6.PDF",
  },
];

export const downloads = [
  ["Dossier DOCX", "downloads/dossier_mir_estatuto_marco.docx"],
  ["Dossier Markdown", "downloads/dossier_mir_estatuto_marco.md"],
  ["Excel de datos", "downloads/retribuciones_mir_2026.xlsx"],
  ["CSV de datos", "downloads/datos_retribuciones_mir_2026.csv"],
  ["Argumentario rápido", "downloads/argumentario_rapido_csif_mir.md"],
];
