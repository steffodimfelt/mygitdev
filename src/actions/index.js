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

export const mapCategories = () => ({
  type: 'MAP_CATEGORIES',
});

export const setCategories = object => ({
  type: 'SET_CATEGORIES',
  payload: object,
});

export const pickCategory = object => {
  console.log("ACTION", object)
  return {
    type: 'SELECTED_CATEGORY',
    payload: object,
  };
};

