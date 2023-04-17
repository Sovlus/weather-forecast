import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function getWeatherData() {
  const apiKey = '076e4a179712e35dc665c307d7b2b364';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=${076e4a179712e35dc665c307d7b2b364}';

  return axios.get(apiUrl);
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get('${BASE_URL}weather?q=${city}&units=metric&appid=${076e4a179712e35dc665c307d7b2b364}')
        .then((response) => {
          setWeather(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [city]);

  const handleSearch = (event) => {
    event.preventDefault();
    setCity(event.target.elements.city.value);
  };

  return (
    <div className='App'>
      <h1>Pogoda</h1>
      <form onSubmit={handleSearch}>
        <input type='text' name='city' placeholder='Wpisz nazwę miasta' />
        <button type='submit'>Wyszukaj</button>
      </form>


    </div>
  )
}

export default App;
