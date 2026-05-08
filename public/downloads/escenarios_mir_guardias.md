# Escenarios MIR por número de guardias

Estimación lineal bruta a partir del escenario publicado con 80 h/mes de guardia. No sustituye una nómina real, no incorpora fiscalidad individual y no cuantifica formación no registrada.

## Método

- Jornada ordinaria usada: 35 h/semana anualizadas.
- Horas ordinarias mensuales: 151,7 h/mes.
- Se asume una equivalencia comunicativa de 20 h por guardia para comparar 3, 4, 5 y 6 guardias.
- El bruto con guardias se estima linealmente desde la diferencia entre bruto sin guardias y bruto con 80 h.
- El salario por hora se calcula dividiendo el bruto estimado mensual entre horas ordinarias + horas de guardia.

## R1

| Guardias | Horas guardia | Horas totales mes | Bruto estimado | Lectura |
|---|---:|---:|---:|---|
| 3 | 60 h | 211,7 h | 2.466 € | La cifra mensual ya depende de jornada adicional. |
| 4 | 80 h | 231,7 h | 2.806 € | Escenario publicado de referencia. |
| 5 | 100 h | 251,7 h | 3.146 € | Más ingreso, pero con más horas, noches y fatiga. |
| 6 | 120 h | 271,7 h | 3.485 € | Escenario intensivo: no puede compararse con sueldo ordinario. |

## R5

| Guardias | Horas guardia | Horas totales mes | Bruto estimado | Lectura |
|---|---:|---:|---:|---|
| 3 | 60 h | 211,7 h | 3.440 € | El bruto sube porque suben las horas extraordinarias. |
| 4 | 80 h | 231,7 h | 3.929 € | Escenario publicado de referencia. |
| 5 | 100 h | 251,7 h | 4.418 € | La cifra mensual sin horas induce a error. |
| 6 | 120 h | 271,7 h | 4.907 € | Mayor nómina no significa mejor salario ordinario. |

## Mensaje clave

Una nómina con guardias, noches, festivos y jornadas extendidas no es sueldo ordinario. Toda comparación honesta debe mostrar sueldo base, guardias, horas reales y salario por hora.
