export function denormalizeCategories(categories, entities) {
  return categories.map( (categoryId) =>
    entities.categories[categoryId]
  );
}
