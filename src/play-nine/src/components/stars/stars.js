import React from 'react';

const Stars = (props) => {
  const arrayOfStars = Array.from(Array(props.numberOfStars).keys());

  return (
    <div className="col-5">
      {arrayOfStars.map(i => <i key={i} className="fa fa-star"></i>)}
    </div>);
}

export default Stars;