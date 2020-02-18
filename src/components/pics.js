import React, { Component } from "react";
import "../css/pics.css";

export class pics extends Component {
  render() {
    return (
      <div className="pics mainContent">
        <div className="portfolio">
          <div className="portfolio-item medium medium2"></div>
          <div className="portfolio-item large"></div>
          <div className="portfolio-item medium medium1"></div>
          <div className="portfolio-item small"></div>
          <div className="portfolio-item tall"></div>
          <div className="portfolio-item wide wide1"></div>
          <div className="portfolio-item wide wide2"></div>
          <div className="portfolio-item wide wide3"></div>
        </div>
      </div>
    );
  }
}

export default pics;
