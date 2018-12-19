import { combineReducers } from 'redux';
import ReducerCases from './ReducerCases';
import ReducerActiveCase from './ReducerActiveCase';
const allReducers = combineReducers({
  portoCases: ReducerCases,
  activePortoCase: ReducerActiveCase
});
export default allReducers;