import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Tipt({texto}) {
  return (
    <View>
      <TextInput placeholder={texto} style={styles.ipt}/>
    </View>
  )
}


  const styles = StyleSheet.create({
    ipt: {
      borderRadius: 8,
      borderWidth: 1,
      height: 57,
      paddingLeft: 8,
      backgroundColor: "#EFEFEF"
    },
  })
