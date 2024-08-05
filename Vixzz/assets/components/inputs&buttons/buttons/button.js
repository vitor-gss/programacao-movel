import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <View>
          <Pressable style={[styles(props.bg).button, styles(props.border).border]}>
              <Text style={[styles.textButton, styles(props.color).textButton]}>{props.text}</Text>
          </Pressable>
    </View>
  )
}


const styles = (bool) => StyleSheet.create({
    textButton:{
        color: bool ? "#fff": "#633C8E",
        fontSize: 20,
        flex: 1,
        fontFamily: "Poppins_500Medium"
    },
    button:{
        backgroundColor: bool ? "#633C8E" : "transparent",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    },
    border:{
        borderWidth: bool ? 1 : 0, 
        borderColor: "#633C8E",
    }
})