import React from 'react';
import './App.css';
import Menu from './components/menu'

import Footer from './components/footer'

import Start from './components/start'
import Pics from './components/pics'
import Commands from './components/commands'
import Conflicts from './components/conflicts'
import Description from './components/description'


function App() {
  return (
    <div className="App">

      <Menu/>

      <Start id="description1"/>

      <Pics/>

      <Description />

      <Commands />
      
      <Conflicts />


      <Footer />


    </div>
  );
}

export default App;
