import "./App.css";
import Weather from "./Weather.jsx";
import { WeatherProvider } from "./context/weatherContext.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
