import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperatures = _.map(cityData.list.map(data => data.main.temp), temp => temp - 273);
    const pressures = cityData.list.map(data => data.main.pressure);
    const humidities = cityData.list.map(data => data.main.humidity);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temperatures} color="green" unit="º C" />
        </td>
        <td>
          <Chart data={pressures} color="orange" unit="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Celsius)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // Identical to { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
