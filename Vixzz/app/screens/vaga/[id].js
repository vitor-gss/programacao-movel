import { View, StatusBar } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";

import Button from '../../components/buttons/button'
import ButtonOnlyBorder from '../../components/buttons/buttonOnlyBorder'
import Carregando from '../../components/mainComponents/carregando'
import Voltar from '../../components/headers/voltar'
import ConteudoVaga from '../../components/mainComponents/conteudoVaga';
// Styles
import styles from '../../styles/templateStyles'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

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
  // const {vaga, empresa, local, tempo, img, descricao} = card

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
        <ConteudoVaga vaga={card.vaga} empresa={card.empresa} local={card.local} tempo={card.tempo} img={card.img} descricao={card.descricao}/>
        <Button text={'Candidatar-se'} disabled={true} />
        <ButtonOnlyBorder text={'Saber mais'} disabled={true} />
      </View>
    </View>

  );
}
