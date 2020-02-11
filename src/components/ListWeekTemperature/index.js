import React from 'react';

import PropTypes from 'prop-types';

import {
  DateWeek,
  DayMax,
  DayMin,
  DayWeek,
  ListWeather,
  TemperatureWeek,
} from './styles';

export default function ListWeekTemperature({ data }) {
  return (
    <ListWeather>
      <DayWeek>{data.weekday}</DayWeek>
      <DateWeek>{data.date}</DateWeek>
      <TemperatureWeek>
        <DayMin>{data.min}°</DayMin>
        <DayMax>{data.max}°</DayMax>
      </TemperatureWeek>
    </ListWeather>
  );
}

ListWeekTemperature.propTypes = {
  data: PropTypes.shape({
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};
