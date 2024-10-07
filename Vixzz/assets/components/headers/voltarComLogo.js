import { Pressable, View } from 'react-native'
import Arrow from 'react-native-arrow'

export default function VoltarComLogo(props) {
  return (
    <Pressable onPress={props.onPress}>
      <Arrow size={15} color={'#633C8E'} direction={"left"}/>
    </Pressable>
  )
}