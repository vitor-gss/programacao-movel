import { View, StyleSheet, Image } from 'react-native'
import { IconButton } from 'react-native-paper';

import Colors from '../../../app/styles/colors'

export default function MainHeader() {
    return (
        <View style={styles.container}>
            {/* <View style={{ flex:1, backgroundColor: 'green' }}>
            </View> */}
            <Image source={require('../../logo/icon/vixz.png')} style={styles.img} />
            <View style={styles.icons}>
                <IconButton
                    icon="bell-outline"
                    iconColor={Colors.primaryColor}
                />
                <IconButton
                    icon="account-group-outline"
                    iconColor={Colors.primaryColor}
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
        borderColor: Colors.primaryColor,
    },
    img: {
        width: 86,
        height: 40,
    },
    icons: {
        flexDirection: 'row'
    }

})