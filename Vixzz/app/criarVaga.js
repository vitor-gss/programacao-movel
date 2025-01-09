import React, { useMemo, useState } from 'react';
import { View, StatusBar, ScrollView, Alert, } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { htmlToText } from 'html-to-text';

import styles from './styles/templateStyles';
import Input from '../assets/components/inputs&buttons/textInputs/textInput';
import Voltar from '../assets/components/headers/voltar';
import Button from '../assets/components/inputs&buttons/buttons/button';
import Carregando from '../assets/components/mainComponents/carregando';

import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';

export default function CriarVaga() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { vaga, empresa, local, descricao } = useLocalSearchParams()

  function json() {
    const objJson = descricao ? JSON.parse(descricao) : null
    const dadosJson = objJson ? objJson._j : ''
    return dadosJson
  }

  // Estado para os dados do formulário
  const [dados, setDados] = useState({
    vaga: vaga || '',
    empresa: empresa || '',
    local: local || '',
    descricao: json(),
  });

  // Função para atualizar o estado com base no campo
  const handleChange = (campo, valor) => {
    setDados((prevData) => ({
      ...prevData,
      [campo]: valor,
    }));
  };

  // Função para salvar a vaga
  const salvarVaga = async () => {
    // Verificar se todos os campos estão preenchidos
    if (!vaga || !empresa || !descricao || !local) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, 'vagas'), {
        vaga,
        empresa,
        descricao,
        local,
        img: 'https://drive.google.com/uc?export=view&id=10jAUMoKYkTJ6dKzpBEHQURf0TtWavbpq',
        userId: auth.currentUser.uid,
        createdAt: new Date(),
      });
      Alert.alert('Sucesso', 'Vaga criada com sucesso!');
      router.push('/minhasVagas');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar vaga: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.content}>
        <Voltar />
        <Input
          label="Vaga"
          value={dados.vaga}
          onChangeText={(text) => handleChange('vaga', text)}
        />
        <Input
          label="Empresa"
          value={dados.empresa}
          onChangeText={(text) => handleChange('empresa', text)}
        />
        <Input
          label="Local"
          value={dados.local}
          onChangeText={(text) => handleChange('local', text)}
        />
        <Input
          label="Descrição"
          value={htmlToText(dados.descricao)}
          onPress={() => router.push({
            pathname: '/criarVaga/[content]',
            params: { vaga: dados.vaga, empresa: dados.empresa, local: dados.local, descricao: dados.descricao }
          })}
        />

        <Button text="Criar vaga" onPress={salvarVaga} />
        {loading && <Carregando />}
      </View>
    </ScrollView>
  );
}
