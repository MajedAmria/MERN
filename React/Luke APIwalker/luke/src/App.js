import React from 'react';
import Luke from './componemts/Luke';
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
      <Switch>
        <Route exact path="/">
          <Luke />
        </Route>
      
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
