import React, { Component } from "react";
import "../css/menu.css";
//npm install --save react-router-dom
import { Link } from "react-router-dom";

//rce
export class menu extends Component {

  constructor(){
    super();
    this.menuScroll = this.menuScroll.bind(this)
    this.state = {
      scrolled: false,
    };
  }

  menuScroll (){
    const isTop = window.scrollY < 100;
         if(isTop !==true){
           this.setState({ scrolled:true });
         } else{
          this.setState({ scrolled:false });
       }
  }

  componentDidMount(){
         window.addEventListener('scroll', this.menuScroll);
     }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.menuScroll);
  }

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
              <Link to={"/quiz"}>Quiz</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default menu;
