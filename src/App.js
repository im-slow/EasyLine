import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import StartScreen from './screen/StartScreen'
import HomeScreen from './screen/HomeScreen'
import DetailsScreen from './screen/DetailsScreen'
import OptionScreen from './screen/OptionScreen'
import OfficeScreen from './screen/OfficeScreen'
import TicketScreen from './screen/TicketScreen'

// const store = createStore(rootReducer);

const AppNavigator = createStackNavigator(
  {
    Start: StartScreen,
    Home: HomeScreen,
    Details: DetailsScreen,
    Option: OptionScreen,
    Office: OfficeScreen,
    Ticket: TicketScreen
  },
  {
    initialRouteName: 'Home', // screen iniziale home solo per test mettere screen
    headerLayoutPreset: 'center', // setta il testo al centro

    defaultNavigationOptions: {
      title: 'easyline', // titolo header
      headerStyle: {
        backgroundColor: '#88242F', // colore header
      },
      headerTintColor: '#ffffff', // colore testo header
      headerTitleStyle: {
        fontWeight: '300', // grassetto testo
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.PureComponent {
  render() {
    return (
      // <Provider store={store}>
      <AppContainer />
      // </Provider>
    );
  }
}
