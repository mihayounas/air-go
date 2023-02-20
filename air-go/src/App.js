import "./App.css";
import NavBar from "./components/NavBar";
import FlightSearchPage from "./pages/FlightSearchPage";
import PopularLocations from "./components/PopularLocations"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FlightSearchPage />
      <PopularLocations />
      <Footer />
    </div>
  );
}

export default App;
