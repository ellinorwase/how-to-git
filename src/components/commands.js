import React, { Component } from "react";
import "../css/commands.css";
import CommandDivs from "../components/commandDivs";

export class commands extends Component {
  render() {
    return (
      <div className="wrapper-com1">
        <div id="commands2"></div>
        <h2>Kommandon</h2>
        <hr></hr>
        <div className="wrapper-com4">
          <div>
            <div className="transbox">
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="com-sqr-1"></div> */}
        <div className="com-sqr-2"></div>
        <div className="com-sqr-3"></div>
        <div className="com-sqr-4"></div>
          {/* <div className="wrapper-com3"> */}
              <CommandDivs />
          {/* </div> */}
        </div>
    );
  }
}

export default commands;
