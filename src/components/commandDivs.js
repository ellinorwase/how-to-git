import React, { Component } from "react";
import "../css/commands.css";

export class commandsDiv extends Component {
  constructor() {
    super();

    this.state = {
      commandsDesc: [
        { id: "1", command: "git add .", title: "Förklaring 1" },
        {
          id: "2",
          command: 'git commit -m "meddelande här"',
          title: "Förklaring 2"
        },
        { id: "3", command: "git status", title: "Förklaring 3" },
        { id: "4", command: 'git add "file"', title: "Förklaring 4" },
        { id: "5", command: "git push", title: "Förklaring 5" },
        { id: "6", command: "git pull", title: "Förklaring 6" },
        { id: "7", command: "git branch", title: "Förklaring 7" },
        {
          id: "8",
          command: 'git checkout -b "namnet på branchen"',
          title: "Förklaring 8"
        },
        {
          id: "9",
          command: 'git checkout "branch-namn"',
          title: "Förklaring 9"
        },
        { id: "10", command: 'git merge "branch-namn"', title: "Förklaring 10" }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.commandsDesc.map((commandsDesc, index) => {
          return (
            <div className="wrapper-com3">

            <button className="com" key={index}>
              {commandsDesc.command}
            </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default commandsDiv;
