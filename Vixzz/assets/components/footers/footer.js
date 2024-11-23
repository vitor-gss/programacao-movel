import { View, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.icons}>
                <IconButton
                    icon="account-group-outline"
                    iconColor='#888888'
                    size={36}
                />
                <IconButton
                    icon="school-outline"
                    iconColor='#888888'
                    size={36}
                />
                <IconButton
                    icon="home-variant-outline"
                    iconColor='#633C8E'
                    size={36}
                />
                <IconButton
                    icon="chat-processing-outline"
                    iconColor='#888888'
                    size={36}
                />
                <IconButton
                    icon="cog-outline"
                    iconColor='#888888'
                    size={36}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },
    footer:{
        borderTopWidth: 0.5,
        borderColor: '#633C8E',
    }
})