import React from "react";
import { GoDash } from "react-icons/go";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  cartProductQuantityINCREMENT,
  removeCartProduct,
  cartProductQuantityDREMENR,
} from "../../actions/CartActions";

const CartProduct = (data) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    product_name,
    product_price,
    quantity,
    product_total_price,
    product_id,
  } = data.data;

  const index = data.index;
  return (
    <tr>
      <td>{product_name}</td>
      <td className="flex">
        <div
          className="self-center p-2 border-1 w-10 h-7 flex cursor-pointer"
          onClick={() => dispatch(cartProductQuantityDREMENR(index))}
        >
          <div className="m-auto">
            <GoDash />
          </div>
        </div>
        <div className="w-10 h-7 text-center border-1">{quantity}</div>

        <div
          className="self-center p-2 border-1 w-10 h-7 flex cursor-pointer"
          onClick={() => dispatch(cartProductQuantityINCREMENT(index))}
        >
          <div className="m-auto text-dark">
            <GrAdd />
          </div>
        </div>
      </td>
      <td>x</td>
      <td>{product_price}</td>
      <td>=</td>
      <td>{product_total_price}</td>
      <td align="center" style={{ color: "#767676" }}>
        <MdDelete
          onClick={() => {
            dispatch(removeCartProduct(product_id));
            history.push("/cart");
          }}
        />
      </td>
    </tr>
  );
};

export default CartProduct;
