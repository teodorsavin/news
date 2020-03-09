import { combineReducers } from 'redux';
import news from './newsReducer';
import countries from './countriesReducer';

const rootReducer = combineReducers({
  news,
  countries
});

export default rootReducer;
