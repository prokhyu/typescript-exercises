type Value = number | string | boolean;

const values: Value[] = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  42,
  'TypeScript',
  true,
  3.14,
  'GitHub',
  -10,
  false,
  100,
];

const types: Record<string, number> = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const value of values) {
  const type = typeof value;
  types[type]++;
}

console.dir(types);
