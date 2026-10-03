# TypeScript Exercises

Практичні вправи з TypeScript: робота зі скалярними типами, посиланнями, типами даних, Git та ESLint.

## Завдання

### 1. Скалярні типи та посилання

Реалізовано дві версії функції `inc`:

- `inc(n: number): number` — приймає число та повертає збільшене значення.
- `inc(num: Num)` — змінює поле `n` об'єкта, переданого за посиланням.

Файли:

- `src/inc-number.ts`
- `src/inc-object.ts`

### 2. Типи даних

Реалізовано підрахунок кількості елементів різних типів у масиві за допомогою:

- `typeof`
- циклу `for...of`
- об'єкта `Record<string, number>`
- динамічного створення ключів

Файл:

- `src/types-count.ts`

## Запуск

Встановити залежності:

```bash
npm install
npx tsx src/inc-number.ts
npx tsx src/inc-object.ts
npx tsx src/types-count.ts
npx eslint src
