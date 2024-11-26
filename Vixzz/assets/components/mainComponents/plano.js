import { View, Text, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

export default function plano() {
    let nomes = ['Júnior', 'Pleno', 'Sênior']
    let color = '#'
    switch (nomes[2]) {
        case 'Júnior':
            color += 'E85B2E'
            break; // Adicionando break aqui
        case 'Pleno': 
            color += '555555'
            break; // Adicionando break aqui
        case 'Sênior': 
            color += '0082AB'
            break; // Adicionando break aqui
        default: 
            color += '14d16f'
    }
    return (
        <View style={styles.content}>
            <IconButton
                icon='diamond-outline'
                iconColor={color}
                size={30}
            />
            <Text style={{color: color, fontFamily: 'Poppins_500Medium'}}>Sênior</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center'
    },
})
