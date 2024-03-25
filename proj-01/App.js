import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Gato from './Gato';
import Cliques from './Cliques';

export default function App() {

  
  return (
    <View style={styles.container}>
      <Gato nome="Fred" idade={3} />
      <Gato nome="Simba" idade={2} />
      <Gato nome="Elsa" idade={1} />
     <Cliques/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#009cce",
    gap: 10,
  },
  text: {
    fontSize: 20,
  },

});
