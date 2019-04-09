import React from 'react';
import { Link } from 'react-router-dom';

export default class Details extends React.Component {

  constructor() {
    super(); 
      this.state = {
        welcomeMessage: 'Hello, Welcome to the movie details Page with state Details'
      };
    }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState( {
        welcomeMessage : "Wait for me, I'm coming"
      });
    }, 3000);

  }
  render() {
    return (
      <div>
        <Link to='/'>Back to Home Page</Link>
        <h1>{this.state.welcomeMessage}</h1>
        
      </div>
    );
  }

}
