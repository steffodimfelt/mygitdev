import { combineReducers } from 'redux';
import casesData from './CasesData';
import colorsData from './ColorsData';
import employerData from './EmployerData';
import toolsData from './ToolsData';
import tasksData from './TasksData';
import setCaseDetails from './SetCaseDetails';
import caseReducers from './CaseReducers';
import clientsData from './ClientData';

const allReducers = combineReducers({
  casesData,
  colorsData,
  employerData,
  toolsData,
  tasksData,
  setCaseDetails,
  caseReducers,
  clientsData
});
export default allReducers;