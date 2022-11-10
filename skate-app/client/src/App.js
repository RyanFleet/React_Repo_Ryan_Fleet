import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import LoginRegister from './views/LoginRegister';
import Login from './components/Login';
import Register from './components/Register';
import DashboardLinks from './views/DashboardLinks';
import Main from './components/Main';
import UserVideos from './components/UserVideos';
import VideoForm from './components/VideoForm'
import OneVideo from './components/OneVideo';
import UpdateVideo from './components/UpdateVideo';

import Palace from './components/companies/Palace'
import Almost from './components/companies/Almost';
import Baker from './components/companies/Baker';
import ConverseCons from './components/companies/ConverseCons';
import Welcome from './components/companies/Welcome';
import Creature from './components/companies/Creature';
import SantaCruz from './components/companies/SantaCruz';
import Independent from './components/companies/Independent';
import Bronze56k from './components/companies/Bronze56k';


function App() {
  const [users, setUsers] = useState([])
  const [videos, setVideos] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
  window.localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
  console.log(loggedIn)
}, [loggedIn]);

useEffect(() => {
  const data = window.localStorage.getItem('loggedIn')
  setLoggedIn(JSON.parse(data))
  console.log(loggedIn)
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <LoginRegister loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <DashboardLinks loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          {/* Login / Register / page after login */}
          <Route element={<Login users={users} setUsers={setUsers} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} path="/login" />
          <Route element={<Register users={users} setUsers={setUsers} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} path="/register" />
          <Route element={<Main users={users} setUsers={setUsers} loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />} path="/" />

          {/* Create Read Update Delete */}
          <Route element={<UserVideos videos={videos} setVideos={setVideos} users={users} setUsers={setUsers} />} path="/users/vids" />
          <Route element={<VideoForm videos={videos} setVideos={setVideos} users={users} setUsers={setUsers} />} path="/addVideo" />
          <Route element={<OneVideo videos={videos} setVideos={setVideos} users={users} setUsers={setUsers} />} path="/video/:id" />
          <Route element={<UpdateVideo videos={videos} setVideos={setVideos} users={users} setUsers={setUsers} />} path="/video/:id/edit" />

          {/* Skate Companies */}
          <Route element={<Almost users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/almost" />
          <Route element={<Baker users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/baker" />
          <Route element={<Palace users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/palace" />
          <Route element={<ConverseCons users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/converse" />
          <Route element={<Welcome users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/welcome" />
          <Route element={<Creature users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/creature" />
          <Route element={<SantaCruz users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/santacruz" />
          <Route element={<Independent users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/independent" />
          <Route element={<Bronze56k users={users} setUsers={setUsers} videos={videos} setVideos={setVideos} />} path="/bronze56k" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
