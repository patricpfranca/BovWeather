import Realm from 'realm';

const ForecastSchema = {
  name: 'Forecast',
  properties: {
    weekday: 'string',
    date: 'string',
    min: 'int',
    max: 'int',
  },
};

const WeatherSchema = {
  name: 'WeatherSchema',
  primaryKey: 'city_name',
  properties: {
    temp: 'int',
    date: 'string',
    time: 'string',
    city_name: 'string',
    description: 'string',
    sunrise: 'string',
    sunset: 'string',
    forecast: 'Forecast[]',
  },
};

const RealmInstance = new Realm({
  schema: [WeatherSchema, ForecastSchema],
  path: 'anotherRealm3.realm',
});

export default RealmInstance;
