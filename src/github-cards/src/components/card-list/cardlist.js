import React from 'react';
import Card from "../card/card";

const CardList = (props) => {
  return (
    <div>
      {props.cards.map((card, i) => <Card {...card} key={i}/>)}
    </div>
  );
}

export default CardList;