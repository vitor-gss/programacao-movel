import { View, StyleSheet, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

// Firebase
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Componentes
import Btn from '../assets/components/inputs&buttons/buttons/button';
import Input from '../assets/components/inputs&buttons/textInputs/textInput';
import ButtonOnlyBorder from '../assets/components/inputs&buttons/buttons/buttonOnlyBorder';
import LoginWithSystem from '../assets/components/inputs&buttons/buttons/loginWithSystem';
import DivisorWithTextMid from '../assets/components/elements/divisorWithTextMid';
import Circle from '../assets/components/elements/circle';
import Title from '../assets/components/text/title';

// Estilos
import styles from './styles/templateStyles';
import Colors from './styles/colors';

export default function Index() {
  // Estados
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  // Fonts
  const [loaded, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  // Função de Login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.replace('/home');
    } catch (error) {
      const errorMessage = mapFirebaseError(error.code);
      alert(errorMessage);
    }
  };

  // Mapeia erros do Firebase
  const mapFirebaseError = (code) => {
    const errorMessages = {
      'auth/invalid-credential': 'Credenciais inválidas.',
      'auth/missing-password': 'Senha faltando.',
      'auth/invalid-email': 'E-mail inválido.',
      'auth/user-not-found': 'Usuário não encontrado.',
      'auth/wrong-password': 'Senha incorreta.',
    };
    return errorMessages[code] || 'Ocorreu um erro. Tente novamente.';
  };

  const navigateToCadastro = () => {
    router.push('/cadastro');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.content}>
        {/* Círculos decorativos */}
        <View style={styles.circles}>
          <Circle bg={Colors.primaryColor} right={60} />
          <Circle bg="#ffea00" left={310} />
        </View>

        {/* Título */}
        <Title text="Acesse sua conta" color={Colors.primaryColor} size={30} />

        {/* Campos de Entrada */}
        <Input
          label="E-mail ou usuário"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Input
          label="Senha"
          onChangeText={setSenha}
          ocultar={true}
          autoCorrect={false}
          autoCapitalize="none"
        />

        {/* Botão de Login */}
        <Btn text="Entrar" onPress={handleLogin} />

        {/* Botões de Opções */}
        <View style={stylesLocal.lineButton}>
          <ButtonOnlyBorder text="Esqueci a senha" style={stylesLocal.opt} />
          <ButtonOnlyBorder
            text="Cadastrar"
            onPress={navigateToCadastro}
            style={stylesLocal.opt}
          />
        </View>

        {/* Divisor e Login Social */}
        <DivisorWithTextMid text="Outras formas de login" />
        <LoginWithSystem name="Google" />
        <LoginWithSystem name="Facebook" />
      </View>
    </View>
  );
}

// Estilos locais
const stylesLocal = StyleSheet.create({
  lineButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
