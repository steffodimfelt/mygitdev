export const selectCase = caseItem => ({
  type: 'SELECT_CASE',
  payload: caseItem
});

export const setCaseDetails = object => ({
  type: 'SET_CASE_DETAILS',
  payload: object
});

export const toggleMenu = bool => ({
  type: 'TOGGLE_MENU',
  payload: bool
});

