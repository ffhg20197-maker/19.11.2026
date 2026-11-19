import { pipelineStages } from './pipeline.js';
import './style.css';

const pipelineSection = document.querySelector('#pipeline');
if (pipelineSection) {
  pipelineSection.dataset.stageCount = String(pipelineStages.length);
  document.documentElement.dataset.ciReady = 'true';
}
