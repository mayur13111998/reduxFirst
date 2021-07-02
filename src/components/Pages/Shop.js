import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addproduct } from "../../actions/CartActions";
import { fetchProduct } from "../../actions/ProductActions";
import ProductCart from "../shop/ProductCart";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const product = useSelector((state) => state.Product);
  const addCart = (id, name, price) => {
    const data = {
      product_id: id,
      product_name: name,
      product_price: price,
      quantity: 1,
      product_total_price: price,
    };
    dispatch(addproduct(data));
  };

  return (
    <div className="container my-10">
      <div className="row">
        {product.map((data, index) => {
          const { product_id, product_name, product_price } = data;
          return (
            <div className="col-md-3 col-sm-2 mb-3" key={index}>
              <ProductCart
                name={product_name}
                price={product_price}
                id={product_id}
                addCart={addCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
