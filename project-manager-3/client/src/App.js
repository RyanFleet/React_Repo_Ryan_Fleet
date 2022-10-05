import './App.css';
import {useState} from 'react'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './views/Main'
import OneProduct from './views/OneProduct';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/products/" />
          <Route element={<OneProduct />} path="/products/:id" />
          <Route element={<UpdateForm />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
