export default (state=null, action) => {
  switch (action.type) {
  case 'SELECTED_CATEGORY': return action.payload;
  default: return state;
  }
};