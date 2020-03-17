export const selectCase = caseItem => {
  return {
    type: 'SELECT_CASE',
    payload: caseItem
  };
};

export const setCaseDetails = object => {
  return {
    type: 'SET_CASE_DETAILS',
    payload: object
  };
};
