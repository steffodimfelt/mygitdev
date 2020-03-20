const initState = {
  toggleMenu: false,
};

export default (state=initState, action) => {
  switch(action.type){
  case 'TOGGLE_MENU': return {...state, toggleMenu: action.payload};
  default:
    return state;
  }
};