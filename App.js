import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
      headerTitleAlign: 'center',
    },
  }
);

export default createAppContainer(navigator);
