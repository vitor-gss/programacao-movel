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
  const { content } = useLocalSearchParams()

  const descricao = useMemo(() => content || 'Insira aqui', [content]);

  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    vaga: '',
    empresa: '',
    local: '',
  });
  
  // Função para atualizar o estado com base no campo
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Função para salvar a vaga
  const salvarVaga = async () => {
    // Verificar se todos os campos estão preenchidos
    console.log(formData);
    
    const { vaga, empresa, local} = formData;
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
      router.back();
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
          value={formData.vaga}
          onChangeText={(text) => handleChange('vaga', text)}
        />
        <Input
          label="Empresa"
          value={formData.empresa}
          onChangeText={(text) => handleChange('empresa', text)}
        />
        <Input
          label="Local"
          value={formData.local}
          onChangeText={(text) => handleChange('local', text)}
        />
        <Input
          label="Descrição"
          value={htmlToText(descricao)}
          onPress={() => router.push({
            pathname: '/criarVaga/[content]',
            params: { content: descricao }
          })}
        />

        <Button text="Criar vaga" onPress={salvarVaga} />
        {loading && <Carregando />}
      </View>
    </ScrollView>
  );
}
