import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input(props) {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput style={styles.textInput}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput:{
    borderColor: "#633C8E",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,

    paddingLeft: 12,
  }
})