# GitHub Actions CI — automated web project verification

Практическая работа по теме 3.1.50. Реализованы все три уровня CI/CD.

## Задания
- Basic CI (30 баллов): push в main, ручной запуск workflow_dispatch, Node.js 20, npm ci и npm test.
- Quality Gate (35 баллов): push в feature/**, PR в main, paths src/** и package*.json, npm cache, lint → test → build, dist artifact на 5 дней.
- Enterprise Matrix CI (35 баллов): Ubuntu и Windows × Node 18/20/22 (6 конфигураций), fail-fast: false, отдельная production-build job после matrix-test и артефакт.

## Локальные команды
```bash
npm ci
npm run lint
npm test
npm run build
```
Проект использует Node.js built-in tooling (без сторонних пакетов): синтаксическую проверку, Node test runner и скрипт сборки.

## Workflow
- .github/workflows/basic-ci.yml
- .github/workflows/quality-gate.yml
- .github/workflows/enterprise-ci.yml

## Реальные проверки Actions
- Basic CI main: https://github.com/ffhg20197-maker/19.11.2026/actions/runs/44450322988 — success.
- Quality Gate feature/quality-validation: https://github.com/ffhg20197-maker/19.11.2026/actions/runs/44450510942 — success, artifact опубликован.
- Enterprise Matrix main: https://github.com/ffhg20197-maker/19.11.2026/actions/runs/44450322984 — 6/6 matrix jobs и production build success.
- Intentional lint error demo: https://github.com/ffhg20197-maker/19.11.2026/actions/runs/44450894342 — lint failed as expected; tests/build/artifact skipped. Main branch remains clean.

## Skip CI verification
README commit with [skip ci] was tested; no workflow run was created for the skip commit. README is not part of the Quality Gate paths filter.

## Report figures
SVG схемы находятся в report_figures/. Они иллюстративные и не являются скриншотами GitHub UI. Word отчёт доступен в отдельном архиве/файле.
