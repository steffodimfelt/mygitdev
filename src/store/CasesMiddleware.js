import {setCaseDetails} from '../actions/index';
// Help functions
// const convertStringToStringArray = string => {
//   return string.split(',');
// };

const convertStringToNumberArray = string => {
  return string.split(',').map(Number);
};

// const switchNumberArrayToStringArray = (numberArray, stringArray) => {
//   const newArray = [];
//   numberArray.map((numberValue) => {
//     stringArray.map((stringValue, stringIndex) => {
//       if (numberValue === stringIndex) {
//         newArray.push(stringArray[numberValue]);
//       }
//     });
//   });
//   return newArray;
// };

const pickIDFromNumberPushTitleToArray = (objectArray, numberArray) => {
  const newArray = [];
  numberArray.map(numberValue => {
    objectArray.map(objectValue => {
      objectValue.id === numberValue && (newArray.push(objectValue.title));
    });
  });
  newArray.sort((a, b) => a.localeCompare(b));
  return newArray;
};

const convertNumberToArray = (arrayIn, dataArrayIn) => {
  const convertNumberArray = convertStringToNumberArray(arrayIn);
  const newArrayOut = pickIDFromNumberPushTitleToArray(dataArrayIn, convertNumberArray);
  return newArrayOut;
};


const casesMiddleware = store => next => action => {
//   console.log('store', store.getState());
  const {colorsData, employerData, toolsData, tasksData, clientsData} = store.getState();
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
  next(action);
};

export default casesMiddleware;