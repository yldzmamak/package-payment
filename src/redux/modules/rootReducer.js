import { combineReducers } from 'redux';

import users from './user/user-reducer';
import packages from './packages/package-reducer';

const rootReducer = combineReducers({
  users,
  packages,
});

export default rootReducer;
