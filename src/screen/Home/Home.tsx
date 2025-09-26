import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import { Menu } from "../../components/Menu/Menu";

function Home() {
  return ( 
    <>
      <View style={styles.container}>

        <Menu />
        <Text>Home works!!</Text>
       
        <StatusBar style="auto" />
      </View>
    </>
   );
}

export default Home;