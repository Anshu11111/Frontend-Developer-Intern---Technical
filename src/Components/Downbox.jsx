import React from 'react';
import "./downbox.css"
function Downbox({name,date,icon,icon1}) {
  return (
    <div>
    <div className='downbox' >
        <div>
     <strong>{name}</strong>
      <p className='margin1'>{date}</p>
      </div>
      <div className='icons'>
     <div className='mg'> {icon}</div>
      <div>{icon1}</div>
      </div>
    </div>

    </div>
  );
}

export default Downbox;
