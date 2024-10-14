import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native'
import { auth } from '../firebaseConfig'
import { useRouter } from 'expo-router'
import { signOut } from "firebase/auth";

import styles from './styles/templateStyles'
import PremiumButton from '../assets/components/inputs&buttons/buttons/premiumButton';
import JobCard from '../assets/components/mainComponents/jobCard';

export default function Home() {
  const user = auth.currentUser // Usuário logado no momento
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.replace('/')
  }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      vaga: 'Vendedor',
      empresa: 'Magalu',
      local: 'Maceió, Alagoas (Presencial)',
      tempo: 'Há 2 semanas',
      img: require('../assets/logo/magalu.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      vaga: 'Operador',
      empresa: 'Sicredi',
      local: 'Maceió, Alagoas (Presencial)',
      tempo: 'Há 2 semanas',
      img: require('../assets/logo/sicredi.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      vaga: 'Mago',
      empresa: 'Migurdia',
      local: 'Maceió, Alagoas (Presencial)',
      tempo: 'Há 2 semanas',
      img: require('../assets/logo/roxy.jpeg'),
    },
  ];

  const Separator = () => (
    <View style={{ height: 10 }} /> // Ajuste a altura conforme necessário
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PremiumButton />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <JobCard vaga={item.vaga} empresa={item.empresa} local={item.local} tempo={item.tempo} img={item.img}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
          />
        </SafeAreaView>
        <Text>{user.email}</Text>
        <Pressable onPress={handleLogout} style={{ backgroundColor: '#009cce', width: '100%', padding: 20 }}>
          <Text>Sair</Text>
        </Pressable>
      </View>
    </View>
  )
}