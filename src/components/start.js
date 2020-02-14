import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/dots.svg";
import "../css/start.css";
import gitpic1 from "../images/gitpic1.1.png";

export class start extends Component {

  constructor(){
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount(){
         window.addEventListener('scroll', () => {
         const isTop = window.scrollY < 10;
         if(isTop !==true){
           this.setState({ scrolled:true });
         } else{
          this.setState({ scrolled:false });
       }
       });
     }

  componentWillUnmount(){
    window.removeEventListener('scroll', window.addEventListener);
  }

  render() {
    return (
      <div className="start">
        <div id="start"></div>
        <h3 className="git-heading">GIT</h3>
        {/* <h3 className="git-heading git-heading-G">G</h3>
        <h3 className="git-heading git-heading-I">I</h3>
        <h3 className="git-heading git-heading-T">T</h3> */}
        <div className="squares">
          <div className='square1'></div>
          <div className={this.state.scrolled ? 'square2 fadeOut' : 'square2 fadeBack'}></div>
          <div className={this.state.scrolled ? 'square3 fadeOut2' : 'square3 fadeBack'}></div>
          <div className={this.state.scrolled ? 'square4 fadeOut3' : 'square4 fadeBack'}></div>
          <div className="square5"></div>
          <img className="gitpic1" src={gitpic1} alt="gitpic1" />;
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

        <div className="quiz-star-div">
          <p className="quiz-text">
            Vad vet du om Git och Github?<br></br>Ta reda på det genom att göra
            vårt quiz
          </p>

          <Link to={"/quiz"}>
            <button className="quiz-btn">Quiz</button>
          </Link>
        </div>
        {/* <Logo className="dots" /> 
        {/* <Line1 className="line1" /> */}
        {/* <Line2 className="line2"/> */}
      </div>
    );
  }
}

export default start;
