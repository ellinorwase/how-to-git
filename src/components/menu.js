import React, { Component } from "react";
import "../css/menu.css";
// import Quiz from "../components/quiz";
//npm install --save react-router-dom
import { Link } from "react-router-dom";

//rce
export class menu extends Component {
  constructor(){
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount(){
         window.addEventListener('scroll', () => {
         const isTop = window.scrollY < 100;
         if(isTop !==true){
           this.setState({ scrolled:true });
         } else{
          this.setState({ scrolled:false });
       }
       });
     }



  componentWillUnmount(){
    window.removeEventListener('scroll',   window.addEventListener);
  }

  // componentDidMount(){
  //   window.addEventListener('scroll', () => {
  //     const isTop = window.scrollY > 100;
  //     const nav = document.getElementById('nav');
  //     if(isTop){
  //       nav.classList.add('scrolled');
  //     } else{
  //       nav.classList.remove('scrolled');
  //     }
  //   });
  // }

  // componentWillUnmount(){
  //   window.removeEventListener('scrolled', window.addEventListener);
  // }

  render() {
    return (
      
        <div  className={this.state.scrolled ? 'menu scrolled' : 'menu'}>
          <ul>
            <li>
              <a href="#start">Start</a>
            </li>
            <li>
              <a href="#description-nav">Information</a>
            </li>
            <li>
              <a href="#commands-nav">Kommandon</a>
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
