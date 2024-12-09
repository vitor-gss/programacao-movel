import { View, Text, Pressable, StyleSheet } from 'react-native'

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
    color: "#633C8E",
},
button: {
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
},
border: {
    borderWidth: 1,
    borderColor: "#633C8E",
},
  botaoDesabilitado:{
    borderColor: "#808080",
    borderWidth: 1,
  },
  textDesativado: {
    color: "#808080",
  },
})
