import { Pressable, Text, StyleSheet } from 'react-native';
import Arrow from 'react-native-arrow';

export default function voltar(props) {
  return (
    <Pressable onPress={props.onPress} style={localStyle.btn}>
      <Arrow size={15} color={'#633C8E'} direction={"left"} />
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
    color: '#633C8E', // Cor do texto
    marginLeft: 8, // Espaço entre a seta e o texto
  },
});
