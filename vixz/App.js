import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

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
        <TextInput placeholder='Senha' style={styles.ipt}/>
        <Button title="Entrar" />
        <View style={styles.lineBtn}>
          
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
    height: 57
  }
});
