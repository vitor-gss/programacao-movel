import { View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import styles from './styles/templateStyles'
import OptButton from '../assets/components/inputs&buttons/buttons/optButton'
import Footer from '../assets/components/footers/footer'
import UserInfo from '../assets/components/mainComponents/userInfo'
import Plano from '../assets/components/mainComponents/plano';

const DATABTN = [
    {
        id: 1,
        name: 'Editar perfil',
        icon: 'account-outline',
        route: '',
        disabled: true
    },
    {
        id: 2,
        name: 'Ver currículo',
        icon: 'file-document-outline',
        route: '',
        disabled: true
    },
    {
        id: 3,
        name: 'Minhas candidaturas',
        icon: 'widgets-outline',
        route: '',
        disabled: true
    },
    {
        id: 4,
        name: 'Minhas vagas',
        icon: 'file-plus-outline',
        route: '/criarVaga',
        disabled: false
    },
    {
        id: 5,
        name: 'Notificações',
        icon: 'bell-outline',
        route: '/testeJobCard',
        disabled: false
    },
    {
        id: 6,
        name: 'Suporte e Feedback',
        icon: 'help-circle-outline',
        route: '',
        disabled: true
    },
    {
        id: 7,
        name: 'Sair',
        icon: 'logout-variant',
        route: '',
        disabled: false
    },
]

export default function Config() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SafeAreaProvider>
                    <SafeAreaView>
                        <View style={localStyles.userInfos}>
                            <UserInfo
                                img={require('../assets/icon.png')}
                                name='Vitor Gabriel'
                                user='vitor'
                            />
                            <Plano />
                        </View>
                        <FlatList
                            data={DATABTN}
                            renderItem={({ item }) =>
                                <OptButton
                                    name={item.name}
                                    icon={item.icon}
                                    route={item.route}
                                    disabled={item.disabled}
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
    userInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})