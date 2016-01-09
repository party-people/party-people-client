import { combineReducers } from 'redux';
import entities from './entities';
import currentUser from './current_user';
import newArticle from './article'
import top from './top';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  entities,
  currentUser,
  newArticle,
  top,
  form
});

export default rootReducer;
