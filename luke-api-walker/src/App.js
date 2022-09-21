import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState }from 'react'
import Form from './components/Form';
import Results from './components/Results';
import Planet from './components/Planet';


function App(props) {

  const {id} = props
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>}  />
        <Route path="/people/:id" element={<Results id={id} />}  />
        <Route path="/planets/:id" element={<Planet id={id} />}  />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
