import React, {useState} from 'react';
import './index.css';
import { pathOr, propOr, head } from 'ramda'; // importing ramda for safechecks

// API config to connect openweahtermap.org

const api = {
  key: "97ef8ae65f9917e0b9377c89b4d83a6a",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  // Default state

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  // API call to openweather

  const search = evt => {
    if (evt.key == "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
        });
    }
  }

  /**
   * date Builder to display on the page
   * @param {date} d // takes current date in Date format
   * @returns date in format Tuesday 20 April 2021
   */

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  // propOr, pathOr, head are utilities from ramda

  const city = propOr('Singapore', 'name')(weather);
  const country = pathOr('SG', ['sys', 'country'])(weather);
  const temperature = pathOr(0, ['main', 'temp'])(weather);
  const weatherArray = head(pathOr([], ['weather'])(weather));
  const status = pathOr('Sunny', ['main'])(weatherArray);

  return (
    <div className={`app ${status}`}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">{city}, {country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(temperature)}&deg;c
          </div>
          <div className="weather">{status}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
