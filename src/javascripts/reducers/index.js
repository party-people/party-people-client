import { combineReducers } from 'redux';
import entities from './entities';
import current_user from './current_user';
import top from './top';

const rootReducer = combineReducers({
  entities,
  current_user,
  top
});

export default rootReducer;
