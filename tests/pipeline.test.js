import test from 'node:test';
import assert from 'node:assert/strict';
import { isPipelineReady, pipelineStages } from '../src/pipeline.js';

test('pipeline has lint, test and build stages in order', () => {
  assert.deepEqual(pipelineStages.map((stage) => stage.name), ['Lint', 'Test', 'Build']);
});

test('default pipeline is ready', () => {
  assert.equal(isPipelineReady(), true);
});

test('incomplete pipeline is rejected', () => {
  assert.equal(isPipelineReady([{ name: 'Lint', command: 'node scripts/lint.js' }]), false);
});
