import './App.css';
import { Provider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import SomeOtherComponent from './components/SomeOtherComponent'

const engine = new Styletron();

function App() {
  return (
    <Provider value={engine}>
    <div className="App">
      <SomeOtherComponent />
    </div>
  </Provider>
  );
}     

export default App;
