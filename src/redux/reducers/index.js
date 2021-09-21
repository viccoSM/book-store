import { combineReducers } from 'redux';
import booksReducer from './Books';
import countryReducer from './Country';
import postReducer from './Post';

const reducer = combineReducers({
  booksReducer,
  countryReducer,
  postReducer,
});

export default reducer;
