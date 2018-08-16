import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.label}: {this.state.counter}
      </button>
    );
  }
}

export default Button;
