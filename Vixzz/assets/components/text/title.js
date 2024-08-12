import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title(props) {
  return (
    <View>
      <Text style={[{color: props.color, fontSize: props.size}, styles.text]}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_700Bold',
    }
})