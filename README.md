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
Проект использует Node.js built-in tooling (без сторонних пакетов): синтаксическую проверку, Node test runner и сборочный скрипт. Это делает npm ci воспроизводимым и независимым от внешнего registry.

## Workflow
- .github/workflows/basic-ci.yml
- .github/workflows/quality-gate.yml
- .github/workflows/enterprise-ci.yml

## Skip CI
Для commit документации можно использовать сообщение [skip ci], например [skip ci] Update README. README не входит в paths фильтр Quality Gate.

## Иллюстрации
SVG схемы отчёта находятся в report_figures/. Схемы не являются скриншотами GitHub UI. Word отчёт создан отдельно. Реальные облачные прогоны, matrix jobs и downloadable artifacts должны подтверждаться вкладкой Actions после запуска.

## Локальная верификация
Успешно выполнены npm ci, npm run lint (5 JS files checked), npm test (3 tests passed) и npm run build. YAML workflows разобраны локально без ошибок.


## Skip CI verification
This README change was committed with the commit message containing `[skip ci]` to demonstrate the CI skip directive. The Actions workflow should not run for that documentation commit.
