import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';

import {
  BoxSun,
  BoxWeather,
  TxTCity,
  TxtDate,
  TxtDescription,
  TextHrSun,
  TxtTemperature,
  Sunrise,
  Sunset,
} from './styles';

export default function BoxTemperature({ data }) {
  return (
    <BoxWeather>
      <TxtDate>{`${data.date} ${data.time}`}</TxtDate>
      <TxTCity>{data.city_name}</TxTCity>
      <TxtTemperature>{data.temp}°</TxtTemperature>
      <TxtDescription>{data.description}</TxtDescription>
      <BoxSun>
        <Sunrise>
          <Icon name="weather-sunset-up" size={30} color="#FFF" />
          <TextHrSun>{data.sunrise}</TextHrSun>
        </Sunrise>
        <Sunset>
          <Icon name="weather-sunset-down" size={30} color="#FFF" />
          <TextHrSun>{data.sunset}</TextHrSun>
        </Sunset>
      </BoxSun>
    </BoxWeather>
  );
}

BoxTemperature.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    city_name: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
  }).isRequired,
};
