import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import { Routes } from './src/routes'
import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'

export default function App (): JSX.Element {
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.'])
  }, [])
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <StatusBar style="inverted" backgroundColor='#4ECB19' />

      <Routes />

    </NavigationContainer>
    </NativeBaseProvider>
  )
}
