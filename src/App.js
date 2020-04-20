import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Topbar from './components/Topbar/Topbar';
import Search from './components/Search/Search';
import Asteroid from './components/Asteroid/Asteroid';

function App() {
  return (
    <Router>
      <div className="App w100pc">
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/:asteroidId">
            <Asteroid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
