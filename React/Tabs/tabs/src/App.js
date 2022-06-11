
import './App.css';
import React, { useState } from 'react';
import MyComponent from './components/MyComponent';
import Show from './components/Show';

function App() {
  const [text, setText] = useState("");

  const newtab = ( text ) => {
    setText( text );
}
  return (
    <div className="App">
      <MyComponent newText={newtab}/>
      <Show tabs={text}/>
    </div>
  );
}

export default App;
