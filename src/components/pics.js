import React, { Component } from "react";
import "../css/pics.css";
// import Img1 from "../images/947254_43701ec264a243ce9480cb816e3f75da_mv2.jpg"

export class pics extends Component {
  render() {
    return (
      <div className="pics mainContent">
        <div className="portfolio">
          <div className="portfolio-item medium medium2">
          {/* <img src="../images/947254_43701ec264a243ce9480cb816e3f75da_mv2.jpg" alt="Smiley face"></img> */}
            {/* <Img1/> */}
          </div>
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
