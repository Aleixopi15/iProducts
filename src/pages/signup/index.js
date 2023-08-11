import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Button, Link, Checkbox } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Animation from "react-native-animatable";

export default function Signin() {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  return (
    <Stack space={10} w="100%" p="100" alignItems="center">
   <Input borderRadius={'15'} w={{
    base: "140%",
    md: "25%"
  }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="#4ECB19" />} placeholder="Nome" />
    <Input borderRadius={'15'} w={{
    base: "140%",
    md: "25%"
  }}  placeholder="Email" />
    <Input borderRadius={'15'} w={{
    base: "140%",
    md: "25%"
  }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="#4ECB19" />
        </Pressable>} placeholder="Senha" />
        <Input borderRadius={'15'} w={{
    base: "140%",
    md: "25%"
  }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="#4ECB19" />
        </Pressable>} placeholder="Confirmar Senha" />
        <Checkbox>
        Concondo com os termos de uso e privacidade
      </Checkbox>
        <Button  w={{base: "100%"}} borderRadius={'15'} background={'#4ECB19'} onPress={() => navigation.navigate('SignIn')}>Criar conta</Button>
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
