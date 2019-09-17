import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Homepage from './components/homepage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi this is my first app!</Text>
      <Text>Lets do Something</Text>
      <Homepage />
    </View>
   );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
