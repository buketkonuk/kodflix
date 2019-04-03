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
              <div className='overlay'>
                <h2>Annie Hall</h2>
              </div>
            </div>
            <div className='item'><img src={backtothefuture} alt='back tot he future' />
              <div className='overlay'>
                <h2>Back to the Future</h2>
              </div>
            </div>
            <div className='item'><img src={final_destination} alt='final destination' />
              <div className='overlay'>
                <h2>Final Destination</h2>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='item'><img src={hancock} alt='annie_hall' />
              <div className='overlay'>
                <h2>Hancock</h2>
              </div>
            </div>
            <div className='item'><img src={obsessed} alt='obsessed' />
              <div className='overlay'>
                <h2>Obsessed</h2>
              </div>
            </div>
            <div className='item'><img src={vertigo} alt='vertigo' />
              <div className='overlay'>
                <h2>Vertigo</h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
