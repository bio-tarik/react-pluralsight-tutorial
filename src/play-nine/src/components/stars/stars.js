import React from 'react';

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);
  const arrayOfStars = Array.from(Array(numberOfStars).keys());

  return (
    <div className="col-5">
      {arrayOfStars.map(i => <i key={i} className="fa fa-star"></i>)}
    </div>);
}

export default Stars;