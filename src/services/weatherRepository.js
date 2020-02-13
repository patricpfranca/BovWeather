import RealmInstance from '~/services/realm';

class WeatherRepository {
  static get() {}

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
}

export default WeatherRepository;
