import React, { Component } from "react";
import { ReactComponent as Logo } from '../images/dots.svg'
import { ReactComponent as Line1 } from '../images/line1.svg'
import { ReactComponent as Line2 } from '../images/line2.svg'
import "../css/start.css";

export class start extends Component {
  render() {
    return (
        
        <div className="start">
            {/* <hr className="lines"></hr> */}

        <h3 className="git-heading">GIT</h3>
        {/* <div className="line1"></div> */}
        <div className="sqares">
          <div className="square1"></div>
          <div className="square2"></div>
          <div className="square3"></div>
          <div className="square4"></div>
          <div className="square5"></div>
        </div>
        <div className="mg-line">
          <h3>M</h3>
          <h3>Å</h3>
          <h3>S</h3>
          <h3>T</h3>
          <h3>E</h3>
          <br></br>
          <h3>G</h3>
          <h3>I</h3>
          <h3>T</h3>
          <h3>T</h3>
          <h3>A</h3>
          <h3>?</h3>
        </div>
        <Logo className="dots" />
        <Line1 className="line1" />
        {/* <Line2 className="line2"/> */}
      </div>
    );
  }
}

export default start;
