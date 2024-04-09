import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Feedback from '../pages/Feedback';
import MyIncome from '../pages/MyIncome';
import Requirement from '../pages/Requirement';
import Activites from '../pages/Activites';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{ tabBarLabel: 'Home Screen' }}
        />
        <Tab.Screen
            name="Requirement"
            component={Requirement}
            options={{ tabBarLabel: 'Requirement' }}
        />
        <Tab.Screen
            name="Activites"
            component={Activites}
            options={{ tabBarLabel: 'Activites' }}
        />
    </Tab.Navigator>
);

export default BottomTabNavigator;
