import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import ImageFooter from "./ImageFooter";
import LinkCompoentn from "./LinkCompoentn";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container footer_top my-4">
        <div className="text-uppercase">LAST CHANCE TO WIN OUR DISCOUNT!</div>
        <div className="social_network">
          <div className="text-uppercase mr-5">ON SOCIAL NETWORKS</div>
          <div>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <GrInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ borderBottom: " 1px #7d7d7d solid" }}
      ></div>

      <div className="container my-xxl-5 footer_middle">
        <div className="row flex justify-content-between">
          <div className="col-md-2">
            <div className="my-4 footer_p">
              <img
                src="https://hongo.b-cdn.net/wp-content/uploads/2019/05/footer-logo.png"
                alt="logo company"
              />
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum is simply dummy text of industry lorem
                ipsum is simply dummy typesetting text.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-4 footer_p">
              <p>CATEGORIES</p>
            </div>

            <div>
              <ul>
                <LinkCompoentn link="Women collection" />
                <LinkCompoentn link="Men collection" />
                <LinkCompoentn link="Child collection" />
                <LinkCompoentn link="Accessories" />
                <LinkCompoentn link="Leather shoes" />
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-4 footer_p">
              <p>CUSTOMER</p>
            </div>
            <div>
              <ul>
                <LinkCompoentn link="Help and support" />
                <LinkCompoentn link="Shipping and delivery" />
                <LinkCompoentn link="Payment method" />
                <LinkCompoentn link="Terms and conditions" />
                <LinkCompoentn link="Privacy policy " />
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-4 footer_p">
              <p>COMPANY</p>
            </div>{" "}
            <div>
              <ul>
                <LinkCompoentn link="Women collection" />
                <LinkCompoentn link="About company" />
                <LinkCompoentn link="Our services" />
                <LinkCompoentn link="Contact us" />
                <LinkCompoentn link="Get the voucher" />
                <LinkCompoentn link="Store locator" />
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="my-4 footer_p">
              <p>FOLLOW US ON INSTAGRAM</p>
            </div>
            <div className="row">
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-01.jpg" />
              </div>
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-02.jpg" />
              </div>
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-03.jpg" />
              </div>
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-04.jpg" />
              </div>
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-05.jpg" />
              </div>
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-06.jpg" />
              </div>
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-07.jpg" />
              </div>
              <div className="col-3">
                <ImageFooter src="https://hongo.b-cdn.net/wp-content/uploads/2019/09/infa-08.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
