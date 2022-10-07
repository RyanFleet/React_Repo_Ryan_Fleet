
import { useState } from 'react';
import './App.css';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UpdateAuthor from './components/UpdateAuthor';
import OneAuthor from './components/OneAuthor';


function App() {

  const [authors,setAuthors] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorForm authors={authors} setAuthors={setAuthors} />} path="/create/" />
          <Route element={<AuthorList authors={authors} setAuthors={setAuthors} />} path="/" />
          <Route element={<UpdateAuthor authors={authors} setAuthors={setAuthors} />} path="/edit/:id" />
          <Route element={<OneAuthor authors={authors} setAuthors={setAuthors} />} path="/authors/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
