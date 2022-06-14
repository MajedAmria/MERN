import './App.css';
import React from 'react';
import Home from './components/Home';
import Show from './components/Show';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route exact path="/:word">
        <Show/>
        </Route>
        <Route path="/:word/:textColor/:backColor">
        <Show/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
