import React from "react";
import { Link } from "react-router-dom";

const LinkCompoentn = ({ link }) => {
  return (
    <li className="footer_link">
      <Link to="/"> {link}</Link>
    </li>
  );
};

export default LinkCompoentn;
