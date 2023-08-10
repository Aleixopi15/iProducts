import React from 'react'
import{
    View,
    StyleSheet,
    Text,
    StatusBar,
    text,
} from 'react-native'
 
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 4 : 60;

export default function header(){
    return(
    <View style={styles.container}>
   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{  
        backgroundColor: '#4ECB19',
        paddingTop: StatusBarHeight,
    },
})
