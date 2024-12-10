import { Text, StyleSheet, Pressable } from 'react-native'

export default function Button(props) {
    return (
            <Pressable 
            style={[styles.button, props.disabled ? styles.colorDisabled : styles.colorButton]} 
            onPress={props.onPress} 
            disabled={props.disabled}>
                <Text style={styles.textButton}>{props.text}</Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    textButton: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Poppins_500Medium"
    },
    button: {
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    },
    colorButton:{
        backgroundColor: "#7B41CC",
    },
    colorDisabled: {
        backgroundColor: "#808080"
    },
})