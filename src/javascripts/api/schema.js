import { normalize, Schema, arrayOf } from 'normalizr';

const article = new Schema('articles');
const user = new Schema('users');
const category = new Schema('categories');

article.define({
  category: category,
  contributor: user
})

export const Schemas = {
  articles: arrayOf(article),
  categories: arrayOf(category) 
}
