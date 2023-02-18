import "./App.css";
import NavBar from "./components/NavBar";
import FlightSearchPage from "./pages/FlightSearchPage";
import PopularLocations from "./components/PopularLocations"

function App() {
  return (
    <div className="App">
      <NavBar />
      <FlightSearchPage />
      <PopularLocations />
    </div>
  );
}

export default App;
