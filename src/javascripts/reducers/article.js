import {
  CREATE_NEW_ARTICLE
} from '../actions/articles';

const initialState = {
  newArticle: {
    title: '',
    description: '',
    thumbnailUrl: '',
    items: []
  }
}

export default function newArticle(state = initialState.newArticle, action) {
  switch(action.type) {
  case CREATE_NEW_ARTICLE:
    return Object.assign({}, state, initialState.newArticle);
  }
  return state;
}
