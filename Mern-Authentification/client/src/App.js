import './App.css';
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import UserForm from './components/UserForm';
import UserList from './components/UserList';
import OneUser from './components/OneUser';
import UpdateUser from './components/UpdateUser';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<UserForm users={users} setUsers={setUsers} />} path="/user/new" />
          <Route element={<UserList users={users} setUsers={setUsers} />} path="/" />
          <Route element={<OneUser users={users} setUsers={setUsers} />} path="/user/:id" />
          <Route element={<UpdateUser users={users} setUsers={setUsers} />} path="/user/:id/edit" />
          <Route element={<Register users={users} setUsers={setUsers} />} path="/register" />
          <Route element={<Login users={users} setUsers={setUsers} />} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
