import React from 'react';
import Luke from './componemts/Luke';
import Show from './componemts/Show';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Luke />
      <Switch>
        <Route exact path="/:result/:idNumber">
          <Show/>
        </Route>
      
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
