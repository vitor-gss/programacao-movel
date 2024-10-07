import { View, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react'
import Btn from '../assets/components/inputs&buttons/buttons/button'
import Input from '../assets/components/inputs&buttons/textInputs/textInput'
import ButtonOnlyBorder from '../assets/components/inputs&buttons/buttons/buttonOnlyBorder'
import LoginWithSystem from '../assets/components/inputs&buttons/buttons/loginWithSystem'
import DivisorWithTextMid from '../assets/components/elements/divisorWithTextMid'
import Circle from '../assets/components/elements/circle'
import Title from '../assets/components/text/title'
import { useRouter } from 'expo-router'

import styles from './styles/templateStyles'

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
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const router = useRouter()
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

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      router.replace('/home')
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode)
      console.error(errorMessage)
      alert(errorCode == "auth/invalid-credential" ? "Credenciais inválidas" : errorCode == "auth/missing-password" ? "Senha faltando" : errorCode == "auth/invalid-email" ? "E-mail inválido" : "Outro erro")
    }
  }

  const cadastro = () => {
    router.navigate('/cadastro')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.circles}>
            <Circle bg={'#633C8E'} right={70} />
            <Circle bg={'#ffea00'} left={280} />
          </View>
          <Title text='Acesse sua conta' color='#633C8E' size={30} />
          <Input label="E-mail ou usuário" onChangeText={setEmail} autoCapitalize="none" />
          <Input label="Senha" onChangeText={setSenha} ocultar={true} autoCorrect={false} autoCapitalize="none"/>
          <Btn text="Entrar" onPress={handleLogin} />
          <View style={styles.lineButton}>
            <ButtonOnlyBorder text="Esqueci a senha" />
            <ButtonOnlyBorder text="Cadastrar" onPress={cadastro} />
          </View>
          <DivisorWithTextMid text="Outras formas de login" />
          <LoginWithSystem name="Google" />
          <LoginWithSystem name="Facebook" />
        </View>
      </View>
    </ScrollView>
  )
}