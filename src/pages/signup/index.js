import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animation from "react-native-animatable";

export default function Signin() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animation.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text>Bem-vindo(a)</Text>
      </Animation.View>

      <Animation.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um e-mail..." styles={styles.input} />
        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Sua senha" styles={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.registerText}>Voltar para o Login</Text>
        </TouchableOpacity>
      </Animation.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ECB19",
    paddingTop: 60,
  },
});
