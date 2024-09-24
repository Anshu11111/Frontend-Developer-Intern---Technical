import React from "react";
import "./smallbox.css";

function SmallBox({ position, date, urgent, color ,color2}) {
  return (
    <div className="box1" style={{ backgroundColor: color }}> {/* Apply color via inline styles */}
      <div className="first">
        <h3 className="small">{position}</h3> {/* Using the "position" prop */}
        <h1 className="small">{date}</h1>     {/* Using the "date" prop */}
        <p className="small" style={{ color: color2 }}>{urgent}</p>    {/* Using the "urgent" prop */}
      </div>
    </div>
  );
}

export default SmallBox;

