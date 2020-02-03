import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/menu";

import Footer from "./components/footer";

import Start from "./components/start";
// import Pics from './components/pics'
import Commands from "./components/commands";
import Conflicts from "./components/conflicts";
import Description from "./components/description";
import Quiz from "./components/quiz";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Menu />
            <Start />
            <Description />
            <Commands />
            <Conflicts />
            {/* <Footer /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
