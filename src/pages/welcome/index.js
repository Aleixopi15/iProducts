import React from "react";
import {
     View,
      Text,
     StyleSheet,
     Image,
     TouchableOpacity
    } from 'react-native'; 

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                source={require('../../../assets/icon.png')}
                style={{width: '100%'}}
                resizeMode="contain"
                />
            </View>
            <View style={styles.containerForm}>
                <Text>
                    Faça seu login para continuar!
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#32ff7e'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#32ff7e',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        },
        title:{
            fontSize: 200, 
        },
        text:{

        },
        button:{
            position: 'absolute',
            backgroundColor:'fff',
            borderRadius: 50,
            paddingVertical: 8,
            width: '60%',
            alignItems: 'center',
            justifyContent: 'center',

        },
        buttonText:{
            fontSize: 18,
            color: 'fff',
            fontWeight: 'bold',
            
        }
})