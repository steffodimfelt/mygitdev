import {setCaseDetails, setCategories} from '../actions/index';
import { default as categoriesArray } from '../CategoriesConstants';
import {EVERYTHING} from '../CategoriesConstants';

// START: Help functions  ----------
const convertStringToNumberArray = string => {
  return string.split(',').map(Number);
};

const pickIDFromNumberPushTitleToArray = (objectArray, numberArray) => {
  let newArray = [];
  for (const numberValue of numberArray) {
    for (const objectValue of objectArray) {
      objectValue.id === numberValue && (newArray.push(objectValue.title));
    }
  }
  newArray.sort((a, b) => a.localeCompare(b));
  return newArray;
};

const convertNumberToArray = (arrayIn, dataArrayIn) => {
  const convertNumberArray = convertStringToNumberArray(arrayIn);
  const newArrayOut = pickIDFromNumberPushTitleToArray(dataArrayIn, convertNumberArray);
  return newArrayOut;
};

const setCasesByCategory = (arrayIn, categoryTitle) => {
  let newArray = [];
  for (const caseObject of arrayIn) {
    caseObject.categories[categoryTitle] && (newArray.push(caseObject));
  }
  newArray.sort((a, b) => a.headline.localeCompare(b.headline));
  return newArray;
};


// END: Help functions  ----------

const casesMiddleware = store => next => action => {
  // console.log('store', store.getState());
  const {casesData, colorsData, employerData, toolsData, tasksData, clientsData} = store.getState();
  if (action.type === 'SELECT_CASE') {
    let case_LOCAL = action.payload; 

    // Set Colorspace of project
    case_LOCAL.colorSpace = convertNumberToArray(case_LOCAL.colorSpace, colorsData);

    // Set Employer of project
    case_LOCAL.employer = convertNumberToArray(case_LOCAL.employer, employerData);

    // Set Tools of project
    case_LOCAL.tools = convertNumberToArray(case_LOCAL.tools, toolsData);

    // Set Tasks of project
    case_LOCAL.tasks = convertNumberToArray(case_LOCAL.tasks, tasksData);

    // Set Clients of project
    case_LOCAL.client = convertNumberToArray(case_LOCAL.client, clientsData);

    // Dispatch new project setup
    store.dispatch(setCaseDetails(case_LOCAL));
  }

  if (action.type === 'MAP_CATEGORIES') {
    let category_LOCAL = {};
    
    for (const category of categoriesArray) {
      category_LOCAL[category] = setCasesByCategory(casesData, category);
      category_LOCAL[category].category = category;
    }
    category_LOCAL[EVERYTHING] = casesData;
    category_LOCAL[EVERYTHING].category = EVERYTHING;
    store.dispatch(setCategories(category_LOCAL));
  }
  next(action);
};

export default casesMiddleware;