import { View, Alert, Pressable } from 'react-native'
import { useState } from 'react'
import { auth } from '../firebaseConfig'
import { useNavigation } from 'expo-router'
import Title from '../assets/components/text/title.js'
import TextInput from '../assets/components/inputs&buttons/textInputs/textInput.js'
import Btn from '../assets/components/inputs&buttons/buttons/button.js'

import styles from './styles/templateStyles'

import { createUserWithEmailAndPassword } from "firebase/auth";
import VoltarComLogo from '../assets/components/headers/voltarComLogo'

export default function Cadastro() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [repetirSenha, setRepetirSenha] = useState('')
  const navigate = useNavigation()

  const voltarParaLogin = () => {
    navigate.goBack()
  }

  const handleCadastro = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.replace('/home')
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/missing-email":
            Alert.alert("Erro", "E-mail faltando")
            return
          case "auth/invalid-email":
            Alert.alert("Erro", "E-mail inválido")
            return
          case "auth/email-already-in-use":
            Alert.alert("Erro", "E-mail em uso")
            return
          case "auth/missing-password":
            Alert.alert("Erro", "Senha faltando")
            return
        }
      });
  }

  const verificarSenha = () => {
    if (senha.length < 6) {
      alert('A senha precisa ter mais de 5 caracteres')
      return
    }
    if (senha != repetirSenha) {
      alert("Senhas não são iguais.")
      return
    }

    handleCadastro()
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <VoltarComLogo onPress={voltarParaLogin}/>
        <Title size={32} text="Vamos nos conhecer melhor" color="#633C8E" />
        <TextInput label="E-mail ou usuário" onChangeText={setEmail} />
        <TextInput label="Senha" onChangeText={setSenha} ocultar={true} />
        <TextInput label="Repetir Senha" onChangeText={setRepetirSenha} ocultar={true} />
        <Btn text="Cadastrar" onPress={() => verificarSenha()} />
      </View>
    </View>
  )
}