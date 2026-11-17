# Seguridad y arquitectura del desarrollo interno

> **Estado:** borrador de trabajo · 16 de noviembre de 2026. Este repositorio reúne propuestas para discusión; no constituye todavía una política institucional aprobada.

## Propósito

Construir una base común para el software desarrollado por la unidad de desarrollo, otras áreas, colaboradores externos y proyectos académicos o capstone. El objetivo es que cada iniciativa tenga responsables claros, una evaluación proporcional a su riesgo y un camino conocido desde la idea hasta la operación.

El uso de asistentes de IA para programar forma parte de este alcance. El código generado o modificado con IA requiere las mismas verificaciones que cualquier otro código, además de atención a la exposición de datos, las dependencias sugeridas y las acciones que puede ejecutar el agente.

## Punto de partida

La institución cuenta con una unidad de desarrollo de software y una organización de GitHub donde trabajan proyectos internos, externos y capstone. Otras áreas también están comenzando a crear software con herramientas de IA. Aún hay que levantar el inventario real, los entornos, los responsables y las reglas vigentes antes de fijar controles institucionales.

## Documentos

- [Prototipo Astro de ficha por selección](app/README.md)
- [TODO y seguimiento](TODO.md)
- [Contexto, objetivos y principios](docs/01-contexto-y-principios.md)
- [Marcos de referencia y controles iniciales](docs/02-marcos-de-referencia.md)
- [Plan de trabajo inicial](docs/03-plan-de-trabajo.md)
- [Ficha para inventariar proyectos](templates/ficha-proyecto.md)

## Cómo usar este repositorio

1. Registrar hechos verificados y decisiones propuestas por separado.
2. Abrir una discusión o pull request para cambiar criterios y explicar el motivo.
3. Convertir las propuestas en normas obligatorias solo después de acordar responsables, alcance, excepciones y fecha de entrada en vigor.
4. Mantener ejemplos, plantillas y controles automatizados junto a la documentación cuando se definan.

**Este repositorio es público.** No publicar inventarios con nombres de sistemas sensibles, diagramas internos, credenciales, datos personales, hallazgos no remediados ni detalles de acceso. Si se necesita documentar esa información, usar un espacio privado aprobado.

## Próximas decisiones

- Integrar la ficha con un sistema interno privado para recibir y revisar solicitudes; falta definir plataforma y autenticación.
- Confirmar el tipo de institución, el alcance y la autoridad de esta iniciativa.
- Confirmar si este repositorio debe trasladarse a la organización institucional y si seguirá siendo público.
- Identificar el plan de GitHub y las funciones de seguridad disponibles.
- Determinar qué aplicaciones ya usan datos reales o están desplegadas.
- Nombrar a los responsables de arquitectura, seguridad, infraestructura y cada producto.
