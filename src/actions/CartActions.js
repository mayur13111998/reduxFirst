import axios from "axios";

export const addproduct = (data) => {
  return {
    type: "Add_ORDER_ITEMS",
    payload: data,
  };
};

export const customer_id_add = (data) => {
  return {
    type: "ADD_CUSTOMER_ID",
    payload: data,
  };
};

export const removeCartProduct = (data) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: data,
  };
};

export const fetchTotal = () => {
  return {
    type: "FETCH_TOTAL",
  };
};

export const addOrder = (data) => {
  return async (dispatch) => {
    axios.post("http://127.0.0.1:3333/api/redux", data).then((res) => {
      console.log(res);
    });
  };
};

export const cartProductQuantityINCREMENT = (index) => {
  return {
    type: "CART_PRODUCT_QUANTITY_INCREMENR",
    payload: index,
  };
};

export const cartProductQuantityDREMENR = (index) => {
  return {
    type: "CART_PRODUCT_QUANTITY_DECREMENT",
    payload: index,
  };
};
