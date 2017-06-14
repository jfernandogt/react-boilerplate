import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { reducer as uiReducer } from 'redux-ui';

const rootReducer = combineReducers({
  counterReducer,
  ui: uiReducer
});

export default rootReducer;
