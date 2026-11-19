# GitHub Actions CI — automated web project verification

Практическая работа по теме 3.1.50. Реализованы все три уровня CI/CD.

## Задания
- **Basic CI (30 баллов)** — push в `main`, ручной запуск `workflow_dispatch`, Node.js 20, `npm ci`, `npm test`.
- **Quality Gate (35 баллов)** — push `feature/**`, PR в `main`, фильтр `src/**` и `package*.json`, npm cache, lint → test → build, artifact `dist/` на 5 дней.
- **Enterprise Matrix CI (35 баллов)** — Ubuntu и Windows × Node 18/20/22 (6 конфигураций), `fail-fast: false`, отдельная production-build job после matrix-test, artifact.

## Локальные команды
```bash
npm ci
npm run lint
npm test
npm run build
```
Используется Node.js built-in tooling (без сторонних зависимостей): синтаксический lint, Node test runner и сборочный скрипт. Это делает `npm ci` воспроизводимым и независимым от внешнего реестра.

## Workflow файлы
- `.github/workflows/basic-ci.yml```
- `.github/workflows/quality-gate.yml```
- `.github/workflows/enterprise-ci.yml```

## Проверка skip CI
При коммите изменения документации используйте сообщение с `[skip ci]`. Пример: `[skip ci] Update README`. Ветка README исключена из Quality Gate paths.


## Иллюстрации
SVG-схемы к отчёту находятся в `report_figures/`. Документ отчёта создан отдельно в формате Word; облачные прогоны необходимо проверить во вкладке **Actions** после загрузки.

## Ограничения проверки
Локально выполнены `npm ci`, `npm run lint`, `npm test` (3/3) и `npm run build`. Зеленые статусы Actions, matrix jobs и доступность артефакта должны подтверждаться фактическим запуском в GitHub UI.
