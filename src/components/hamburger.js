import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/hamburger.css";

export class hamburger extends Component {
  render() {
    return (
      <div className="fixed">
        <nav>
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#start">
                <li>Start</li>
              </a>
              <a href="#description-nav">
                <li>Information</li>
              </a>
              <a href="#commands-nav">
                <li>Kommandon</li>
              </a>
              <a href="#conflicts-nav">
                <li>Konflikter</li>
              </a>
              <li>
                <Link to={"/how-to-git/quiz"}>Quiz</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default hamburger;
