import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.login}>Login</Text>
      </View>
      <View style={styles.content}>
        {/* <View style={styles.line}>
          <View style={styles.google}>
            <Image style={styles.imgGoogle} source={require('./assets/logo/google.png')} />
            <Text>Continuar com Google</Text>
          </View>
          <View style={styles.rs}>

          </View>
          <View style={styles.rs}>

          </View>
        </View> */}
        <TextInput placeholder='E-mail ou nome de usuário' style={styles.ipt} />
        <TextInput placeholder='Senha' secureTextEntry={true} style={styles.ipt} />
        <TouchableOpacity style={[styles.btn, styles.borderRadius100]}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
        <View style={styles.lineBtn}>
          <TouchableOpacity style={[styles.esq, styles.borderRadius100, styles.btnLine]}><Text>Esqueceu a senha?</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.cad, styles.borderRadius100, styles.btnLine]}><Text style={styles.text}>Cadastrar</Text></TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    display: 'flex',
    flexDirection: 'row',

    backgroundColor: '#fff',
    height: '10%',
  },
  imgGoogle: {
    height: '100%',
    objectFit: 'cover'
  },

  login: {
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#332B3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 2,
    marginBottom: "5%",
    borderWidth: 1,
    borderBottomColor: "#fff"
  },
  content: {
    flex: 6,
    gap: 5,
    flexDirection: 'column',
    width: "80%",
    height: "70%"
  },
  ipt: {
    borderRadius: 8,
    borderWidth: 1,
    height: 57,
    paddingLeft: 8,
    backgroundColor: "#EFEFEF"
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A2BE2',
    height: 57,
  },
  text: {
    color: 'white'
  },
  lineBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"

  },
  borderRadius100: {
    borderRadius: 100,
  },
  btnLine: {
    width: "45%",
    height: 46,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  esq: {
    backgroundColor: "#EFEFEF",
  },
  cad: {
    backgroundColor: "#332B3C",
    borderWidth: 1,
    borderColor: '#633C8E'
  },
});
