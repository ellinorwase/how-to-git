import React, { Component } from 'react'
import '../css/footer.css'

export class footer extends Component {
    render() {
        return (

                
            <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Git på Svenska</h5>
                <p className="grey-text text-lighten-4">Vill du lära sig mer? Klicka på länkarna brevid förfan</p>

              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Bra länkar</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" target='_blank' href="https://git-scm.com/">gits webbsida</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Ellinor Vase &amp; Frida Schoultz
            <br></br>
            <a className="grey-text text-lighten-4 right" target='_blank 'href="https://se.linkedin.com/in/ellinor-vase-38075716b">Ellinors LinkedIn</a> <br></br>
            <a className="grey-text text-lighten-4 right" target='_ blank' href="https://www.linkedin.com/in/frida-schoultz-683162172/">Fridas LinkedIn</a>
            </div>
          </div>
        </footer>
            
        )   
        
    }
}

export default footer
