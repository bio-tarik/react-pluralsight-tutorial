import React, { Component } from 'react';

class Form extends Component {
  state = { userName: '' };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => resp.json())
      .then(data => {
          this.props.onSubmit(data);
          this.setState({ userName: '' });
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.userName}
          onChange={(event) => { this.setState({ userName: event.target.value }) }}
          placeholder="Github userame"
          required />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form;