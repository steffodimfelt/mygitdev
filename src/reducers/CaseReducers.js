const initState = {
  toggleMenu: false,
  categories: {}
};

export default (state=initState, action) => {
  switch(action.type){
  case 'TOGGLE_MENU': return {...state, toggleMenu: action.payload};
  case 'SET_CATEGORIES': return {...state, categories: action.payload};
  default:
    return state;
  }
};

