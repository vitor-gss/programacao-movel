import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../assets/components/inputs&buttons/buttons/button'
import Input from '../assets/components/inputs&buttons/textInputs/textInput'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input label="E-mail ou usuário"/>
        <Input label="Senha"/>
        <Button bg={true} border={false} color={true} text="Entrar"/>
        <View style={styles.lineButton}>
          <Button bg={false} border={true} color={false} text="Esqueci a senha"/>
          <Button bg={false} border={true} color={false} text="Cadastrar"/>
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