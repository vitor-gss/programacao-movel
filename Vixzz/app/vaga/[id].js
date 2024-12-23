import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";

import JobCard from '../../assets/components/mainComponents/jobCard';
import DivisorWithTextStart from '../../assets/components/elements/divisorWithTextStart'
import Button from '../../assets/components/inputs&buttons/buttons/button'
import ButtonOnlyBorder from '../../assets/components/inputs&buttons/buttons/buttonOnlyBorder'
import Carregando from '../../assets/components/mainComponents/carregando'
import Voltar from '../../assets/components/headers/voltar'
// Styles
import styles from '../styles/templateStyles'
import Colors from '../styles/colors';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

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

  if (!card) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Carregando />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.content}>
        <Voltar />
        <JobCard vaga={card.vaga}
          empresa={card.empresa}
          local={card.local}
          tempo={card.tempo}
          img={card.img}
        />
        <View style={localStyle.info}>
          <View style={localStyle.col}>
            <Text style={localStyle.textInfo}><Text style={localStyle.destaque}>Tipo: </Text>{card.tipo}</Text>
            <Text style={localStyle.textInfo}><Text style={localStyle.destaque}>Área: </Text>{card.area}</Text>
          </View>
          <View style={localStyle.col}>
            <Text style={localStyle.textInfo}><Text style={localStyle.destaque}>Período: </Text>{card.periodo}</Text>
            <Text style={localStyle.textInfo}><Text style={localStyle.destaque}>Situação: </Text>{card.situacao}</Text>
          </View>
        </View>
        <DivisorWithTextStart text={"Descrição"} />
        <Text>{card.descricao}</Text>
        <DivisorWithTextStart text={"Requisitos"} />
        <Text>{card.requisitos}</Text>
        <DivisorWithTextStart text={"Beneficios"} />
        <Text>{card.beneficios}</Text>
        <DivisorWithTextStart text={"Outras informações"} />
        <Text>{card.outrasInformacoes}</Text>
        <Button text={'Candidatar-se'} disabled={true} />
        <ButtonOnlyBorder text={'Saber mais'} disabled={true} />
      </View>
    </View>

  );
}

const localStyle = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  col: {

  },
  textLabel: {
    color: Colors.primaryColor,
    fontFamily: "Poppins_600SemiBold",
  },
  textInfo: {
    fontSize: 14,
  },
  destaque: {
    color: Colors.primaryColor,
    fontFamily: 'Poppins_600SemiBold'
  },
})
