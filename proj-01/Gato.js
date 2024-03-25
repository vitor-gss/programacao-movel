import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

const Gato = ({idade}) => {
	const texto = idade > 1 ? "anos" : "ano"
	const [nome, setNome] = useState("")
	// const [idade, setIdade] = useState(0)

	return (
		<View style={styles.container}>
			<TextInput style={styles.ipt} defaultValue={nome} onChangeText={(novoTexto) => {
				setNome(novoTexto)
			}} />
			<Text style={styles.text}>Nome: {nome}</Text>
			<Text style={styles.text}>Idade: {idade} {texto}</Text>
		</View>
	)
}

export default Gato;

const styles = StyleSheet.create({
	container:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderWidth: 1,
		width: "75%",
		backgroundColor: "#e9e9e9",
		borderRadius: 6,
	},
	text: {
		fontSize: 24,
	},
	ipt: {
		borderWidth: 1,
		
	}

}
)
