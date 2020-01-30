import React, { Component } from "react";
import "../css/menu.css";
// import { Link } from "react-router-dom";

//rce
export class menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <a href="./">Start</a>
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
            <a href="./">Quiz</a>
          </li>
        </ul> 
      </div>
    );
  }
}

export default menu;
