import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Gato = ({nome, idade}) => {
	const texto = idade > 1 ? "anos" : "ano"
	return (
		<View style={styles.container}>
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
	}
}
)
