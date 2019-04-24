import annie_hall from "./img/annie_hall.jpg";
import backtothefuture from "./img/back_to_the_future.jpg";
import final_destination from "./img/final_destination.jpg";
import hancock from "./img/hancock.jpg";
import obsessed from "./img/obsessed.jpg";
import vertigo from "./img/vertigo.jpg";


export default function getTvShow() {
    return [
       {id:'annie-hall', name: "Annie Hall", image: annie_hall, synopsis:"Another one of Woody Allen's sexual sufferings"},
       {id:'back-to-the-future', name: "Back to the Future", image: backtothefuture, synopsis:"The guy got Parkinsons for God's sake"},
       {id:'final-destination', name: "Final Destination", image: final_destination, synopsis:"If it's you time to die, you should die"},
       {id:'hancock', name: "Hancock", image: hancock, synopsis:"What kind of a supernatural hero movie is this?? I think it's shit but my brother likes it"},
       {id:'obsessed', name: "Obsessed", image: obsessed, synopsis:"Things couldn't be better for Derek Charles (Idris Elba). He's just received a big promotion at work, and has a wonderful marriage with his beautiful wife, Sharon (Beyoncé Knowles)"},
       {id:'vertigo', name: "Vertigo", image: vertigo, synopsis:"Another fantastic psyco thriller from the master"},
    ];
  
  }