import React from 'react';
import "./downbox.css"
function Rightdownbox({name,date,icon1}) {
  return (
    <div>
    <div className='rightdownbox ' >
        <div>
     <strong>{name}</strong>
      <p className='margin1'>{date}</p>
      </div>
      <div>
      {icon1}
      </div>
    </div>

    </div>
  );
}

export default Rightdownbox;
