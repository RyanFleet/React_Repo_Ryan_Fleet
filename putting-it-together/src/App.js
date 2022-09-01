import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter'


function App() {
  return (
    <div className="App">
      <Counter firstName={"Ryan"} lastName={"Fleet"} age={23} hair={"Brown"}/>
      <Counter firstName={"Morty"} lastName={"Smith"} age={15} hair={"Brown"}/>
    </div>
  );
}

export default App;
