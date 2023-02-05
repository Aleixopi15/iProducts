import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/home';
import Search from './pages/search';
import Orders from './pages/orders';
import Profile from './pages/profile';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Search" component={Search} />

        <Tab.Screen name="Orders" component={Orders} />

        <Tab.Screen name="Profile" component={Profile} />
        
    </Tab.Navigator>
    )
}