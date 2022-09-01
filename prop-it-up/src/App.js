import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header firstName={"Ryan"} lastName={"Fleet"} age={"23"} hair={"Brown"} />
      <Header firstName={"Macey"} lastName={"Thomas"} age={"23"} hair={"Black"} />
      <Header firstName={"Skyler"} lastName={"Simmons"} age={"22"} hair={"Blonde"} />
      <Header firstName={"Rob"} lastName={"Delone"} age={"21"} hair={"Red"} />
    </div>
  );
}

export default App;
