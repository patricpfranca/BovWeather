import React, { useEffect, useState } from 'react';
import { FlatList, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import BoxTemperature from '~/components/BoxTemperature';
import ListWeekTemperature from '~/components/ListWeekTemperature';
import api from '~/services/api';

import { Container, BoxOtherWeather, TitleWeeks } from './styles';

export default function Weather() {
  const [currentRegion, setCurrentRegion] = useState('');
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function loadInitialPosition() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de Localização',
            message:
              'O aplicativo necessita de autorização ' +
              'para obter a sua localização.',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await Geolocation.getCurrentPosition(
            position => {
              setCurrentRegion(position.coords);
            },
            error => {
              console.tron.log(error);
            },
            {
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 1000,
            },
          );
        }
      } catch (error) {
        console.warn(error);
      }
    }

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
