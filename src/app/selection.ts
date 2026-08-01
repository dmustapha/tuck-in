import { ingredientIds, type IngredientId } from './catalog';

const maximumSelection = 3;

export function toggleSelection(
  selectedIds: IngredientId[],
  ingredientId: IngredientId
): IngredientId[] {
  if (selectedIds.includes(ingredientId)) {
    return selectedIds.filter((id) => id !== ingredientId);
  }

  return selectedIds.length < maximumSelection
    ? [...selectedIds, ingredientId]
    : selectedIds;
}

export function orderSelection(selectedIds: IngredientId[]): IngredientId[] {
  return ingredientIds.filter((id) => selectedIds.includes(id));
}

export function canContinue(selectedIds: IngredientId[]): boolean {
  return selectedIds.length === maximumSelection;
}
