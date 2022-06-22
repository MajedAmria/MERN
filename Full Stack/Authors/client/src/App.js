import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import Update from './views/Update';
function App() {

  return (
    <BrowserRouter>
    
    <div className="App">
    <h1>Favorite authors</h1>
      <Switch>
        <Route exact path='/'>
          <Main  />
        </Route>
        <Route exact path='/new'>
          <NewAuthor />
        </Route>
         <Route  path='/edit/:id'>
          <Update/>
         </Route> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
