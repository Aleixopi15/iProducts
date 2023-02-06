import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/home';
import Search from './pages/search';
import Orders from './pages/orders';
import Profile from './pages/profile';
import Welcome from './pages/welcome';
import SignIn from './pages/sigin';

import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
    <Tab.Navigator
    tabBarOptions={{
        style:{
            
        },
        activeTintColor: '#000000',
        tabStyle:{
            paddingBottom: 5,
            paddingTop: 5,

        }
    }}
    >
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            />
            
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            />
        
        
        <Tab.Screen
         name="Inicio"
        component={Home} 
        options={{
            tabBarIcon: ({ size, color }) => (
                <Entypo name="home" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Pesquisar"
        component={Search} 
        options={{
            tabBarIcon: ({ size, color }) => (
                <Feather name="search" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen
        name="Pedidos" 
        component={Orders} 
        options={{
            tabBarIcon: ({ size, color }) => (
                <Feather name="shopping-bag" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Perfil" 
        component={Profile} 
        options={{
            tabBarIcon: ({ size, color }) => (
                <Feather name="user" size={size} color={color}/>
            )
        }}
        />

    </Tab.Navigator>
    )
};

