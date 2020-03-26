export default (state=null, action) => {
  console.log("REDUCER", action.payload)
  switch (action.type) {
  case 'SELECTED_CATEGORY': return action.payload;
  default: return state;
  }
};