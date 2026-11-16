# TODO — Fundación de desarrollo seguro y arquitectura

> **Estado:** backlog inicial · 16 de noviembre de 2026. Las casillas reflejan trabajo verificado, no aprobación institucional. Revisar este listado en cada reunión de seguimiento.
>
> **Uso:** marcar `[x]` solo cuando exista evidencia enlazada en el repositorio o en un sistema institucional apropiado. No publicar aquí inventarios, hallazgos ni detalles sensibles: este repositorio es público.

## Ya realizado

- [x] Crear el [README](README.md) y establecer que los documentos son borradores.
- [x] Documentar [contexto y principios](docs/01-contexto-y-principios.md).
- [x] Registrar [NIST SSDF y las referencias OWASP](docs/02-marcos-de-referencia.md).
- [x] Proponer un [plan de trabajo de 12 semanas](docs/03-plan-de-trabajo.md).
- [x] Crear una [ficha de proyecto](templates/ficha-proyecto.md) para iniciar el inventario.

## P0 — Definir el alcance y reducir exposición inmediata (semanas 1–2)

- [ ] Identificar patrocinador institucional y autoridad para definir reglas de desarrollo.
- [ ] Nombrar responsables de arquitectura/desarrollo, seguridad, infraestructura y aprobación de riesgos; registrar cómo se coordinan.
- [ ] Confirmar si este repositorio público seguirá en la cuenta `PointerLex` o pasará a la organización institucional. Definir qué documentación debe ser privada.
- [ ] Identificar la organización de GitHub, plan contratado, propietarios y equipos existentes.
- [ ] Levantar todos los proyectos conocidos, incluidos los desarrollados por otras áreas y fuera de GitHub. Guardar el inventario detallado en un lugar con acceso adecuado.
- [ ] Priorizar aplicaciones ya desplegadas, expuestas a Internet, integradas con sistemas institucionales o que tratan datos reales.
- [ ] Detectar y contener riesgos urgentes encontrados durante el inventario: secretos expuestos, permisos excesivos y aplicaciones sin responsable. Registrar hallazgos sensibles fuera de este repositorio.
- [ ] Confirmar clasificación de información, políticas de privacidad y proceso institucional de aceptación de riesgos existentes.

**Salida esperada:** responsables definidos, inventario inicial y lista privada de riesgos priorizados.

## P1 — Establecer reglas y un camino de desarrollo (semanas 3–6)

### Gobierno y arquitectura

- [ ] Validar niveles de riesgo y criterios para pasar de prototipo a piloto y producción.
- [ ] Definir cuándo una iniciativa requiere revisión de arquitectura, seguridad, privacidad o infraestructura.
- [ ] Redactar política mínima de desarrollo seguro con alcance, responsables, excepciones y fecha de revisión.
- [ ] Definir proceso de ingreso de nuevas iniciativas de otras áreas y canal para solicitar apoyo temprano.
- [ ] Crear plantilla breve de decisión de arquitectura (ADR) y criterios para integraciones institucionales.
- [ ] Elegir uno o dos proyectos piloto de riesgos distintos para probar el proceso.

### GitHub y cadena de cambios

- [ ] Definir convención de repositorios, visibilidad, propiedad y archivado.
- [ ] Revisar permisos base, equipos, propietarios y accesos de colaboradores externos; aplicar el principio de mínimo privilegio.
- [ ] Definir vigencia y proceso de retiro de accesos para externos y capstones.
- [ ] Crear plantilla de repositorio con README, responsables, instrucciones de ejecución y mantenimiento.
- [ ] Crear plantillas de issue y pull request con impacto, pruebas, datos e implicancias de seguridad.
- [ ] Definir `CODEOWNERS`, revisión humana y reglas de protección de la rama principal para los pilotos.
- [ ] Incorporar CI mínimo: compilación o validación, pruebas y análisis de dependencias.
- [ ] Evaluar análisis de código, escaneo de secretos y protección al subir cambios según el plan de GitHub y otras herramientas disponibles.
- [ ] Definir quién puede modificar workflows de CI/CD, configuración de despliegue y archivos de seguridad.

### Uso de IA

- [ ] Identificar herramientas de IA usadas y confirmar cuáles están autorizadas para información institucional.
- [ ] Redactar guía práctica de datos permitidos/prohibidos, permisos de agentes y revisión del código generado.
- [ ] Establecer responsable humano y revisión del diff completo para cada cambio asistido por IA.
- [ ] Verificar en los pilotos dependencias sugeridas por IA y pruebas generadas por la misma herramienta.

**Salida esperada:** normas propuestas, plantillas y controles probados en pilotos. Publicar como obligatorios solo tras la aprobación institucional correspondiente.

## P2 — Preparar operación y despliegues (semanas 7–12)

- [ ] Definir entornos aprobados para prototipos, pruebas y producción, con límites de acceso y datos.
- [ ] Establecer gestión de secretos y credenciales sin almacenarlos en código ni documentación.
- [ ] Diseñar un flujo de despliegue con aprobaciones proporcionales al riesgo y posibilidad de reversión.
- [ ] Definir autenticación, autorización y registro de accesos para productos institucionales.
- [ ] Acordar monitoreo, alertas, respaldo y recuperación según criticidad.
- [ ] Definir responsable de soporte y mantenimiento antes de pasar a producción.
- [ ] Establecer canal de reporte de vulnerabilidades, criterios de prioridad y seguimiento de correcciones.
- [ ] Revisar entregables, accesos y transferencia de conocimiento al cerrar contratos o capstones.
- [ ] Migrar proyectos existentes al camino estándar por prioridad de riesgo; registrar excepciones temporales.
- [ ] Medir adopción: proyectos inventariados, productos con dueño, repositorios con revisión, accesos externos vigentes y hallazgos pendientes.
- [ ] Hacer retrospectiva de los pilotos y ajustar reglas, plantillas y automatizaciones.

**Salida esperada:** proceso de producción y operación documentado, aplicado en pilotos, con backlog de mejoras.

## Decisiones que necesitamos del equipo

- [ ] Tipo de institución y restricciones normativas aplicables.
- [ ] Nombre y plan de la organización de GitHub; alcance de sus repositorios.
- [ ] Lista de aplicaciones actualmente en producción y tipos de datos que manejan.
- [ ] Herramientas de IA aprobadas y condiciones de uso.
- [ ] Plataformas de alojamiento, identidad y gestión de secretos disponibles.
- [ ] Responsables que pueden aprobar normas y aceptar excepciones de riesgo.

## Criterio de cierre de una tarea

Una tarea se considera terminada cuando tiene un responsable, un resultado verificable, una ubicación para la evidencia y, si cambia una regla o acceso, una fecha de revisión. Los detalles sensibles deben quedar en un sistema privado aprobado.
