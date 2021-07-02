export const insert_productcart = (data) => {
  return {
    type: "ADD_PRODUCT_CART",
    payload: data,
  };
};

export const increment_quantity = () => {
  return {
    type: "INCREMENT_QTY",
  };
};

export const decrement_quantity = () => {
  return {
    type: "DECREMENT_QTY",
  };
};

export const remove_productcart = () => {
  return {
    type: "REMOVE_PRODUCT_CART",
  };
};
