import React from "react";
import "./smallbox.css";

function MidBox({ position, date, Men, women, img }) {
  return (
    <div className="box2">
      <div className="leftmid">
        <div className="first">
          <h3 className="small">{position}</h3>
          <h1 className="small">{date}</h1>
          <div className="men">
            <p className="small">{Men}</p>
            <p className="small">{women}</p>
          </div>
        </div>
      </div>
      <div className="rightmid">
        <img src={img} alt="ss" />
      </div>
    </div>
  );
}

export default MidBox;
