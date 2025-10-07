import React from "react";
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";

import { BatLogo } from "../../components/BatLogo/BatLogo";

function Home() {
  return ( 
    <>
      <View style={styles.appContainer}>
        
        <View style={styles.logoContainer}>
          <BatLogo /> 
        </View>
          
        <StatusBar style="auto" />
      </View>
    </>
   );
}

export default Home;