import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import styles from './styles/templateStyles'
import OptButton from '../assets/components/inputs&buttons/buttons/optButton'

const DATABTN = [
    {
        id: 1,
        name: 'Criar vaga',
        icon: 'file-plus-outline',
        route: '/criarVaga',
    },
    {
        id: 2,
        name: 'Notificações',
        icon: 'file-plus-outline',
        route: '',
    },
]

export default function Config() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SafeAreaProvider>
                    <SafeAreaView>
                        <FlatList
                            data={DATABTN}
                            renderItem={({ item }) =>
                                <OptButton
                                    name={item.name}
                                    icon={item.icon}
                                    route={item.route}
                                />
                            }
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </SafeAreaProvider>
                <Pressable onPress={() => router.back()} style={localStyles.btn}>
                    <Text>Voltar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    btn: {
        backgroundColor: '#14d16f'
    }
})