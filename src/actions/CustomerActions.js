import axios from "axios";

export const fetchCustomer = () => {
  return async (dispatch) => {
    await axios.get("http://127.0.0.1:3333/api/customer").then((res) => {
      dispatch({ type: "FETCH_CUSTOMER", payload: res.data.customer });
    });
  };
};
