import React from 'react';
import { Link } from 'react-router-dom';
import getTvShow from './getTvShow.js';
// import NotFound from './NotFound';
import { Redirect } from 'react-router-dom';

export default class Details extends React.Component {
// first again get empty array state
// CDM data will come from fetch api (rest/shows)
// fetch then- showList.find(matching url)
// in the render, try to use the data from backend showsList like in TvShow by using this.state.name
// instead do state destructuring
  constructor() {
    super();
    this.state = {
      tvShow: {}
    };
  }

  componentDidMount() {
    let tvShowId = this.props.match.params.tvShowId;
    let tvShow = getTvShow().find(show => show.id === tvShowId);

    this.setState({ tvShow });

  }
  render() {
    let movie = this.state.tvShow;
    if (movie) {
      return (
        <div>
          <Link to="/" > Back to HomePage </Link>
          <h1>{movie.name}</h1>
          <div className='container'>
            <h2>{movie.synopsis}</h2>
            <div className ='item'><img src={movie.image} alt={`${movie.name}`} /></div>
          </div>
        </div>
      );
    }
    else {
      return <Redirect to='/not-found' />;
    }
  }
}
