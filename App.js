import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import GameScreen from './screens/Game'

const RootStack = createStackNavigator(
  {
    Home: {
      screen:HomeScreen
    },
    Game: {
      screen: GameScreen
    }
  }, {
    initialRouteName: 'Home'
  }
)

export default RootStack  