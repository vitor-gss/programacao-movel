import { Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

import Colors from '../../styles/colors'

export default function LoginWithSystem({nome, disabled, onPress}) {
    const icon = nome == "Google"
  ? require('../../../assets/empresa/google.png')
  : require('../../../assets/empresa/facebook.png')

  const borderColor = disabled ? '#424950' : Colors.primaryColor
  return (
      <Pressable style={[styles.button, styles.border, borderColor]} onPress={onPress}>
        <Image style={styles.image} source={icon}/>
        <Text style={styles.textButton}>Entrar com {nome}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    textButton: {
        color: "#424950",
        fontSize: 16,
        fontFamily: "Poppins_500Medium"
    },
    button: {
        display: "flex",
        gap: 13,
        flexDirection: 'row',
        backgroundColor: "transparent",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    border: {
        borderWidth: 1,
    },
    image:{
        width: 30,
        height: 30,
        borderRadius: 100,
    }
})