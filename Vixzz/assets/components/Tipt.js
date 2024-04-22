import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Tipt({texto, bool}) {
  return (
    <View>
      <TextInput placeholder={texto} style={styles.ipt} secureTextEntry={bool}/>
    </View>
  )
}


  const styles = StyleSheet.create({
    ipt: {
      borderRadius: 8,
      height: 57,
      paddingLeft: 12,
      backgroundColor: "#EFEFEF",
    },
  })
