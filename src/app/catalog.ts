export const ingredientIds = [
  'rice',
  'carrots',
  'beans',
  'egg',
  'sesame',
  'chili'
] as const;

export type IngredientId = (typeof ingredientIds)[number];

export type Ingredient = {
  id: IngredientId;
  label: string;
  descriptor: string;
  icon: string;
  tone: 'moss' | 'persimmon' | 'yolk' | 'ink';
};

export const ingredients: Ingredient[] = [
  { id: 'rice', label: 'Leftover rice', descriptor: 'soft and ready', icon: '◒', tone: 'yolk' },
  { id: 'carrots', label: 'Roasted carrots', descriptor: 'sweet edges', icon: '≈', tone: 'persimmon' },
  { id: 'beans', label: 'Green beans', descriptor: 'still bright', icon: '⌇', tone: 'moss' },
  { id: 'egg', label: 'Egg', descriptor: 'tomorrow’s anchor', icon: '●', tone: 'yolk' },
  { id: 'sesame', label: 'Sesame', descriptor: 'little crunch', icon: '⁙', tone: 'ink' },
  { id: 'chili', label: 'Chili crisp', descriptor: 'bright heat', icon: '✦', tone: 'persimmon' }
];
