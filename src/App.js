import React, { Component } from 'react';
import logo from './robot.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Hey Buket it's your first app, Good One!!!</h1>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <div>
            <div className='container'>
              <div className = 'item'>Black Mirror</div>
              <div className = 'item'>Man in Black</div>
              <div className = 'item'>Star Wars</div>
            </div>
            <div className='container'>
              <div className = 'item'>Black Mirror</div>
              <div className = 'item'>Man in Black</div>
              <div className = 'item'>Star Wars</div>
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
