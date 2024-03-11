import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vitor</Text>
      <TextInput style={styles.ipt}/>
      <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
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
    backgroundColor: "#555cda",
    padding: 50,
    margin: 10,
    borderRadius: 8,
  },
  ipt:{
    borderColor: "black",
    padding: 5,
    borderWidth: 1,
    width: 120,
    borderRadius: 4,
  },
  text: {
    fontSize: 20,
  }
});