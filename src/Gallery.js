import React from 'react';
import annie_hall from "./img/annie_hall.jpg";
import backtothefuture from "./img/back_to_the_future.jpg";
import final_destination from "./img/final_destination.jpg";
import hancock from "./img/hancock.jpg";
import obsessed from "./img/obsessed.jpg";
import vertigo from "./img/vertigo.jpg";
import TvShow from "./TvShow";

export default function Gallery() {
    return (
        <main>
            <h2>Welcome to Kodflix</h2>
            <div className='container'>
                <TvShow name="Annie Hall" image={annie_hall} />
                <TvShow name="Back to the Future" image={backtothefuture} />
                <TvShow name="Final Destination" image={final_destination} />
            </div>
            <div className='container'>
                <TvShow name="Hancock Hall" image={hancock} />
                <TvShow name="Obsessed Hall" image={obsessed} />
                <TvShow name="Vertigo" image={vertigo} />

            </div>
        </main>
    );

}