import { View, FlatList, SafeAreaView } from 'react-native'
import { useEffect, useState } from "react";
import { useRouter } from 'expo-router'
// ---------------------------------------------------
// import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
// ---------------------------------------------------
import styles from './styles/templateStyles'
import PremiumButton from '../assets/components/inputs&buttons/buttons/premiumButton';
import JobCard from '../assets/components/mainComponents/jobCard';
import MainHeader from '../assets/components/headers/mainHeader';
import Footer from '../assets/components/footers/footer';
import SearchBar from '../assets/components/mainComponents/searchBar';

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  const user = auth.currentUser // Usuário logado no momento
  const router = useRouter()

  // const handleLogout = async () => {
  //   await signOut(auth)
  //   router.replace('/')
  // }

  const Separator = () => (
    <View style={{ height: 10 }} /> // Ajuste a altura conforme necessário
  );

  const handleCardPress = (id) => {
    router.push(`./vaga/${id}`);
  };

  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "vagas"));
        const empresasData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
  
          return {
            id: doc.id,
            ...data,
            tempo: data.createdAt
              ? formatDistanceToNow(data.createdAt.toDate(), { 
                  addSuffix: true, 
                  locale: ptBR 
                }) 
              : "Data não disponível",
          };
        });
        setEmpresas(empresasData);
      } catch (error) {
        console.error("Erro ao buscar empresas: ", error);
      }
    };
  
    fetchEmpresas();
  }, []);
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MainHeader />
        <PremiumButton />
        <SearchBar/>

          <FlatList
            data={empresas}
            renderItem={({ item }) =>
              <JobCard vaga={item.vaga}
                empresa={item.empresa}
                local={item.local}
                tempo={item.tempo}
                img={item.img}
                onPress={() => handleCardPress(item.id)} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
          />
   
        {/* <Text>{user.email}</Text>
        <Pressable onPress={handleLogout} style={{ backgroundColor: '#009cce', width: '100%', padding: 20 }}>
          <Text>Sair</Text>
        </Pressable> */}
      </View>
      <Footer 
      home='#633C8E'
      />
    </View>
  )
}