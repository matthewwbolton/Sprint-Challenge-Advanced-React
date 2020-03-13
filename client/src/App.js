import React from 'react';
import './App.css';
import PlayerDataCard from './components/PlayerDataCard';
import { Route } from 'react-router-dom';
import WorldCupTeams from './components/WorldCupTeams';
import NavBar from './components/NavBar';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <PlayerDataCard />
      </Route>
      <Route path='/teams'>
        <WorldCupTeams />
      </Route>
    </div>
  );
}

export default App;