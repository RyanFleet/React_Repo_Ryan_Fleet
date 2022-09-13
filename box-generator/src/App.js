import BoxGen from './components/BoxGen'
import { useState } from 'react';
import ColorDisplay from './components/ColorDisplay';

function App() {

  const [boxList, setBoxList] = useState([]);
  
  // this made the same one box switch its color 
  // rather than adding a new one
          // const [currentColor, setCurrentColor] = useState('')
          // const addedColor = (newColor) => { 
          //   setCurrentColor(newColor);       
          //   boxList.push(newColor);
  // }

  return (
    <div className="App">
      <BoxGen boxList={boxList} setBoxList={setBoxList} />
      <ColorDisplay boxList={boxList} />
    </div>
  );
}

export default App;
