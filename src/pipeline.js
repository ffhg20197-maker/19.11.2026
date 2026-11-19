export const pipelineStages = [
  { name: 'Lint', command: 'npm run lint', purpose: 'Static code analysis' },
  { name: 'Test', command: 'npm test', purpose: 'Automated tests' },
  { name: 'Build', command: 'npm run build', purpose: 'Production compilation' },
];

export function isPipelineReady(stages = pipelineStages) {
  return Array.isArray(stages) && stages.length === 3 && stages.every((stage) => stage.name && stage.command);
}

// Intentional syntax error for CI error-detection demonstration.
export const deliberatelyBroken = ;
