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
                <TvShow id='annie-hall' name="Annie Hall" image={annie_hall} />
                <TvShow id= 'back-to-the-future' name="Back to the Future" image={backtothefuture} />
                <TvShow id= 'final-destination' name="Final Destination" image={final_destination} />
                <TvShow id = 'hancock' name="Hancock" image={hancock} />
                <TvShow id= 'obsessed' name="Obsessed" image={obsessed} />
                <TvShow id= 'vertigo' name="Vertigo" image={vertigo} />

            </div>
        </main>
    );

}