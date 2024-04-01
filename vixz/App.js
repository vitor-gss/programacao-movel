import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Login</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.line}>

        </View>
        <TextInput placeholder='E-mail ou nome de usuário' style={styles.ipt}/>
        <TextInput placeholder='Senha' secureTextEntry="true" style={styles.ipt}/>
        <TouchableOpacity style={[styles.btn, styles.borderRadius100]}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
        <View style={styles.lineBtn}>
        <TouchableOpacity style={[styles.esq, styles.borderRadius100]}><Text style={styles.text}>Esqueceu a senha?</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.cad, styles.borderRadius100]}><Text style={styles.text}>Cadastrar</Text></TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: '#332B3C',*/
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    marginBottom: "5%",
  },
  content:{
    display: 'flex',
    gap: 5,
    flexDirection: 'column',
    width: "80%",
    height: "70%"
  },
  ipt:{
    borderRadius: 8,
    borderWidth: 1,
    height: 57,
    paddingLeft: 8,
    backgroundColor: "#EFEFEF"
  },
  btn:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A2BE2',
    height: 57,
  },
  text:{
    color: 'white'
  },
  lineBtn:{
    display: 'flex',
    flexDirection: 'row',
    
  },
  borderRadius100: {
    borderRadius: 100,
  },
  esq: {
    backgroundColor: "#EFEFEF",
  },
  cad:{
    backgroundColor: "#332B3C",
  },
});
