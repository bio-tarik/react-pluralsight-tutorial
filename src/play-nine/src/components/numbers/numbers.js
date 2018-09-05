import React from 'react';

const Numbers = (props) => {
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) => <span key={i}>{number}</span>)}
      </div>
    </div>
  );

}

Numbers.list = Array.from(Array(9).keys(), n => n + 1);

export default Numbers;