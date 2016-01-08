export function denormalizeArticle(article, entities) {
  const category = entities.categories[article.category];
  const contributor = entities.users[article.contributor];
  article.category = category;
  article.contributor = contributor;
  return article;
}
