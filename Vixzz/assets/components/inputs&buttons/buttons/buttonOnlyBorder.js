import { View, Text, Pressable, StyleSheet } from 'react-native'

import Colors from '../../../../app/styles/colors'

export default function ButtonOnlyBorder(props) {
  return (
    <View>
      <Pressable style={[styles.button, props.style, props.disabled ? styles.botaoDesabilitado : styles.border]} onPress={props.onPress} disabled={props.disabled}>
        <Text style={[props.disabled ? styles.textDesativado : styles.textButton, styles.text]}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontFamily: "Poppins_500Medium"
  },
  textButton: {
    color: Colors.primaryColor,
},
button: {
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
},
border: {
    borderWidth: 1,
    borderColor: Colors.primaryColor,
},
  botaoDesabilitado:{
    borderColor: "#808080",
    borderWidth: 1,
  },
  textDesativado: {
    color: "#808080",
  },
})
