import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductByID } from "../../actions/ProductByIDActions";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { GoDash } from "react-icons/go";
import { addproduct } from "../../actions/CartActions";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(fetchProductByID(id));
  }, []);

  const [data, setdata] = useState({
    product_id: 0,
    quantity: 1,
    product_name: "",
    product_price: 0,
    product_total_price: 0,
  });
  const product = useSelector((state) => state.ProductByID);
  const { product_id, product_name, product_price } = product;
  useEffect(() => {
    setdata({
      product_id,
      product_name,
      product_price,
      quantity,
      product_total_price: quantity * product_price,
    });
  }, [quantity]);
  useEffect(() => {
    setdata({
      product_id,
      product_name,
      product_price,
      quantity,
      product_total_price: product_price,
    });
  }, [product]);

  return (
    <div className="container-fluid py-10">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-04-a-200x255.jpg.webp"
              alt={product_name}
            />
          </div>
          <div className="col-sm-6 py-10">
            <div style={{ color: "#808080", fontSize: "12px" }}>
              Home{" "}
              <MdKeyboardArrowRight
                style={{ display: "inline-block", fontSize: "17px" }}
              />
            </div>
            <div className="mt-6 bt-3">{product_name}</div>
            <div>
              <FaRupeeSign
                style={{ display: "inline-block", fontSize: "17px" }}
              />
              {product_price}
            </div>
            <hr></hr>
            <div
              className="py-2"
              style={{ fontSize: "12px", color: "#808080", width: "400px" }}
            >
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <hr></hr>
            <div className="flex">
              <div className="border-1 w-10 h-14 flex">
                <div className="m-auto">{quantity}</div>
              </div>
              <div className="flex flex-column">
                <div
                  className="self-center p-2 border-1 w-10 h-7 flex cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <div className="m-auto">
                    <GrAdd />
                  </div>
                </div>
                <div
                  className="self-center p-2 border-1 w-10 h-7 flex cursor-pointer"
                  onClick={() => {
                    if (quantity === 1) {
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  <div className="m-auto text-dark">
                    <GoDash />
                  </div>
                </div>
              </div>
              <div className="flex-end ml-10">
                <button
                  className="addcart_button"
                  onClick={() => dispatch(addproduct(data))}
                >
                  Add Cart
                </button>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
