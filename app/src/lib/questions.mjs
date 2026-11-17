export const steps = [
  {
    title: 'Origen y alcance',
    eyebrow: 'Paso 1 de 3',
    description: 'Identifiquemos quién construirá la solución y para quién será.',
    questions: [
      {
        key: 'equipo',
        label: '¿Quién desarrollará el proyecto?',
        options: [
          ['unidad', 'Unidad de desarrollo'],
          ['otra-area', 'Otra área de la institución'],
          ['externo', 'Proveedor o colaborador externo'],
          ['capstone', 'Estudiantes o proyecto capstone'],
          ['no-se', 'Aún no está definido'],
        ],
      },
      {
        key: 'etapa',
        label: '¿En qué etapa está?',
        options: [
          ['idea', 'Solo una idea'],
          ['prototipo', 'Prototipo en construcción'],
          ['piloto', 'Piloto con usuarios'],
          ['produccion', 'Ya está en uso'],
          ['no-se', 'No lo sé'],
        ],
      },
      {
        key: 'usuarios',
        label: '¿Quiénes usarán la solución?',
        options: [
          ['equipo', 'Solo el equipo creador'],
          ['area', 'Una o varias áreas internas'],
          ['institucion', 'Gran parte de la institución'],
          ['externos', 'Personas externas identificadas'],
          ['publico', 'Público general'],
          ['no-se', 'Aún no está definido'],
        ],
      },
    ],
  },
  {
    title: 'Datos y conexiones',
    eyebrow: 'Paso 2 de 3',
    description: 'Estas respuestas determinan qué revisiones se necesitan antes de avanzar.',
    questions: [
      {
        key: 'datos',
        label: '¿Qué tipo de datos usará?',
        options: [
          ['ficticios', 'Datos ficticios o públicos'],
          ['internos', 'Información interna no personal'],
          ['personales', 'Datos personales'],
          ['sensibles', 'Datos sensibles o confidenciales'],
          ['no-se', 'No lo sé'],
        ],
      },
      {
        key: 'acceso',
        label: '¿Desde dónde se podrá acceder?',
        options: [
          ['local', 'Solo en un entorno de prueba aislado'],
          ['interno', 'Red o plataforma institucional'],
          ['internet-privado', 'Internet con acceso restringido'],
          ['internet-publico', 'Internet sin acceso restringido'],
          ['no-se', 'Aún no está definido'],
        ],
      },
      {
        key: 'integraciones',
        label: '¿Se conectará a sistemas institucionales?',
        options: [
          ['ninguna', 'No'],
          ['lectura', 'Sí, para consultar datos'],
          ['escritura', 'Sí, para crear o modificar datos'],
          ['no-se', 'No lo sé'],
        ],
      },
    ],
  },
  {
    title: 'Operación y herramientas',
    eyebrow: 'Paso 3 de 3',
    description: 'Terminemos con el impacto esperado y la forma de construcción.',
    questions: [
      {
        key: 'impacto',
        label: '¿Qué ocurriría si falla o deja de funcionar?',
        options: [
          ['bajo', 'Impacto bajo; existe una alternativa manual'],
          ['medio', 'Interrumpe el trabajo de un área'],
          ['alto', 'Afecta servicios importantes o a muchas personas'],
          ['no-se', 'No lo sé'],
        ],
      },
      {
        key: 'identidad',
        label: '¿Cómo ingresarán los usuarios?',
        options: [
          ['sin-cuentas', 'No requiere cuentas'],
          ['institucional', 'Identidad institucional'],
          ['propia', 'Cuentas creadas por la aplicación'],
          ['no-se', 'Aún no está definido'],
        ],
      },
      {
        key: 'ia',
        label: '¿Se usará IA para desarrollar?',
        options: [
          ['no', 'No'],
          ['asistencia', 'Sí, como asistente de programación'],
          ['agentes', 'Sí, agentes que pueden modificar o ejecutar código'],
          ['no-se', 'Aún no está definido'],
        ],
      },
    ],
  },
];

export const questions = steps.flatMap((step) => step.questions);
