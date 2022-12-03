import {createContext} from 'react'

import './App.css';
import { SomeContent } from './components/SomeContent';

const MyContext = createContext();
function App() {


  return (
    <div className="App">
      <MyContext.Provider value={''}>
        <SomeContent>
        </SomeContent>
      </MyContext.Provider>
    </div>
  );
}

export default App;
