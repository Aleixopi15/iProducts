import { StyleSheet, View } from 'react-native'
import { Text } from 'native-base'
import Header from '../../components/header'
import React from 'react'

export default function App (): JSX.Element {
  return (
    <View style={styles.container}>

     <Header />
      <Text style={styles.titleText}>
        Av. Paulista 4281 - São Paulo (SP)
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleText: {

    color: 'black',
    textAlign: 'center',
    marginTop: 20

  }
})
