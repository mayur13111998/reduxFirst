const initialState = {
  product_id: "",
  product_name: "",
  product_price: 0,
};

const ProductByIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_BYID":
      let { product_id, product_name, product_price } = action.payload;
      return {
        ...state,
        product_id,
        product_name,
        product_price,
      };
    default:
      return state;
  }
};

export default ProductByIDReducer;
