import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import { auth } from '../firebaseConfig'
import { useRouter } from 'expo-router'
import Title from '../assets/components/text/title.js'
import TextInput from '../assets/components/inputs&buttons/textInputs/textInput.js'
import Btn from '../assets/components/inputs&buttons/buttons/button.js'

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const router = useRouter()

  const handleCadastro = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.replace('/home')
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
        <Title size={32} text="Vamos nos conhecer melhor" color="#633C8E" />
        <TextInput label="E-mail ou usuário" onChangeText={setEmail} />
        <TextInput label="Senha" onChangeText={setSenha} />
        <Btn text="Cadastrar" onPress={handleCadastro} />
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