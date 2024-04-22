import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Tipt from './assets/components/Tipt'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.login}>Login</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.line}>
          <View style={[styles.google, styles.fff, styles.borderRadius8]}>
            <Image style={{flex: 3, height: '100%', borderRadius: 100, resizeMode: 'contain'}} source={require('./assets/logo/google.png')} />
            <Text style={{flex: 7}}>Continuar com Google</Text>
          </View>
          {/* <View style={styles.rs}>
              <Image style={styles.img} source={require('./assets/logo/facebook.png')}/>
          </View>
          <View style={styles.rs}>
              <Image style={styles.img} source={require('./assets/logo/apple.png')}/>
          </View> */}
        </View>
        <Tipt texto='E-mail ou nome de usuário'/>
        <Tipt texto='Senha'/>
        <TouchableOpacity style={[styles.btn, styles.borderRadius8]}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
        <View style={styles.lineBtn}>
          <TouchableOpacity style={[styles.esq, styles.borderRadius8, styles.btnLine]}><Text>Esqueceu a senha?</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.cad, styles.borderRadius8, styles.btnLine]}><Text style={styles.text}>Cadastrar</Text></TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  /* Colors */
  fff:{
    backgroundColor: '#fff'
  },

  /* Linha de apps */
  line: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'space-between',
/*     width: '80%' */
  },

  google:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  img:{
    borderRadius: '100%',
    height: '100%',
  },
  
  /*  */
  login: {
    color: 'white',
    fontSize: 40,
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
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 8,
    gap: 5,
    flexDirection: 'column',
    width: "80%",
    height: "70%",
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A2BE2',
    height: 57,
    fontSize: 56,
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
  borderRadius8: {
    borderRadius: 8,
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
