import React, { Component } from 'react';
import Stars from '../stars/stars';
import Button from '../button/button';
import Answer from '../answer/answer';
import Numbers from '../numbers/numbers';

class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr></hr>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br/>
        <Numbers/>
      </div>
    )
  }
}

export default Game;