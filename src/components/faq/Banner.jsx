import React from "react";
import car from "../../images/faq/banner/car.png";

export default function Banner() {
  return (
    <section className="screenSize header">
      <div className="header-content">
        <img src={car} alt="car" height="100%" width="100%" />
      </div>
    </section>
  );
}
