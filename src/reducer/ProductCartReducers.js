const initialState = {
  product_id: "",
  product_name: "",
  product_price: 0,
  quantity: 1,
  product_total_price: 0,
};

const ProductCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_CART":
      let { product_id, product_name, product_price } = action.payload;
      return {
        ...state,
        product_id: product_id,
        product_name: product_name,
        product_price: product_price,
        quantity: 1,
        product_total_price: product_price,
      };
    case "REMOVE_PRODUCT_CART":
      return {
        ...state,
        product_id: "",
        product_name: "",
        product_price: 0,
        product_total_price: 0,
        quantity: 1,
      };
    case "INCREMENT_QTY":
      let qty = state.quantity + 1;
      let price = state.product_price;
      let total_price = qty * price;
      return { ...state, quantity: qty, product_total_price: total_price };
    case "DECREMENT_QTY":
      let qty2 = state.quantity;
      if (qty2 === 1) {
        return state;
      } else {
        qty2 = qty2 - 1;
        let total = qty2 * state.product_price;
        return { ...state, quantity: qty2, product_total_price: total };
      }
    default:
      return state;
  }
};

export default ProductCartReducer;
