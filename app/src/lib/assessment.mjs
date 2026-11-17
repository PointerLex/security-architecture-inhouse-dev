const prioritySignals = [
  ['datos', 'personales', 'Trata datos personales'],
  ['datos', 'sensibles', 'Trata datos sensibles o confidenciales'],
  ['acceso', 'internet-publico', 'Se expondrá en Internet sin acceso restringido'],
  ['integraciones', 'escritura', 'Modificará datos de sistemas institucionales'],
  ['impacto', 'alto', 'Una falla tendría impacto alto'],
  ['etapa', 'produccion', 'La solución ya está en uso'],
];

const standardSignals = [
  ['datos', 'internos', 'Usará información interna'],
  ['acceso', 'interno', 'Estará en una plataforma institucional'],
  ['acceso', 'internet-privado', 'Será accesible desde Internet'],
  ['integraciones', 'lectura', 'Consultará sistemas institucionales'],
  ['impacto', 'medio', 'Una falla interrumpiría a un área'],
  ['identidad', 'propia', 'Administrará cuentas propias'],
  ['ia', 'agentes', 'Usará agentes con capacidad de ejecutar acciones'],
  ['usuarios', 'institucion', 'Tendrá alcance institucional amplio'],
  ['usuarios', 'externos', 'Tendrá usuarios externos'],
];

export function assess(answers) {
  const priority = prioritySignals
    .filter(([key, value]) => answers[key] === value)
    .map(([, , reason]) => reason);
  const standard = standardSignals
    .filter(([key, value]) => answers[key] === value)
    .map(([, , reason]) => reason);
  const unknowns = Object.entries(answers)
    .filter(([, value]) => value === 'no-se')
    .map(([key]) => key);

  if (priority.length > 0) {
    return {
      level: 'prioritaria',
      title: 'Revisión prioritaria',
      summary: 'Antes de continuar, el equipo responsable debe revisar arquitectura, datos y seguridad.',
      reasons: priority,
      unknowns,
    };
  }

  if (standard.length > 0 || unknowns.length > 0) {
    return {
      level: 'estandar',
      title: 'Revisión estándar',
      summary: 'La solicitud necesita una revisión inicial y una persona responsable antes de avanzar.',
      reasons: standard,
      unknowns,
    };
  }

  return {
    level: 'exploracion',
    title: 'Exploración controlada',
    summary: 'Parece apta para un entorno aislado con datos ficticios. Debe registrarse y revisarse antes de usar datos o servicios reales.',
    reasons: [],
    unknowns,
  };
}
