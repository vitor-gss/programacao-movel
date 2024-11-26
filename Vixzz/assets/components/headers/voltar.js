import { Pressable, View, Text, StyleSheet } from 'react-native'
import Arrow from 'react-native-arrow'

export default function voltar(props) {
  return (
    <Pressable onPress={props.onPress} style={localStyle.btn}>
      <Arrow size={15} color={'#633C8E'} direction={"left"} style={localStyle.arrow}/>
      <Text style={localStyle.text}>oie</Text>
    </Pressable>
  )
}

const localStyle = StyleSheet.create({
  btn: {
    flexDirection: 'row'
  },
  arrow: {

  },
  text:{

  }
})