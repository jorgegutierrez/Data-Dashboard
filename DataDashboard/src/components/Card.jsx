import React from 'react'
import '../styles/card.css';


const Card = (props) => {
  return (
    <div className='Card'>
      <h1 className="number">{props.number}</h1>
      <h2 className='metric'>{props.metric}</h2>
    </div>
  );
}

export default Card;