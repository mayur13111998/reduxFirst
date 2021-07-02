import axios from "axios";

export const fetchProduct = () => {
  return async (dispatch) => {
    await axios.get("http://127.0.0.1:3333/api/product").then((res) => {
      dispatch({ type: "FETCH_PRODUCT", payload: res.data });
    });
  };
};
