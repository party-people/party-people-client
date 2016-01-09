import { combineReducers } from 'redux';
import entities from './entities';
import current_user from './current_user';
import top from './top';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  entities,
  current_user,
  top,
  form
});

export default rootReducer;
