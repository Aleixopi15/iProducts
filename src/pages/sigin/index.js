import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  Button,
  Link,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
<<<<<<< HEAD
import Header from '../../components/header'
import * as Animation from 'react-native-animatable'
=======

import * as Animation from "react-native-animatable";
>>>>>>> cde7f767a8fa2c79ffebb9017eab9b5b78a82f5a

import firebase from "../../config/firebase";

import { useNavigation } from "@react-navigation/native";

export default function Signin() {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")


<<<<<<< HEAD
    return (
      
        <Stack space={10} w="100%" p="100" alignItems="center">
      <Input borderRadius={'15'} w={{
      base: "140%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="#4ECB19" />} placeholder="Email" />
      <Input borderRadius={'15'} w={{
      base: "140%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="#4ECB19" />
          </Pressable>} placeholder="Senha" />
          <Link onPress={() => navigation.navigate('SignUp')}>
        Não tenho conta
      </Link>
          <Button  w={{base: "100%"}} borderRadius={'15'} background={'#4ECB19'} onPress={() => navigation.navigate('Home')}>Acessar</Button>
=======
  const submitCredentials = ()=>{
    if(!email && !password){
      alert("Por favor informe suas credenciais!")
      return
    }
    setEmail("")
    setPassword("")
    navigation.navigate("Home")
  }

  return (
    <Stack space={10} w="100%" p="100" alignItems="center">
      <Input
        borderRadius={"15"}
        w={{
          base: "140%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="#4ECB19"
          />
        }
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        borderRadius={"15"}
        w={{
          base: "140%",
          md: "25%",
        }}
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="#4ECB19"
            />
          </Pressable>
        }
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
      />
      <Link onPress={() => navigation.navigate("SignUp")}>Não tenho conta</Link>
      <Button
        w={{ base: "100%" }}
        borderRadius={"15"}
        background={"#4ECB19"}
        onPress={submitCredentials}
      >
        Acessar
      </Button>
>>>>>>> cde7f767a8fa2c79ffebb9017eab9b5b78a82f5a
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ECB19",
    paddingTop: 60,
  },
});
