import React, { Component } from "react";
import "../css/conflicts.css";
import conflictPic from "../images/conflict-pic.png";

export class conflicts extends Component {
  render() {
    return (
      <div id='conflicts-nav' className="conflicts">
          {/* <div id="conflicts-nav"></div> */}
        <div className="con-sqr-1"></div>
        <div className="con-sqr-2"></div>
        <div className="con-sqr-3"></div>
        <div className="con-sqr-4"></div>
       
        <h2 className="h2-conflicts">Konflikter</h2>
        <h3 className="large">Git merge</h3>
        <div className="wrapper-con1">
          <div className="wrapper-con2">
            {/* <h5>Rubrik</h5> */}
            <p>
              Sammansättning (merge) och konflikter är en vanlig del av arbetet
              när man sitter med git. Därför är det bra att veta lite om hur det
              funkar och varför det kan uppstå. Git gör sammanslagningen av ditt
              projekt superlätt och för det mesta kommer git att förstå hur man
              automatiskt integrerar nya förändringar.
              <br></br>
              <br></br>
              Konflikter i git uppstår för det mesta när två personer har gjort
              ändringar i samma fil eller när en utvecklare raderar en fil medan
              en annan utvecklare gör ändringar i den. I dessa fall kan git inte
              automatiskt bestämma vad som är korrekt och ber då den som
              genomför sammanslagningen (mergen) att fixa konflikterna innan
              denne skickar upp ändringarna till fjärr-repot (master branchen).
            </p>
          </div>
          <div className="wrapper-con3">
            {/* <h5>Rubrik</h5> */}
            <p>
              Sitter du i din terminal och gör detta med git kommandon så kommer
              git att markera filen med rött för konflikt och stoppa
              sammanslagningsprocessen. Klickar man på filen så ser man då rader
              som är antingen blå eller grön markerade. Grönt betyder att detta
              är de som för tillfället finns i filen i master branchen (current
              change) och det blåa (incoming change) är det du suttit med i din
              utvecklings branch och vill skicka upp till master branchen.
              <br></br>
              Man kan också lösa konflikterna via exempelvis GitHub genom att
              skapa en så kallad Pull request. Precis som tidigare så känner git
              av konflikterna och stoppar sammanslagningsprocessen. Då får man
              gå in och se vad som är markerat som din branchändring och vad som
              finns i master branchen. Generellt sätt så är det lättare som
              nybörjare att lösa konflikterna i terminalen då den tydligare
              markerar vad som är dina ändringar och vad som redan existerar i
              filen sen innan.
            </p>
          </div>
        </div>
        <img className="conflictPic" src={conflictPic} alt="conflictPic" />
      </div>
    );
  }
}

export default conflicts;
