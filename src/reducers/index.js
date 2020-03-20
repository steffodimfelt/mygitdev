import { combineReducers } from 'redux';
import casesData from './CasesData';
import colorsData from './ColorsData';
import employerData from './EmployerData';
import toolsData from './ToolsData';
import tasksData from './TasksData';
import setCaseDetails from './SetCaseDetails';
import caseReducers from './CaseReducers';

const allReducers = combineReducers({
  casesData,
  colorsData,
  employerData,
  toolsData,
  tasksData,
  setCaseDetails,
  caseReducers
});
export default allReducers;