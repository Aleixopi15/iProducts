import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import RoutesHome from "./src/routes";

export default function App() {
  return(
    <NavigationContainer>
      <Routes>
        <RoutesHome/>
        </Routes>
      
    
    </NavigationContainer>

  );
};
