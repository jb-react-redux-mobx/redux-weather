import axios from 'axios';
const API_KEY = 'd15bdd595e44ec7aee1c04d03ddcba5d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'


function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}&units=metric`;
    const request = axios.get(url);
    
    // request is a promise
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };

}

export default fetchWeather;