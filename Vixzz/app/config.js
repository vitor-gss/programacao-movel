import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import styles from './styles/templateStyles'
import OptButton from '../assets/components/inputs&buttons/buttons/optButton'
import Footer from '../assets/components/footers/footer'

const DATABTN = [
    {
        id: 1,
        name: 'Editar perfil',
        icon: 'account-outline',
        route: '',
    },
    {
        id: 2,
        name: 'Ver currículo',
        icon: 'file-document-outline',
        route: '',
    },
    {
        id: 3,
        name: 'Minhas candidaturas',
        icon: 'widgets-outline',
        route: '',
    },
    {
        id: 4,
        name: 'Minhas vagas',
        icon: 'file-plus-outline',
        route: '/criarVaga',
    },
    {
        id: 5,
        name: 'Notificações',
        icon: 'bell-outline',
        route: '/testeJobCard',
    },
    {
        id: 6,
        name: 'Suporte e Feedback',
        icon: 'help-circle-outline',
        route: '',
    },
    {
        id: 7,
        name: 'Sair',
        icon: 'logout-variant',
        route: '',
    },
]

export default function Config() {
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
            </View>
            <Footer 
            config="#633C8E"
            />
        </View>
    )
}

const localStyles = StyleSheet.create({
    btn: {
        backgroundColor: '#14d16f'
    }
})