import { View, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../assets/components/inputs&buttons/buttons/button'
import Input from '../assets/components/inputs&buttons/textInputs/textInput'

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
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input label="E-mail ou usuário"/>
        <Input label="Senha" />
        <Button bg={true} border={false} color={true} text="Entrar" />
        <View style={styles.lineButton}>
          <Button bg={false} border={true} color={false} text="Esqueci a senha" />
          <Button bg={false} border={true} color={false} text="Cadastrar" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  lineButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})