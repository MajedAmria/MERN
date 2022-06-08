import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="John1" lastName="Smith1" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="John2" lastName="Smith2" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="John3" lastName="Smith3" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="John4" lastName="Smith4" age={ 8 } hairColor="Brown" /> 
    </div>
  );
}

export default App;
