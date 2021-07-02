import axios from "axios";

export const fetchProductByID = (product_id) => {
  return async (dispatch) => {
    await axios
      .get(`http://127.0.0.1:3333/api/product/${product_id}`)
      .then((res) => {
        let data = res.data.product;
        dispatch({ type: "FETCH_PRODUCT_BYID", payload: data });
      });
  };
};
