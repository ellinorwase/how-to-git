import React, { Component } from "react";
import "../css/commands.css";
import CommandDivs from "../components/commandDivs";

export class commands extends Component {
  constructor() {
    super();
    this.state = {
      content:
        "Lär dig mer om git-kommandon genom att klicka på de olika kommandon nedan"
    };
  }
  setExp = (commandData, expData) => {
    this.setState({
      command: commandData,
      content: expData
    });
  };
  render() {
    return (
      <div id="commands-nav" className="wrapper-com1">
        <div className="height-20"></div>
        <h2>Kommandon</h2>
        <hr></hr>
        <div className="wrapper-com4">
          <div>
            <div className="transbox">
              <h3>{this.state.command}</h3>
              <p>{this.state.content}</p>
            </div>
          </div>
        </div>
        <div className="com-sqr-1"></div>
        <div className="com-sqr-2"></div>
        <div className="com-sqr-3"></div>
        <div className="com-sqr-4"></div>
        <CommandDivs getExp={this.setExp} />
      </div>
    );
  }
}

export default commands;
