import fetcher from '../fetcher';
import { API_ROOT } from '../api/api';

export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILURE = 'POST_USER_FAILURE';

function postUserRequest() {
  return {
    type: POST_USER_REQUEST
  };
}

function postUserSuccess(body) {
  return {
    type: POST_USER_SUCCESS
  };
}

function postUserFailure(ex) {
  return {
    type: POST_USER_FAILURE,
    ex
  };
}

export function postUser(data) {
  return dispatch => {
    dispatch(postUserRequest());
    return ajaxPostUser(data)
      .done(response => {
        if (response.hasOwnProperty('error')) {
          throw new Error(response['error']);
        }
        dispatch(postUserSuccess(response));
      })
      .fail(ex => dispatch(postUserFailure(ex)));
  }
}

function ajaxPostUser(data) {
  const defer = $.Deferred();
  $.ajax({
    type: 'POST',
    url: `${API_ROOT}/users`,
    data: data,
    processData: false,
    contentType: false,
    success: defer.resolve,
    error: defer.reject
  });
  return defer.promise();
}
