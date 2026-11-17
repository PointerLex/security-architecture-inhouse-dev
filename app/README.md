# Ficha de ingreso de proyectos

Prototipo en Astro para registrar una iniciativa **solo mediante selecciones**. La interfaz usa [daisyUI](https://daisyui.com/components/) con Tailwind CSS y los íconos de Lucide. Parte de la [ficha de inventario](../templates/ficha-proyecto.md), pero limita esta primera interacción a los datos necesarios para orientar una revisión. Los datos que requieren nombres, responsables o detalles técnicos se completarán después en un sistema interno apropiado.

## Ejecutar

Requiere Node.js 22.23.4 o superior, o una versión 24 compatible.

```bash
npm ci
npm run dev
```

Para generar los archivos estáticos: `npm run build`.

## Qué hace esta versión

- Presenta 9 preguntas en 3 pasos, todas con opciones predeterminadas y alternativa «No lo sé».
- Valida que cada pregunta tenga una selección antes de continuar.
- Produce una preevaluación orientativa: exploración controlada, revisión estándar o revisión prioritaria.
- Permite descargar un JSON con las selecciones, la clasificación y los factores detectados.
- Mantiene las respuestas solo en la memoria de la pestaña mientras está abierta. No las envía a un servidor ni las guarda en el navegador.
- Muestra la introducción en un panel lateral que se puede ocultar; en tablet y móvil comienza cerrado y se abre sobre el formulario cuando se necesita.

## Identidad visual

El tema daisyUI `institutional` de [`src/styles/global.css`](src/styles/global.css) usa la paleta oficial facilitada para esta interfaz. El azul oscuro `#084682` identifica el panel, el fondo principal y los controles; `#126ab3`, `#1f84ec` y `#3abff0` sirven de apoyo. Los acentos `#ff3c4c`, `#ff798a`, `#f8d63c` y `#90d039` aparecen en la franja de identidad o en estados pertinentes. El texto principal usa `#282828` sobre superficies blancas. Los fondos y bordes claros son matices funcionales para conservar legibilidad. Toda la interfaz usa Oxygen, servida desde los archivos del proyecto mediante `@fontsource/oxygen`.

La clasificación se calcula en [`src/lib/assessment.mjs`](src/lib/assessment.mjs). Es una propuesta inicial para revisión institucional, no una aprobación automática ni una evaluación completa de seguridad. Las categorías y preguntas están en [`src/lib/questions.mjs`](src/lib/questions.mjs).

## Para convertirla en una puerta de ingreso real

1. Integrar la recepción con un **sistema interno privado**, según la decisión inicial. Falta identificar la plataforma, su API y la persona o equipo revisor.
2. Integrar autenticación institucional para obtener identidad y área sin pedir que el personal las escriba.
3. Generar un identificador de solicitud en el servidor y validar allí todas las opciones recibidas. La lógica del navegador no es un control de seguridad.
4. Guardar estado, fecha, responsable, decisiones y trazabilidad en el sistema aprobado; establecer permisos y retención de datos.
5. Vincular la aprobación con el proceso de creación de repositorios, entrega de entornos o acceso a datos reales. Completar la ficha por sí solo no debe habilitar producción.
6. Revisar la redacción y clasificación con arquitectura, seguridad, privacidad y representantes de las áreas usuarias.

Este repositorio es público. No enviar respuestas reales a issues públicos ni guardar fichas de proyectos sensibles aquí.
