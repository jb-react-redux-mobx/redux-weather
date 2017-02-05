import React, { Component } from 'react';

// since this component renders the actual weather data which is present in the current state if this
// application we need to use the connect and map the state to props of this container

// Every component that needs access to state (i.e container) needs a way to accesss state and/or actions 
// we use connect for this

import { connect } from 'react-redux';


import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends Component {

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(C)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon,lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temperatures} color="red" units="C"/></td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
                <td><Chart data={humidities} color="green" units="%"/></td>
            </tr>
        );
    }

}


function mapStateToProps ({ weather }) {
    return { weather };
}


export default connect(mapStateToProps,null)(WeatherList);