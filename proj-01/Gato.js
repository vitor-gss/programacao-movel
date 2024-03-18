import { View, Text, StyleSheet } from "react-native";

const Gato = ({nome, idade}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Nome: {nome}</Text>
			<Text style={styles.text}>Idade:{idade}</Text>
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
		width: "70%",
		backgroundColor: "#fff",
		borderRadius: 6,
	},
	text: {
		fontSize: 24,
	}
}
)

/* export default function Gato(){
	return(
		<View style={styles.container}>
			<Text style={styles.text}>Meu nome é {nome}</Text>
			<Text style={styles.text}>Tenho {idade} anos de idade</Text>
		</View>
	)
}
 */
