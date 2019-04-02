import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <div className='container'>
              <div className='item'><h2>Black Mirror</h2></div>
              <div className='item'><h2>Man in Black</h2></div>
              <div className='item'><h2>Star Wars</h2></div>
            </div>
            <div className='container'>
              <div className='item'><h2>Black Mirror</h2></div>
              <div className='item'><h2>Man in Black</h2></div>
              <div className='item'><h2>Star Wars</h2></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
