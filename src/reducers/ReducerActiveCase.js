export default (state=null, action) => {
  switch(action.type){
  case 'SELECT_CASE':
    return action.payload;
  default:
    return state;
  }
};