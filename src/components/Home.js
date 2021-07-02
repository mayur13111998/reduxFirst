import React, { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const [date_, setDate_] = useState({
    hours: 0,
    minites: 0,
    seconds: 0,
  });
  const load = () => {
    let date = new Date();
    setDate_({
      hours: date.getHours(),
      minites: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  };
  setInterval(() => {
    load();
  }, 1000);
  // mayur
  return (
    <div className="container-fluid home">
      <div className="m-auto text-center">
        <p className="text-secondary">
          We offer a hot deal offer every festival
        </p>
        <h2 className="mt-4 mb-20">DEAL OF THE DAY!</h2>
        <h1 className="mb-20">
          479 DAYS {date_.hours} HOURS {date_.minites} MINUTES {date_.seconds}
        </h1>
        <button className="text-uppercase addcart_button ">
          Shop collection
        </button>
      </div>
    </div>
  );
};

export default Home;
