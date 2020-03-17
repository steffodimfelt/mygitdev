import { combineReducers } from 'redux';
import ReducerCases from './CasesData';
// import ReducerActiveCase from './ReducerActiveCase';
const allReducers = combineReducers({
  portoCases: ReducerCases,
  // activePortoCase: ReducerActiveCase
});
export default allReducers;