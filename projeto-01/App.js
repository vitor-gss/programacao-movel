import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>aaaaaaaaaaaaaaaaaaaaaaaa</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Botão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#009cce"
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
  },
  text: {
    fontSize: 48,
  }
});