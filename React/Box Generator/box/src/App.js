
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Show from './components/Show';
function App() {
  const [color, setColor] = useState("");

  const newColor = ( color ) => {
    setColor( color );
}
  return (
    <div className="App">
     <Form newText={newColor}/>
     <hr/>
     <Show text={color}/>
    </div>
  );
}

export default App;
