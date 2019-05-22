import React from 'react';
import { Link } from 'react-router-dom';
// import NotFound from './NotFound';
import { Redirect } from 'react-router-dom';
import Loading from "./Loading"

export default class Details extends React.Component {
// first again get empty array state
// CDM data will come from fetch api (rest/shows)
// fetch then- showList.find(matching url)
// in the render, try to use the data from backend showsList like in TvShow by using this.state.name
// instead do state destructuring
  constructor() {
    super();
    this.state = {
      tvShow: []
    };
  }

  componentDidMount() {
    fetch("/rest/shows")
      .then(res => res.json())
      .then(ShowsList => {
        let tvShowId = this.props.match.params.tvShowId;
        // console.log(tvShowId);
        let tvShow = ShowsList.find(show => show.id === tvShowId);
        // console.log(tvShow);
        this.setState({ tvShow : tvShow}, () => console.log("new state",this.state.tvShow));
        // console.log(this.state.tvShow.id)
      });
  }
  render() {
    let movie = this.state.tvShow;
    console.log(movie.id);
    if (movie) {
      return movie.id ? 
      <DetailsOfTvShow TvShow={movie} /> :
      <Loading/>
    }
    else {
      return <Redirect to='/not-found' />;
    }
  }
}
  function DetailsOfTvShow({ TvShow }) {

    return (
      <div>
      <Link to="/" > Back to HomePage </Link>
      <h1>{TvShow.title}</h1>
      <div className='container'>
        <h2>{TvShow.synopsis}</h2>
        <div className ='item'>
        <img src={require(`./img/${TvShow.id}.jpg`)} alt={TvShow.title} />
        </div>
      </div>
      </div>
    );
  }



