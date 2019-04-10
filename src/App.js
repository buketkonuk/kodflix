import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Gallery from "./Gallery";
import Details from "./Details";
import NotFound from './NotFound';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path="/:tvShowId" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
