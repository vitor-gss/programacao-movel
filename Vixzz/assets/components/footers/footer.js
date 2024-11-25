import { View, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Footer(props) {
    const router = useRouter()

    return (
        <View style={styles.footer}>
            <View style={styles.icons}>
                <IconButton
                    icon="account-group-outline"
                    iconColor={props.candidaturas}
                    size={36}
                />
                <IconButton
                    icon="school-outline"
                    iconColor={props.cursos}
                    size={36}
                />
                <IconButton
                    icon="home-variant-outline"
                    iconColor={props.home}
                    size={36}
                    onPress={() => router.navigate('/home')}
                />
                <IconButton
                    icon="chat-processing-outline"
                    iconColor={props.foruns}
                    size={36}
                />
                <IconButton
                    icon="cog-outline"
                    iconColor={props.config}
                    size={36}
                    onPress={() => router.navigate('/config')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    footer: {
        borderTopWidth: 0.5,
        borderColor: '#633C8E',
        backgroundColor: "#ffffff"
    }
})