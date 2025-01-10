import React, { useEffect, useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';
import styles from '../styles/templateStyles';

// Componentes
import Voltar from '../components/headers/voltar';
import JobCard from '../components/mainComponents/jobCard';
import Button from '../components/buttons/button';
import Carregando from '../components/mainComponents/carregando';

// Utils
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function MinhasVagas() {
  const router = useRouter();

  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para separar os itens da lista
  const Separator = () => <View style={{ height: 10 }} />;

  // Função para redirecionar para detalhes da vaga
  const handleCardPress = (id) => {
    router.push(`./minhaVaga/${id}`);
  };

  // Função para buscar as vagas
  const fetchEmpresas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'vagas'));
      const empresasData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          tempo: data.createdAt
            ? formatDistanceToNow(data.createdAt.toDate(), {
                addSuffix: true,
                locale: ptBR,
              })
            : 'Data não disponível',
        };
      });
      setEmpresas(empresasData);
    } catch (error) {
      setError('Erro ao buscar vagas. Tente novamente mais tarde.');
      console.error('Erro ao buscar empresas: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  // Filtra as vagas que pertencem ao usuário
  const cards = empresas.filter((item) => item.userId === auth.currentUser.uid);

  // Caso esteja carregando ou houve erro
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Carregando />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.content}>
        <Voltar title="Minhas vagas" />
        <Button text="Criar vaga" onPress={() => router.push('./criarVaga')} />
        <FlatList
          data={cards}
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
      </View>
    </View>
  );
}
