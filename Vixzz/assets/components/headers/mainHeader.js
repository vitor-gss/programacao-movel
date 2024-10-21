import { View, StyleSheet, Image } from 'react-native'
import * as React from "react"
import { IconButton } from 'react-native-paper';

export default function MainHeader() {
    return (
        <View style={styles.container}>
            <Image source={require('../../logo/icon/vixz.png')} style={styles.img} />
            <View style={styles.icons}>
                <IconButton
                    icon="bell-outline"
                    iconColor='#633C8E'
                />
                <IconButton
                    icon="account-group-outline"
                    iconColor='#633C8E'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        gap: 5,
        borderBottomWidth: 0.5,
        borderColor: "#633C8E",

        padding: 0,
        margin: 0
    },
    img: {
        width: 86,
        height: 40,
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
    }

})