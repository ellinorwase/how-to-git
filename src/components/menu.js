import React, { Component } from "react";
import "../css/menu.css";

//rce
export class menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <a href="google.com">Start</a>
          </li>
          <li>
            <a href="./commands">Kommandon</a>
          </li>
          <li>
            <a href="./conflicts">Konflikter</a>
          </li>
          <li>
            <a href="">Quiz</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default menu;
