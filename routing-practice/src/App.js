import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { useParams } from 'react-router';

const ColorText = (props) => {
  const { word } = useParams();
  const { color } = useParams();
  const {bg} = useParams();
  if (isNaN(word)) {
    return (
      <>
        <h1 style={{ color: color, backgroundColor: bg }}>
          The word is: {word}
        </h1>
        <p style={{ color: color, backgroundColor: bg  }}>
          Now available in Any Color!!!
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1 style={{ color: color, backgroundColor: bg  }}>
          The number is: {word}
        </h1>
        <p style={{ color: color, backgroundColor: bg  }}>
          Even the numbers too!
        </p>
      </>
    )
  }
}

const Home = () => {
  return (
    <h1>Welcome</h1>
  )
}

function App() {
  return (
    <div className="App">
      {/* Browser Router in index.js */}
      <Routes>
        <Route path="/:word" element={<ColorText />} />
        <Route path="/:word/:color" element={<ColorText />} />
        <Route path="/:word/:color/:bg" element={<ColorText />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App
