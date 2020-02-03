import React, { Component } from "react";
import "../css/description.css";
// import pic1 from './images/pic1.jpg';
import pic3  from "../images/pic3.jpg";
import pic1edit  from "../images/pic1edit.png";

export class description extends Component {
  render() {
    return (
      <div className="description">
         <div id="description-nav"></div>
        <h2>Vad är git?</h2>
        <p>
          Git är ett distribuerat versionshanteringssystem som är skapat av
          Linus Torvald, som också skapat operativsystemet Linux. Med git så kan
          utvecklare ladda upp och granska källkod och det finns inget centralt
          arkiv utan vem som helst kan skapa en egen kopia av ett repository.
          
        </p>
        <img className='pic3' src={pic3} alt="pic3" />;
        <h2>Varför git?</h2>
        <p>
        Fördelarna med att ha ett distribuerade system är att alla som
          använder sig av detta har en helt komplett version av projektets
          historia vilket minskar chanserna avsevärt att något skulle försvinna.
          På så sätt kan tidigare versioner av källkod, dokument eller webbsidor
          återskapas och de tidigare ändringar kan spåras. Det som gör git så
          bra är också det parallella arbete där man t.ex. kan spåra och rätta
          de tidigare versionerna samtidigt som man kan vidareutveckla nya
          versioner. Detta blir väldigt användbart när man sitter i stora team
          och jobbar på samma saker.
        </p>
        <h2>Vad är ett repository?</h2>
        <p>
        Ett Git Repository (repo) är en samling filer som hör ihop, vanligen ett projekt. Ett repository skapar du 
        varje gång du börjar med ett nytt projekt och du kan sedan enkelt skifta mellan olika repository när du 
        hoppar mellan projekt. Ett repo existerar på din hårddisk och du gör ändringarna i ditt lokala repo på datan och 
        skickar sedan upp dessa till fjärr-repot (master branchen).
        </p>
        <img className='pic1edit' src={pic1edit} alt="pic1edit" />;
      </div>
    );
  }
}

export default description;
