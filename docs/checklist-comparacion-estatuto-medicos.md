# Checklist para comparar el anteproyecto de Estatuto Marco con las condiciones actuales de los medicos

Este documento esta pensado como una guia operativa para una IA que deba comparar el archivo `Propuesta-de-Anteproyecto-de-Ley-del-Estatuto-Marco-del-personal-estatutario-de-los-servicios-de-salud.pdf` con las condiciones actuales de los medicos en Espana. El objetivo es evitar una lectura superficial del texto y obligar a contrastar cada afirmacion con normativa vigente, practica real, retribuciones, jornada, guardias, descansos y diferencias autonomicas.

## Fuentes minimas

- [ ] Localizar y abrir el PDF del anteproyecto usado como referencia.
- [ ] Registrar ruta local del PDF.
- [ ] Registrar titulo exacto del PDF.
- [ ] Registrar fecha del documento si aparece.
- [ ] Registrar version del documento si aparece.
- [ ] Verificar si el PDF es propuesta, anteproyecto, proyecto de ley o ley aprobada.
- [ ] Comprobar si existe una version oficial posterior.
- [ ] Consultar la Ley 55/2003 del Estatuto Marco vigente en BOE.
- [ ] Consultar la pagina oficial del Ministerio de Sanidad sobre el nuevo Estatuto Marco.
- [ ] Consultar las FAQ oficiales del Ministerio de Sanidad.
- [ ] Consultar acuerdos sindicales publicados.
- [ ] Consultar comunicados de sindicatos medicos.
- [ ] Consultar comunicados de sindicatos firmantes generalistas o de clase.
- [ ] Consultar tablas retributivas oficiales por comunidad autonoma.
- [ ] Consultar tablas sindicales cuando no haya fuente oficial facilmente disponible.
- [ ] Registrar si cada fuente es oficial, sindical, periodistica o tecnica.
- [ ] Guardar URL, fecha de consulta y entidad emisora de cada fuente.

## Reglas de comparacion

- [ ] No afirmar que el anteproyecto mejora una condicion si solo la renombra.
- [ ] No afirmar que mejora una condicion si la remite a desarrollo posterior.
- [ ] No afirmar que mejora una condicion si depende de negociacion autonomica futura.
- [ ] No mezclar condiciones legales con condiciones reales sin marcar la diferencia.
- [ ] No mezclar salario bruto y neto en una misma conclusion sin advertirlo.
- [ ] No incluir guardias dentro de "sueldo" sin separarlas.
- [ ] No comparar sueldo mensual sin dividir por horas reales.
- [ ] No comparar medicos con otros colectivos sin ajustar por guardias, responsabilidad y nocturnidad.
- [ ] No tratar a los residentes como si fueran adjuntos.
- [ ] No tratar a los residentes como si fueran solo estudiantes.
- [ ] No usar medias estatales sin mostrar dispersion autonomica.
- [ ] No presentar un acuerdo sindical general como acuerdo medico si los sindicatos medicos lo rechazan.
- [ ] Distinguir siempre entre hecho, interpretacion y reivindicacion.
- [ ] Cada conclusion importante debe tener una referencia documental.
- [ ] Cada dato numerico debe tener fuente, ano y ambito geografico.

## Estructura de salida obligatoria

- [ ] Crear tabla "articulo del anteproyecto".
- [ ] Crear tabla "norma vigente comparable".
- [ ] Crear tabla "condicion real actual".
- [ ] Crear tabla "cambio propuesto".
- [ ] Crear columna "mejora".
- [ ] Crear columna "empeora".
- [ ] Crear columna "mantiene".
- [ ] Crear columna "ambiguo".
- [ ] Crear columna "depende de desarrollo posterior".
- [ ] Crear columna "afecta a medicos adjuntos".
- [ ] Crear columna "afecta a MIR".
- [ ] Crear columna "afecta a primaria".
- [ ] Crear columna "afecta a hospitalaria".
- [ ] Crear columna "afecta a urgencias/emergencias".
- [ ] Crear columna "afecta a jefaturas".
- [ ] Crear columna "impacto en jornada".
- [ ] Crear columna "impacto en guardias".
- [ ] Crear columna "impacto en descanso".
- [ ] Crear columna "impacto economico".
- [ ] Crear columna "impacto en formacion".
- [ ] Crear columna "impacto en conciliacion".
- [ ] Crear columna "impacto en seguridad del paciente".
- [ ] Crear columna "riesgo oculto".
- [ ] Crear columna "evidencia".

## Identificacion juridica del documento

- [ ] Identificar si el texto deroga, modifica o sustituye la Ley 55/2003.
- [ ] Identificar disposiciones derogatorias.
- [ ] Identificar disposiciones transitorias.
- [ ] Identificar disposiciones finales.
- [ ] Identificar anexos si existen.
- [ ] Identificar articulos que requieren desarrollo reglamentario.
- [ ] Identificar articulos que requieren desarrollo autonomico.
- [ ] Identificar articulos que entrarian en vigor inmediatamente.
- [ ] Identificar articulos con entrada en vigor diferida.
- [ ] Identificar conceptos juridicos indeterminados.
- [ ] Marcar expresiones como "necesidades del servicio".
- [ ] Marcar expresiones como "situaciones excepcionales".
- [ ] Marcar expresiones como "podra".
- [ ] Marcar expresiones como "preferentemente".
- [ ] Marcar expresiones como "con caracter general".
- [ ] Marcar expresiones como "cuando resulte posible".
- [ ] Marcar expresiones como "previa negociacion".
- [ ] Marcar expresiones como "desarrollo reglamentario".

## Ambito subjetivo

- [ ] Determinar a que personal se aplica.
- [ ] Determinar si se aplica a todo el personal estatutario.
- [ ] Determinar si se aplica especificamente a medicos.
- [ ] Determinar si se aplica especificamente a facultativos.
- [ ] Determinar si se aplica a residentes.
- [ ] Determinar si se aplica a personal laboral.
- [ ] Determinar si se aplica a personal funcionario.
- [ ] Determinar si se aplica a personal temporal.
- [ ] Determinar si se aplica a interinos.
- [ ] Determinar si se aplica a sustitutos.
- [ ] Determinar si se aplica a eventuales.
- [ ] Determinar si se aplica a jefaturas.
- [ ] Determinar si se aplica a cargos intermedios.
- [ ] Determinar si se aplica a tutores MIR.
- [ ] Determinar si se aplica a personal investigador.
- [ ] Determinar si se aplica a personal docente universitario con vinculacion asistencial.

## Jornada ordinaria

- [ ] Identificar jornada ordinaria vigente estatal.
- [ ] Identificar jornada ordinaria vigente por CCAA.
- [ ] Identificar jornada anual vigente por CCAA.
- [ ] Identificar jornada semanal vigente por CCAA.
- [ ] Identificar si hay 35 horas semanales en alguna CCAA.
- [ ] Identificar si hay 37,5 horas semanales en alguna CCAA.
- [ ] Identificar si hay computo anual diferente para turnos.
- [ ] Identificar si hay jornada especifica en primaria.
- [ ] Identificar si hay jornada especifica hospitalaria.
- [ ] Identificar si hay jornada especifica de urgencias.
- [ ] Identificar si hay jornada especifica de emergencias.
- [ ] Comparar jornada ordinaria actual con la propuesta.
- [ ] Verificar si el anteproyecto fija jornada ordinaria o solo jornada maxima.
- [ ] Verificar si la jornada maxima se mide por semana.
- [ ] Verificar si la jornada maxima se mide por promedio.
- [ ] Verificar periodo de referencia del promedio.
- [ ] Analizar si el promedio permite semanas de sobrecarga.
- [ ] Verificar si se computan sesiones clinicas.
- [ ] Verificar si se computan comites.
- [ ] Verificar si se computa docencia.
- [ ] Verificar si se computa investigacion.
- [ ] Verificar si se computa pase de planta.
- [ ] Verificar si se computa cambio de turno.
- [ ] Verificar si se computan prolongaciones.
- [ ] Verificar si se computa trabajo administrativo fuera de agenda.
- [ ] Verificar si se computa revision de resultados fuera de jornada.
- [ ] Verificar si se computan llamadas fuera de jornada.
- [ ] Verificar si se computa correo corporativo fuera de jornada.
- [ ] Calcular horas ordinarias mensuales reales.
- [ ] Calcular horas ordinarias anuales reales.

## Guardias

- [ ] Identificar termino usado en el anteproyecto para guardias.
- [ ] Comparar con el termino vigente en la Ley 55/2003.
- [ ] Verificar si se llaman jornada complementaria.
- [ ] Verificar si se llaman jornada de guardia.
- [ ] Verificar si el cambio terminologico tiene efectos reales.
- [ ] Identificar duracion maxima ordinaria de guardia.
- [ ] Identificar duracion maxima excepcional.
- [ ] Identificar si se permiten guardias de 17 horas.
- [ ] Identificar si se permiten guardias de 24 horas.
- [ ] Identificar condiciones para guardias de 24 horas.
- [ ] Verificar si exige consentimiento.
- [ ] Verificar si el consentimiento puede ser revocado.
- [ ] Verificar si el consentimiento es individual.
- [ ] Verificar si el consentimiento puede ser presionado por necesidades del servicio.
- [ ] Verificar si la guardia sigue siendo obligatoria.
- [ ] Verificar hasta que edad es obligatoria.
- [ ] Verificar exenciones por edad.
- [ ] Verificar exenciones por embarazo.
- [ ] Verificar exenciones por lactancia.
- [ ] Verificar exenciones por salud.
- [ ] Verificar exenciones por discapacidad.
- [ ] Verificar exenciones por conciliacion.
- [ ] Verificar si las guardias computan como jornada efectiva.
- [ ] Verificar si computan para jubilacion.
- [ ] Verificar si computan para carrera profesional.
- [ ] Verificar si computan para trienios.
- [ ] Verificar si computan para cotizacion.
- [ ] Verificar si computan para permisos.
- [ ] Verificar si computan para descansos.
- [ ] Verificar si computan para limites de jornada.
- [ ] Verificar si computan para prevencion de riesgos laborales.
- [ ] Verificar si se regula la guardia localizada.
- [ ] Verificar si se regula la presencia fisica.
- [ ] Verificar si se regula la guardia mixta.
- [ ] Verificar si se regula la actividad efectiva durante localizada.
- [ ] Verificar si se regula el descanso durante guardia.
- [ ] Verificar si se regula la carga asistencial durante guardia.
- [ ] Comparar precio hora de guardia laborable por CCAA.
- [ ] Comparar precio hora de guardia festiva por CCAA.
- [ ] Comparar precio hora de guardia especial por CCAA.
- [ ] Comparar precio hora de guardia nocturna si existe.
- [ ] Comparar precio hora de guardia localizada si existe.
- [ ] Calcular porcentaje del salario dependiente de guardias.
- [ ] Calcular salario sin guardias.
- [ ] Calcular salario con 3 guardias mensuales.
- [ ] Calcular salario con 4 guardias mensuales.
- [ ] Calcular salario con 5 guardias mensuales.
- [ ] Calcular salario con 6 guardias mensuales.

## Descanso tras guardia

- [ ] Identificar descanso vigente tras guardia.
- [ ] Identificar descanso propuesto tras guardia.
- [ ] Verificar si el descanso es obligatorio.
- [ ] Verificar si el descanso es renunciable.
- [ ] Verificar si el descanso computa como jornada.
- [ ] Verificar si el descanso reduce salario.
- [ ] Verificar si el descanso reduce complementos.
- [ ] Verificar si el descanso reduce productividad.
- [ ] Verificar si el descanso obliga a recuperar agenda.
- [ ] Verificar si el descanso se cumple realmente en hospitales.
- [ ] Verificar si el descanso se cumple realmente en primaria.
- [ ] Verificar si el descanso se cumple realmente en urgencias.
- [ ] Verificar si el descanso se cumple realmente en MIR.
- [ ] Verificar si hay excepciones por necesidades asistenciales.
- [ ] Verificar si hay presion informal para no librar.
- [ ] Verificar si se programan sesiones obligatorias en dia de libranza.
- [ ] Verificar si se programan cursos obligatorios en dia de libranza.
- [ ] Verificar si se programan salientes con actividad academica.
- [ ] Comparar con normativa europea de tiempo de trabajo.
- [ ] Relacionar fatiga con seguridad clinica.

## Retribuciones

- [ ] Separar sueldo base.
- [ ] Separar complemento de destino.
- [ ] Separar complemento especifico.
- [ ] Separar productividad fija.
- [ ] Separar productividad variable.
- [ ] Separar carrera profesional.
- [ ] Separar trienios.
- [ ] Separar pagas extraordinarias.
- [ ] Separar guardias.
- [ ] Separar atencion continuada.
- [ ] Separar complemento de formacion MIR.
- [ ] Separar exclusividad.
- [ ] Separar dispersion geografica.
- [ ] Separar penosidad.
- [ ] Separar nocturnidad.
- [ ] Separar festividad.
- [ ] Separar complemento de dificil cobertura.
- [ ] Calcular bruto mensual sin guardias.
- [ ] Calcular neto mensual sin guardias.
- [ ] Calcular bruto mensual con guardias.
- [ ] Calcular neto mensual con guardias.
- [ ] Calcular bruto anual sin guardias.
- [ ] Calcular bruto anual con guardias.
- [ ] Calcular neto anual estimado sin guardias.
- [ ] Calcular neto anual estimado con guardias.
- [ ] Indicar supuestos fiscales si se calcula neto.
- [ ] Calcular euro/hora ordinaria bruta.
- [ ] Calcular euro/hora ordinaria neta.
- [ ] Calcular euro/hora real con guardias.
- [ ] Calcular euro/hora real con guardias y formacion.
- [ ] Identificar si el anteproyecto fija cuantias.
- [ ] Identificar si el anteproyecto remite cuantias a CCAA.
- [ ] Identificar si el anteproyecto garantiza subida salarial.
- [ ] Identificar si el anteproyecto solo permite negociar.
- [ ] Identificar si hay mejoras automaticas.
- [ ] Identificar si hay mejoras condicionadas.
- [ ] Identificar si hay riesgo de discrecionalidad.

## MIR y formacion sanitaria especializada

- [ ] Identificar disposiciones especificas de residentes.
- [ ] Identificar si los MIR son tratados como personal en formacion.
- [ ] Identificar si los MIR son tratados como trabajadores.
- [ ] Verificar limite mensual de guardias MIR.
- [ ] Verificar numero maximo de modulos de guardia MIR.
- [ ] Verificar excepciones a limites MIR.
- [ ] Verificar si hay consentimiento MIR para superar limites.
- [ ] Verificar si hay supervision obligatoria.
- [ ] Verificar si se regula primera llamada.
- [ ] Verificar si se regula autonomia progresiva.
- [ ] Verificar si se protege formacion frente a carga asistencial.
- [ ] Verificar si se computa tiempo de estudio.
- [ ] Verificar si se computan sesiones clinicas.
- [ ] Verificar si se computan cursos obligatorios.
- [ ] Verificar si se computa investigacion.
- [ ] Verificar si se computan comunicaciones a congresos.
- [ ] Verificar si se computan publicaciones exigidas informalmente.
- [ ] Verificar si se computan rotaciones externas.
- [ ] Verificar si se computan guardias como formacion.
- [ ] Verificar si se usan residentes para cubrir deficit estructural.
- [ ] Comparar salario R1 sin guardias por CCAA.
- [ ] Comparar salario R2 sin guardias por CCAA.
- [ ] Comparar salario R3 sin guardias por CCAA.
- [ ] Comparar salario R4 sin guardias por CCAA.
- [ ] Comparar salario R5 sin guardias por CCAA.
- [ ] Comparar guardia R1 por CCAA.
- [ ] Comparar guardia R2 por CCAA.
- [ ] Comparar guardia R3 por CCAA.
- [ ] Comparar guardia R4/R5 por CCAA.
- [ ] Calcular hora real MIR sin formacion extra.
- [ ] Calcular hora real MIR con formacion extra.
- [ ] Calcular cuanto del ingreso MIR depende de guardias.
- [ ] Mostrar que salario mensual alto puede ocultar muchas horas.

## Clasificacion profesional

- [ ] Identificar clasificacion vigente de medicos.
- [ ] Identificar clasificacion propuesta.
- [ ] Verificar si se crea grupo propio medico.
- [ ] Verificar si se crea grupo propio facultativo.
- [ ] Verificar si se reconoce especialidad medica.
- [ ] Verificar si se reconoce responsabilidad clinica.
- [ ] Verificar si se reconoce capacidad diagnostica y terapeutica.
- [ ] Verificar si se reconoce prescripcion.
- [ ] Verificar si se reconoce formacion especializada obligatoria.
- [ ] Verificar si la nueva clasificacion tiene efectos retributivos.
- [ ] Verificar si afecta a sueldo base.
- [ ] Verificar si afecta a trienios.
- [ ] Verificar si afecta a complemento de destino.
- [ ] Verificar si afecta a carrera profesional.
- [ ] Verificar si el cambio es inmediato.
- [ ] Verificar si el cambio depende de desarrollo posterior.
- [ ] Comparar con reivindicacion de A1+ o grupo equivalente.

## Negociacion colectiva y representacion medica

- [ ] Identificar sindicatos firmantes del acuerdo.
- [ ] Identificar sindicatos medicos no firmantes.
- [ ] Identificar posicion de CESM.
- [ ] Identificar posicion de SMA.
- [ ] Identificar posicion de AMYTS.
- [ ] Identificar posicion de Metges de Catalunya.
- [ ] Identificar posicion de O'MEGA.
- [ ] Identificar posicion del Sindicato Medico de Euskadi.
- [ ] Identificar posicion de sindicatos medicos autonomicos relevantes.
- [ ] Identificar posicion de CSIF.
- [ ] Identificar posicion de CCOO.
- [ ] Identificar posicion de UGT.
- [ ] Identificar posicion de SATSE.
- [ ] Verificar si existe mesa medica propia.
- [ ] Verificar si el anteproyecto crea mesa medica propia.
- [ ] Verificar si medicos tienen voto propio.
- [ ] Verificar si quedan dentro de negociacion general.
- [ ] Verificar si la representacion medica queda diluida.
- [ ] Diferenciar mayoria sindical general de representacion medica.
- [ ] No afirmar consenso sanitario si hay oposicion medica documentada.

## Exclusividad e incompatibilidades

- [ ] Identificar regimen vigente de incompatibilidades.
- [ ] Identificar cambios propuestos.
- [ ] Verificar si se crea complemento de dedicacion exclusiva.
- [ ] Verificar si la dedicacion exclusiva es voluntaria.
- [ ] Verificar si la dedicacion exclusiva es obligatoria para algun puesto.
- [ ] Verificar si afecta a jefaturas.
- [ ] Verificar si afecta a cargos intermedios.
- [ ] Verificar si afecta a actividad privada.
- [ ] Verificar si afecta a docencia universitaria.
- [ ] Verificar si afecta a investigacion.
- [ ] Verificar si afecta a peritajes.
- [ ] Verificar si la compensacion economica es suficiente.
- [ ] Verificar si el regimen es igual al de otros empleados publicos.
- [ ] Verificar si puede desincentivar asumir jefaturas.
- [ ] Verificar impacto en especialidades deficitarias.

## Carrera profesional

- [ ] Identificar carrera profesional vigente por CCAA.
- [ ] Verificar si el anteproyecto homogeneiza carrera profesional.
- [ ] Verificar si reconoce guardias.
- [ ] Verificar si reconoce docencia.
- [ ] Verificar si reconoce tutorizacion MIR.
- [ ] Verificar si reconoce investigacion.
- [ ] Verificar si reconoce actividad clinica compleja.
- [ ] Verificar si reconoce zonas de dificil cobertura.
- [ ] Verificar si reconoce penosidad.
- [ ] Verificar si reconoce nocturnidad.
- [ ] Verificar si carrera profesional es automatica.
- [ ] Verificar si carrera profesional es evaluable.
- [ ] Verificar si depende de presupuesto autonomico.
- [ ] Verificar si es consolidable.
- [ ] Verificar si es reversible.
- [ ] Comparar impacto en fijos.
- [ ] Comparar impacto en interinos.
- [ ] Comparar impacto en temporales.

## Temporalidad y precariedad

- [ ] Identificar nombramientos vigentes.
- [ ] Identificar cambios en interinidad.
- [ ] Identificar cambios en sustituciones.
- [ ] Identificar cambios en eventualidad.
- [ ] Identificar cambios en contratos de corta duracion.
- [ ] Verificar si reduce temporalidad real.
- [ ] Verificar si consolida plantillas.
- [ ] Verificar si permite encadenar nombramientos.
- [ ] Verificar si mejora estabilidad en primaria.
- [ ] Verificar si mejora estabilidad en urgencias.
- [ ] Verificar si mejora estabilidad en hospitales comarcales.
- [ ] Verificar impacto en medicos que terminan residencia.
- [ ] Verificar impacto en medicos extracomunitarios.
- [ ] Verificar impacto en plazas de dificil cobertura.

## Movilidad

- [ ] Identificar movilidad voluntaria vigente.
- [ ] Identificar movilidad forzosa vigente.
- [ ] Identificar cambios propuestos.
- [ ] Verificar concursos de traslados.
- [ ] Verificar concurso abierto y permanente.
- [ ] Verificar movilidad entre centros.
- [ ] Verificar movilidad entre areas sanitarias.
- [ ] Verificar movilidad entre comunidades autonomas.
- [ ] Verificar movilidad por necesidades asistenciales.
- [ ] Verificar garantias por conciliacion.
- [ ] Verificar garantias por salud.
- [ ] Verificar garantias por discapacidad.
- [ ] Verificar garantias familiares.
- [ ] Verificar si la movilidad puede cubrir deficit estructural.
- [ ] Verificar impacto en medicos rurales.
- [ ] Verificar impacto en primaria.
- [ ] Verificar impacto en hospitales comarcales.

## Conciliacion

- [ ] Identificar permisos vigentes.
- [ ] Identificar permisos propuestos.
- [ ] Verificar reduccion de jornada.
- [ ] Verificar adaptacion de jornada.
- [ ] Verificar exencion de guardias por embarazo.
- [ ] Verificar exencion de guardias por lactancia.
- [ ] Verificar exencion de guardias por cuidado de menores.
- [ ] Verificar exencion de guardias por cuidado de familiares.
- [ ] Verificar impacto de conciliar en salario.
- [ ] Verificar impacto de conciliar en carrera profesional.
- [ ] Verificar impacto de conciliar en guardias.
- [ ] Verificar impacto de conciliar en productividad.
- [ ] Verificar posible discriminacion indirecta de genero.
- [ ] Verificar proteccion especifica de residentes.

## Salud laboral y seguridad del paciente

- [ ] Identificar medidas de prevencion de riesgos.
- [ ] Verificar riesgos psicosociales.
- [ ] Verificar burnout.
- [ ] Verificar agresiones.
- [ ] Verificar fatiga por guardias.
- [ ] Verificar nocturnidad.
- [ ] Verificar turnicidad.
- [ ] Verificar carga mental.
- [ ] Verificar presion asistencial.
- [ ] Verificar responsabilidad medico-legal.
- [ ] Verificar exposicion biologica.
- [ ] Verificar embarazo y lactancia.
- [ ] Verificar si hay ratios.
- [ ] Verificar si hay limites reales de actividad.
- [ ] Verificar si hay descansos efectivos.
- [ ] Verificar si el anteproyecto contiene medidas concretas.
- [ ] Verificar si solo contiene declaraciones generales.
- [ ] Relacionar fatiga medica con seguridad del paciente.
- [ ] Relacionar sobrecarga con errores.
- [ ] Relacionar descanso con calidad asistencial.

## Atencion primaria

- [ ] Identificar agenda real media.
- [ ] Identificar cupo medio.
- [ ] Identificar tiempo por paciente.
- [ ] Identificar burocracia no asistencial.
- [ ] Identificar domicilios.
- [ ] Identificar continuidad asistencial.
- [ ] Identificar guardias en PAC o SUAP.
- [ ] Identificar dispersion geografica.
- [ ] Identificar plazas de dificil cobertura.
- [ ] Verificar si el anteproyecto aborda deficit de medicos de familia.
- [ ] Verificar si aborda pediatria de primaria.
- [ ] Verificar si aborda ausencia de sustitutos.
- [ ] Verificar si aborda carga administrativa.
- [ ] Verificar si aborda agendas desbordadas.

## Hospitalaria

- [ ] Identificar jornada ordinaria hospitalaria.
- [ ] Identificar actividad quirurgica de tarde.
- [ ] Identificar consultas extraordinarias.
- [ ] Identificar autoconcertacion.
- [ ] Identificar modulos adicionales.
- [ ] Identificar guardias de presencia.
- [ ] Identificar guardias localizadas.
- [ ] Identificar prolongaciones por quirofano.
- [ ] Identificar pase de planta fuera de horario.
- [ ] Identificar interconsultas fuera de agenda.
- [ ] Identificar presion por listas de espera.
- [ ] Verificar si el anteproyecto regula actividad extraordinaria.
- [ ] Verificar si la actividad extraordinaria es voluntaria.
- [ ] Verificar si la actividad extraordinaria se paga adecuadamente.
- [ ] Verificar si la actividad extraordinaria computa como jornada.

## Urgencias y emergencias

- [ ] Distinguir urgencias hospitalarias.
- [ ] Distinguir urgencias extrahospitalarias.
- [ ] Distinguir emergencias.
- [ ] Identificar turnos actuales.
- [ ] Identificar guardias actuales.
- [ ] Identificar nocturnidad.
- [ ] Identificar festivos.
- [ ] Identificar descansos.
- [ ] Identificar presion asistencial.
- [ ] Verificar si el anteproyecto reconoce penosidad especifica.
- [ ] Verificar si reconoce especial riesgo.
- [ ] Verificar si regula ratios.
- [ ] Verificar si regula descanso tras noches.
- [ ] Verificar si mantiene modulos de 24 horas.
- [ ] Verificar impacto en medicos de emergencias.

## Jubilacion

- [ ] Identificar edad ordinaria vigente.
- [ ] Identificar jubilacion activa.
- [ ] Identificar prolongacion de servicio activo.
- [ ] Identificar jubilacion parcial si existe.
- [ ] Verificar si guardias computan para jubilacion.
- [ ] Verificar si se reconocen anos trabajados de mas por guardias.
- [ ] Verificar si se contempla jubilacion anticipada por penosidad.
- [ ] Verificar si se reconoce nocturnidad acumulada.
- [ ] Verificar si se reconoce turnicidad acumulada.
- [ ] Verificar si el anteproyecto cambia algo real.
- [ ] Verificar si lo remite a otra norma.

## Metodo de calculo de horas

- [ ] Definir jornada ordinaria mensual.
- [ ] Definir jornada ordinaria anual.
- [ ] Definir numero de guardias mensuales.
- [ ] Definir duracion media de guardia laborable.
- [ ] Definir duracion media de guardia festiva.
- [ ] Definir duracion media de guardia especial.
- [ ] Definir horas de prolongacion de jornada.
- [ ] Definir horas de formacion no registrada.
- [ ] Definir horas de investigacion o docencia fuera de jornada.
- [ ] Calcular escenario minimo.
- [ ] Calcular escenario medio.
- [ ] Calcular escenario intensivo.
- [ ] Calcular escenario MIR.
- [ ] Calcular escenario adjunto hospitalario.
- [ ] Calcular escenario primaria.
- [ ] Calcular escenario urgencias.
- [ ] Expresar resultados en horas por semana.
- [ ] Expresar resultados en horas por mes.
- [ ] Expresar resultados en horas por ano.
- [ ] Comparar con jornada ordinaria de otros empleados publicos.

## Metodo de calculo economico

- [ ] Definir si el calculo es bruto o neto.
- [ ] Definir supuestos fiscales.
- [ ] Definir si incluye pagas extra prorrateadas.
- [ ] Definir si incluye guardias.
- [ ] Definir si incluye carrera profesional.
- [ ] Definir si incluye antiguedad.
- [ ] Definir si incluye productividad.
- [ ] Definir si incluye exclusividad.
- [ ] Calcular salario mensual sin guardias.
- [ ] Calcular salario mensual con guardias.
- [ ] Calcular salario anual sin guardias.
- [ ] Calcular salario anual con guardias.
- [ ] Calcular euro/hora ordinaria.
- [ ] Calcular euro/hora total real.
- [ ] Calcular euro/hora con formacion no registrada.
- [ ] Mostrar sensibilidad con 3, 4, 5 y 6 guardias mensuales.
- [ ] Mostrar que sueldo mensual alto puede depender de noches, festivos y fines de semana.

## Falacias a detectar

- [ ] "Cobran mucho" sin dividir por horas reales.
- [ ] "Las guardias son voluntarias" sin analizar necesidades del servicio.
- [ ] "Se limitan las guardias" sin analizar excepciones.
- [ ] "Se mejora el descanso" sin comprobar computo y cumplimiento.
- [ ] "Se mejora el salario" si depende de guardias.
- [ ] "Se reconoce la formacion" sin proteger tiempo formativo.
- [ ] "Hay acuerdo sindical" si los sindicatos medicos lo rechazan.
- [ ] "Es para todos los sanitarios" si invisibiliza especificidades medicas.
- [ ] "La jornada maxima baja" si el promedio permite semanas excesivas.
- [ ] "Las CCAA lo desarrollaran" como sustituto de derecho garantizado.
- [ ] "Ordenar" presentado como "mejorar".
- [ ] "Vocacion" usado como argumento laboral.
- [ ] "El residente aprende" usado para justificar carga asistencial estructural.

## Productos finales exigibles

- [ ] Resumen ejecutivo.
- [ ] Tabla articulo por articulo.
- [ ] Tabla de impacto por colectivo.
- [ ] Tabla de jornada actual frente a propuesta.
- [ ] Tabla de guardias actual frente a propuesta.
- [ ] Tabla retributiva sin guardias.
- [ ] Tabla retributiva con guardias.
- [ ] Tabla euro/hora real.
- [ ] Tabla especifica MIR R1-R5 por CCAA.
- [ ] Tabla de riesgos juridicos.
- [ ] Tabla de ambiguedades.
- [ ] Tabla de promesas condicionadas a desarrollo posterior.
- [ ] Infografia "No es sueldo: son guardias".
- [ ] Infografia "Lo que cambia y lo que no cambia".
- [ ] Infografia "Horas reales de un MIR".
- [ ] Infografia "Guardia no es privilegio: es trabajo nocturno y festivo".
- [ ] Seccion de fuentes.
- [ ] Nota metodologica.
- [ ] Limitaciones del analisis.
- [ ] Lista de datos pendientes por CCAA.
- [ ] Conclusiones separadas en hechos, interpretacion y reivindicacion.

## Control final de calidad

- [ ] Cada afirmacion importante indica articulo o pagina del anteproyecto.
- [ ] Cada comparacion indica norma o condicion actual equivalente.
- [ ] Cada dato economico indica fuente.
- [ ] Cada dato de jornada indica CCAA y ano.
- [ ] Cada conclusion indica colectivo afectado.
- [ ] Cada mejora aparente se contrasta con aplicacion real.
- [ ] Cada excepcion se explica.
- [ ] Cada ambiguedad se marca como riesgo.
- [ ] Cada dato MIR separa sueldo base y guardias.
- [ ] Cada grafico separa salario ordinario y guardias.
- [ ] Cada tabla evita mezclar bruto y neto.
- [ ] Cada fuente externa tiene enlace.
- [ ] Cada fuente local tiene ruta.
- [ ] El informe final responde: donde lo dice, que cambia, a quien afecta y si mejora realmente la vida laboral.
