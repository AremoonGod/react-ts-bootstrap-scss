import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
