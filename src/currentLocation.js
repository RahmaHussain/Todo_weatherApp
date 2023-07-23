import React, { Component } from "react";
import AnimatedWeather from "react-animated-weather";

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

//learn conv class to functional comp
class CurrentLocation extends Component {
  state = {
    lat: null,
    lon: null,
    city: "",
    temperatureC: null,
    temperatureF: null,
    humidity: null,
    main: "",
    country: "",
    icon: "CLEAR_DAY",
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          this.getWeather(28.67, 77.22);
          alert("You have disabled location service.");
        });
    } else {
      alert("Geolocation not available");
    }
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_APIKEY}`
    );
    const data = await api_call.json();

    if (data.weather && data.weather.length > 0) {
      // Access the first weather item
      //const mainWeather = data.weather[0].main;

      switch (data.weather[0].main) {
        case "Haze":
          this.setState({ icon: "CLEAR_DAY" });
          break;
        case "Clouds":
          this.setState({ icon: "CLOUDY" });
          break;
        case "Rain":
          this.setState({ icon: "RAIN" });
          break;
        case "Snow":
          this.setState({ icon: "SNOW" });
          break;
        case "Dust":
          this.setState({ icon: "WIND" });
          break;
        case "Drizzle":
          this.setState({ icon: "SLEET" });
          break;
        case "Fog":
          this.setState({ icon: "FOG" });
          break;
        case "Smoke":
          this.setState({ icon: "FOG" });
          break;
        case "Tornado":
          this.setState({ icon: "WIND" });
          break;
        default:
          this.setState({ icon: "CLEAR_DAY" });
      }

      this.setState({
        lat: lat,
        lon: lon,
        city: data.name,
        temperatureC: Math.round(data.main.temp),
        temperatureF: Math.round(data.main.temp * 1.8 + 32),
        humidity: data.main.humidity,
        main: data.weather[0].main,
        country: data.sys.country,
      });
    }
  };

  render() {
    const {
      lat,
      lon,
      city,
      temperatureC,
      temperatureF,
      humidity,
      main,
      country,
      icon,
    } = this.state;

    return (
      <div>
        <h2>Current Location Weather</h2>
        {lat && lon && (
          <div>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
          </div>
        )}
        {city && (
          <div>
            <p>City: {city}</p>
            <p>Temperature: {temperatureC} °C ({temperatureF} °F)</p>
            <p>Humidity: {humidity}%</p>
            <p>Main: {main}</p>
            <p>Country: {country}</p>
            <AnimatedWeather
              icon={icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
        )}
      </div>
    );
  }
}

export default CurrentLocation;
