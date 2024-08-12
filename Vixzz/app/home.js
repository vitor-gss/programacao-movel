import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {auth} from '../firebaseConfig'
import { useRouter } from 'expo-router'

export default function Home() {
    const user = auth.currentUser
  return (
    <View>
      <Text>{user.email}</Text>
    </View>
  )
}