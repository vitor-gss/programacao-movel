import { Text, StyleSheet, Pressable } from 'react-native'

export default function Button(props) {
    return (
            <Pressable style={[styles.button, styles.border]} onPress={props.onPress} disabled={props.disabled}>
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
        backgroundColor: "#633C8E",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    },
    border: {
        borderColor: "#633C8E",
    }
})