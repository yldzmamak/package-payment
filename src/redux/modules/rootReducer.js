// redux
import { combineReducers } from 'redux';

// reducers
import users from './user/user-reducer';
import packages from './packages/package-reducer';
import payment from './payment/payment-reducer';

const rootReducer = combineReducers({
  users,
  packages,
  payment,
});

export default rootReducer;
