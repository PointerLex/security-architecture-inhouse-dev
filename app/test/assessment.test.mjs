import test from 'node:test';
import assert from 'node:assert/strict';
import { assess } from '../src/lib/assessment.mjs';
import { questions } from '../src/lib/questions.mjs';

const baseline = Object.fromEntries(questions.map((question) => [question.key, question.options[0][0]]));

test('an isolated idea with fictitious data is classified for controlled exploration', () => {
  assert.equal(assess(baseline).level, 'exploracion');
});

test('sensitive data or write access requires priority review', () => {
  assert.equal(assess({ ...baseline, datos: 'sensibles' }).level, 'prioritaria');
  assert.equal(assess({ ...baseline, integraciones: 'escritura' }).level, 'prioritaria');
});

test('unknown data is kept for human review', () => {
  const result = assess({ ...baseline, datos: 'no-se' });
  assert.equal(result.level, 'estandar');
  assert.deepEqual(result.unknowns, ['datos']);
});

test('internet access with restriction requires standard review', () => {
  assert.equal(assess({ ...baseline, acceso: 'internet-privado' }).level, 'estandar');
});
