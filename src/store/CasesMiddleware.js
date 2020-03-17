// Help functions
const convertStringToStringArray = string => {
  return string.split(',');
};

const convertStringToNumberArray = string => {
  return string.split(',').map(Number);
};

const switchNumberArrayToStringArray = (numberArray, stringArray) => {
  const newArray = [];
  numberArray.map((numberValue) => {
    stringArray.map((stringValue, stringIndex) => {
      if (numberValue === stringIndex) {
        newArray.push(stringArray[numberValue]);
      }
    });
  });
  return newArray;
};


const casesMiddleware = store => next => action => {
  console.log('store', store.getState());
  if (action.type === 'SELECT_CASE') {
      const case_LOCAL = action.payload; 
    console.log('SELECT_CASE', case_LOCAL);
    const convert = convertStringToNumberArray('1,2')
    console.log('convert', convert)
    const test = switchNumberArrayToStringArray(convertStringToNumberArray('1,2'), 
      convertStringToStringArray('case0, case1, case2'));
    console.log('test', test)
  }
  next(action);
};

export default casesMiddleware;