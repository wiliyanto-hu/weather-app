import "./App.css";
import Weather from "./Weather.jsx";
import { WeatherProvider } from "./context/weatherContext.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
import Modals from "./Modals.jsx";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />
        <Modals />
      </WeatherProvider>
    </div>
  );
}

export default App;
