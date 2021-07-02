import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ price, name, id, addCart }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Link to={`/product/${id}`}>
        <img
          src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-02.jpg"
          className="card-img-top"
          alt={name}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <button
          className="btn btn-primary"
          onClick={() => addCart(id, name, price)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
