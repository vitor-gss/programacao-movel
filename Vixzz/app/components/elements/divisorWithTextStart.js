import { View, Text, StyleSheet } from 'react-native'

import Colors from '../../styles/colors'

export default function DivisorWithTextStart(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 5,
    },
    text: {
        color: Colors.primaryColor,
        fontFamily: "Poppins_400Regular",
    },
    line: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: Colors.primaryColor,
    }
})