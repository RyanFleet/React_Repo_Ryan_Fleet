import './App.css';
import Form from './components/Form';
import View from './components/View';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  return (
    <div className="App">
      <Form  users={users} setUsers={setUsers}/>
      <View users={users} setUsers={setUsers}/>
    </div>
  );
}

export default App;
