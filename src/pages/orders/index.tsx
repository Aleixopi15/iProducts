import { StyleSheet, View } from 'react-native'

import Header from '../../components/header'
import React from 'react'

export default function App (): JSX.Element {
  return (
    <View style={styles.container}>
     <Header />

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
