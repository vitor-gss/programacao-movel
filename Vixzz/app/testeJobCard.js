import { View, Text, Pressable } from 'react-native';
import { useEffect, useState } from "react";
import { useRouter } from 'expo-router';

import { formatDistanceToNow } from 'date-fns'; // Importando a função formatDistanceToNow
import { ptBR } from 'date-fns/locale'; // Importando o locale ptBR

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

import JobCard from '../assets/components/mainComponents/jobCard';

export default function TesteJobCard() {
  const [loading, setLoading] = useState(true);
  const [empresas, setEmpresas] = useState([]);
  
  const router = useRouter();
  
  // Função para buscar os dados das empresas
  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "vagas"));
        const empresasData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id, // Usando o id real do documento
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
  
  // ID específico para testar
  const testId = "BgBrSiEw9SnIvf5aZqZt"; 
  
  // Encontrando o card com o id específico
  const card = empresas.find((item) => item.id === testId);

  // Verificando o estado de carregamento e se o card foi encontrado
  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (!card) {
    return <Text>Vaga não encontrada</Text>;
  }

  return (
    <View>
      <JobCard
        vaga="oillllllll"
        empresa="oillllllll"
        local="oillllllll"
        tempo="oillllllll"
        img={card.img}
      />
      <Pressable onPress={() => router.back()}>
        <Text>Voltar</Text>
      </Pressable>
    </View>
  );
}
