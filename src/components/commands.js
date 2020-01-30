import React, { Component } from "react";
import "../css/commands.css";
import CommandDivs from "../components/commandDivs";
// import "../components/commandDivs";
// import { runInThisContext } from "vm";

export class commands extends Component {
  constructor() {
    super();
    this.state = {
        content: "Lär dig mer om git-kommandon"
    };
  }
  setExp = (data) => {
    this.setState({
        content: data
    })
  }
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
                {this.state.content}
              </p>
            </div>
          </div>
        </div>
        <div className="com-sqr-1"></div>
        <div className="com-sqr-2"></div>
        <div className="com-sqr-3"></div>
        <div className="com-sqr-4"></div>
        {/* <div className="wrapper-com3"> */}
        <CommandDivs getExp={this.setExp} />
        {/* </div> */}
      </div>
    );
  }
}

export default commands;
