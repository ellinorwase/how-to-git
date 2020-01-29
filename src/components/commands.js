import React, { Component } from "react";
import "../css/commands.css";

export class commands extends Component {
  render() {
    return (
      <div className="wrapper1">
        <h2>Kommandon</h2>
        <hr></hr>
        <div className="wrapper4">
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
            {/* <div className='transbox'>
                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        </div> */}
          </div>
          <div className="com-sqr-1"></div>
          <div className="com-sqr-2"></div>
          <div className="com-sqr-3"></div>
          <div className="com-sqr-4"></div>
        <div className="wrapper2">
          <div className="wrapper3">
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
