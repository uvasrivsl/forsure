import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyIncome from '../pages/MyIncome';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Feedback from '../pages/Feedback';
import ContactUs from '../pages/ContactUs';



const Drawer = createDrawerNavigator();
export default function MenuBars() {
  return (
    // <ScrollView >
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home' >
    <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Income" component={MyIncome} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
    </Drawer.Navigator>
    </NavigationContainer>
    // </ScrollView>
  )
}