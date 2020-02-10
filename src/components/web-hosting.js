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
          arbete. VI kommer att fokusera på de 2 vanligaste webbhotellen, Github
          och Gitlab.
        </p>
        <div className="hosings-div">
          <div className="github">
            <h2>Github</h2>
            <p>info</p>
          </div>
          <div className="gitlab">
            <h2>Gitlab</h2>
            <p>info</p>
          </div>
        </div>
      </div>
    );
  }
}

export default webHosting;
