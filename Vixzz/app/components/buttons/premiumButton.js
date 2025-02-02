import { View, Text, Pressable, StyleSheet, Image } from 'react-native'

import Colors from '../../styles/colors'

export default function PremiumButton() {
  return (
    <View>
        <Pressable style={styles.button}>
            <Image style={styles.img} source={require('../../../assets/icon/trofeu.png')}/>
            <Text style={styles.text}>Você ainda não é <View><Text style={styles.span}>PREMIUM?</Text></View></Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        height: 150
    },
    text:{
        fontFamily: "Poppins_400Regular",
        flex: 6,
        fontSize: 20,
        color: 'white'
    },
    img:{
        flex: 4,
        width: 40,
        height: 120
    },
    span:{
        fontFamily: "Poppins_700Bold",
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold'
    }
})  