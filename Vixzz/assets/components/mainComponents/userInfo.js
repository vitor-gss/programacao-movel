import { View, Text, Image, StyleSheet } from 'react-native'

export default function userInfo(props) {
    return (
        <View style={styles.content}>
            <Image style={styles.img} source={props.img} />
            <View style={styles.text}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.user}>@{props.user}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        gap: 12,
    },
    text: {
        flexDirection: 'column',
        gap: 5,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    name: {
        fontSize: 20,
        fontFamily: 'Poppins_500Medium'
    },
    user: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    },  
})