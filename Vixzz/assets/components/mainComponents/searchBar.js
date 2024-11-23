import { View, Text, StyleSheet, TextInput, Dimensions, Image } from 'react-native';
import { IconButton } from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <View style={styles.circle}>
                    <Image source={require('../../logo/icon/search.png')} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Buscar"}
                    placeholderTextColor={"#888888"}
                />
            </View>
            <IconButton
                style={styles.iconButton}
                icon={"filter-outline"}
                iconColor='#633C8E'
                size={24}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    search: {
        borderWidth: 1,
        borderColor: "#633C8E",
        borderRadius: 100,

        flexDirection: 'row',
        flex: 0.9
    },
    circle: {
        backgroundColor: "#633C8E",
        width: width * 0.11, height: width * 0.11,
        borderRadius: 100, // Mantém o círculo

        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    },
    iconButton: {
        flex: 0.1,
    }
});
