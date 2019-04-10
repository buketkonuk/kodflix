import React from 'react';
import { Link } from 'react-router-dom';
import getTvShow from './getTvShow.js';

export default class Details extends React.Component {

  constructor() {
    super(); 
      this.state = {
        tvShow: {}
      };
    }
  
  componentDidMount() {
    let tvShowId = this.props.match.params.tvShowId;
    let tvShow = getTvShow().find(show => show.id === tvShowId);

    this.setState( {tvShow });


  }
  render() {
    return (
      <div>
        <Link to='/'>Back to Home Page</Link>
        <h1>{this.state.tvShow.name}</h1>
        
      </div>
    );
  }

}
