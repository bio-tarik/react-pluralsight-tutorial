import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} alt="git"/>
      <div style={{display: 'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
        <div className="info" style={{fontSize: '1.25em'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

export default Card;