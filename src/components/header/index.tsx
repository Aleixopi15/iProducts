import React from 'react'
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native'

const StatusBarHeight = StatusBar.currentHeight !== undefined ? StatusBar.currentHeight + 4 : 60

export default function header (): JSX.Element {
  return (
        <View style={styles.container}>

        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#4ECB19',
    paddingTop: StatusBarHeight
  }
})
