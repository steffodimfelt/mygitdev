//Hela exoport cons = Action Creator
export const selectCase = (caseItem) => {
  //Det som returneras är en Action

  return {
    type: 'SELECT_CASE',
    payload: caseItem
  };
};
