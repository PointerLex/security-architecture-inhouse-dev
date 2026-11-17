import { steps, questions } from '../lib/questions.mjs';
import { assess } from '../lib/assessment.mjs';

const form = document.querySelector('#intake-form');
const stepSections = [...document.querySelectorAll('[data-step]')];
const stepIndicators = [...document.querySelectorAll('[data-step-indicator]')];
const progressLabel = document.querySelector('#progress-label');
const progressCount = document.querySelector('#progress-count');
const progressTrack = document.querySelector('#progress-track');
const errorSummary = document.querySelector('#error-summary');
const backButton = document.querySelector('#back-button');
const nextButton = document.querySelector('#next-button');
const result = document.querySelector('#result');
const appShell = document.querySelector('#app-shell');
const introPanel = document.querySelector('#intro-panel');
const introBackdrop = document.querySelector('#intro-backdrop');
const mainColumn = document.querySelector('.main-column');
const introToggle = document.querySelector('#intro-toggle');
const introReopen = document.querySelector('#intro-reopen');
let currentStep = 0;
let completedFicha = null;

function setIntroOpen(open, moveFocus = false) {
  appShell.dataset.introOpen = String(open);
  introPanel.hidden = !open;
  introToggle.setAttribute('aria-expanded', String(open));
  introReopen.hidden = open;
  introReopen.setAttribute('aria-expanded', String(open));
  const overlayOpen = compactLayout.matches && open;
  introBackdrop.hidden = !overlayOpen;
  mainColumn.inert = overlayOpen;
  document.body.style.overflow = overlayOpen ? 'hidden' : '';
  if (moveFocus) (open ? introToggle : introReopen).focus();
}

const compactLayout = window.matchMedia('(max-width: 1199px)');
let introChangedByUser = false;
setIntroOpen(!compactLayout.matches);
introToggle.addEventListener('click', () => {
  introChangedByUser = true;
  setIntroOpen(false, true);
});
introReopen.addEventListener('click', () => {
  introChangedByUser = true;
  setIntroOpen(true, true);
});
introBackdrop.addEventListener('click', () => {
  introChangedByUser = true;
  setIntroOpen(false, true);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && compactLayout.matches && !introPanel.hidden) {
    introChangedByUser = true;
    setIntroOpen(false, true);
  }
});
compactLayout.addEventListener('change', () => {
  setIntroOpen(introChangedByUser ? !introPanel.hidden : !compactLayout.matches);
});

function showStep(index) {
  currentStep = index;
  stepSections.forEach((section, position) => {
    section.hidden = position !== index;
  });
  stepIndicators.forEach((indicator, position) => {
    indicator.classList.toggle('step-primary', position <= index);
    if (position === index) indicator.setAttribute('aria-current', 'step');
    else indicator.removeAttribute('aria-current');
  });
  const progress = Math.round(((index + 1) / steps.length) * 100);
  progressLabel.textContent = `Paso ${index + 1} de ${steps.length}`;
  progressCount.textContent = `${progress}%`;
  progressTrack.value = progress;
  backButton.hidden = index === 0;
  nextButton.querySelector('.button-label').textContent = index === steps.length - 1
    ? 'Ver preevaluación'
    : 'Continuar';
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
  const assessmentPanel = document.querySelector('#assessment');
  assessmentPanel.dataset.level = assessment.level;
  assessmentPanel.classList.remove('alert-info', 'alert-warning', 'alert-success');
  assessmentPanel.classList.add(assessment.level === 'prioritaria'
    ? 'alert-warning'
    : assessment.level === 'estandar' ? 'alert-info' : 'alert-success');
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
  const unknownCount = assessment.unknowns.length;
  unknownsNote.hidden = unknownCount === 0;
  unknownsNote.textContent = unknownCount === 1
    ? '1 respuesta quedó sin definir y requiere revisión.'
    : unknownCount > 1 ? `${unknownCount} respuestas quedaron sin definir y requieren revisión.` : '';
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
