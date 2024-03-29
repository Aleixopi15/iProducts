import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/home'
import Search from './pages/search'
import Orders from './pages/orders'
import Profile from './pages/profile'
import Welcome from './pages/welcome'
import SignIn from './pages/sigin'
import SignUp from './pages/signup'

import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export function Routes (): JSX.Element {
  return (
    <Stack.Navigator >
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

        <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Home"
            component={RoutesHome}
            options={{ headerShown: false }}
            />
    </Stack.Navigator>

  )
};

export function RoutesHome () {
  return (
        <Tab.Navigator
        screenOptions={{
          style: {
            activeTintColor: '#000000'
          },

          tabStyle: {
            paddingBottom: 8,
            paddingTop: 5

          }
        }}
        >
            <Tab.Screen
             name="Home"
            component={Home}
            options={

                {
                  tabBarIcon: ({ size }) => (
                    <Entypo name="home" size={size} color={'#4ECB19'}/>
                  ),
                  headerShown: false
                }}
            />

            <Tab.Screen
            name="Pedidos"
            component={Orders}
            options={{
              tabBarIcon: ({ size }) => (
                    <Feather name="shopping-bag" size={size} color={'#4ECB19'}/>
              ),
              headerShown: false
            }}
            />

            <Tab.Screen
            name="Notificações"
            component={Search}
            options={{
              tabBarIcon: ({ size }) => (
                    <Feather name="bell" size={size} color={'#4ECB19'}/>
              ),
              headerShown: false
            }}
            />

            <Tab.Screen
            name="Perfil"
            component={Profile}

            options={

                {
                  tabBarIcon: ({ size }) => (
                    <Feather name="user" size={size} color={'#4ECB19'}/>
                  ),
                  headerShown: false
                }}
            />

        </Tab.Navigator>
  )
};
