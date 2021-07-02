const initialState = [];

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return [...action.payload];
    default:
      return state;
  }
};

export default ProductReducer;
