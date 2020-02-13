import api from '~/services/api';
import RealmInstance from '~/services/realm';

class WeatherRepository {
  static save(data) {
    RealmInstance.write(() => {
      RealmInstance.create(
        'WeatherSchema',
        {
          city_name: data.city_name,
          temp: data.temp,
          description: data.description,
          time: data.time,
          sunrise: data.sunrise,
          sunset: data.sunset,
          date: data.date,
          forecast: data.forecast.map(e => ({
            date: e.date,
            weekday: e.weekday,
            min: e.min,
            max: e.max,
          })),
        },
        true,
      );
    });
  }

  static async get(latitude, longitude) {
    try {
      const response = await api.get(`lat=${latitude}&log=${longitude}`);

      this.save(response.data.results);

      return response.data.results;
    } catch (error) {
      return RealmInstance.objects('WeatherSchema').last();
    }
  }
}

export default WeatherRepository;
