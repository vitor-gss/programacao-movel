import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input(props) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.textInput}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium"
  },
  textInput: {
    borderColor: "#633C8E",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,

    fontSize: 18,
    fontFamily: "Poppins_400Regular",

    paddingLeft: 12,
  }
})