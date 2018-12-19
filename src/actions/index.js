//Hela exoport cons = Action Creator
export const selectCase = (caseItem) => {
  //Det som returneras är en Action
 console.log('Du valde: ', caseItem.headline);
  return {
    type: 'SELECT_CASE',
    payload: caseItem
  };
};
