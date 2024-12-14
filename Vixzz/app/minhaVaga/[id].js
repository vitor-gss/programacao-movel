import { View, Text, StyleSheet, StatusBar, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

// Components
import JobCard from '../../assets/components/mainComponents/jobCard';
import DivisorWithTextStart from '../../assets/components/elements/divisorWithTextStart';
import Button from '../../assets/components/inputs&buttons/buttons/button';
import Carregando from '../../assets/components/mainComponents/carregando';
import Voltar from '../../assets/components/headers/voltar';

// Styles
import styles from '../styles/templateStyles';
import Colors from '../styles/colors';

// Firebase
import { collection, addDoc, serverTimestamp, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// Date formatting
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function CardDetails() {
  const [loading, setLoading] = useState(true);
  const [empresas, setEmpresas] = useState([]);
  const router = useRouter();

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
      console.error('Erro ao buscar empresas: ', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    try {
      const documentRef = doc(db, 'vagas', id);
      await deleteDoc(documentRef);
      router.back();
    } catch (error) {
      console.error('Erro ao excluir vaga:', error);
    }
  };

  const alertVaga = (id) => {
    Alert.alert('Excluir vaga', 'Tem certeza de que deseja excluir essa vaga?', [
      { text: 'Voltar', style: 'cancel' },
      { text: 'Sim', onPress: () => deleteData(id) },
    ]);
  };

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const { id } = useLocalSearchParams();
  const card = empresas.find((item) => item.id === id);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Carregando />
      </View>
    );
  }

  if (!card) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vaga não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.content}>
        <Voltar />
        <JobCard
          vaga={card.vaga}
          empresa={card.empresa}
          local={card.local}
          tempo={card.tempo}
          img={card.img}
        />
        <View style={localStyle.info}>
          <View style={localStyle.col}>
            <Text style={localStyle.textInfo}>
              <Text style={localStyle.destaque}>Tipo: </Text>{card.tipo}
            </Text>
            <Text style={localStyle.textInfo}>
              <Text style={localStyle.destaque}>Área: </Text>{card.area}
            </Text>
          </View>
          <View style={localStyle.col}>
            <Text style={localStyle.textInfo}>
              <Text style={localStyle.destaque}>Período: </Text>{card.periodo}
            </Text>
            <Text style={localStyle.textInfo}>
              <Text style={localStyle.destaque}>Situação: </Text>{card.situacao}
            </Text>
          </View>
        </View>
        <DivisorWithTextStart text="Descrição" />
        <Text>{card.descricao}</Text>
        <DivisorWithTextStart text="Requisitos" />
        <Text>{card.requisitos}</Text>
        <DivisorWithTextStart text="Benefícios" />
        <Text>{card.beneficios}</Text>
        <DivisorWithTextStart text="Outras informações" />
        <Text>{card.outrasInfo}</Text>
        <Button text="Editar" disabled />
        <Button text="Excluir" bg="#CC4143" onPress={() => alertVaga(id)} />
      </View>
    </View>
  );
}

const localStyle = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {},
  textInfo: {
    fontSize: 14,
  },
  destaque: {
    color: Colors.primaryColor,
    fontFamily: 'Poppins_600SemiBold',
  },
});
