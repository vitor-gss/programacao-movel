import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function ButtonOnlyBorder(props) {
  return (
    <View>
      <Pressable style={[styles.button, styles.border, props.style]} onPress={props.onPress} disabled={props.disabled}>
        <Text style={styles.textButton}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  textButton: {
    color: "#633C8E",
    fontSize: 18,
    fontFamily: "Poppins_500Medium"
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
}
})
