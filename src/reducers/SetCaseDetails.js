export default (state=null, action) => {
  switch(action.type){
  case 'SET_CASE_DETAILS':
    return action.payload;
  default:
    return state;
  }
};