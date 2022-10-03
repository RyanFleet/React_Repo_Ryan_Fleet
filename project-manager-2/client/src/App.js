import './App.css';
import {useState} from 'react'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './components/views/Main'
import Detail from './components/views/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/products/" />
          <Route element={<Detail />} path="/products/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
