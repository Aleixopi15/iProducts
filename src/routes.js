import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/home';
import Search from './pages/search';
import Orders from './pages/orders';
import Profile from './pages/profile';
import Welcome from './pages/welcome';
import SignIn from './pages/sigin';

import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />
            
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />
        
    </Stack.Navigator>
    )
};

