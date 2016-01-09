const initialState = {
  newArticle: {
    title: '',
    description: '',
    thumnailUrl: ''
  }
}

export default function newArticle(state = initialState.newArticle, action) {
  return state;
}
