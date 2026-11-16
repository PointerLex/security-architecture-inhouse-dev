# Marcos de referencia y controles iniciales

> **Estado:** notas de trabajo. Los marcos orientan la discusión; esta página no declara cumplimiento ni adopción institucional.

## NIST Secure Software Development Framework (SSDF)

[NIST SP 800-218, SSDF 1.1](https://csrc.nist.gov/Projects/ssdf) organiza las prácticas de desarrollo seguro en cuatro grupos. Para esta iniciativa sirven como mapa de capacidades:

| Grupo SSDF | Pregunta local | Evidencia que podríamos construir |
| --- | --- | --- |
| Prepare the Organization (PO) | ¿Quién decide y qué necesita cada equipo para trabajar de forma segura? | Roles, inventario, clasificación de riesgo, formación, estándares y plantillas |
| Protect the Software (PS) | ¿Cómo protegemos código, artefactos, secretos y accesos? | Repositorios con permisos definidos, revisiones, protección de ramas y gestión de credenciales |
| Produce Well-Secured Software (PW) | ¿Cómo diseñamos, construimos y verificamos? | Revisión de arquitectura, pruebas, análisis de dependencias, controles de CI y criterios de liberación |
| Respond to Vulnerabilities (RV) | ¿Cómo detectamos, priorizamos y corregimos fallas? | Canal de reporte, responsables, plazos según severidad y registro de correcciones |

El SSDF permite adoptar prácticas según el riesgo y la capacidad de la organización. La primera tarea es identificar brechas reales, no declarar cumplimiento de todo el marco.

## OWASP Secure Coding with AI

La [guía OWASP Secure Coding with AI](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Coding_with_AI_Cheat_Sheet.html) aborda riesgos específicos de la programación asistida por IA y de agentes que ejecutan acciones. Para nuestro contexto, proponemos iniciar con estos criterios:

- Toda modificación asistida por IA tiene un responsable humano capaz de explicar el cambio y revisar el diff completo.
- No ingresar datos personales, secretos, código sensible o información interna en herramientas de IA sin una autorización institucional explícita para ese uso.
- Verificar los paquetes, versiones y fuentes que sugiera la IA antes de instalarlos; revisar vulnerabilidades conocidas y mantener archivos de bloqueo de dependencias.
- No aceptar una prueba generada por el mismo agente como evidencia suficiente de seguridad. Revisar las pruebas relevantes y sus aserciones.
- Dar a agentes y automatizaciones solo los permisos y archivos necesarios. Revisar especialmente cambios en CI, despliegue, permisos y configuración.
- Documentar el uso de IA cuando el proceso institucional lo requiera para trazabilidad, sin convertir esa declaración en sustituto de la revisión.

Estos criterios deben convertirse en una guía práctica y en controles técnicos donde sea posible. La aplicación concreta dependerá de las herramientas de IA aprobadas y del tipo de información manejada.

## OWASP SAMM y ASVS

- [OWASP SAMM](https://owasp.org/projects/samm/) puede ayudar a medir la madurez del programa y priorizar mejoras de gobernanza, diseño, implementación, verificación y operación.
- [OWASP ASVS](https://asvs.owasp.org/) ofrece requisitos verificables para aplicaciones web. Conviene seleccionar requisitos según el riesgo de cada producto, en vez de aplicar la misma lista a todos.

## Primer conjunto de controles para evaluar

1. Ficha de proyecto con dueño, datos, integraciones, repositorio y entorno.
2. Permisos de repositorio por equipo y función; acceso externo con alcance y vencimiento definidos.
3. Cambios a la rama principal mediante pull request y revisión humana.
4. Pruebas y análisis de dependencias en CI; análisis de código y secretos según herramientas y licencias disponibles.
5. Criterios de entrada a producción: responsable de operación, configuración de secretos, plan de reversión y observabilidad mínima.
6. Canal de reporte y tratamiento de vulnerabilidades.

La configuración exacta de GitHub debe revisarse contra el plan contratado. Referencias: [roles de repositorio](https://docs.github.com/en/enterprise-cloud%40latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization), [rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets) y [disponibilidad de funciones de seguridad](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security).
