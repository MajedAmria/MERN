import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashbord from './views/Dashbord';
import PlayerForm from './views/PlayerForm';
import Status from './views/Status';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/">Manage Players</Link>
      <span> | </span>
      <Link to="/status">Manage Player Status</Link>
      <Switch>
        <Route exact path='/'>
          <Dashbord/>
        </Route>
        <Route path='/addplayer'>
          <PlayerForm/>
        </Route>
        <Route path='/status'>
          <Status/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
