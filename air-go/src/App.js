import Button from "react-bootstrap/Button";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
