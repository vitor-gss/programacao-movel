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
		borderWidth: 1,
		width: "60%",
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
