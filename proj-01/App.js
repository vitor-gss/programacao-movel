import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Gato from './Gato';

export default function App() {
  return (
    <View style={styles.container}>
      <Gato nome="Fred" idade={3} />
      <Gato nome="Simba" idade={2}/>
      <Gato nome="Elsa" idade={2}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#14d16f",
    gap: 10,
  },
  text: {
    fontSize: 20,
  }
});
