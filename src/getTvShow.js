import annie_hall from "./img/annie_hall.jpg";
import backtothefuture from "./img/back_to_the_future.jpg";
import final_destination from "./img/final_destination.jpg";
import hancock from "./img/hancock.jpg";
import obsessed from "./img/obsessed.jpg";
import vertigo from "./img/vertigo.jpg";


export default function getTvShow() {
    return [
       {id:'annie-hall', name: "Annie Hall", image: annie_hall},
       {id:'back-to-the-future', name: "Back to the Future", image: backtothefuture},
       {id:'final-destination', name: "Final Destination", image: final_destination},
       {id:'hancock', name: "Hancock", image: hancock},
       {id:'obsessed', name: "Obsessed", image: obsessed},
       {id:'vertigo', name: "Vertigo", image: vertigo},
    ];
  
  }