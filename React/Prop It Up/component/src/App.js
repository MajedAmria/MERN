import logo from './logo.svg';
import './App.css';
import Person1 from './PersonCard/Person1';
import Person2 from './PersonCard/Person2';
import Person3 from './PersonCard/Person3';
import Person4 from './PersonCard/Person4';
function App() {
  return (
    <div className="App">
      <Person1 firstName="Duo" lastName="Johe" age={26} hairColor="Black" ></Person1>
      <Person2 firstName="new" lastName="person" age={30} hairColor="Brown"></Person2>
      <Person3 firstName="last" lastName="human" age={43} hairColor="Gray"></Person3>
      <Person4 firstName="old" lastName="one" age={27} hairColor="Red"></Person4>
      </div>
  );
}

export default App;
