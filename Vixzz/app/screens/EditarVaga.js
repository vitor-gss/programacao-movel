import React, { useState } from 'react';
import { View, StatusBar, ScrollView, Alert, } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { htmlToText } from 'html-to-text';

import styles from '../styles/templateStyles';
import Input from '../components/textInputs/textInput';
import Voltar from '../components/headers/voltar';
import Button from '../components/buttons/button';
import Carregando from '../components/mainComponents/carregando';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function CriarVaga() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { id, vaga, empresa, local, descricao } = useLocalSearchParams()

  // Estado para os dados do formulário
  function json() {
    if (descricao.charAt(0) !== '{') {
      return descricao
    }
    const objJson = JSON.parse(descricao)
    const dadosJson = objJson ? objJson._j : ''
    return dadosJson
  }

  // Estado para os dados do formulário
  const [dados, setDados] = useState({
    vaga: vaga || '',
    empresa: empresa || '',
    local: local || '',
    descricao: json() || '',
  });

  // Função para atualizar o estado com base no campo
  const handleChange = (campo, valor) => {
    setDados((prevData) => ({
      ...prevData,
      [campo]: valor,
    }));
  };

  // Função para salvar a vaga
  const editarVaga = async () => {
    // Verificar se todos os campos estão preenchidos
    if (!vaga || !empresa || !descricao || !local) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      const vagaRef = doc(db, 'vagas', id)
      await updateDoc(vagaRef, {
        vaga: dados.vaga,
        empresa: dados.empresa,
        descricao: dados.descricao,
        local: dados.local,
        img: 'https://drive.google.com/uc?export=view&id=10jAUMoKYkTJ6dKzpBEHQURf0TtWavbpq',
      });
      Alert.alert('Sucesso', 'Vaga editada com sucesso!');
      router.push('/minhasVagas');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao editar vaga: ' + error.message);
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
            params: { id: id, vaga: dados.vaga, empresa: dados.empresa, local: dados.local, descricao: dados.descricao, tela: '/EditarVaga' }
          })}
        />

        <Button text="Editar vaga" onPress={editarVaga} />
        {loading && <Carregando />}
      </View>
    </ScrollView>
  );
}
