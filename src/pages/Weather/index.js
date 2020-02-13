import React, { useEffect, useState } from 'react';
import { FlatList, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import BoxTemperature from '~/components/BoxTemperature';
import ListWeekTemperature from '~/components/ListWeekTemperature';

import WeatherRepository from '~/services/weatherRepository';

import { Container, BoxOtherWeather, TitleWeeks } from './styles';

export default function Weather() {
  const [currentRegion, setCurrentRegion] = useState('');
  const [weather, setWeather] = useState([]);

  async function loadInitialPosition() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await Geolocation.getCurrentPosition(({ coords }) => {
          setCurrentRegion(coords);
        });
      }
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    loadInitialPosition();
  }, []);

  useEffect(() => {
    async function loadWeather() {
      const { latitude, longitude } = currentRegion;

      if (latitude && longitude) {
        const response = await WeatherRepository.get(latitude, longitude);

        setWeather(response);
      }
    }

    loadWeather();
  }, [currentRegion]);

  return (
    <Container>
      <BoxTemperature data={weather} />
      <BoxOtherWeather>
        <TitleWeeks>Próximos {weather.forecast?.length} dias</TitleWeeks>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 10 }}
          data={weather.forecast}
          keyExtractor={item => String(item.date)}
          renderItem={({ item }) => <ListWeekTemperature data={item} />}
        />
      </BoxOtherWeather>
    </Container>
  );
}
