import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Gato from './Gato';

export default function App() {
  return (
    <View style={styles.container}>
      <Gato nome="vitor" idade={18} />
      <Gato nome="gabriel" idade={20}/>
      <Gato nome="santos" idade={40}/>
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
