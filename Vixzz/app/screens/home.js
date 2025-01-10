import { View, FlatList, StatusBar, Text } from 'react-native';
import { useEffect, useState } from "react";
import { useRouter } from 'expo-router';

// Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Estilos
import styles from '../styles/templateStyles';
import Colors from '../styles/colors';

// Componentes
import PremiumButton from '../components/buttons/premiumButton';
import JobCard from '../components/mainComponents/jobCard';
import MainHeader from '../components/headers/mainHeader';
import Footer from '../components/footers/footer';
import SearchBar from '../components/mainComponents/searchBar';
import Carregando from '../components/mainComponents/carregando'

// Utilitários
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  const router = useRouter();

  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Separador para os itens da lista
  const Separator = () => <View style={{ height: 10 }} />;

  // Função para buscar dados do Firebase
  const fetchEmpresas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "vagas"));
      const empresasData = querySnapshot.docs.map(formatEmpresaData);
      setEmpresas(empresasData);
    } catch (error) {
      console.error("Erro ao buscar empresas: ", error);
      setError("Não foi possível carregar as vagas. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  // Formata os dados de uma empresa
  const formatEmpresaData = (doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      tempo: data.createdAt
        ? formatDistanceToNow(data.createdAt.toDate(), {
            addSuffix: true,
            locale: ptBR,
          })
        : "Data não disponível",
    };
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  // Navega para os detalhes da vaga
  const handleCardPress = (id) => {
    router.push(`./vaga/${id}`);
  };

  // Cabeçalho da lista
  const renderHeader = () => (
    <View style={{ gap: 20 }}>
      <MainHeader />
      {/* <PremiumButton />
      <SearchBar /> */}
      <View></View>
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Carregando/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.content}>
        {error ? (
          <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
        ) : (
          <FlatList
            ListHeaderComponent={renderHeader}
            data={empresas}
            renderItem={({ item }) => (
              <JobCard
                vaga={item.vaga}
                empresa={item.empresa}
                local={item.local}
                tempo={item.tempo}
                img={item.img}
                onPress={() => handleCardPress(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={Separator}
          />
        )}
      </View>
      <Footer home={Colors.primaryColor} />
    </View>
  );
}
