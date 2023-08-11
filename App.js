import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';

import { Routes } from "./src/routes";

export default function App() {
  return(
    <NativeBaseProvider>
    <NavigationContainer>

      <Routes />

    </NavigationContainer>
    </NativeBaseProvider>

  );
};
