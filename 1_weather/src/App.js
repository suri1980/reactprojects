import React, {useState} from 'react';
import './index.css';

const api = {
  key: "97ef8ae65f9917e0b9377c89b4d83a6a",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = evt => {
    if (evt.key == "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);
        });
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  const location = weather.name && weather.sys.country ? `${weather.name}, ${weather.sys.country}` : 'Singapore'
  const temperature = weather.main && weather.main.temp ? `${Math.round(weather.main.temp)}` : '00';
  const status = weather.weather[0].main ? weather.weather[0].main : 'Warm';


  return (
    <div className={`app ${status}`}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            classsName="search-bar"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">{location}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {temperature}&deg;c
          </div>
          <div className="weather">{status}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
