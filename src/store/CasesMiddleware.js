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
  return newArray;
};


const casesMiddleware = store => next => action => {
  console.log('store', store.getState());
  const {casesData, colorsData} = store.getState();
  if (action.type === 'SELECT_CASE') {
    let case_LOCAL = action.payload; 

    // Set Colorspace of project
    const colorSpace = convertStringToNumberArray(case_LOCAL.colorSpace);
    const setColor_LOCAL = pickIDFromNumberPushTitleToArray(colorsData, colorSpace);
    case_LOCAL.colorSpace = setColor_LOCAL;

    
    store.dispatch(setCaseDetails(case_LOCAL));
  }
  next(action);
};

export default casesMiddleware;