import axios from 'axios';
import './App.css';

function getWeatherData() {
  const apiKey = '076e4a179712e35dc665c307d7b2b364';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=${076e4a179712e35dc665c307d7b2b364}';

  return axios.get(apiUrl);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
