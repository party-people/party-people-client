export const FETCH_TOP_REQUEST = 'FETCH_TOP_REQUEST';
export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS';
export const FETCH_TOP_FAILURE = 'FETCH_TOP_FAILURE';

function fetchTopRequest() {
  return {
    type: FETCH_TOP_REQUEST
  }
}


function fetchTopSuccess() {
  return {
    type: FETCH_TOP_SUCCESS
  }
}


function fetchTopFailure() {
  return {
    type: FETCH_TOP_FAILURE
  }
}

export function fetchTop() {
  console.log('fetch top');
  return {
    type: ''
  }
}
