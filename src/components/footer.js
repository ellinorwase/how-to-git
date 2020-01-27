import React, { Component } from 'react'
import '../css/footer.css'

export class footer extends Component {
    render() {
        return (
            <div className="b-0">
                <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Git på Svenska</h5>
                <p class="grey-text text-lighten-4">Vill du lära dig mer? Klicka på länkarna brevid</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Bra länkar</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" target='_blank' href="https://git-scm.com/">gits webbsida</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Ellinor Vase &amp; Frida Schoultz
            <br></br>
            <a class="grey-text text-lighten-4 right" target='_blank 'href="https://se.linkedin.com/in/ellinor-vase-38075716b">Ellinors LinkedIn</a> <br></br>
            <a class="grey-text text-lighten-4 right" target='_ blank' href="https://www.linkedin.com/in/frida-schoultz-683162172/">Fridas LinkedIn</a>
            </div>
          </div>
        </footer>
            
            </div>
        )
    }
}

export default footer
