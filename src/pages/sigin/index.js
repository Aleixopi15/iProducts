import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, useState, } from 'react-native'; 
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import * as Animation from 'react-native-animatable'

import firebase from "../../config/firebase";

import { useNavigation } from "@react-navigation/native";

export default function Signin() {
    const navigation = useNavigation();
    const [show, setShow] = React.useState(false);


    return (
        <Stack space={10} w="100%" p="100" alignItems="center">
      <Input borderRadius={'15'} w={{
      base: "120%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="#4ECB19" />} placeholder="Email" />
      <Input borderRadius={'15'} w={{
      base: "120%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="#4ECB19" />
          </Pressable>} placeholder="Senha" />
          <Button w={'40'} borderRadius={'15'} background={'#4ECB19'} onPress={() => navigation.navigate('Home')}>Acessar</Button>
    </Stack>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#4ECB19',
        paddingTop: 60, 
    },
    
})