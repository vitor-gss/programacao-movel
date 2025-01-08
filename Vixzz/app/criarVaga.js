import React, { useEffect, useState } from 'react';
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
  const { content, key } = useLocalSearchParams()

  const [beneficios, setBeneficios] = useState('Insira aqui')
  const [descricao, setDescricao] = useState('Insira aqui')

  useEffect(() => {
    switch (key) {
      case 'beneficios':
        setBeneficios(content)
        break
      case 'descricao':
        setDescricao(content)
        break
    }
  }, [content])

  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    vaga: 'ABC',
    empresa: '',
    local: '',
    requisitos: '',
    outrasInfo: '',
    area: '',
    periodo: '',
    situacao: '',
    tipo: '',
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
    const { vaga, empresa, beneficios, descricao, local, requisitos, outrasInfo, area, periodo, situacao, tipo } = formData;
    if (!vaga || !empresa || !beneficios || !descricao || !local || !requisitos || !outrasInfo || !area || !periodo || !situacao || !tipo) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, 'vagas'), {
        vaga,
        empresa,
        beneficios,
        descricao,
        local,
        requisitos,
        outrasInfo,
        area,
        periodo,
        situacao,
        tipo,
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
          label="Benefícios"
          value={htmlToText(beneficios)}
          onPress={() => router.push({
            pathname: '/criarVaga/[content]',
            params: { content: beneficios, key: 'beneficios' }
          })}
        />
        <Input
          label="Descrição"
          value={htmlToText(descricao)}
          onPress={() => router.push({
            pathname: '/criarVaga/[content]',
            params: { content: descricao, key: 'descricao' }
          })}
        />
        <Input
          label="Requisitos"
          value={formData.requisitos}
          onChangeText={(text) => handleChange('requisitos', text)}
        />
        <Input
          label="Outras informações"
          value={formData.outrasInfo}
          onChangeText={(text) => handleChange('outrasInfo', text)}
        />
        <Input
          label="Área"
          value={formData.area}
          onChangeText={(text) => handleChange('area', text)}
        />
        <Input
          label="Período"
          value={formData.periodo}
          onChangeText={(text) => handleChange('periodo', text)}
        />
        <Input
          label="Situação"
          value={formData.situacao}
          onChangeText={(text) => handleChange('situacao', text)}
        />
        <Input
          label="Tipo"
          value={formData.tipo}
          onChangeText={(text) => handleChange('tipo', text)}
        />
        <Button text="Criar vaga" onPress={salvarVaga} />
        {loading && <Carregando />}
      </View>
    </ScrollView>
  );
}
