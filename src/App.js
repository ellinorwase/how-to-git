import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/menu";
// import Pics from './components/pics'
import Start from "./components/start";
import Commands from "./components/commands";
import Conflicts from "./components/conflicts";
import Description from "./components/description";
import Quiz from "./components/quiz";
import WebHosting from "./components/web-hosting"
import Hamburger from "./components/hamburger"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/how-to-git/quiz">
            <Quiz />
          </Route>
          <Route path="/how-to-git/">
            <Menu />
            <Hamburger/>
            <Start />
            <Description />
            <WebHosting />
            <Commands />
            <Conflicts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
