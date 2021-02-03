import React from "react";
import newsletter from "../../images/newsletter.png";
import arrow from "../../images/arrow-down.png";
import hour from "../../images/hour-svgrepo-com.svg";
const Filter = () => {
  return (
    <div className="filter">
      <span>Filters : </span>
      <span>
        <img className="icon" src={newsletter} alt="newsletter-icon" />my
        sources{" "}
      </span>{" "}
      <img className="icon" src={arrow} alt="arrow-icon" />
      |
      <span>
        {" "}<img className="icon" src={hour} alt="hour-icon" /> past month
      </span>
      <img className="icon" src={arrow} alt="arrow-icon" />
    </div>
  );
};

export default Filter;
