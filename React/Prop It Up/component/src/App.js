import logo from './logo.svg';
import './App.css';
import Person1 from './PersonCard/Person1';
import Person2 from './PersonCard/Person2';
import Person3 from './PersonCard/Person3';
import Person4 from './PersonCard/Person4';
function App() {
  return (
    <div className="App">
      <Person1 firstName="majed" lastName="Amria" age="26" hairColor="Black"></Person1>
      <Person2 firstName="fadi" lastName="abuaita" age="30" hairColor="Black"></Person2>
      <Person3 firstName="hana" lastName="alpidaq" age="43" hairColor="Black"></Person3>
      <Person4 firstName="rahaf" lastName="hussari" age="27" hairColor="Black"></Person4>
      </div>
  );
}

export default App;
