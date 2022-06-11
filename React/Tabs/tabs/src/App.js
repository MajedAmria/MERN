
import './App.css';
import React, { useState } from 'react';
import MyComponent from './components/MyComponent';
import Show from './components/Show';


function App() {
  const [currentMsg, setCurrentMsg] = useState("");
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
}
  return (
    <div className="App">
      <MyComponent newMessage={ youveGotMail }/>
      <hr/>
      <Show message={currentMsg}/>
    </div>
  );
}

export default App;
