import fetcher from '../fetcher';

export const FETCH_TOP_REQUEST = 'FETCH_TOP_REQUEST';
export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS';
export const FETCH_TOP_FAILURE = 'FETCH_TOP_FAILURE';

function fetchTopRequest() {
  return {
    type: FETCH_TOP_REQUEST
  };
}


function fetchTopSuccess(body) {
  return {
    type: FETCH_TOP_SUCCESS
  };
}


function fetchTopFailure(ex) {
  return {
    type: FETCH_TOP_FAILURE
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
