import { createStructuredSelector/*, createSelector*/} from 'reselect';

const counterReducer = state => state.counterReducer;

const managerSelector = createStructuredSelector({
  counterReducer,
  ui: state => state.ui
});

export default managerSelector;