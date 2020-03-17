import { combineReducers } from 'redux';
import casesData from './CasesData';
import colorsData from './ColorsData';
// import ReducerActiveCase from './ReducerActiveCase';
const allReducers = combineReducers({
  casesData,
  colorsData
  // activePortoCase: ReducerActiveCase
});
export default allReducers;