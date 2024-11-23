// app/cards/[id].js
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// import styles from '../styles/templateStyles';
import JobCard from '../../assets/components/mainComponents/jobCard';

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function CardDetails() {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar empresas: ", error);
      }
    };
    fetchEmpresas();
  }, []);

  const { id } = useLocalSearchParams();
  const card = empresas.find((item) => item.id === id);
  const router = useRouter()

  if (!card) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Image style={styles.img} source={{ uri: card.img }} />
          </View>
          <View style={styles.right}>
            <Text style={[styles.textVaga, styles.padrao]}>{card.vaga}</Text>
            <Text style={styles.textEmpresa}>{card.empresa}</Text>
            <Text style={styles.textLocal}>{card.local}</Text>
            <Text style={styles.textTempo}>{card.tempo}</Text>
          </View>
        </View>
        <View style={styles.pontualInfo}>
          <View style={styles.col}>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Tipo:</Text> {card.tipo}
            </Text>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Área:</Text> {card.area}
            </Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Período:</Text> {card.periodo}
            </Text>
            <Text style={styles.textPontual}>
              <Text style={styles.textLabel}>Situação:</Text> {card.situacao}
            </Text>
          </View>
        </View>
        <View style={styles.largeText}>
          <Text>Descrição: {card.descricao}</Text>
        </View>
        <View style={styles.largeText}>
          <Text>Requisitos: {card.requisitos}</Text>
        </View>
        <View style={styles.largeText}>
          <Text>Benefícios: {card.beneficios}</Text>
        </View>
        <View style={styles.largeText}>
          <Text>Outras informações: {card.outrasInformacoes}</Text>
        </View>
        <Pressable onPress={() => router.back()} style={{ backgroundColor: '#14d16f' }}>
          <Text>Voltar</Text>
        </Pressable>
        {/* <JobCard vaga={card.vaga} resolver
          empresa={card.empresa}
          local={card.local}
          tempo={card.tempo}
          img={card.img}
        /> */}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
  },
  card: {
    flexDirection: 'row',
    gap: 10,
  },
  img: {
    width: 74,
    height: 74,
    borderRadius: 10,
  },
  textVaga: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#2C2C2C'
  },
  textEmpresa: {
    color: '#444444'
  },
  textLocal: {
    color: '#9C9C9C'
  },
  textTempo: {
    color: '#555555'
  },
  padrao: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  pontualInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  col: {
  },
  textLabel: {
    color: '#633C8E',
    fontFamily: "Poppins_600SemiBold",
  }
})
