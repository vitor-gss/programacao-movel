import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <View>
          <Pressable style={[styles(props.bg).button, styles(props.border).border]}>
              <Text style={styles.textButton}>Vamos começar</Text>
          </Pressable>
    </View>
  )
}


const styles = (bool) => StyleSheet.create({
    textButton:{
        fontSize: 16,
        flex: 1,
    },
    button:{
        backgroundColor: bool ? "#009cce" : "transparent",
        width: "100%",
        flex: 1,
        justifyContent: "center"
    },
    border:{
        borderWidth: bool ? 10 : 0 
    }
})