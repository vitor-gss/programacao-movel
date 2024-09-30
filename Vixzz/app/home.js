import { View, Text, Pressable } from 'react-native'
import { auth } from '../firebaseConfig'
import { useRouter } from 'expo-router'
import { signOut } from "firebase/auth";

import styles from './styles/templateStyles'

export default function Home() {
  const user = auth.currentUser // Usuário logado no momento
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.replace('/')
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{user.email}</Text>
        <Pressable onPress={handleLogout} style={{ backgroundColor: '#009cce', width: '100%', padding: 20 }}>
          <Text>Sair</Text>
        </Pressable>
      </View>
    </View>
  )
}