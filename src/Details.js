import React from 'react';
// import { Link } from 'react-router-dom';
import getTvShow from './getTvShow.js';
// import NotFound from './NotFound';
import { Redirect } from 'react-router-dom';

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
    let movie = this.state.tvShow;
    if (movie) {
      return <h1>{this.state.tvShow.name}</h1>;
    }
    else {
      return <Redirect to='/not-found' />;
    }

    // return (
    //   <div>
    //     <Link to='/'>Back to Home Page</Link>
    //     <h1>{this.state.tvShow.name}</h1>
        
    //   </div>
    // );
  }

}
