import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>AAAA</Text>
      <TouchableOpacity style={styles.btn}>
        <Text>
          opa
        </Text>
        </TouchableOpacity>
        <TextInput style={styles.ipt}></TextInput>
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
    backgroundColor: "#14d16f"
  },
  btn: {
    backgroundColor: "#009cce",
    padding: 50,
    margin: 10,
  },
  ipt:{
    borderColor: "black",
    padding: 5,
    borderWidth: 1
  }
});