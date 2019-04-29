import React from 'react';
import getTvShow from './getTvShow';
import TvShow from "./TvShow";



export default class Gallery extends React.Component {
    componentDidMount() {
        fetch("/rest/shows")
            .then(res => res.json())
            .then(ShowsList => this.setState({ShowsList}));
      }


    render() {
    return (
        <main>
            <h2>Welcome to Buket's Kodflix</h2>
            <div className='container'>
            {
                getTvShow().map(tvShow => (
                    <TvShow 
                    key={tvShow.id}
                    id={tvShow.id} 
                    name={tvShow.name} 
                    image={tvShow.image} />
                ))
            }    
            </div>
        </main>
    );

}
}
