export const residenceYears = ["R1", "R2", "R3", "R4", "R5"];

export const hourModel = {
  weeklyOrdinaryHours: 35,
  ordinaryHoursPerMonth: (35 * 52) / 12,
  guardHoursPerMonth: 80,
  guardHoursPerWeekEquivalent: (80 * 12) / 52,
  totalHoursPerMonth: (35 * 52) / 12 + 80,
  totalHoursPerWeekEquivalent: 35 + (80 * 12) / 52,
  note:
    "Se usa 35 h/semana anualizada como escenario principal. El sueldo se divide por horas mensuales porque el dato salarial es mensual; se muestra el equivalente semanal para comparar carga de trabajo y límites de jornada. Algunas CCAA mantienen 37,5 h o cómputos anuales propios.",
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
      "Esa cifra incorpora unas 80 horas mensuales de guardia adicionales, equivalentes a unas 18,5 h/semana de media adicionales a la jornada ordinaria. Sin guardias, el R1 medio está en torno a 1.447 euros brutos/mes. Con una jornada ordinaria anualizada de 35 h/semana, el cálculo real exige dividir por unas 231,7 h/mes, es decir, unas 53,5 h/semana de media. Y ese divisor ni siquiera suma tardes de estudio, sesiones, congresos, postgrados, másteres, doctorado, investigación o publicaciones, a menudo no retribuidas y con coste para el propio residente.",
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
  ["Dossier Estatuto Médico Propio", "downloads/dossier_estatuto_medico_propio.md"],
  ["Matriz anteproyecto", "downloads/matriz_anteproyecto_estatuto_medico.md"],
  ["Escenarios MIR guardias", "downloads/escenarios_mir_guardias.md"],
  ["Argumentario Estatuto Médico", "downloads/argumentario_estatuto_medico.md"],
  ["Respuesta noticia Estatuto Marco", "downloads/respuesta_noticia_estatuto_marco.md"],
  ["Dossier MIR/CSIF DOCX", "downloads/dossier_mir_estatuto_marco.docx"],
  ["Dossier MIR/CSIF Markdown", "downloads/dossier_mir_estatuto_marco.md"],
  ["Excel de datos", "downloads/retribuciones_mir_2026.xlsx"],
  ["CSV de datos", "downloads/datos_retribuciones_mir_2026.csv"],
  ["Argumentario MIR/CSIF", "downloads/argumentario_rapido_csif_mir.md"],
];

export const sitePages = [
  {
    id: "home",
    path: "index.html",
    navLabel: "Inicio",
    title: "Estatuto Médico Propio",
    description:
      "Directorio central con datos, fuentes, reivindicaciones y materiales para defender un Estatuto Médico y Facultativo propio.",
    ogTitle: "Estatuto Médico Propio: que nadie negocie por nosotros",
    ogDescription:
      "Datos, fuentes y argumentos sobre guardias, jornada, conciliación, responsabilidad clínica y derechos laborales médicos.",
  },
  {
    id: "reivindicaciones",
    path: "reivindicaciones.html",
    navLabel: "Programa",
    title: "Reivindicaciones por un Estatuto Médico y Facultativo propio",
    description:
      "Programa claro: Estatuto propio, mesa médica propia, guardias computables, descanso real, conciliación, clasificación, jubilación y retribución transparente.",
    ogTitle: "Qué reclamamos: Estatuto Médico y Facultativo propio",
    ogDescription:
      "No pedimos decidir por nadie. Pedimos negociar con voz propia nuestras condiciones específicas.",
  },
  {
    id: "anteproyecto",
    path: "anteproyecto.html",
    navLabel: "Anteproyecto",
    title: "Anteproyecto de Estatuto Marco",
    description:
      "Análisis médico-facultativo del anteproyecto del Estatuto Marco: guardias, jornada, descanso, conciliación, jubilación, clasificación y negociación propia.",
    ogTitle: "Anteproyecto de Estatuto Marco: qué queda sin garantizar",
    ogDescription:
      "Matriz de desmontaje con qué se anuncia, qué deja abierto, riesgos y demandas médicas.",
  },
  {
    id: "mir",
    path: "mir.html",
    navLabel: "MIR",
    title: "MIR: no es sueldo, son guardias",
    description:
      "Datos MIR sobre sueldo ordinario, guardias, horas reales, escenarios de 3 a 6 guardias y diferencias autonómicas.",
    ogTitle: "MIR: no es sueldo, son guardias",
    ogDescription:
      "Una nómina MIR con guardias, noches y festivos no es sueldo ordinario. Mira horas reales y salario por hora.",
  },
  {
    id: "noticias",
    path: "noticias.html",
    navLabel: "Noticias",
    title: "Noticias y declaraciones desmontadas",
    description:
      "Respuestas documentadas a titulares, comunicados sindicales y declaraciones públicas sobre el Estatuto Marco.",
    ogTitle: "Noticias desmontadas sobre el Estatuto Marco",
    ogDescription:
      "Fichas breves para responder a titulares sobre consenso, guardias, conciliación y reivindicación médica.",
  },
  {
    id: "fuentes",
    path: "fuentes.html",
    navLabel: "Fuentes",
    title: "Fuentes, documentos y descargas",
    description:
      "Índice de anteproyecto, BOE, comunicados, prensa, tablas retributivas, documentos de verificación y materiales descargables.",
    ogTitle: "Fuentes y documentos del Estatuto Médico Propio",
    ogDescription:
      "Documentos oficiales, posición médica, prensa, tablas MIR, descargas y materiales de verificación.",
  },
  {
    id: "argumentario",
    path: "argumentario.html",
    navLabel: "Argumentario",
    title: "Argumentario rápido por un Estatuto Médico propio",
    description:
      "Frases breves y respuestas reutilizables para redes, asambleas, prensa y conversaciones públicas.",
    ogTitle: "Argumentario rápido por un Estatuto Médico propio",
    ogDescription:
      "Respuestas breves para explicar guardias, jornada, conciliación, descanso y negociación médica propia.",
  },
];

export const coreMessage = {
  title: "Un Estatuto propio para negociar como profesión, no como nota al pie.",
  body:
    "La reivindicación no empieza ni termina en los MIR. El objetivo es reunir en un mismo lugar argumentos, datos y documentos para defender una negociación médica y facultativa propia: guardias, jornada, descansos, conciliación, responsabilidad clínica, formación, clasificación, jubilación y derechos laborales.",
};

export const homeSections = [
  {
    id: "reivindicaciones",
    title: "Qué reclamamos",
    description:
      "Estatuto propio, ámbito propio, guardias computables, descanso real, conciliación, clasificación y jubilación.",
    cta: "Ver programa",
  },
  {
    id: "anteproyecto",
    title: "Anteproyecto de Estatuto Marco",
    description:
      "Análisis punto por punto: qué se anuncia, qué queda garantizado, qué depende de desarrollo y por qué no basta.",
    cta: "Ver desmontaje",
  },
  {
    id: "metodo",
    title: "Método y matriz",
    description:
      "Cómo se separa hecho, interpretación y reivindicación; matriz pública de artículos, impacto, riesgo y demanda.",
    cta: "Ver método",
  },
  {
    id: "noticias",
    title: "Noticias y declaraciones",
    description:
      "Respuesta documentada a titulares, entrevistas, comunicados sindicales y mensajes institucionales.",
    cta: "Ver respuestas",
  },
  {
    id: "mir",
    title: "MIR: no es sueldo, son guardias",
    description:
      "El caso MIR queda como ejemplo documentado de cómo se manipula el debate al mezclar sueldo, guardias y horas.",
    cta: "Ver caso MIR",
  },
  {
    id: "fuentes",
    title: "Fuentes y documentos",
    description:
      "Anteproyecto, BOE, comunicados, tablas retributivas, dossier y material descargable.",
    cta: "Ver fuentes",
  },
  {
    id: "argumentario",
    title: "Argumentario rápido",
    description:
      "Frases breves y respuestas reutilizables para redes, asambleas, prensa y conversaciones públicas.",
    cta: "Copiar ideas",
  },
];

export const keyIdeas = [
  "No estamos contra otros colectivos y no queremos negociar por nadie: queremos que nadie negocie por nosotros.",
  "El Estatuto Marco puede ordenar derechos generales, pero no debe diluir condiciones específicas de médicos y facultativos.",
  "La responsabilidad clínica directa, la presión asistencial, el riesgo médico-legal, las guardias, la formación prolongada y la seguridad del paciente exigen una voz propia.",
  "La reivindicación debe ser auditable: cada afirmación importante debe poder llevar a una fuente, un artículo, una tabla o una limitación explícita.",
  "El caso MIR demuestra por qué separar horas, guardias y salario cambia el relato público.",
];

export const methodologyPrinciples = [
  {
    title: "Separar hecho, interpretación y reivindicación",
    text:
      "Cada bloque separa la fuente original, la lectura crítica de sus efectos y la demanda médica correspondiente.",
  },
  {
    title: "Usar el caso MIR como prueba, no como eje único",
    text:
      "El caso MIR permite desmontar cualquier cifra pública separando horas reales, guardias y salario ordinario.",
  },
  {
    title: "Marcar promesas condicionadas",
    text:
      "Si una mejora depende de desarrollo reglamentario, presupuesto, negociación futura o aplicación autonómica, no se presenta como derecho ya garantizado.",
  },
  {
    title: "Citar el punto discutido",
    text:
      "Los desmontajes del anteproyecto incorporan artículos, disposiciones o referencias documentales para que el lector pueda comprobar el origen.",
  },
];

export const evidenceGaps = [
  "Los escenarios MIR con 3, 4, 5 y 6 guardias son estimaciones lineales brutas derivadas del escenario publicado con 80 h/mes. No sustituyen una nómina real.",
  "El análisis económico cuantitativo de adjuntos, primaria, hospitalaria, urgencias y emergencias se expresa como impacto cualitativo hasta disponer de tablas homogéneas por CCAA y puesto.",
  "La matriz del anteproyecto usa artículos, disposiciones y fuentes localizadas; no afirma derechos consolidados cuando el texto remite a desarrollo posterior, negociación futura o aplicación autonómica.",
  "Las tablas autonómicas visibles son fuentes de contraste disponibles; la jornada real, guardias localizadas y cumplimiento efectivo del descanso requieren normalización territorial adicional.",
];

export const mirGuardScenarios = summaryByYear.flatMap((year) => {
  const guardGrossAt80 = year.grossWithGuards - year.grossNoGuards;
  return [3, 4, 5, 6].map((guardCount) => {
    const guardHours = guardCount * 20;
    const totalHours = hourModel.ordinaryHoursPerMonth + guardHours;
    const weeklyEquivalent = hourModel.weeklyOrdinaryHours + (guardHours * 12) / 52;
    const grossWithScenario = Math.round(year.grossNoGuards + (guardGrossAt80 * guardHours) / 80);
    return {
      id: `${year.year}-${guardCount}-guardias`,
      year: year.year,
      guardCount,
      guardHours,
      weeklyEquivalent,
      grossNoGuards: year.grossNoGuards,
      estimatedGrossWithGuards: grossWithScenario,
      estimatedGrossPerHour: grossWithScenario / totalHours,
      guardGrossShare: (grossWithScenario - year.grossNoGuards) / grossWithScenario,
      note: "Estimación lineal bruta a partir del escenario de 80 h/mes. No incluye fiscalidad ni formación no registrada.",
    };
  });
});

export const jornadaModelRows = [
  {
    id: "35h",
    label: "Modelo 35 h/semana",
    ordinaryWeeklyHours: 35,
    ordinaryMonthlyHours: (35 * 52) / 12,
    totalWith80Guards: (35 * 52) / 12 + 80,
    weeklyWith80Guards: 35 + (80 * 12) / 52,
    use: "Referencia principal para calcular el salario mensual por hora real trabajada.",
    caveat: "No todas las CCAA aplican exactamente el mismo cómputo ordinario.",
  },
  {
    id: "37-5h",
    label: "Modelo 37,5 h/semana",
    ordinaryWeeklyHours: 37.5,
    ordinaryMonthlyHours: (37.5 * 52) / 12,
    totalWith80Guards: (37.5 * 52) / 12 + 80,
    weeklyWith80Guards: 37.5 + (80 * 12) / 52,
    use: "Escenario de sensibilidad: al subir el denominador de horas, el salario por hora baja.",
    caveat: "Debe verificarse CCAA por CCAA antes de usarlo como dato territorial.",
  },
];

export const articleMatrix = [
  {
    id: "matriz-ambito-propio",
    topic: "Ámbito propio de negociación",
    reference: "Ámbito de Negociación del Estatuto Marco; acuerdo sin sindicatos médicos",
    currentFrame: "La negociación se articula en un marco general de personal estatutario.",
    proposedChange: "El anteproyecto mantiene un marco común para todo el personal estatutario.",
    status: "mantiene",
    affected: ["Médicos", "Facultativos", "MIR"],
    impact: "No crea una mesa médica propia ni un ámbito específico de decisión médica.",
    hiddenRisk: "La especificidad médica puede quedar diluida en mayorías sindicales generales.",
    demand: "Ámbito propio de negociación médica y facultativa.",
    evidence: ["cesm-huelga-2026", "metges-preacuerdo-2026", "elpais-acuerdo-sin-medicos-2026"],
  },
  {
    id: "matriz-art-84",
    topic: "Jornada máxima semanal",
    reference: "Artículo 84",
    currentFrame: "La jornada debe analizarse separando ordinaria, complementaria, guardias y descansos.",
    proposedChange: "Fija duración máxima semanal conjunta con cómputos de referencia.",
    status: "ambiguo",
    affected: ["Médicos", "Facultativos", "Urgencias", "Hospitalaria", "Primaria"],
    impact: "Puede mejorar el marco formal, pero el promedio permite que la sobrecarga se concentre en semanas concretas.",
    hiddenRisk: "El promedio puede ocultar picos de fatiga y actividad asistencial.",
    demand: "Límites claros por turno y semana real, no solo por promedio.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local"],
  },
  {
    id: "matriz-art-89-91",
    topic: "Descansos alternativos y suspensión excepcional",
    reference: "Artículos 89, 90 y 91",
    currentFrame: "El descanso debe protegerse como medida laboral y de seguridad clínica.",
    proposedChange: "Regula descansos alternativos, carácter de descansos y medidas especiales.",
    status: "ambiguo",
    affected: ["Médicos", "Facultativos", "MIR", "Urgencias", "Hospitalaria"],
    impact: "Puede ordenar el descanso, pero mantiene vías de excepción y no siempre equivale a tiempo efectivo de trabajo.",
    hiddenRisk: "Que el descanso quede sujeto a organización, compensación posterior o suspensión excepcional.",
    demand: "Descanso postguardia efectivo, computable y no penalizable.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "foro-profesion-medica-2025"],
  },
  {
    id: "matriz-art-95",
    topic: "Jornada de guardia médica y facultativa",
    reference: "Artículo 95",
    currentFrame: "Las guardias sostienen la atención urgente por encima de la jornada ordinaria.",
    proposedChange: "Define la jornada de guardia para personal médico y facultativo como horario adicional al ordinario.",
    status: "mantiene",
    affected: ["Médicos", "Facultativos", "MIR"],
    impact: "Reconoce la singularidad médica, pero mantiene la guardia como estructura del sistema.",
    hiddenRisk: "Normalizar que la cobertura ordinaria dependa de trabajo adicional.",
    demand: "Guardias voluntarias, extraordinarias, retribuidas y computables.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "cesm-reivindicaciones-2025"],
  },
  {
    id: "matriz-art-96",
    topic: "Duración de guardias 17/24 horas",
    reference: "Artículo 96",
    currentFrame: "Las guardias prolongadas concentran nocturnidad, festivos y fatiga.",
    proposedChange: "Limita guardias laborables a 17 horas de trabajo efectivo y admite supuestos de hasta 24 horas.",
    status: "ambiguo",
    affected: ["Médicos", "Facultativos", "MIR", "Urgencias", "Hospitalaria"],
    impact: "Reduce formalmente determinadas jornadas, pero conserva excepciones largas.",
    hiddenRisk: "Que la voluntariedad de 24 h se vea condicionada por déficit estructural o presión de servicio.",
    demand: "Voluntariedad real, plantilla suficiente y cómputo pleno.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "aragondigital-guardias-2026-05-06"],
  },
  {
    id: "matriz-art-97",
    topic: "Ampliación excepcional del tiempo de trabajo",
    reference: "Artículo 97",
    currentFrame: "Las ampliaciones de jornada deben ser excepcionales, voluntarias y controladas.",
    proposedChange: "Permite superar la duración máxima conjunta con consentimiento individual y límite anual.",
    status: "empeora-riesgo",
    affected: ["Médicos", "Facultativos", "Urgencias", "Hospitalaria"],
    impact: "Crea una vía formal para exceder límites máximos.",
    hiddenRisk: "Convertir la excepción en mecanismo ordinario para cubrir plantilla insuficiente.",
    demand: "Prohibir que necesidades estructurales se resuelvan con exceso individual de jornada.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local"],
  },
  {
    id: "matriz-art-98",
    topic: "Carga horaria excesiva",
    reference: "Artículo 98",
    currentFrame: "La carga excesiva debe prevenirse antes de llegar al exceso sostenido.",
    proposedChange: "Define supuestos como más de cinco guardias físicas mensuales sostenidas o concentración desequilibrada.",
    status: "mejora-insuficiente",
    affected: ["Médicos", "Facultativos", "MIR", "Urgencias"],
    impact: "Pone nombre a la sobrecarga, pero no garantiza automáticamente plantilla ni eliminación del exceso.",
    hiddenRisk: "Que identificar la sobrecarga no implique corregirla.",
    demand: "Mecanismos vinculantes de reducción de carga y contratación.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local"],
  },
  {
    id: "matriz-art-99",
    topic: "Descanso tras guardia",
    reference: "Artículo 99",
    currentFrame: "Tras una guardia no debe exigirse jornada ordinaria inmediata.",
    proposedChange: "Impide exigir jornada ordinaria posterior y considera determinados periodos como jornada realizada a efectos administrativos.",
    status: "mejora-insuficiente",
    affected: ["Médicos", "Facultativos", "MIR"],
    impact: "Es una mejora formal relevante, pero debe vigilarse su cómputo real y cumplimiento organizativo.",
    hiddenRisk: "Que se respete formalmente pero se recupere actividad por agendas, sesiones o presión informal.",
    demand: "Descanso efectivo, protegido, sin recuperación encubierta.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local"],
  },
  {
    id: "matriz-da-16",
    topic: "Coeficientes reductores de jubilación",
    reference: "Disposición adicional decimosexta",
    currentFrame: "La profesión reclama reconocer penosidad por guardias, turnos y desgaste acumulado.",
    proposedChange: "Prevé solicitud y análisis para determinar supuestos de anticipo de edad de jubilación.",
    status: "depende-desarrollo",
    affected: ["Médicos", "Facultativos", "Urgencias", "Emergencias"],
    impact: "Abre una vía, pero no reconoce directamente el derecho ni los coeficientes.",
    hiddenRisk: "Presentar un estudio futuro como solución laboral ya obtenida.",
    demand: "Reconocimiento efectivo de penosidad y jubilación flexible sin penalización injusta.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "cesm-reivindicaciones-2025"],
  },
  {
    id: "matriz-da-17",
    topic: "Jubilación parcial",
    reference: "Disposición adicional decimoséptima",
    currentFrame: "La jubilación parcial puede ser útil si no queda subordinada a desarrollo ineficaz.",
    proposedChange: "Remite a los términos previstos con carácter general.",
    status: "depende-desarrollo",
    affected: ["Médicos", "Facultativos"],
    impact: "No garantiza por sí sola una jubilación médica adaptada a penosidad.",
    hiddenRisk: "Que la aplicación quede limitada o sin cobertura real de sustituciones.",
    demand: "Jubilación parcial efectiva y compatible con recambio planificado.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local"],
  },
  {
    id: "matriz-da-22",
    topic: "Personal en formación sanitaria especializada",
    reference: "Disposición adicional vigesimosegunda",
    currentFrame: "El MIR es trabajador y personal en formación, no mano de obra estructural barata.",
    proposedChange: "Aplica limitaciones de guardia y máximo general de 80 h/mes y cuatro módulos físicos.",
    status: "mejora-insuficiente",
    affected: ["MIR", "Tutores", "Hospitalaria", "Urgencias"],
    impact: "Ordena límites, pero no resuelve salario ordinario, supervisión, desigualdad territorial ni formación no registrada.",
    hiddenRisk: "Que el residente siga cubriendo déficits con guardias presentadas como sueldo.",
    demand: "Retribución ordinaria suficiente, supervisión real y tiempo formativo protegido.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "simeg-mir-2026"],
  },
  {
    id: "matriz-dt-5-6",
    topic: "Clasificación profesional y efectos retributivos",
    reference: "Disposiciones transitorias quinta y sexta",
    currentFrame: "La clasificación solo importa si produce efectos reales.",
    proposedChange: "Equipara grupos y supedita efectos retributivos al nuevo sistema y a incorporación presupuestaria.",
    status: "depende-desarrollo",
    affected: ["Médicos", "Facultativos", "MIR"],
    impact: "Puede ordenar grupos, pero el efecto económico no es automático.",
    hiddenRisk: "Vender reconocimiento profesional sin efecto retributivo inmediato.",
    demand: "Clasificación con impacto real en salario, carrera y negociación.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "cesm-reivindicaciones-2025"],
  },
  {
    id: "matriz-art-34-35-dt7",
    topic: "Incompatibilidades, exclusividad y jefaturas",
    reference: "Artículos 34-35 y disposición transitoria séptima",
    currentFrame: "Las incompatibilidades deben ser proporcionales y retribuidas si limitan derechos.",
    proposedChange: "Regula normas específicas y supuestos sujetos a interés público, con previsiones para jefaturas.",
    status: "ambiguo",
    affected: ["Jefaturas", "Médicos", "Facultativos"],
    impact: "Puede ordenar, pero también restringir sin compensación suficiente.",
    hiddenRisk: "Desincentivar cargos intermedios o imponer exclusividad insuficientemente retribuida.",
    demand: "Régimen homogéneo, no discriminatorio y compensado.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "cesm-cv-lineas-rojas"],
  },
  {
    id: "matriz-art-54-55",
    topic: "Movilidad por servicio y movilidad voluntaria",
    reference: "Artículos 54 y 55; DT 4",
    currentFrame: "La movilidad voluntaria es una mejora; la movilidad por servicio exige garantías.",
    proposedChange: "Regula movilidad por razón del servicio y concurso abierto permanente.",
    status: "mixto",
    affected: ["Médicos", "Facultativos", "Primaria", "Hospitales comarcales"],
    impact: "Puede mejorar traslados voluntarios, pero conserva riesgos de movilidad organizativa.",
    hiddenRisk: "Cubrir déficits desplazando profesionales en vez de planificar plantillas.",
    demand: "Garantías, conciliación y contratación frente a movilidad forzosa.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "ministerio-faq-estatuto"],
  },
  {
    id: "matriz-dt-8",
    topic: "Adaptación autonómica del régimen de jornada",
    reference: "Disposición transitoria octava",
    currentFrame: "La aplicación de jornada y descansos depende de organización real en servicios de salud.",
    proposedChange: "Da margen de adaptación a los servicios de salud para aplicar el título de jornada.",
    status: "depende-ccaa",
    affected: ["Médicos", "Facultativos", "MIR", "CCAA"],
    impact: "La mejora práctica puede variar por territorio.",
    hiddenRisk: "Derechos heterogéneos si cada CCAA adapta con ritmos o garantías distintas.",
    demand: "Mínimos estatales exigibles y calendario de aplicación verificable.",
    evidence: ["anteproyecto-2026", "extracto-anteproyecto-local", "cesm-jornada-ccaa", "csif-35h-ccaa"],
  },
];

export const collectiveImpactRows = [
  {
    id: "impacto-mir",
    collective: "MIR",
    affectedBy: ["DA 22", "arts. 95-99", "tablas MIR 2026"],
    impact:
      "Sigue siendo el ejemplo más visible de dependencia de guardias: el salario mensual con 80 h no puede presentarse como sueldo ordinario.",
    quantitativeStatus: "Cuantificado para R1-R5 y CCAA con sueldo base, guardias y escenarios brutos 3-6 guardias.",
    demand: "Salario ordinario suficiente, guardias no usadas como salario encubierto y formación protegida.",
  },
  {
    id: "impacto-adjuntos-hospitalaria",
    collective: "Adjuntos hospitalarios",
    affectedBy: ["arts. 95-99", "art. 84", "DT 8"],
    impact:
      "La guardia sigue definida como horario adicional al ordinario y mantiene escenarios de 17 horas, excepciones de 24 horas y ampliación anual excepcional.",
    quantitativeStatus: "Base documental: arts. 95, 96 y 97. Falta cuantificación homogénea por especialidad, hospital, guardia presencial/localizada y CCAA.",
    demand: "Guardias voluntarias y computables, descanso efectivo y planificación de plantilla.",
  },
  {
    id: "impacto-primaria",
    collective: "Atención primaria",
    affectedBy: ["art. 84", "arts. 54-55", "conciliación"],
    impact:
      "El texto no resuelve por sí solo agendas, cupos, domicilios, burocracia ni ausencias de sustitutos, y mantiene movilidad por razón del servicio junto a medidas de flexibilidad horaria.",
    quantitativeStatus: "Base documental: arts. 54 y 81. Falta comparar agenda, cupo, jornada y módulos adicionales por territorio.",
    demand: "Plantillas, agendas asumibles, conciliación y garantías frente a movilidad por déficit.",
  },
  {
    id: "impacto-urgencias-emergencias",
    collective: "Urgencias y emergencias",
    affectedBy: ["arts. 95-99", "DA 16", "salud laboral"],
    impact:
      "Es el ámbito más expuesto a noches, festivos, presión asistencial y penosidad acumulada.",
    quantitativeStatus: "Base documental: jornada complementaria, descansos y DA 16 sobre coeficientes reductores. Falta distinguir urgencias hospitalarias, extrahospitalarias y emergencias por CCAA.",
    demand: "Reconocimiento de penosidad, descansos exigibles y límites de carga asistencial.",
  },
  {
    id: "impacto-jefaturas",
    collective: "Jefaturas y cargos intermedios",
    affectedBy: ["arts. 34-35", "DT 7"],
    impact:
      "El régimen de incompatibilidades limita la segunda actividad privada en cargos intermedios salvo excepciones y exige dedicación exclusiva en puestos directivos.",
    quantitativeStatus: "Base documental: art. 35 y DT 7. Falta cuantificar complementos de jefatura, exclusividad y pérdida potencial por CCAA.",
    demand: "Régimen claro, no discriminatorio y retribuido.",
  },
  {
    id: "impacto-tutores",
    collective: "Tutores MIR y actividad docente",
    affectedBy: ["DA 22", "formación sanitaria especializada"],
    impact:
      "El anteproyecto no basta si no protege tiempo docente, supervisión y actividad formativa real.",
    quantitativeStatus: "Base documental: DA 22 y normativa de formación sanitaria especializada. Falta comparar tiempo docente reconocido y complementos de tutoría por CCAA.",
    demand: "Tiempo docente computable, reconocido y compatible con carga asistencial segura.",
  },
];

export const ccaaEvidenceRows = ccaaRows.map((row) => ({
  id: row.ccaa.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-"),
  ccaa: row.ccaa,
  source: row.source,
  r1Base: row.base[0],
  r1GrossWith80Guards: row.withGuardsGross[0],
  r1NetWith80Guards: row.withGuardsNet[0],
  r1LaborableGuardHour: row.guardHours[0][0],
  r1FestiveGuardHour: row.guardHours[0][1],
  r1SpecialGuardHour: row.guardHours[0][2],
  coverage:
    "Disponible: sueldo base MIR, bruto/neto con 80 h y precio de guardia. Requiere contraste adicional: jornada ordinaria real normalizada, guardia localizada y cumplimiento efectivo del descanso.",
}));

export const anteproyectoClaims = [
  {
    id: "ambito-propio",
    title: "Ámbito propio de negociación",
    claim: "El Estatuto Marco sirve como marco común para todos los profesionales del SNS.",
    reality:
      "Un marco común puede ordenar derechos generales, pero no sustituye una negociación específica sobre jornada médica, guardias, responsabilidad clínica y formación especializada.",
    whyItMatters:
      "Si la profesión médica queda diluida en una mesa general, otros actores pueden decidir qué condiciones son suficientes para médicos y facultativos.",
    demand:
      "Ámbito propio de negociación médica y facultativa, sin impedir que el resto de colectivos negocien sus propias condiciones.",
    refs: ["Ámbito de negociación", "Acuerdo sin sindicatos médicos"],
    sources: ["cesm-huelga-2026", "metges-preacuerdo-2026", "elpais-acuerdo-sin-medicos-2026"],
  },
  {
    id: "guardias-17-24",
    title: "Guardias de 17/24 horas",
    claim: "El texto limita y ordena las guardias.",
    reality:
      "Las guardias siguen siendo una pieza estructural del sistema. El anteproyecto prevé guardias de 17 horas y excepciones de hasta 24 horas con consentimiento.",
    whyItMatters:
      "Regular una sobrecarga no es eliminarla. Sin plantilla suficiente, voluntariedad real, retribución adecuada y cómputo efectivo, la carga sigue recayendo sobre los mismos.",
    demand:
      "Toda actividad por encima de la jornada ordinaria debe ser voluntaria, extraordinaria, justamente retribuida y computable.",
    refs: ["Anteproyecto arts. 95-99", "Guardias 17/24 h", "Consentimiento individual"],
    sources: ["anteproyecto-2026", "moncloa-acuerdo-2026", "aragondigital-guardias-2026-05-06"],
  },
  {
    id: "jornada-promedios",
    title: "Jornada máxima y promedios",
    claim: "La jornada máxima semanal de 45 horas reduce la sobrecarga.",
    reality:
      "Los promedios pueden esconder picos de actividad, y el propio esquema mantiene actividad adicional cuando hay necesidades organizativas o asistenciales.",
    whyItMatters:
      "La seguridad clínica no depende solo del promedio: depende de turnos concretos, fatiga acumulada, noches, festivos y presión asistencial real.",
    demand:
      "Límites claros, verificables y no eludibles por falta estructural de plantilla.",
    refs: ["Anteproyecto arts. 84, 97 y 98", "Promedio cuatrimestral", "Hasta 150 h/año adicionales"],
    sources: ["anteproyecto-2026", "moncloa-acuerdo-2026", "heraldo-claves-2026"],
  },
  {
    id: "descanso-postguardia",
    title: "Descansos postguardia",
    claim: "La libranza y los descansos quedan protegidos.",
    reality:
      "La existencia de descanso formal no garantiza descanso real si puede quedar condicionado por necesidades organizativas, deuda horaria o sustituciones imposibles.",
    whyItMatters:
      "El descanso postguardia protege al profesional y al paciente. No puede convertirse en una concesión negociable turno a turno.",
    demand:
      "Descanso postguardia efectivo, protegido, computable y sin penalización indirecta.",
    refs: ["Anteproyecto arts. 89-91 y 99", "Descansos alternativos", "Suspensión excepcional"],
    sources: ["anteproyecto-2026", "heraldo-claves-2026", "foro-profesion-medica-2025"],
  },
  {
    id: "mir-formacion",
    title: "MIR y formación sanitaria especializada",
    claim: "El anteproyecto introduce límites y mejoras para residentes.",
    reality:
      "Nombrar límites no resuelve la dependencia salarial de las guardias, la desigualdad autonómica ni el tiempo formativo añadido que no se retribuye.",
    whyItMatters:
      "El MIR es personal en formación y trabajador a la vez. Si el sistema lo usa como sostén estructural de guardias, la formación queda subordinada a cubrir huecos.",
    demand:
      "Protección real del residente: salario ordinario suficiente, guardias no usadas como salario encubierto, supervisión y tiempo formativo reconocido.",
    refs: ["Anteproyecto DA 22", "Máximo general 80 h/mes", "Máximo general 4 módulos físicos"],
    sources: ["anteproyecto-2026", "simeg-mir-2026", "csif-tabla-local"],
  },
  {
    id: "clasificacion",
    title: "Clasificación profesional",
    claim: "El nuevo sistema de clasificación reconoce mejor la formación.",
    reality:
      "La clasificación solo cambia la realidad si trae reconocimiento efectivo en negociación, retribuciones, carrera y responsabilidad asumida.",
    whyItMatters:
      "La medicina combina formación prolongada, especialización, toma de decisiones clínicas y riesgo médico-legal directo.",
    demand:
      "Clasificación profesional acorde a formación, responsabilidad clínica y especialización, con efectos laborales y retributivos reales.",
    refs: ["Anteproyecto arts. 6-7", "DT 5", "DT 6 efectos retributivos"],
    sources: ["anteproyecto-2026", "heraldo-claves-2026", "cesm-reivindicaciones-2025"],
  },
  {
    id: "jubilacion",
    title: "Jubilación y penosidad",
    claim: "El texto abre la vía de coeficientes reductores.",
    reality:
      "Abrir una vía futura no equivale a reconocer ya el impacto acumulado de guardias, noches, festivos, presión asistencial y carga médico-legal.",
    whyItMatters:
      "La penosidad no es una hipótesis: se acumula durante décadas de actividad nocturna, prolongaciones de jornada y responsabilidad clínica.",
    demand:
      "Jubilación flexible y coeficientes reductores reconocidos para médicos y facultativos con exposición acumulada a guardias y penosidad.",
    refs: ["DA 16 coeficientes reductores", "DA 17 jubilación parcial", "DT 2 régimen transitorio"],
    sources: ["anteproyecto-2026", "moncloa-acuerdo-2026", "cesm-reivindicaciones-2025"],
  },
  {
    id: "retribuciones",
    title: "Retribuciones",
    claim: "La nueva clasificación permitirá negociar retribuciones después.",
    reality:
      "Dejar el sistema retributivo para después mantiene el problema central: cifras públicas que mezclan sueldo ordinario, guardias, complementos y horas reales.",
    whyItMatters:
      "La ciudadanía no puede evaluar si una retribución es justa si no ve el denominador de horas y penosidad que hay detrás.",
    demand:
      "Retribución transparente: sueldo ordinario, guardias, complementos, horas reales y salario por hora siempre separados.",
    refs: ["DT 6 efectos retributivos", "SIMEG MIR 2026", "Tabla CSIF incorporada"],
    sources: ["simeg-mir-2026", "csif-tabla-local", "aragondigital-guardias-2026-05-06"],
  },
  {
    id: "incompatibilidades",
    title: "Incompatibilidades y exclusividad",
    claim: "La dedicación exclusiva ordena el sistema.",
    reality:
      "Ordenar incompatibilidades sin compensación adecuada puede convertirse en una restricción añadida sobre profesionales ya sometidos a alta carga asistencial.",
    whyItMatters:
      "Cualquier régimen de exclusividad debe estar justificado, ser homogéneo, no discriminatorio y retribuido de forma proporcionada.",
    demand:
      "Régimen de incompatibilidades claro, no discriminatorio y vinculado a reconocimiento retributivo suficiente.",
    refs: ["Anteproyecto arts. 34-35", "DT 7 jefaturas", "Régimen disciplinario"],
    sources: ["anteproyecto-2026", "cesm-cv-lineas-rojas"],
  },
  {
    id: "movilidad",
    title: "Movilidad y necesidades asistenciales",
    claim: "La movilidad voluntaria se agiliza con concursos abiertos.",
    reality:
      "La movilidad voluntaria puede mejorar, pero hay que vigilar los supuestos de movilidad por necesidades organizativas o asistenciales.",
    whyItMatters:
      "Los déficits estructurales de plantilla no pueden resolverse desplazando profesionales sin garantías suficientes.",
    demand:
      "Garantías frente a movilidad forzosa y cobertura de necesidades asistenciales mediante planificación y contratación.",
    refs: ["Anteproyecto arts. 54-55", "DA 19", "DT 4 concurso abierto y permanente"],
    sources: ["anteproyecto-2026", "ministerio-faq-estatuto"],
  },
  {
    id: "conciliacion",
    title: "Conciliación",
    claim: "El texto reconoce avances en conciliación.",
    reality:
      "La conciliación no existe si guardias, noches, festivos y déficit de plantilla siguen funcionando como obligación estructural permanente.",
    whyItMatters:
      "La vida familiar y personal no puede quedar subordinada indefinidamente a una organización que normaliza la excepción.",
    demand:
      "Conciliación real con planificación de jornada, protección de descansos, voluntariedad efectiva y plantillas suficientes.",
    refs: ["Art. 81 flexibilización horaria", "Art. 95.3 exenciones de guardia", "Art. 54 movilidad por razón del servicio"],
    sources: ["anteproyecto-2026", "moncloa-acuerdo-2026", "heraldo-claves-2026"],
  },
  {
    id: "salud-laboral",
    title: "Salud laboral y seguridad clínica",
    claim: "La regulación de jornada mejora la prevención de riesgos.",
    reality:
      "La prevención no se garantiza con declaraciones generales si la fatiga asistencial continúa siendo el mecanismo que sostiene la cobertura ordinaria.",
    whyItMatters:
      "Fatiga, responsabilidad clínica y decisiones de alto impacto afectan a profesionales y pacientes. La seguridad clínica exige condiciones de trabajo seguras.",
    demand:
      "Evaluación real de cargas, límites exigibles, descanso protegido y planificación que no dependa de prolongar la jornada médica.",
    refs: ["Anteproyecto arts. 95-99", "Carga horaria excesiva", "Prevención de riesgos laborales"],
    sources: ["anteproyecto-2026", "foro-profesion-medica-2025"],
  },
];

export const newsRebuttals = [
  {
    id: "diario-altoaragon-defienden-estatuto",
    title: "UGT, CSIF, CCOO y Satse defienden el nuevo Estatuto Marco",
    outlet: "Diario del Alto Aragón",
    date: "2026-05-06",
    claim:
      "Los sindicatos firmantes defienden que el texto aborda casi el 90% de las reivindicaciones y contiene más de 117 mejoras.",
    response:
      "Un acuerdo general no equivale a consenso médico. La cuestión no es si el texto contiene mejoras generales, sino si garantiza un ámbito propio y derechos efectivos para condiciones específicamente médicas: guardias, jornada, descanso, responsabilidad clínica, jubilación y formación.",
    keyMessage:
      "No pedimos bloquear la negociación de otros colectivos. Pedimos que no se bloquee la nuestra.",
    sources: ["diario-altoaragon-2026-05-06", "cesm-huelga-2026", "metges-preacuerdo-2026"],
  },
  {
    id: "aragondigital-guardias-24h",
    title: "Nadie está obligado a realizar guardias de 24 horas",
    outlet: "Aragón Digital",
    date: "2026-05-06",
    claim:
      "Las guardias de 24 horas serían voluntarias y las de 17 horas vendrían acompañadas de descanso.",
    response:
      "El problema no se agota en la guardia de 24 horas. Si las guardias de 17 horas siguen siendo pieza estructural, si el descanso depende de la organización real y si la plantilla no se refuerza, la sobrecarga se conserva bajo una forma distinta.",
    keyMessage:
      "Regular la excepción no basta si la excepción sigue sosteniendo el sistema.",
    sources: ["aragondigital-guardias-2026-05-06", "anteproyecto-2026", "moncloa-acuerdo-2026"],
  },
  {
    id: "heraldo-claves-estatuto",
    title: "Las claves del Estatuto Marco firmado por Sanidad y los sindicatos",
    outlet: "Heraldo de Aragón",
    date: "2026-01-26",
    claim:
      "El acuerdo incluye mejoras para todo el personal en guardias, conciliación, jornada, clasificación y jubilación.",
    response:
      "Que existan mejoras generales no resuelve la reivindicación médica. La pregunta central es qué queda jurídicamente garantizado para quienes asumen guardias, responsabilidad clínica directa, formación prolongada y riesgo médico-legal.",
    keyMessage:
      "El problema no es que otros tengan mejoras; es que médicos y facultativos necesitan voz propia para negociar las suyas.",
    sources: ["heraldo-claves-2026", "cesm-huelga-2026", "elpais-acuerdo-sin-medicos-2026"],
  },
  {
    id: "csif-tabla-mir",
    title: "Tabla de sueldos MIR con guardias",
    outlet: "CSIF / material difundido",
    date: "2026-04-01",
    claim:
      "Los importes netos mensuales con guardias muestran salarios MIR elevados.",
    response:
      "Una tabla con guardias no es una tabla de sueldo ordinario. Para llegar a esas cifras se añaden unas 80 horas mensuales de guardia por encima de la jornada ordinaria, con noches, festivos y carga asistencial.",
    keyMessage:
      "La comparación honesta separa sueldo base, guardias, horas reales y salario por hora.",
    sources: ["csif-tabla-local", "simeg-mir-2026"],
  },
];

export const reivindicaciones = [
  {
    id: "estatuto-propio",
    title: "Estatuto Médico y Facultativo propio",
    short: "No para decidir por otros colectivos, sino para que nadie decida por nosotros.",
    explanation:
      "La profesión médica necesita un marco propio que reconozca su jornada, guardias, responsabilidad clínica, formación y derechos laborales.",
    category: "Representación",
    sources: ["cesm-huelga-2026", "metges-preacuerdo-2026"],
  },
  {
    id: "ambito-negociacion",
    title: "Ámbito propio de negociación",
    short: "Condiciones médicas negociadas con representación médica real.",
    explanation:
      "La jornada, guardias, responsabilidad clínica, presión médico-legal y formación especializada tienen características propias.",
    category: "Representación",
    sources: ["cesm-huelga-2026", "elpais-acuerdo-sin-medicos-2026"],
  },
  {
    id: "guardias-computables",
    title: "Guardias voluntarias, extraordinarias y computables",
    short: "Toda hora por encima de la jornada ordinaria debe reconocerse como trabajo efectivo.",
    explanation:
      "Las guardias no pueden ser salario encubierto ni una obligación estructural permanente para tapar déficits de plantilla.",
    category: "Jornada",
    sources: ["anteproyecto-2026", "cesm-reivindicaciones-2025"],
  },
  {
    id: "descanso-real",
    title: "Descanso real",
    short: "El descanso postguardia debe estar protegido y no depender de presiones organizativas.",
    explanation:
      "La seguridad del paciente y del profesional exige descanso efectivo, computable y sin penalización indirecta.",
    category: "Salud laboral",
    sources: ["anteproyecto-2026", "foro-profesion-medica-2025"],
  },
  {
    id: "conciliacion",
    title: "Conciliación",
    short: "La vida familiar y personal no puede quedar subordinada a déficits estructurales.",
    explanation:
      "Conciliar exige planificación real de jornada, límites efectivos y plantillas suficientes.",
    category: "Derechos",
    sources: ["anteproyecto-2026", "moncloa-acuerdo-2026"],
  },
  {
    id: "clasificacion",
    title: "Clasificación acorde a formación y responsabilidad",
    short: "La formación prolongada y la responsabilidad clínica deben tener reconocimiento real.",
    explanation:
      "El reconocimiento debe verse en negociación, carrera, retribuciones y derechos, no solo en una etiqueta académica.",
    category: "Reconocimiento",
    sources: ["anteproyecto-2026", "cesm-reivindicaciones-2025"],
  },
  {
    id: "jubilacion-penosidad",
    title: "Jubilación por penosidad",
    short: "No basta con estudiar coeficientes reductores.",
    explanation:
      "Hay que reconocer el impacto acumulado de guardias, noches, festivos, fatiga y carga asistencial durante décadas.",
    category: "Jubilación",
    sources: ["anteproyecto-2026", "cesm-reivindicaciones-2025"],
  },
  {
    id: "retribucion-transparente",
    title: "Retribución transparente",
    short: "Separar siempre sueldo ordinario, guardias, complementos, horas reales y salario por hora.",
    explanation:
      "Una nómina con noches, festivos y jornadas extendidas no puede venderse como sueldo ordinario.",
    category: "Retribuciones",
    sources: ["simeg-mir-2026", "csif-tabla-local"],
  },
];

export const quickArguments = [
  "No pedimos decidir por nadie. Pedimos que nadie decida por nosotros.",
  "Un acuerdo general no equivale a consenso médico.",
  "Una guardia regulada sigue siendo sobrecarga si continúa sosteniendo la plantilla que falta.",
  "Una nómina con guardias, noches y festivos no es sueldo ordinario.",
  "La conciliación no existe si la excepción organizativa se vuelve permanente.",
  "El descanso postguardia no es un privilegio: es seguridad clínica.",
  "Un Estatuto Médico propio no es corporativismo: es negociación específica para responsabilidades específicas.",
  "Hablar de salario sin hablar de horas es ocultar medio debate.",
];

export const sourceRegistry = {
  "anteproyecto-2026": {
    title: "Propuesta de Anteproyecto de Ley del Estatuto Marco",
    type: "oficial",
    institution: "Ministerio de Sanidad",
    year: 2026,
    documentDate: "2025-12-04",
    version: "VERSION.04.12.2025",
    status: "propuesta en negociación",
    localPath: "docs/extract_anteproyecto.txt",
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/docs/APL_personal_estatutario_08_01_2026.pdf",
  },
  "ministerio-estatuto": {
    title: "Nuevo Estatuto Marco",
    type: "oficial",
    institution: "Ministerio de Sanidad",
    year: 2026,
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/nuevoEstatutoMarco.htm",
  },
  "ministerio-faq-estatuto": {
    title: "Preguntas frecuentes sobre el Estatuto Marco",
    type: "oficial",
    institution: "Ministerio de Sanidad",
    year: 2026,
    url: "https://www.sanidad.gob.es/areas/profesionesSanitarias/PregFrecEstatutoMarco.htm",
  },
  "ley-55-2003": {
    title: "Ley 55/2003, Estatuto Marco vigente",
    type: "normativa",
    institution: "BOE",
    year: 2003,
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23101",
  },
  "moncloa-acuerdo-2026": {
    title: "Sanidad y sindicatos alcanzan un acuerdo para un nuevo Estatuto Marco",
    type: "oficial",
    institution: "La Moncloa",
    year: 2026,
    url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/sanidad14/Paginas/2026/260126-garcia-acuerdo-estatuto-marco.aspx",
  },
  "satse-acuerdo-2026": {
    title: "Acuerdo de inicio de tramitación del Estatuto Marco",
    type: "sindical",
    institution: "SATSE",
    year: 2026,
    url: "https://www.satse.es/notas-prensa/-/v/85301/acuerdo-inicio-tramitacion-estatuto-marco",
  },
  "cesm-huelga-2026": {
    title: "Convocatoria de huelga por un Estatuto Médico y Facultativo",
    type: "sindical médico",
    institution: "CESM",
    year: 2026,
    url: "https://www.cesm.org/2026/01/22/el-comite-de-huelga-convoca-un-paro-indefinido-a-partir-del-proximo-16-de-febrero-para-conseguir-un-estatuto-medico-y-facultativo/",
  },
  "cesm-reivindicaciones-2025": {
    title: "Reivindicaciones del Comité de Huelga ante el Ministerio",
    type: "sindical médico",
    institution: "CESM",
    year: 2025,
    url: "https://www.cesm.org/2025/06/09/estas-son-las-reivindicaciones-del-comite-de-huelga-ante-el-ministerio-de-sanidad/",
  },
  "cesm-cv-lineas-rojas": {
    title: "Líneas rojas del borrador de Estatuto Marco",
    type: "sindical médico",
    institution: "CESM-CV",
    year: 2026,
    url: "https://www.cesm-cv.org/reclasificacion-profesional-jornada-laboral-y-regimen-de-incompatibilidades-lineas-rojas-del-borrador-de-estatuto-marco/",
  },
  "metges-preacuerdo-2026": {
    title: "El preacuerdo no suspende la huelga de facultativos",
    type: "sindical médico",
    institution: "Metges de Catalunya",
    year: 2026,
    url: "https://metgesdecatalunya.cat/es/actualidad/noticias/el-preacuerdo-entre-sanidad-y-los-sindicatos-del-ambito-de-negociacion-para-renovar-el-estatuto-marco-no-suspende-la-huelga-de-facultativos",
  },
  "foro-profesion-medica-2025": {
    title: "El Foro de la Profesión Médica defiende sus reivindicaciones",
    type: "profesional",
    institution: "Médicos y Pacientes",
    year: 2025,
    url: "https://www.medicosypacientes.com/articulo/el-foro-de-la-profesion-medica-defiende-las-reivindicaciones-que-han-llevado-a-la-huelga-del-13-de-junio/",
  },
  "elpais-acuerdo-sin-medicos-2026": {
    title: "Sanidad firma un acuerdo para el nuevo Estatuto Marco sin el apoyo de los sindicatos médicos",
    type: "prensa",
    institution: "El País",
    year: 2026,
    url: "https://elpais.com/sociedad/2026-01-26/sanidad-firma-un-acuerdo-para-el-nuevo-estatuto-marco-sin-el-apoyo-de-los-sindicatos-medicos.html",
  },
  "heraldo-claves-2026": {
    title: "Las claves del Estatuto Marco firmado por Sanidad y los sindicatos de la negociación",
    type: "prensa",
    institution: "Heraldo de Aragón",
    year: 2026,
    url: "https://www.heraldo.es/noticias/nacional/2026/01/26/las-claves-del-estatuto-marco-firmado-por-sanidad-y-los-sindicatos-de-la-negociacion-1888780.html",
  },
  "diario-altoaragon-2026-05-06": {
    title: "UGT, CSIF, CCOO y Satse defienden el nuevo Estatuto Marco",
    type: "prensa",
    institution: "Diario del Alto Aragón",
    year: 2026,
    url: "https://www.diariodelaltoaragon.es/noticias/huesca/2026/05/06/ugt-csif-ccoo-satse-defienden-nuevo-estatuto-marco-2018142.html",
  },
  "aragondigital-guardias-2026-05-06": {
    title: "Los sindicatos salen en defensa del Estatuto Marco de Sanidad",
    type: "prensa",
    institution: "Aragón Digital",
    year: 2026,
    url: "https://www.aragondigital.es/articulo/sanidad/sindicatos-salen-defensa-estatuto-marco-sanidad-nadie-obligado-realizar-guardias-24-horas/20260506142208982080.html",
  },
  "simeg-mir-2026": {
    title: "Retribuciones MIR 2026",
    type: "informe técnico",
    institution: "SIMEG",
    year: 2026,
    url: "https://simeg.org/wp/wp-content/uploads/2026/04/Retribuciones-MIR-2026.pdf",
  },
  "csif-tabla-local": {
    title: "Tabla de sueldos MIR difundida por CSIF",
    type: "material incorporado",
    institution: "Archivo documental",
    year: 2026,
    url: "evidence/csif-tabla.jpeg",
  },
  "checklist-local": {
    title: "Checklist de comparación del Estatuto con condiciones médicas",
    type: "documento de verificación",
    institution: "Archivo documental",
    year: 2026,
    localPath: "docs/checklist-comparacion-estatuto-medicos.md",
    url: "https://github.com/Guallar7/mir-estatuto-realidad/blob/main/docs/checklist-comparacion-estatuto-medicos.md",
  },
  "extracto-anteproyecto-local": {
    title: "Extracto textual del anteproyecto para búsqueda rápida",
    type: "documento de verificación",
    institution: "Archivo documental",
    year: 2026,
    documentDate: "2025-12-04",
    version: "VERSION.04.12.2025",
    localPath: "docs/extract_anteproyecto.txt",
    url: "https://github.com/Guallar7/mir-estatuto-realidad/blob/main/docs/extract_anteproyecto.txt",
  },
  "cesm-jornada-ccaa": {
    title: "Distribución de jornada de 35 horas por comunidades autónomas",
    type: "sindical médico",
    institution: "CESM",
    year: 2024,
    url: "https://www.cesm.org/2024/12/18/asi-esta-la-distribucion-de-jornada-laboral-de-35-horas-por-comunidades-autonomas/",
  },
  "csif-35h-ccaa": {
    title: "CCAA pendientes de implantar 35 horas en sanidad",
    type: "sindical",
    institution: "CSIF",
    year: 2026,
    url: "https://www.csif.es/es/articulo/nacional/sanidad/89481",
  },
  "andalucia-retribuciones-2026": {
    title: "Retribuciones 2026",
    type: "oficial autonómica",
    institution: "Servicio Andaluz de Salud",
    year: 2026,
    url: "https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/guia-laboral/retribuciones",
  },
  "aragon-retribuciones-2026": {
    title: "Tablas retributivas personal estatutario SALUD 2026",
    type: "oficial autonómica",
    institution: "Aragón SALUD",
    year: 2026,
    url: "https://www.aragon.es/documents/20127/128260043/Tablas_retributivas_personal_estatutario_SALUD_2026.pdf/e527d18c-861e-0a7d-166e-cd07bf2aad77?download=true&t=1771839687505&version=1.0",
  },
  "canarias-retribuciones-2026": {
    title: "Retribuciones 2026",
    type: "oficial autonómica",
    institution: "Servicio Canario de la Salud",
    year: 2026,
    url: "https://www3.gobiernodecanarias.org/sanidad/scs/contenidoGenerico.jsp?idCarpeta=c32fdf85-fc15-11dd-a72f-93771b0e33f6&idDocument=b2540aca-fdab-11dd-b2aa-596c3deb1b4e",
  },
  "sescam-retribuciones-2026": {
    title: "Anexos y tablas retributivas 2026",
    type: "oficial autonómica",
    institution: "SESCAM",
    year: 2026,
    url: "https://sanidad.castillalamancha.es/sites/sescam.castillalamancha.es/files/documentos/legislacion/20260324/anexos_y_tablas_2026.pdf",
  },
  "ibsalut-retribuciones": {
    title: "Retribuciones",
    type: "oficial autonómica",
    institution: "Ibsalut",
    year: 2026,
    url: "https://www.ibsalut.es/professionals/recursos-humans/retribucions",
  },
  "valencia-satse-tablas-2026": {
    title: "Tablas 2026",
    type: "sindical autonómica",
    institution: "SATSE Comunidad Valenciana",
    year: 2026,
    url: "https://comunidadvalenciana.satse.es/noticias/-/v/687184/tablas-2026",
  },
  "extremadura-ses-tablas-2026": {
    title: "Tablas retributivas 2026 SES",
    type: "sindical autonómica",
    institution: "SES Extremadura",
    year: 2026,
    url: "https://www.sindicato-sip.es/wp-content/uploads/2026/02/Tablas-retributivas-2026-SES.pdf",
  },
  "madrid-bocm-retribuciones-2026": {
    title: "Retribuciones 2026",
    type: "oficial autonómica",
    institution: "BOCM Madrid",
    year: 2026,
    url: "https://www.bocm.es/boletin/CM_Orden_BOCM/2026/02/09/BOCM-20260209-6.PDF",
  },
};

export const sourceGroups = [
  {
    title: "Normativa y documentos oficiales",
    ids: ["anteproyecto-2026", "ministerio-estatuto", "ministerio-faq-estatuto", "ley-55-2003", "moncloa-acuerdo-2026"],
  },
  {
    title: "Posición médica y facultativa",
    ids: ["cesm-huelga-2026", "cesm-reivindicaciones-2025", "cesm-cv-lineas-rojas", "metges-preacuerdo-2026", "foro-profesion-medica-2025"],
  },
  {
    title: "Acuerdo sindical y contexto de prensa",
    ids: ["satse-acuerdo-2026", "elpais-acuerdo-sin-medicos-2026", "heraldo-claves-2026", "diario-altoaragon-2026-05-06", "aragondigital-guardias-2026-05-06"],
  },
  {
    title: "Retribuciones MIR y material incorporado",
    ids: ["simeg-mir-2026", "csif-tabla-local", "cesm-jornada-ccaa", "csif-35h-ccaa"],
  },
  {
    title: "Tablas autonómicas usadas como contraste",
    ids: [
      "andalucia-retribuciones-2026",
      "aragon-retribuciones-2026",
      "canarias-retribuciones-2026",
      "sescam-retribuciones-2026",
      "ibsalut-retribuciones",
      "valencia-satse-tablas-2026",
      "extremadura-ses-tablas-2026",
      "madrid-bocm-retribuciones-2026",
    ],
  },
  {
    title: "Documentos de verificación",
    ids: ["checklist-local", "extracto-anteproyecto-local"],
  },
];
