import { View, StyleSheet, Image } from 'react-native'
import { IconButton } from 'react-native-paper';

export default function MainHeader() {
    return (
        <View style={styles.container}>
            {/* <View style={{ flex:1, backgroundColor: 'green' }}>
            </View> */}
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
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        gap: 5,

        borderBottomWidth: 0.5,
        borderColor: "#633C8E",
    },
    img: {
        width: 86,
        height: 40,
    },
    icons: {
        flexDirection: 'row'
    }

})