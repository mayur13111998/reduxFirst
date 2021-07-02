import { combineReducers } from "redux";
import CartReducer from "./CartReducers";
import CustomerReducer from "./CustomerReducers";
import ProductByIDReducer from "./ProductByIDReducer";
import ProductCartReducer from "./ProductCartReducers";
import ProductReducer from "./ProductReducer";

const allReducer = combineReducers({
  Customer: CustomerReducer,
  Product: ProductReducer,
  Cart: CartReducer,
  ProductCart: ProductCartReducer,
  ProductByID: ProductByIDReducer,
});

export default allReducer;
