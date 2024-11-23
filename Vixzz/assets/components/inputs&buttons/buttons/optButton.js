import { View, Text, StyleSheet, Pressable } from 'react-native'
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function OptButton(props) {
    const router = useRouter()
    return (
        <View style={styles.opt}>
            <Pressable style={styles.btn} onPress={() => router.navigate(props.route)}>
                <IconButton
                    icon={props.icon}
                    iconColor={'#633C8E'}
                    size={30}
                />
                <Text style={styles.text}>{props.name}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    opt: {

    },
    btn: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: '',
        color: '#633C8E',
        fontFamily: 'Poppins_400Regular',
    }
})