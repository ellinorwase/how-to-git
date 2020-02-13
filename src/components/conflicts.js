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
              när man använder sig av git, därför är det bra att veta lite om hur det
              funkar och varför det kan uppstå. Git gör sammanslagningen av ditt
              projekt superlätt och för det mesta kommer git att förstå hur man
              automatiskt integrerar nya förändringar.
              <br></br>
              <br></br>
              Konflikter i git uppstår till exempel när två personer har gjort
              ändringar i samma fil eller när en utvecklare raderar en fil medan
              en annan utvecklare arbetar i den. I dessa fall kan git inte
              automatiskt bestämma vad som är korrekt och ber då den som
              genomför sammanslagningen (mergen) att fixa konflikterna innan
              denne skickar upp ändringarna till fjärr-repot (master branchen).
            </p>
            <p>
              Sitter du i din terminal då du genomför sammanslagningen(merge) så kommer
              git att markera filen med rött och stoppa
              sammanslagningsprocessen. Klickar man på filen så ser man markerat med rader
              som är antingen <span style={{color:"rgba(47, 98, 141)"}}>blå</span> eller <span style={{color:"rgba(53, 115, 102)"}}>grön</span> markerade. Grönt betyder att detta
              är de som för tillfället finns i filen i master branchen <span style={{color:"rgba(53, 115, 102)"}}>(current
              change)</span> och det blåa <span style={{color:"rgba(47, 98, 141)"}}>(incoming change)</span> är det du suttit med i din
              utvecklings branch och vill skicka upp till master branchen.
              </p>
          </div>
          <div className="wrapper-con3">
            {/* <h5>Rubrik</h5> */}
        <img className="conflictPic" src={conflictPic} alt="conflictPic" />
            <p>
                Vid tillkomst av en konflikt kommer git att hjälpa dig välja mellan olika alternativ. Dessa alternativ är "Accept Current Change", "Accept Incoming Change", "Accept Both Changes" och "Compare Changes".
            </p>
              <p>
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
      </div>
    );
  }
}

export default conflicts;
