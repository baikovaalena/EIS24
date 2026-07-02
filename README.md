# EIS24 — Список счётчиков

React + TypeScript + Vite приложение для просмотра приборов учёта.

## Быстрый старт

```bash
npm install
npm run dev
```

## Команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка для production (`tsc` + `vite build`) |
| `npm run lint` | Проверка ESLint |
| `npm run preview` | Preview production-сборки |
| `npm run format` | Форматирование кода через Prettier |
| `npm run format:check` | Проверка форматирования |

## Переменные окружения

Создайте файл `.env` в корне проекта:

```env
VITE_API_BASE_URL=https://your-api-host.example.com/api/
```

`VITE_API_BASE_URL` должен заканчиваться на `/`. Все API-запросы используют этот адрес как базовый через `src/shared/api/client.ts`.

## Архитектура (Feature-Sliced Design)

Проект следует методологии [FSD](https://feature-sliced.design/). Слои расположены от наиболее переиспользуемых к наиболее специфичным:

```
src/
├── app/                        # Инициализация приложения
│   ├── App.tsx                 # Корневой компонент
│   ├── providers/
│   │   └── StoreProvider.tsx   # React Context для MobX-стора
│   └── styles/                 # Глобальные стили и переменные
│
├── pages/                      # Страницы (роуты)
│   └── home/                   # Главная страница (инициирует загрузку)
│
├── widgets/                    # Самодостаточные блоки UI
│   └── counters-table/         # Таблица счётчиков + пагинация
│
├── features/                   # Пользовательские сценарии
│   └── delete-counter/         # Удаление счётчика (UI + API + хук)
│
├── entities/                   # Бизнес-сущности
│   ├── counter/
│   │   ├── api/                # fetchCounters
│   │   ├── lib/                # counterTypes, formatCounterType, formatCounter
│   │   ├── model/              # CountersStore (MobX-state-tree)
│   │   └── ui/CounterRow/      # Строка таблицы
│   └── area/
│       ├── api/                # fetchAreas
│       └── model/              # AreasStore (MobX-state-tree)
│
└── shared/                     # Переиспользуемый инфраструктурный код
    ├── api/
    │   ├── client.ts           # apiGet<T> — единая точка HTTP-запросов
    │   └── types.ts            # IPaginatedResponse<T>
    ├── lib/
    │   └── formatDate.ts       # Универсальный форматтер дат
    ├── images/                 # SVG-иконки и TrashIcon
    └── ui/
        ├── Loader/
        └── Pagination/
```

### Правила импортов (FSD)

- Слои могут импортировать только из **нижележащих** слоёв: `pages → widgets → features → entities → shared`.
- Entities не импортируют друг друга. Оркестрация между `counter` и `area` происходит на уровне `widgets/counters-table`.
- Из каждого слайса импортируется только через его `index.ts` (public API).
