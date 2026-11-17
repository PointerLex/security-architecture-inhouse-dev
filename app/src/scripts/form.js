import { steps, questions } from '../lib/questions.mjs';
import { assess } from '../lib/assessment.mjs';

const form = document.querySelector('#intake-form');
const stepSections = [...document.querySelectorAll('[data-step]')];
const stepIndicators = [...document.querySelectorAll('[data-step-indicator]')];
const progressLabel = document.querySelector('#progress-label');
const progressCount = document.querySelector('#progress-count');
const progressFill = document.querySelector('#progress-fill');
const errorSummary = document.querySelector('#error-summary');
const backButton = document.querySelector('#back-button');
const nextButton = document.querySelector('#next-button');
const result = document.querySelector('#result');
let currentStep = 0;
let completedFicha = null;

function showStep(index) {
  currentStep = index;
  stepSections.forEach((section, position) => {
    section.hidden = position !== index;
  });
  stepIndicators.forEach((indicator, position) => {
    indicator.classList.toggle('active', position === index);
    indicator.classList.toggle('complete', position < index);
    if (position === index) indicator.setAttribute('aria-current', 'step');
    else indicator.removeAttribute('aria-current');
  });
  const progress = Math.round(((index + 1) / steps.length) * 100);
  progressLabel.textContent = `Paso ${index + 1} de ${steps.length}`;
  progressCount.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;
  backButton.hidden = index === 0;
  nextButton.innerHTML = index === steps.length - 1
    ? 'Ver preevaluación <span aria-hidden="true">→</span>'
    : 'Continuar <span aria-hidden="true">→</span>';
  errorSummary.hidden = true;
}

function validateStep() {
  let firstMissing = null;
  for (const question of steps[currentStep].questions) {
    const fieldset = form.querySelector(`[data-question="${question.key}"]`);
    const selected = form.querySelector(`input[name="${question.key}"]:checked`);
    const error = document.querySelector(`#${question.key}-error`);
    const missing = !selected;
    fieldset.classList.toggle('invalid', missing);
    fieldset.setAttribute('aria-invalid', String(missing));
    error.hidden = !missing;
    if (missing && !firstMissing) firstMissing = fieldset;
  }
  errorSummary.hidden = !firstMissing;
  if (firstMissing) errorSummary.focus();
  return !firstMissing;
}

function collectAnswers() {
  return Object.fromEntries(
    questions.map((question) => [question.key, form.querySelector(`input[name="${question.key}"]:checked`).value]),
  );
}

function finish() {
  const answers = collectAnswers();
  const assessment = assess(answers);
  completedFicha = {
    version: 1,
    generatedAt: new Date().toISOString(),
    responses: questions.map((question) => {
      const [value, label] = question.options.find(([value]) => value === answers[question.key]);
      return { key: question.key, question: question.label, value, selection: label };
    }),
    assessment,
    status: 'Preevaluación orientativa; pendiente de revisión humana',
  };

  form.hidden = true;
  result.hidden = false;
  document.querySelector('#assessment').dataset.level = assessment.level;
  document.querySelector('#assessment-title').textContent = assessment.title;
  document.querySelector('#assessment-summary').textContent = assessment.summary;

  const reasonsWrap = document.querySelector('#reasons-wrap');
  const reasonsList = document.querySelector('#assessment-reasons');
  reasonsList.replaceChildren();
  reasonsWrap.hidden = assessment.reasons.length === 0;
  assessment.reasons.forEach((reason) => {
    const item = document.createElement('li');
    item.textContent = reason;
    reasonsList.append(item);
  });

  const unknownsNote = document.querySelector('#unknowns-note');
  unknownsNote.hidden = assessment.unknowns.length === 0;
  unknownsNote.textContent = assessment.unknowns.length > 0
    ? `${assessment.unknowns.length} respuesta(s) quedaron sin definir y requieren revisión.`
    : '';
  document.querySelector('#result-title').setAttribute('tabindex', '-1');
  document.querySelector('#result-title').focus();
}

form.addEventListener('change', (event) => {
  if (!(event.target instanceof HTMLInputElement) || event.target.type !== 'radio') return;
  const fieldset = event.target.closest('[data-question]');
  fieldset.classList.remove('invalid');
  fieldset.setAttribute('aria-invalid', 'false');
  document.querySelector(`#${event.target.name}-error`).hidden = true;
  if (!stepSections[currentStep].querySelector('.invalid')) errorSummary.hidden = true;
});

form.addEventListener('submit', (event) => event.preventDefault());

nextButton.addEventListener('click', () => {
  if (!validateStep()) return;
  if (currentStep === steps.length - 1) finish();
  else {
    showStep(currentStep + 1);
    document.querySelector(`#step-title-${currentStep}`).setAttribute('tabindex', '-1');
    document.querySelector(`#step-title-${currentStep}`).focus();
  }
});

backButton.addEventListener('click', () => {
  showStep(currentStep - 1);
  document.querySelector(`#step-title-${currentStep}`).setAttribute('tabindex', '-1');
  document.querySelector(`#step-title-${currentStep}`).focus();
});

document.querySelector('#download-button').addEventListener('click', () => {
  if (!completedFicha) return;
  const blob = new Blob([JSON.stringify(completedFicha, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ficha-proyecto-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

document.querySelector('#reset-button').addEventListener('click', () => {
  form.reset();
  completedFicha = null;
  result.hidden = true;
  form.hidden = false;
  form.querySelectorAll('[data-question]').forEach((fieldset) => {
    fieldset.classList.remove('invalid');
    fieldset.removeAttribute('aria-invalid');
  });
  form.querySelectorAll('.field-error').forEach((error) => { error.hidden = true; });
  showStep(0);
  document.querySelector('#step-title-0').setAttribute('tabindex', '-1');
  document.querySelector('#step-title-0').focus();
});
