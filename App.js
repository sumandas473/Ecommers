

import React from 'react'
import Home from './src/Screens/Home/Home'
import Wishlist from './src/Screens/Wishlist/Wishlist'
import History from './src/Screens/History/History'
import Account from './src/Screens/Account/Account'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Webview from './src/Screens/webview/Webview'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="web" component={Webview} />
      
      
    </Tab.Navigator>
  )
}
