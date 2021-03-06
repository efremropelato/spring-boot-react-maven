import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: ""
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/api/hello");
    const message = await response.text();
    this.setState({ message: JSON.parse(message) });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.message.hello}</h1>
          <h2>Welcome to Spring Boot React!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
