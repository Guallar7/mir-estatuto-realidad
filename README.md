# Estatuto Médico Propio

Portal documental y argumental para defender un Estatuto Médico y Facultativo propio frente al anteproyecto del nuevo Estatuto Marco. Reúne datos, fuentes, desmontajes de noticias, reivindicaciones y material descargable sobre guardias médicas, MIR, jornada, conciliación, responsabilidad clínica, jubilación y derechos laborales.

Frase guía:

> No pedimos decidir por nadie. Pedimos que nadie decida por nosotros.

El bloque MIR se mantiene como una sección específica: sirve para demostrar cómo se manipula el debate cuando se mezclan sueldo ordinario, guardias y horas reales. Ya no es la identidad completa de la web.

- Web publicada: https://guallar7.github.io/mir-estatuto-realidad/
- Repositorio: https://github.com/Guallar7/mir-estatuto-realidad
- Última revisión documental del índice: 7 de mayo de 2026.

## Estructura De La Web

La web está organizada como portal multipágina estático con React + Vite, sin router ni backend:

- `/`: portada breve y directorio central.
- `/reivindicaciones.html`: programa médico-facultativo por un Estatuto propio.
- `/anteproyecto.html`: matriz de desmontaje del anteproyecto del Estatuto Marco.
- `/mir.html`: sueldo ordinario, guardias, horas reales, CCAA y salario por hora.
- `/noticias.html`: respuesta a titulares, comunicados y declaraciones públicas.
- `/fuentes.html`: normativa, comunicados, prensa, tablas, descargas y documentos de verificación.
- `/argumentario.html`: frases y respuestas reutilizables para redes, asambleas y prensa.
- `/infografia.html`: pieza visual específica del bloque MIR.

Cada HTML tiene metadatos SEO propios y monta `src/main.jsx` con `data-page`, salvo la infografía, que conserva `src/infografia.jsx`.

## Índice De Fuentes Y Contexto

Este índice separa fuentes primarias, documentos de contraste, material visual original y documentos derivados generados para la campaña. Los documentos derivados sirven para comunicar; los datos normativos y retributivos deben comprobarse siempre contra las fuentes primarias enlazadas.

### 1. Material Original Incorporado Al Repositorio

| Documento | Ruta | Uso |
|---|---|---|
| Propuesta de Anteproyecto de Ley del Estatuto Marco | [public/evidence/Propuesta-de-Anteproyecto-de-Ley-del-Estatuto-Marco-del-personal-estatutario-de-los-servicios-de-salud.pdf](public/evidence/Propuesta-de-Anteproyecto-de-Ley-del-Estatuto-Marco-del-personal-estatutario-de-los-servicios-de-salud.pdf) | Texto base que se compara con las condiciones actuales del personal médico y facultativo. |
| Extracto textual del anteproyecto | [docs/extract_anteproyecto.txt](docs/extract_anteproyecto.txt) | Versión extraída para búsquedas rápidas por artículos, disposiciones y términos clave. |
| Cartel/tabla de CSIF | [public/evidence/csif-tabla.jpeg](public/evidence/csif-tabla.jpeg) | Pieza comunicativa que se rebate; mezcla retribuciones con guardias sin explicar el denominador de horas. |
| Tabla II de retribuciones MIR | [public/evidence/tabla-ii.jpeg](public/evidence/tabla-ii.jpeg) | Material de apoyo usado para contrastar sueldo ordinario, guardias y diferencias por año de residencia. |
| Cuadro 1 de retribuciones | [public/evidence/cuadro-1-retribuciones.jpeg](public/evidence/cuadro-1-retribuciones.jpeg) | Material de apoyo para interpretar retribución real y desgloses. |
| Publicación Pilar CTO | [public/evidence/pilar-cto.jpeg](public/evidence/pilar-cto.jpeg) | Contexto de difusión pública de tablas salariales MIR y origen visual de parte del debate. |

### 2. Fuentes Normativas Principales

| Fuente | Enlace | Uso |
|---|---|---|
| Ministerio de Sanidad - Nuevo Estatuto Marco | https://www.sanidad.gob.es/areas/profesionesSanitarias/nuevoEstatutoMarco.htm | Página institucional de referencia del proceso de nuevo Estatuto Marco. |
| Anteproyecto Estatuto Marco 08/01/2026 | https://www.sanidad.gob.es/areas/profesionesSanitarias/docs/APL_personal_estatutario_08_01_2026.pdf | Texto oficial usado para analizar jornada, guardias, descansos, movilidad, incompatibilidades y disposiciones sobre formación. |
| Ley 55/2003, Estatuto Marco vigente | https://www.boe.es/buscar/act.php?id=BOE-A-2003-23101 | Marco legal vigente; especialmente útil para jornada ordinaria, jornada complementaria, descansos y régimen estatutario. |
| FAQ Ministerio de Sanidad sobre Estatuto Marco | https://www.sanidad.gob.es/areas/profesionesSanitarias/PregFrecEstatutoMarco.htm | Interpretación institucional del Ministerio sobre los cambios propuestos. |
| Resolución AGE 35 horas, BOE 14/04/2026 | https://www.boe.es/buscar/act.php?id=BOE-A-2026-8287 | Contexto sobre jornada de 35 horas en la Administración General del Estado; no debe extrapolarse automáticamente a todos los servicios autonómicos de salud. |

### 3. Retribuciones MIR Y Tablas Autonómicas

| Fuente | Enlace | Uso |
|---|---|---|
| SIMEG - Retribuciones MIR 2026 | https://simeg.org/wp/wp-content/uploads/2026/04/Retribuciones-MIR-2026.pdf | Fuente principal para medias R1-R5, sueldo sin guardias, sueldo con 80 h de guardia y diferencias por comunidad autónoma. |
| Servicio Andaluz de Salud - Retribuciones 2026 | https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/guia-laboral/retribuciones | Contraste oficial para Andalucía. |
| Aragón SALUD - Tablas retributivas 2026 | https://www.aragon.es/documents/20127/128260043/Tablas_retributivas_personal_estatutario_SALUD_2026.pdf/e527d18c-861e-0a7d-166e-cd07bf2aad77?download=true&t=1771839687505&version=1.0 | Contraste oficial para Aragón. |
| Servicio Canario de la Salud - Retribuciones 2026 | https://www3.gobiernodecanarias.org/sanidad/scs/contenidoGenerico.jsp?idCarpeta=c32fdf85-fc15-11dd-a72f-93771b0e33f6&idDocument=b2540aca-fdab-11dd-b2aa-596c3deb1b4e | Contraste oficial para Canarias. |
| SESCAM - Anexos y tablas retributivas 2026 | https://sanidad.castillalamancha.es/sites/sescam.castillalamancha.es/files/documentos/legislacion/20260324/anexos_y_tablas_2026.pdf | Contraste oficial para Castilla-La Mancha. |
| Ibsalut - Retribuciones | https://www.ibsalut.es/professionals/recursos-humans/retribucions | Contraste oficial para Baleares. |
| SATSE Comunidad Valenciana - Tablas 2026 | https://comunidadvalenciana.satse.es/noticias/-/v/687184/tablas-2026 | Contraste sindical para Comunidad Valenciana cuando la fuente oficial es menos directa. |
| SES Extremadura - Tablas retributivas 2026 | https://www.sindicato-sip.es/wp-content/uploads/2026/02/Tablas-retributivas-2026-SES.pdf | Contraste de tablas para Extremadura. |
| BOCM Madrid - Retribuciones 2026 | https://www.bocm.es/boletin/CM_Orden_BOCM/2026/02/09/BOCM-20260209-6.PDF | Contraste oficial para Madrid. |

### 4. Jornada Ordinaria, 35 Horas Y Denominador De Horas

| Fuente | Enlace | Uso |
|---|---|---|
| Ley 55/2003, artículo 47 | https://www.boe.es/buscar/act.php?id=BOE-A-2003-23101 | La jornada ordinaria estatutaria se determina por normas, pactos o acuerdos de cada servicio de salud. |
| BOE - Resolución AGE 35 h, 14/04/2026 | https://www.boe.es/buscar/act.php?id=BOE-A-2026-8287 | Confirma 35 h para AGE, pero no convierte automáticamente a todos los servicios autonómicos de salud en jornada de 35 h. |
| CESM - Distribución de jornada de 35 h por CCAA | https://www.cesm.org/2024/12/18/asi-esta-la-distribucion-de-jornada-laboral-de-35-horas-por-comunidades-autonomas/ | Contexto médico sobre implantación desigual de 35 h en comunidades autónomas. |
| CSIF - CCAA pendientes de implantar 35 h en sanidad | https://www.csif.es/es/articulo/nacional/sanidad/89481 | Contexto sindical reciente sobre territorios donde las 35 h no están plenamente implantadas. |

Nota metodológica: el cálculo comunicativo principal usa 35 h/semana anualizadas (`35 x 52 / 12 = 151,7 h/mes`). Con 80 h de guardia, el divisor principal es `231,7 h/mes`. Si una CCAA aplica 37,5 h/semana o un cómputo anual superior, el divisor sube a `242,5 h/mes` y el salario neto por hora baja.

### 5. Contexto Profesional, Sindical Y De Movilización

| Fuente | Enlace | Uso |
|---|---|---|
| CESM - Comité de Huelga mantiene movilizaciones | https://www.cesm.org/2026/04/08/el-comite-de-huelga-denuncia-que-el-ministerio-entorpece-la-negociacion-para-esconder-su-incapacidad-para-llegar-a-acuerdos-que-atiendan-las-reivindicaciones-del-colectivo/ | Posición del Comité de Huelga frente al Ministerio y continuidad de movilizaciones. |
| Comité de Huelga - Contrapropuesta 21/04/2026 | https://www.cesm.org/wp-content/uploads/2026/04/20260420-Contrapropuesta-comite-huelga-APL-Estatuto-Marco.pdf | Documento de contraste médico-facultativo frente al anteproyecto ministerial. |
| CESM - Convocatoria de huelga nacional | https://www.cesm.org/2026/01/22/el-comite-de-huelga-convoca-un-paro-indefinido-a-partir-del-proximo-16-de-febrero-para-conseguir-un-estatuto-medico-y-facultativo/ | Contexto de conflicto y reivindicación de estatuto médico/facultativo propio. |
| CESM - Reivindicaciones del Comité de Huelga | https://www.cesm.org/2025/06/09/estas-son-las-reivindicaciones-del-comite-de-huelga-ante-el-ministerio-de-sanidad/ | Reivindicaciones médicas: jornada, guardias, jubilación, clasificación, incompatibilidades y negociación propia. |
| SATSE - Acuerdo con Sanidad | https://www.satse.es/notas-prensa/-/v/85301/acuerdo-inicio-tramitacion-estatuto-marco | Fuente para contextualizar qué sindicatos apoyan iniciar la tramitación del anteproyecto. |
| Foro de la Profesión Médica - Reivindicaciones 2025 | https://www.medicosypacientes.com/articulo/el-foro-de-la-profesion-medica-defiende-las-reivindicaciones-que-han-llevado-a-la-huelga-del-13-de-junio/ | Contexto institucional de la profesión médica. |
| CESM-CV - Líneas rojas del Estatuto Marco | https://www.cesm-cv.org/reclasificacion-profesional-jornada-laboral-y-regimen-de-incompatibilidades-lineas-rojas-del-borrador-de-estatuto-marco/ | Contexto autonómico sobre reclasificación, jornada e incompatibilidades. |
| Metges de Catalunya - Preacuerdo y huelga facultativa | https://metgesdecatalunya.cat/es/actualidad/noticias/el-preacuerdo-entre-sanidad-y-los-sindicatos-del-ambito-de-negociacion-para-renovar-el-estatuto-marco-no-suspende-la-huelga-de-facultativos | Contexto de oposición médica en Cataluña. |

### 6. Descargas Generales

| Documento | Ruta | Uso |
|---|---|---|
| Dossier Estatuto Médico Propio | [public/downloads/dossier_estatuto_medico_propio.md](public/downloads/dossier_estatuto_medico_propio.md) | Documento general de tesis, reivindicaciones y método de análisis del anteproyecto. |
| Matriz anteproyecto | [public/downloads/matriz_anteproyecto_estatuto_medico.md](public/downloads/matriz_anteproyecto_estatuto_medico.md) | Resumen por referencia, efecto práctico, riesgo, colectivos afectados, verificación y demanda. |
| Argumentario Estatuto Médico | [public/downloads/argumentario_estatuto_medico.md](public/downloads/argumentario_estatuto_medico.md) | Frases y respuestas breves para redes, asambleas y prensa. |
| Respuesta noticia Estatuto Marco | [public/downloads/respuesta_noticia_estatuto_marco.md](public/downloads/respuesta_noticia_estatuto_marco.md) | Respuesta base a titulares sobre acuerdo sindical, guardias, conciliación y consenso médico. |

### 7. Anexos MIR/CSIF Y Datos Reutilizables

| Documento | Ruta | Uso |
|---|---|---|
| Dossier MIR/CSIF Markdown | [public/downloads/dossier_mir_estatuto_marco.md](public/downloads/dossier_mir_estatuto_marco.md) | Anexo específico para rebatir tablas de sueldos MIR que mezclan salario y guardias. |
| Dossier MIR/CSIF DOCX | [public/downloads/dossier_mir_estatuto_marco.docx](public/downloads/dossier_mir_estatuto_marco.docx) | Versión editable del anexo MIR/CSIF. |
| Argumentario MIR/CSIF | [public/downloads/argumentario_rapido_csif_mir.md](public/downloads/argumentario_rapido_csif_mir.md) | Resumen táctico para responder a cifras MIR con guardias. |
| Escenarios MIR guardias | [public/downloads/escenarios_mir_guardias.md](public/downloads/escenarios_mir_guardias.md) | Estimaciones brutas 3-6 guardias para explicar sensibilidad de horas y salario por hora. |
| Excel de retribuciones | [public/downloads/retribuciones_mir_2026.xlsx](public/downloads/retribuciones_mir_2026.xlsx) | Tabla de trabajo para análisis y visualizaciones. |
| CSV de retribuciones | [public/downloads/datos_retribuciones_mir_2026.csv](public/downloads/datos_retribuciones_mir_2026.csv) | Datos tabulares reutilizables. |
| Datos estructurados de la web | [src/data.js](src/data.js) | Fuente estructurada de cifras, filas CCAA, matriz del anteproyecto, reivindicaciones y enlaces. |
| Utilidades de cálculo | [src/utils.js](src/utils.js) | Formateo y cálculo usado por la web. |
| Checklist operativo de comparación | [docs/checklist-comparacion-estatuto-medicos.md](docs/checklist-comparacion-estatuto-medicos.md) | Documento de verificación para contrastar anteproyecto, datos pendientes y condiciones actuales. |

## Desarrollo

```bash
npm install
npm run dev
```

## Validación Y Build

```bash
npm run validate:data
npm run lint
npm run build
```

También puede ejecutarse todo junto:

```bash
npm run check
```

La publicación en GitHub Pages se realiza con GitHub Actions desde la rama `main`.
