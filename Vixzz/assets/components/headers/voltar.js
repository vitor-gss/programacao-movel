import { Pressable, Text, StyleSheet } from 'react-native';
import Arrow from 'react-native-arrow';
import { useRouter } from 'expo-router';

import Colors from '../../../app/styles/colors';

export default function Voltar(props) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} style={localStyle.btn}>
      <Arrow size={15} color={Colors.primaryColor} direction="left" />
      <Text style={localStyle.text}>{props.title}</Text>
    </Pressable>
  );
}

const localStyle = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryColor,
    marginLeft: 8,
  },
});
