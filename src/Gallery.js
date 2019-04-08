import React from 'react';
import getTvShow from './getTvShow'
import TvShow from "./TvShow";

export default function Gallery() {
    return (
        <main>
            <h2>Welcome to Kodflix</h2>
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
