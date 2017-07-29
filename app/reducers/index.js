import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import selectReducer from './selectReducer';

const reducer = combineReducers({
  data: dataReducer,
  selected: selectReducer
});

export default reducer;