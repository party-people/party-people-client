function denormalizeArticle(article, entities) {
  const category = entities.categories[article.category];
  const contributor = entities.users[article.contributor];
  article.category = category;
  article.contributor = contributor;
  return article;
}

export function denormalizeArticles(articles, entities) {
  return articles.map( (articleId) => {
    const article = entities.articles[articleId];
    return denormalizeArticle(article, entities);
  });
}
