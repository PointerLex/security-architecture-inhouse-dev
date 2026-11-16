# Contexto, objetivos y principios

> **Estado:** propuesta para discusión. Las afirmaciones sobre la institución provienen de la conversación inicial y deben validarse mediante el inventario.

## Situación que queremos ordenar

Existe una unidad de desarrollo de software, una organización de GitHub que reúne proyectos de la unidad, trabajo con externos y capstones. Otras áreas han comenzado a construir aplicaciones con asistencia intensiva de IA. Esto amplía la capacidad de crear soluciones, pero también puede producir software sin dueño técnico, revisión de arquitectura, evaluación de datos o mantenimiento definido.

## Resultado buscado

Que cualquier área pueda proponer y experimentar, y que toda solución que vaya a integrarse con sistemas institucionales, tratar datos reales o llegar a producción siga un proceso explícito y proporcional a su riesgo.

## Principios propuestos

1. **Un responsable humano por producto y por cambio.** Debe existir un dueño funcional y un responsable técnico identificables. La IA no reemplaza la revisión ni la responsabilidad humana.
2. **Inventariar antes de imponer controles.** Registrar qué existe, dónde corre, qué datos usa y quién puede modificarlo.
3. **Clasificar por exposición y consecuencias.** El riesgo depende de los datos, la conectividad, los usuarios y el impacto de una falla; el origen del código no determina por sí solo su nivel.
4. **Entregar un camino fácil de seguir.** Plantillas, repositorios, ejemplos, CI y entornos aprobados deben reducir el trabajo repetitivo de cada equipo.
5. **Permisos mínimos y trazabilidad.** Accesos a repositorios, infraestructura y secretos se conceden según necesidad, con revisión y retiro al terminar una colaboración.
6. **Separar experimentación y producción.** Un prototipo puede avanzar rápido en un entorno aislado. El acceso a datos reales, integraciones o usuarios institucionales requiere una revisión adicional.
7. **Definir operación antes del despliegue.** Deben existir responsables de soporte, monitoreo, actualizaciones, respaldo cuando corresponda y respuesta a incidentes.
8. **Excepciones visibles y temporales.** Si un control no aplica o no puede cumplirse, registrar motivo, riesgo aceptado, responsable y fecha de revisión.

## Clasificación inicial para validar

| Nivel propuesto | Ejemplos orientativos | Tratamiento inicial |
| --- | --- | --- |
| Exploración aislada | Demostración sin datos reales ni conexión institucional | Repositorio identificado, dueño y prohibición de secretos/datos sensibles |
| Herramienta interna | Aplicación para un área, con datos o acceso limitados | Revisión de código, inventario, pruebas, dependencias y responsable de operación |
| Servicio institucional | Usuarios amplios, datos personales, integraciones o exposición pública | Revisión de arquitectura y seguridad, controles de despliegue, monitoreo y respuesta |
| Crítico | Consecuencias altas para continuidad, privacidad o funciones esenciales | Evaluación específica y aprobación formal de riesgos antes de producción |

Estos niveles son un punto de partida. Deben ajustarse a la clasificación de información y gestión de riesgos que ya tenga la institución.

## Responsabilidades por acordar

- **Área solicitante:** necesidad, prioridad, dueño funcional y aceptación del producto.
- **Responsable técnico:** diseño, calidad, mantenimiento y explicación de cambios, incluidos los asistidos por IA.
- **Unidad de desarrollo / arquitectura:** estándares, plantillas, revisión de integraciones y apoyo a otros equipos.
- **Seguridad de la información:** criterios de riesgo, controles y tratamiento de hallazgos.
- **Infraestructura / operaciones:** entornos, identidad, secretos, despliegue, observabilidad y respaldo.
- **Externos y estudiantes:** alcance y accesos definidos, acompañamiento interno y entrega verificable.

La asignación real de estas funciones queda pendiente; no se presupone que exista un área separada para cada una.
