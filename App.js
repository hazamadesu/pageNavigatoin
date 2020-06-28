import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Page1Screen from './Page1Screen';
import Page1DetailScreen from './Page1DetailScreen';

const MainStack = createStackNavigator(
  {
    Page1: Page1Screen,
    Page1Detail: Page1DetailScreen,
  }
);

const AppContainer = createAppContainer(MainStack);

export default class App extends Component {
  render() {
    return(
      <AppContainer />
    );
  }
}
