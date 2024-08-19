import { View, Text, Pressable } from 'react-native'
import {auth} from '../firebaseConfig'
import { useRouter } from 'expo-router'

export default function Home() {
    const user = auth.currentUser // Usuário logado no momento
  return (
    <View>
      <Text>{user.email}</Text>
    </View>
  )
}