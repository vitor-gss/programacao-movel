import { Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

export default function LoginWithSystem(props) {
    const icon = props.name == "Google"
  ? require('../../../logo/google.png')
  : require('../../../logo/facebook.png')
  return (
      <Pressable style={[styles.button, styles.border]} onPress={props.onPress}>
        <Image style={styles.image} source={icon}/>
        <Text style={styles.textButton}>Entrar com {props.name}</Text>
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
        borderRadius: 100,
    },
    border: {
        borderColor: "#633C8E",
        borderWidth: 1,
    },
    image:{
        width: 30,
        height: 30
    }
})