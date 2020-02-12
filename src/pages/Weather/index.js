import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import BoxTemperature from '~/components/BoxTemperature';
import ListWeekTemperature from '~/components/ListWeekTemperature';

import api from '~/services/api';

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

      try {
        const response = await api.get(
          `lat=${latitude}&log=${longitude}&user_ip=remote`,
        );

        setWeather(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    loadWeather();
  }, [currentRegion]);

  return (
    <Container>
      <BoxTemperature data={weather} />
      <BoxOtherWeather>
        <TitleWeeks>Próximos 10 dias</TitleWeeks>
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
