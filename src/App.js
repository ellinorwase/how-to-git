import React from 'react';
import './App.css';
import Menu from './components/menu'

import Footer from './components/footer'

import Start from './components/start'
import Commands from './components/commands'
import Conflicts from './components/conflicts'


function App() {
  return (
    <div className="App">

      <Menu/>

      <Start/>

      <Commands />
      
      <Conflicts />

      <Footer />

    </div>
  );
}

export default App;
