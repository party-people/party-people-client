import fetcher from '../fetcher';

export const CREATE_NEW_ARTICLE = 'CREATE_NEW_ARTICLE';
export const UPDATE_ARTICLE_REQUEST = 'UPDATE_ARTICLE_REQUEST';
export const UPDATE_ARTICLE_SUCCESS = 'UPDATE_ARTICLE_SUCCESS';
export const UPDATE_ARTICLE_FAILURE = 'UPDATE_ARTICLE_FAILURE';

export function createNewArticle() {
  return {
    type: CREATE_NEW_ARTICLE
  };
}

function updateArticleRequest() {
  return {
    type: UPDATE_ARTICLE_REQUEST
  }
}

function updateArticleSuccess(body) {
  return {
    type: UPDATE_ARTICLE_SUCCESS
  }
}

function updateArticleFailure(ex) {
  return {
    type: UPDATE_ARTICLE_FAILURE
  }
}

export function updateArticle(data) {
  return dispatch => {
    dispatch(updateArticleRequest());
    return fetcher.patch('http://localhost:9000/api/v1/articles/1', data)
      .then(json => dispatch(updateArticleSuccess(json.body)))
      .catch(ex => dispatch(updateArticleFailure(ex)))
  }
}
