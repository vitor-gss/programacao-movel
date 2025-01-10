import { View, Text, TextInput, StyleSheet } from 'react-native'

import Colors from '../../styles/colors'

export default function Input(props) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.textInput} 
      onChangeText={props.onChangeText} 
      secureTextEntry={props.ocultar}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}
      onPress={props.onPress}
      value={props.value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium"
  },
  textInput: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 8,
    height: 50,

    fontSize: 18,
    fontFamily: "Poppins_400Regular",

    paddingLeft: 12,
  }
})