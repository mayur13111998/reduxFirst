// init code
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  addproduct,
  customer_id_add,
  removeCartProduct,
} from "../actions/CartActions";
import { fetchCustomer } from "../actions/CustomerActions";
import { fetchProduct } from "../actions/ProductActions";
import { fetchProductByID } from "../actions/ProductByIDActions";
import {
  remove_productcart,
  increment_quantity,
  decrement_quantity,
} from "../actions/ProductCartActions";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
// Customer Component
const Customer = ({ data }) => {
  const { customer_id, customer_name } = data;
  return <option value={customer_id}>{customer_name}</option>;
};

// Product component
const Product = ({ data }) => {
  const { product_id, product_name } = data;
  return <option value={product_id}>{product_name}</option>;
};

// Main and HOME Compoent
const DemoRedux = () => {
  // Dispatch
  const dispatch = useDispatch();

  // useSelectors
  const customers = useSelector((state) => state.Customer);
  const products = useSelector((state) => state.Product);
  const ProductCart = useSelector((state) => state.ProductCart);
  const { quantity, product_total_price, product_price } = ProductCart;
  const Cart = useSelector((state) => state.Cart.products);
  const Total = useSelector((state) => state.Cart.total);
  const cartMain = useSelector((state) => state.Cart);
  // useRef
  const Product_ref = useRef();
  const AddProduct_ref = useRef();
  const Table_Ref = useRef();

  const load = () => {
    dispatch(fetchCustomer());
    dispatch(fetchProduct());
    Product_ref.current.style.display = "none";
    AddProduct_ref.current.style.display = "none";
    Table_Ref.current.style.display = "none";
  };

  // UseEffect
  useEffect(() => {
    load();
  }, []);

  // useState
  const [Product__, setProduct] = useState();
  // Handle Events
  const handleProduct = (e) => {
    setProduct(e.target.value);
    dispatch(fetchProductByID(e.target.value));
    AddProduct_ref.current.style.display = "inherit";
  };

  // return
  return (
    <div className="container my-4">
      <select
        className="form-select"
        defaultValue=""
        aria-label="Default select example"
        onChange={(e) => {
          dispatch(customer_id_add(e.target.value));
          Product_ref.current.style.display = "inherit";
        }}
      >
        <option value="" selected disabled>
          Customer
        </option>

        {customers.map((data, index) => (
          <Customer key={index} data={data} />
        ))}
      </select>
      <div ref={Product_ref}>
        <select
          className="form-select my-4"
          defaultValue={Product__}
          value={Product__}
          aria-label="Default select example"
          onChange={handleProduct}
        >
          <option value="" selected disabled>
            Product
          </option>

          {products.map((data, index) => (
            <Product key={index} data={data} />
          ))}
        </select>
      </div>
      <div ref={AddProduct_ref}>
        <button
          className="btn btn-secondary mx-2"
          onClick={() => {
            dispatch(decrement_quantity());
          }}
        >
          -
        </button>
        quantity : {quantity}
        <button
          className="btn btn-secondary mx-2"
          onClick={() => dispatch(increment_quantity())}
        >
          +
        </button>
        <br /> Product Price :{product_price}
        <br />
        Total Price:{product_total_price}
        <button
          className="btn btn-primary my-3"
          onClick={() => {
            dispatch(addproduct(ProductCart));
            dispatch(remove_productcart());
            setProduct("");
            Table_Ref.current.style.display = "inherit";
          }}
        >
          Add Product
        </button>
      </div>

      <div ref={Table_Ref}>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td> </td>
              <td>Product Price</td>
              <td> </td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {Cart.map((data, index) => (
              <tr key={data.product_id}>
                <td>{index + 1}</td>
                <td>{data.product_name}</td>
                <td>
                  <button className="btn btn-secondary mx-2">-</button>
                  {data.quantity}
                  <button className="btn btn-secondary mx-2">+</button>
                </td>
                <td>x</td>
                <td>{data.product_price}</td>
                <td>=</td>
                <td>{data.product_total_price} </td>
                <td>
                  <IconButton
                    onClick={() => dispatch(removeCartProduct(data.product_id))}
                  >
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="text-right">{Total}</h3>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addOrder(cartMain))}
        >
          {" "}
          Add Order
        </button>
      </div>
    </div>
  );
};

export default React.memo(DemoRedux);
