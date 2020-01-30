import React, { Component } from "react";
import "../css/commands.css";

export class commandsDiv extends Component {
  constructor() {
    super();

    this.state = {
      commandsDesc: [
        { id: "1", command: "git add .", exp: "Förklaring 1" },
        {
          id: "2",
          command: 'git commit -m "meddelande här"',
          exp: "Förklaring 2"
        },
        { id: "3", command: "git status", exp: "Förklaring 3" },
        { id: "4", command: 'git add "file"', exp: "Förklaring 4" },
        { id: "5", command: "git push", exp: "Förklaring 5" },
        { id: "6", command: "git pull", exp: "Förklaring 6" },
        { id: "7", command: "git branch", exp: "Förklaring 7" },
        {
          id: "8",
          command: 'git checkout -b "namnet på branchen"',
          exp: "Förklaring 8"
        },
        {
          id: "9",
          command: 'git checkout "branch-namn"',
          exp: "Förklaring 9"
        },
        { id: "10", command: 'git merge "branch-namn"', exp: "Förklaring 10" }
      ]
    };
  }

  displayExplanation = (data) => {
      // this.props.getExp(data)
      const {getExp} = this.props
      getExp(data);
  };
    
    render() {
        return (
            <div>
        <div className="wrapper-com2">
          <div className="wrapper-com3">
            {this.state.commandsDesc.map((commandsDesc, index) => {
              return (
                <button
                  className="com"
                  key={index}
                  onClick={() => this.displayExplanation(commandsDesc.exp)}
                >
                  {commandsDesc.command}
                </button>
              );
            })}
            {/* <p>
                Skriv ut här:
            {this.state.commandsDesc.exp}

            </p> */}

          </div>
        </div>
      </div>
    );
  }
}

export default commandsDiv;
