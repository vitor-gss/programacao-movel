import { View, Text, StyleSheet } from 'react-native'

export default function DivisorWithTextMid(props) {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        gap: 5,
    },
    text: {
        color: "#633C8E",
        fontFamily: "Poppins_400Regular",
    },
    line: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: "#633C8E",
    }
})