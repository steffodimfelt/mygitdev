import { combineReducers } from 'redux';
import casesData from './CasesData';
import colorsData from './ColorsData';
import setCaseDetails from './SetCaseDetails';
const allReducers = combineReducers({
  casesData,
  colorsData,
  setCaseDetails
});
export default allReducers;