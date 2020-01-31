import React, { Component } from "react";
import "../css/commands.css";

export class commandsDiv extends Component {
  constructor() {
    super();

    this.state = {
      commandsDesc: [
        {
          id: "1",
          command: "git add .",
          exp:
            "Används för att lägga till alla dina ändrade filer och gör dessa filer redo att commitas."
        },
        {
          id: "2",
          command: 'git commit -m "meddelande här"',
          exp:
            "Används för att commita dina filer med ett meddelande som gör det lättare att lokalisera och koppla ihop din ändring med att passande meddelande."
        },
        {
          id: "3",
          command: "git status",
          exp:
            "Statuskommandot visar nuvarande status för din working directory. Detta låter dig att se vilka förändringar som har iscensatts samt vilka som inte har det. "
        },
        {
          id: "4",
          command: 'git add "file"',
          exp:
            "Används för att lägga till en specifik fil som defineras inom citationstecken och gör denna fil redo att commitas"
        },
        {
          id: "5",
          command: "git push",
          exp:
            "Används för att skicka upp med dina ändringar till ditt fjärr-repo, som t.ex  Github."
        },
        {
          id: "6",
          command: "git pull",
          exp: "Används för att hämta hem de senaste ändringarna från ditt fjärr-repo."
        },
        {
          id: "7",
          command: "git branch",
          exp:
            "Används för att visa alla din tillgängliga grenar och markerar den gran som du nuvarande befinner dig i"
        },
        {
          id: "8",
          command: 'git checkout -b "namnet på branchen"',
          exp: "Används för att skapa en lokal gren samt förflyttar sig till den grenen."
        },
        {
          id: "9",
          command: 'git checkout "branch-namn"',
          exp: "Används då man vill förflytta sig till den tillgängliga grenen med det namnet"
        },
        {
          id: "10",
          command: 'git merge "branch-namn"',
          exp:
            "Används när du vill slå samman en specifik gren med den gren du nuvarande befinner dig i"
        },

        {
          id: "11",
          command: "git branch -a",
          exp: "Används för att visa lokala grenar samt fjärr-repot."
        },
        {
          id: "12",
          command: 'git branch -m "nytt-branch-namn"',
          exp:
            "Används för att ändra namnet på din nyvarande gren till det som skrivs inom dess citationstecken."
        },
        {
          id: "13",
          command: 'git branch -d "branch-namn"',
          exp:
            "Används för att radera den gren som skrivs inom dess citationstecken"
        },
        {
          id: "14",
          command: 'git push origin :"branch-namn"',
          exp: "Används för att radera en gren i fjärr-repot"
        },
        {
          id: "15",
          command: 'git push origin "branch-namn"',
          exp: "Används då vi vill skicka våran gren till fjärr-repot"
        },
        {
          id: "16",
          command: 'git stash save "stash-namn" && git stash',
          exp: "Används för att spara undan dina nuvarande ändringar tillfälligt. Detta är bra om du behöver byta branch och inte vill förlora dina ändringar."
        },
        {
          id: "17",
          command: 'git stash list',
          exp: "Används för att lista alla dina ändringar som du sparat(stashat)."
        },
        {
          id: "18",
          command: 'git stash pop',
          exp: " Används då du vill återställa dina ändringar som du har 'stashat'"
        },
      ]
    };
  }

  displayExplanation = (expData, commandData) => {
    // this.props.getExp(data)
    const { getExp } = this.props;
    getExp(expData, commandData);
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
                  onClick={() => this.displayExplanation(commandsDesc.command, commandsDesc.exp)}
                >
                  {commandsDesc.command}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default commandsDiv;
