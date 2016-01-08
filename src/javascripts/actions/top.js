import fetcher from '../fetcher';
import { Schemas } from '../api/schema';
import { normalize } from 'normalizr';

export const FETCH_TOP_REQUEST = 'FETCH_TOP_REQUEST';
export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS';
export const FETCH_TOP_FAILURE = 'FETCH_TOP_FAILURE';

function fetchTopRequest() {
  return {
    type: FETCH_TOP_REQUEST
  };
}


function fetchTopSuccess(body) {
  const response = normalize(body, {
    articles: Schemas.articles,
    categories: Schemas.categories
  });
  return {
    type: FETCH_TOP_SUCCESS,
    response
  };
}


function fetchTopFailure(ex) {
  return {
    type: FETCH_TOP_FAILURE,
    ex
  };
}

export function fetchTop() {
  return dispatch => {
    dispatch(fetchTopRequest());
    return fetcher.get('http://localhost:9000/api/v1/top')
      .then(json => dispatch(fetchTopSuccess(json.body)))
      .catch(ex => dispatch(fetchTopFailure(ex)));
  };
}
