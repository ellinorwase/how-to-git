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
            "Här lägger du till alla dina ändrade filer och gör dessa filer redo att commitas."
        },
        {
          id: "2",
          command: 'git commit -m "meddelande här"',
          exp:
            "Commitar dina filer med ett meddelande som gör det lättare att lokalisera och koppla ihop din ändring med att passande meddelande."
        },
        {
          id: "3",
          command: "git status",
          exp:
            "Statuskommandot visar nuvarande status för din working directory. Detta låter dig att se vilka förändringar som har iscensatts, vilka inte har det och vilka filer som inte Git spårar. "
        },
        {
          id: "4",
          command: 'git add "file"',
          exp:
            "Här lägger du till en specifik fil som defineras inom citationstecken och gör denna fil redo att commitas"
        },
        {
          id: "5",
          command: "git push",
          exp:
            "Skickar upp med dina ändringar till ditt fjärr-repo, som t.ex  Github."
        },
        {
          id: "6",
          command: "git pull",
          exp: "Hämtar hem de senaste ändringarna från ditt fjärr-repo."
        },
        {
          id: "7",
          command: "git branch",
          exp:
            "Visar alla din tillgängliga grenar och markerar den gran som du nuvarande befinner dig i"
        },
        {
          id: "8",
          command: 'git checkout -b "namnet på branchen"',
          exp: "Skapar en lokal gren samt förflyttar sig till den grenen."
        },
        {
          id: "9",
          command: 'git checkout "branch-namn"',
          exp: "Förflyttar sig till den tillgängliga grenen med det namnet"
        },
        {
          id: "10",
          command: 'git merge "branch-namn"',
          exp:
            "Git merge används när du vill slå samman en specifik gren med den gren du nuvarande befinner dig i"
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
          exp: "Skickar våran gren till fjärr-repot"
        },
        {
          id: "16",
          command: 'git stash save "stash-namn" && git stash',
          exp: "Sparar undan dina nuvarande ändringar tillfälligt. Detta är bra om du behöver byta branch och inte vill förlora dina ändringar."
        },
        {
          id: "17",
          command: 'git stash list',
          exp: "Listar alla dina ändringar som du sparat(stashat)."
        },
        {
          id: "18",
          command: 'git stash pop',
          exp: "Detta kommandot gör du om du vill återställa dina ändringar som du har 'stashat'"
        },
      ]
    };
  }

  displayExplanation = data => {
    // this.props.getExp(data)
    const { getExp } = this.props;
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
          </div>
        </div>
      </div>
    );
  }
}

export default commandsDiv;
