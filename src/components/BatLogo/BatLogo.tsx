import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyle';
import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <View >
      <Text style={styles.title}>PASS GENERATOR</Text>
      <Image style={styles.logo} source={batLogo} />
    </View>
  );
}
