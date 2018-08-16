import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/firstComponent/Button'
import Result from './components/firstComponent/Result';

class App extends Component {
  state = { counter: 0 };

  incrementCounter = (increment) => {
    this.setState((prevState) => ({
      counter: prevState.counter + increment
    }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
