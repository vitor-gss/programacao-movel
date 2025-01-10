import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Estilos
import styles from '../styles/templateStyles';
import Colors from '../styles/colors';

// Componentes
import OptButton from '../components/buttons/optButton';
import Footer from '../components/footers/footer';
import UserInfo from '../components/mainComponents/userInfo';
import Plano from '../components/mainComponents/plano';
import { StatusBar } from 'expo-status-bar';

// Dados Estáticos
const DATABTN = [
    { id: 1, name: 'Editar perfil', icon: 'account-outline', route: '', disabled: true },
    { id: 2, name: 'Ver currículo', icon: 'file-document-outline', route: '', disabled: true },
    { id: 3, name: 'Minhas candidaturas', icon: 'widgets-outline', route: '', disabled: true },
    { id: 4, name: 'Minhas vagas', icon: 'file-plus-outline', route: '/minhasVagas', disabled: false },
    { id: 5, name: 'Notificações', icon: 'bell-outline', route: '/testeJobCard', disabled: false },
    { id: 6, name: 'Suporte e Feedback', icon: 'help-circle-outline', route: '', disabled: true },
    { id: 7, name: 'Sair', icon: 'logout-variant', route: '', disabled: false },
];

export default function Config() {
    // Renderiza os itens da lista
    const renderOption = ({ item }) => (
        <OptButton
            name={item.name}
            icon={item.icon}
            route={item.route}
            disabled={item.disabled}
            accessibilityLabel={`Botão: ${item.name}`}
            accessibilityRole="button"
        />
    );

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <SafeAreaView style={styles.content}>
                <View style={localStyles.userInfos}>
                    <UserInfo
                        img={require('../../assets/icon.png')}
                        name="Vitor Gabriel"
                        user="vitor"
                    />
                    <Plano />
                </View>

                <FlatList
                    data={DATABTN}
                    renderItem={renderOption}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
            <Footer config={Colors.primaryColor} />
        </View>
    );
}

// Estilos Locais
const localStyles = StyleSheet.create({
    userInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
