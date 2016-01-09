import fetcher from '../fetcher';

export const CREATE_NEW_ARTICLE = 'CREATE_NEW_ARTICLE';

export function createNewArticle() {
  return {
    type: CREATE_NEW_ARTICLE
  };
}
