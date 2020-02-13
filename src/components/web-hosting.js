import React, { Component } from "react";
import "../css/web-hosting.css";

export class webHosting extends Component {
  render() {
    return (
      <div className="webHosting-container">
        <h2>Webbhotell</h2>
        <p>
          I användningen av git är det vanligt att man använder sig av så
          kallade webbhotell för att lagra sin kod. Genom att skapa ett
          repository på ett webbhotell kan du lagra dina projekt internt eller
          publik och med hjälp av att använda git, skapa ett arbetsflöde där du
          tillsammans med andra eller med dig själv, vidareutvecklar ditt
          projekt. Detta ger även möjlighet att ladda ner en fullständig kopia
          av ett projekt lokalt på sin dator. Vilken som helst av dessa kopior
          skulle i praktiken kunna skickas upp för att ersätta huvud serverns
          repository i händelse av en krasch på den lokala datorn så har man
          alltid möjlighet att ladda ner den senaste koden från ditt webbhotell
          igen - detta säkerställer att en crash inte resulterar i förlorat
          arbete. Vi kommer att fokusera på de 2 vanligaste webbhotellen, Github
          och Gitlab.
        </p>
        <div className="hosings-div">
          <div className="github">
            <h2>Github</h2>
            <p>
              Github utvecklades av Tom Preston-Werner, Chris Wanstrath och PJ
              Hyett 2008 med hjälp av ramverket Ruby on Rails men är från och
              med 2018 ett dotterbolag till Microsoft. Github är en värdtjänst
              där du kan förvalta och utveckla din källkod och du kan skapa
              gratiskonton såväl som betalkonton för privat bruk med obegränsat
              antal repositorys.
            </p>

            <p>
              Github erbjuder all den funktionalitet som du får med de
              distribuerade versionshanteringssystemet och
              källkodhanteringsfunktionen (SCM), samt egna funktioner såsom
              t.ex. github pages. Github pages är utformad för att vara värd för
              ditt repository (projektmapp) och på så sätt kan du via en url
              länk, som består av ditt namn och ditt repository namn, lansera
              ditt projekt.
            </p>
          </div>
          <div className="gitlab">
            <h2>Gitlab</h2>
            <p>
              GitLab är ett ukrainskt företag skapat av Dmitriy Zaporozhets och
              Valery Sizov och grundades 2011 som ett alternativ till GitHub.
              Gitlab är skrivet i Ruby och Go och har öppen källkod.
              <br></br>
              GitLab fungerar som en vanligt webbhotell, däribland användningen
              av git-repository som hjälper till att lagra projekt, men med
              tillägget att de tillämpar så kallade Continuous Integration(CI).
              CI används för att interagera kod som förses av ett team med en
              gemensam repository. Utvecklare delar den nya koden i en
              merge(pull) request. Denna förfrågan triggar en så kallad pipeline
              att bygga, validera och testa den nya koden innan man förenar
              ändringarna i sitt repository. Detta ger alltså en snabb leverans
              av feedback till utvecklare samt testning av kvaliteten.
              Sammarbetet med Continuous Delivery (CD) säkerställer hämtningen
              av CI-validerad kod till applikationen med hjälp av strukturerad
              distributions pipelines. Tillsammans hjälper CI och CD ditt team
              att påskynda ett resultat att leverera till kunderna. CI finns där
              för att hjälpa till att fånga upp minsta bugg tidigt i
              utvecklingen och CD hjälper till att flytta verifierad kod till
              applikationen snabbare.
            </p>
            <div className="web-boxes">
              <div className="web-sqr-1"></div>
              <div className="web-sqr-2"></div>
              <div className="web-sqr-3"></div>
              <div className="web-sqr-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default webHosting;
