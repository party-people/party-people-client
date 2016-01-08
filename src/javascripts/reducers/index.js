import { combineReducers } from 'redux';
import entities from './entities';
import current_user from './current_user';

const rootReducer = combineReducers({
  entities,
  current_user
});

export default rootReducer;
