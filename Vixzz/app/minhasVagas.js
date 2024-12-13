import { View, Text, StatusBar } from 'react-native'

import Voltar from '../assets/components/headers/voltar'

import styles from './styles/templateStyles'

export default function MinhasVagas() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.content}>
                <Voltar title='Minhas vagas'/>
            </View>
        </View>
    )
}