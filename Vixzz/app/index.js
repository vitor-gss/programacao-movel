import { View, StyleSheet } from 'react-native'
import Btn from '../assets/components/inputs&buttons/buttons/button'
import Input from '../assets/components/inputs&buttons/textInputs/textInput'
import ButtonOnlyBorder from '../assets/components/inputs&buttons/buttons/buttonOnlyBorder'


/* Firebase */
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function Index() {
  const [loaded, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, "vgss4@aluno.ifal.edu.br", "pwvitor")
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode)
        console.error(errorMessage)
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input label="E-mail ou usuário" />
        <Input label="Senha" />
        <Btn bg={true} border={false} color={true} text="Entrar" onPress={handleLogin} />
        <View style={styles.lineButton}>
          <ButtonOnlyBorder text="Esqueci a senha" />
          <ButtonOnlyBorder text="Cadastrar" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  content: {
    gap: 20,
    flex: 1,
  },
  lineButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})