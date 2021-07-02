import React from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { GoDash } from "react-icons/go";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  cartProductQuantityDREMENR,
  cartProductQuantityINCREMENT,
  removeCartProduct,
} from "../../actions/CartActions";
const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { total, products } = useSelector((state) => state.Cart);
  if (products.length === 0) {
    return (
      <div className="container-fluid cart_main flex">
        <div className="text-center m-auto flex">
          <div className="m-auto">
            <div className="flex">
              <div className="m-auto py-4" style={{ fontSize: "100px" }}>
                <FiShoppingCart />
              </div>
            </div>
            <div className="h1 py-2">Your Cart is Empty</div>
            <div className="h4">Add something to make me happy :)</div>
            <button
              className="btn btn-primary mt-2"
              onClick={() => history.push("/shop")}
            >
              continue shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid cart_main">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-9 table-responsive">
            <table className="table table-responsive">
              <thead style={{ backgroundColor: "#767676" }}>
                <tr className="text-white">
                  <th>Product Name</th>
                  <th>Product Quantity</th>
                  <th></th>
                  <th>Product Price</th>
                  <th></th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((data, index) => (
                  <tr key={index}>
                    <td>{data.product_name}</td>
                    <td className="flex">
                      <div
                        className="self-center p-2 border-1 w-10 h-7 flex cursor-pointer"
                        onClick={() =>
                          dispatch(cartProductQuantityDREMENR(data.product_id))
                        }
                      >
                        <div className="m-auto">
                          <GoDash />
                        </div>
                      </div>
                      <div className="w-10 h-7 text-center border-1">
                        {data.quantity}
                      </div>

                      <div
                        className="self-center p-2 border-1 w-10 h-7 flex cursor-pointer"
                        onClick={() =>
                          dispatch(
                            cartProductQuantityINCREMENT(data.product_id)
                          )
                        }
                      >
                        <div className="m-auto text-dark">
                          <GrAdd />
                        </div>
                      </div>
                    </td>
                    <td>x</td>
                    <td>{data.product_price}</td>
                    <td>=</td>
                    <td>{data.product_total_price}</td>
                    <td align="center" style={{ color: "#767676" }}>
                      <MdDelete
                        onClick={() => {
                          dispatch(removeCartProduct(data.product_id));
                          history.push("/cart");
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-3">
            <div className="">
              <div>Total : {total}</div>
              <button
                className="btn text-white "
                style={{ backgroundColor: "#767676", padding: "6px 50px" }}
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
