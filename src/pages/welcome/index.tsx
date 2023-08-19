import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome (): JSX.Element {
  const navigation = useNavigation()

  return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../../assets/icon.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
                />
            </View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.text}>
                    Faça seu login para continuar!
                </Text>
                <TouchableOpacity
                style={styles.button}
                onPress={ () => {
                  navigation.navigate('SignIn')
                }}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECB19'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#4ECB19',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '25%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 200
  },
  text: {
    top: 20,
    fontWeight: 'bold'

  },
  button: {
    position: 'absolute',
    backgroundColor: '#4ECB19',
    borderRadius: 50,
    top: 140,
    left: 30,
    right: 30,
    bottom: 80,
    alignItems: 'center',
    justifyContent: 'center'

    /* position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
            */
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'

  }
})
