import React, { Component } from "react";
import "../css/commands.css";

export class commands extends Component {
  render() {
    return (
      <div className="wrapper-com1">
        <div id="commands2"></div>
        <h2>Kommandon</h2>
        <hr></hr>
        <div className="wrapper-com4">
            <div className="total-sqr">
              <div className="transbox">
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. 
                </p>
              </div>
            </div>
          </div>
          <div className="com-sqr-1"></div>
          <div className="com-sqr-2"></div>
          <div className="com-sqr-3"></div>
          <div className="com-sqr-4"></div>
        <div className="wrapper-com2">
          <div className="wrapper-com3">
            <div className="com">git add .</div>
            <div className="com">git commit -m 'meddelande här'</div>
            <div className="com">git status</div>
            <div className="com">git add .</div>
            <div className="com">git add "file"</div>
            <div className="com">git push</div>
            <div className="com">git pull</div>
            <div className="com">git branch</div>
            <div className="com">git checkout -b "namnet på branchen" </div>
            <div className="com">git checkout "branch-namn"</div>
            <div className="com">git merge "branch-namn"</div>
          </div>

                </div>
               

        </div>
    );
  }
}

export default commands;
