import React from 'react';
// import getTvShow from './getTvShow';
import TvShow from "./TvShow";



export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            ShowsList: []
        };
    }

    componentDidMount() {
        fetch("/rest/shows")
            .then(res => res.json())
            .then(ShowsList => this.setState({ ShowsList }));
    }


    render() {
        return (
            <main>
                <h2>Welcome to Buket's Kodflix</h2>
                <div className='container'>
                    {
                        this.state.ShowsList.map(tvShow => (
                            <TvShow
                                key={tvShow.id}
                                id={tvShow.id}
                                title={tvShow.title}
                                />
                        ))
                    }
                </div>
            </main>
        );

    }
}
