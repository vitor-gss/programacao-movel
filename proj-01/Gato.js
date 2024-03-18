import { View, Text, StyleSheet } from "react-native";

const Gato = ({nome}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Meu nome é {nome}</Text>
		</View>
	)
}

export default Gato;

const styles = StyleSheet.create({
	container:{
		display: 'flex',
		alignItems: 'center',
		borderWidth: 1,
		width: "70%",
		backgroundColor: "#fff",
	},
	text: {
		fontSize: 24,
	}
}
)

/* export default function Gato(){
	return(
		<View>
			<Text>Meu nome é VITOR</Text>
		</View>
	)
}
 */
