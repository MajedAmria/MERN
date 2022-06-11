
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Show from './components/Show';
function App() {
  const [colors, setColor] = useState([]);

  const newColor = ( color ) => {
    
    setColor( colors.concat({color}) );
    console.log(colors);
}
  return (
    <div className="App">
     <Form newText={newColor}/>
     <hr/>
     <Show text={colors}/>
    </div>
  );
}

export default App;
