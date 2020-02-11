import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Weather from '~/pages/Weather';

const Routes = createAppContainer(
  createStackNavigator({
    Weather: {
      screen: Weather,
      navigationOptions: {
        headerTitle: 'BovWeather',
        headerTitleAlign: 'center',
      },
    },
  }),
);

export default Routes;
