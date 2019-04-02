import React, { Component } from 'react';
import './App.css';
import annie_hall from "./img/annie_hall.jpg";
import backtothefuture from "./img/back_to_the_future.jpg";
import final_destination from "./img/final_destination.jpg";
import hancock from "./img/hancock.jpg";
import obsessed from "./img/obsessed.jpg";
import vertigo from "./img/vertigo.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to Kodflix</h2>
        <main>
          <div className='container'>
            <div className='item'><img src={annie_hall} alt='annie_hall' />
              <h1>Annie Hall</h1>
            </div>
            <div className='item'><img src={backtothefuture} alt='back tot he future' />
              <h1>Back to the Future</h1>
            </div>
            <div className='item'><img src={final_destination} alt='final destination' />
              <h1>Final Destination</h1>
            </div>
          </div>
          <div className='container'>
            <div className='item'><img src={hancock} alt='annie_hall' />
              <h1>Hancock</h1>
            </div>
            <div className='item'><img src={obsessed} alt='obsessed' />
              <h1>Obsessed</h1>
            </div>
            <div className='item'><img src={vertigo} alt='vertigo' />
              <h1>Vertigo</h1>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
