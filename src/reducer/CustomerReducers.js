const initialState = [];
const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMER":
      return [...action.payload];
    default:
      return state;
  }
};
export default CustomerReducer;
