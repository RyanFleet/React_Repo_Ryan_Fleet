import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Projects from './components/Projects'


import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Contact />} path="/contact" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<MainPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
