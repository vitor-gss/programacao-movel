import { Pressable, Text, StyleSheet } from 'react-native';
import Arrow from 'react-native-arrow';

import Colors from '../../../app/styles/colors'

export default function voltar(props) {
  return (
    <Pressable onPress={props.onPress} style={localStyle.btn}>
      <Arrow size={15} color={Colors.primaryColor} direction={"left"} />
      <Text style={localStyle.text}>Configurações</Text>
    </Pressable>
  );
}

const localStyle = StyleSheet.create({
  btn: {
    flexDirection: 'row', // Organiza a seta e o texto em linha
    alignItems: 'center', // Centraliza verticalmente
  },
  text: {
    fontSize: 18, // Ajuste do tamanho do texto
    fontWeight: 'bold', // Opcional, para dar mais destaque
    color: Colors.primaryColor, // Cor do texto
    marginLeft: 8, // Espaço entre a seta e o texto
  },
});
