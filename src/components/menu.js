import React, { Component } from "react";
import "../css/menu.css";
// import Quiz from "../components/quiz";
//npm install --save react-router-dom
import { Link } from "react-router-dom";

//rce
export class menu extends Component {
  render() {
    return (
        <div className="menu">
          <ul>
            <li>
              <a href="#start">Start</a>
            </li>
            <li>
              <a href="#description-nav">Information</a>
            </li>
            <li>
              <a href="#commands2">Kommandon</a>
            </li>
            <li>
              <a href="#conflicts-nav">Konflikter</a>
            </li>
            <li>
              {/* <Link to={"/quiz"} activeClassName={"active"}>Quiz</Link> */}
              <Link to={"/quiz"}>Quiz</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default menu;
