import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Gallery from "./Gallery";
import Details from "./Details";


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Gallery} />
          <Route exact path="/:tvShowId" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
