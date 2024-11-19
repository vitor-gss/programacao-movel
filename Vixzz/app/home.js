import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native'
import { auth } from '../firebaseConfig'
import { useRouter } from 'expo-router'
import { signOut } from "firebase/auth";

import styles from './styles/templateStyles'
import PremiumButton from '../assets/components/inputs&buttons/buttons/premiumButton';
import JobCard from '../assets/components/mainComponents/jobCard';
import MainHeader from '../assets/components/headers/mainHeader';
import Footer from '../assets/components/footers/footer';

export default function Home() {
  const user = auth.currentUser // Usuário logado no momento
  const router = useRouter()

  // const handleLogout = async () => {
  //   await signOut(auth)
  //   router.replace('/')
  // }

  const DATA = [
    {
      id: '1',
      vaga: 'Vendedor',
      empresa: 'Magalu',
      local: 'Maceió, Alagoas (Presencial)',
      tempo: 'Há 69 semanas',
      img: require('../assets/logo/empresa/magalu.png'),
      tipo: "Pessoa Física",
      periodo: "Integral",
      area: "Varejo",
      situacao: "Aberta",
      descricao: "Realizar vendas, atender clientes e auxiliar no controle de estoque.",
      requisitos: "Ter 18 anos ou mais; Vacinação em dia;Ter conhecimento básico em informática;Saber inglês fluente;Saber mandarim fluente.",
      beneficios: "Vale alimentação; Vale-transporte; Plano de saúde; Plano odontológico; PLE; Descontos em produtos.",
      outrasInformacoes: "Local: Rua Oldemburgo da Silva Paranhos - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
    },
    {
      id: '2',
      vaga: 'Operador',
      empresa: 'Sicredi',
      local: 'Maceió, Alagoas (Presencial)',
      tempo: 'Há 2 semanas',
      img: require('../assets/logo/empresa/sicredi.png'),
      tipo: "Pessoa Física",
      periodo: "Integral",
      area: "Varejo",
      situacao: "Aberta",
      descricao: "Realizar vendas, atender clientes e auxiliar no controle de estoque.",
      requisitos: "Ter 18 anos ou mais; Vacinação em dia;Ter conhecimento básico em informática;Saber inglês fluente;Saber mandarim fluente.",
      beneficios: "Vale alimentação; Vale-transporte; Plano de saúde; Plano odontológico; PLE; Descontos em produtos.",
      outrasInformacoes: "Local: Rua Oldemburgo da Silva Paranhos - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
    },
    {
      id: '3',
      vaga: 'Operador de Caixa',
      empresa: 'Sicredi',
      local: 'Maceió, Alagoas (Presencial)',
      tempo: 'Há 3 semanas',
      img: require('../assets/logo/empresa/sicredi.png'),
      tipo: "Pessoa Física",
      periodo: "Integral",
      area: "Varejo",
      situacao: "Aberta",
      descricao: "Realizar vendas, atender clientes e auxiliar no controle de estoque.",
      requisitos: "Ter 18 anos ou mais; Vacinação em dia;Ter conhecimento básico em informática;Saber inglês fluente;Saber mandarim fluente.",
      beneficios: "Vale alimentação; Vale-transporte; Plano de saúde; Plano odontológico; PLE; Descontos em produtos.",
      outrasInformacoes: "Local: Rua Oldemburgo da Silva Paranhos - Maceió, AL; Período de inscrição: 13/09 - 30/09.",
    },
  ];

  const Separator = () => (
    <View style={{ height: 10 }} /> // Ajuste a altura conforme necessário
  );

  const handleCardPress = (id) => {
    router.push(`./vaga/${id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MainHeader />
        <PremiumButton />
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => 
            <JobCard vaga={item.vaga} 
            empresa={item.empresa} 
            local={item.local} 
            tempo={item.tempo} 
            img={item.img} 
            onPress={() => handleCardPress(item.id)}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
          />
        </SafeAreaView>
        {/* <Text>{user.email}</Text>
        <Pressable onPress={handleLogout} style={{ backgroundColor: '#009cce', width: '100%', padding: 20 }}>
          <Text>Sair</Text>
        </Pressable> */}
      </View>
      <Footer/>
    </View>
  )
}