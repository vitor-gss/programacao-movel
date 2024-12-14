import { View, StatusBar, ScrollView } from 'react-native';
import { useState } from "react";
import { useRouter } from 'expo-router';

import styles from './styles/templateStyles';
import Input from '../assets/components/inputs&buttons/textInputs/textInput';
import Voltar from '../assets/components/headers/voltar'
import Button from '../assets/components/inputs&buttons/buttons/button'

import { collection, addDoc } from "firebase/firestore";
import { db, auth } from '../firebaseConfig';

export default function CriarVaga() {

    const router = useRouter();

    const [vaga, setVaga] = useState();
    const [empresa, setEmpresa] = useState();
    const [beneficios, setBeneficios] = useState();
    const [descricao, setDescricao] = useState();
    const [local, setLocal] = useState();
    const [requisitos, setRequisitos] = useState();
    const [outrasInfo, setOutrasInfo] = useState();
    const [area, setArea] = useState();
    const [periodo, setPeriodo] = useState();
    const [situacao, setSituacao] = useState();
    const [tipo, setTipo] = useState();

    const salvarVaga = async () => {
        // if (!vaga || !empresa || !beneficios || !descricao || !local || !requisitos || !outrasInfo || !area || !periodo || !situacao || !tipo) {
        //     alert('Por favor, preencha todos os campos.');
        //     return;
        // }
        if (!vaga || !empresa || !descricao || !local) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "vagas"), {
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
                img: 'https://drive.google.com/file/d/10jAUMoKYkTJ6dKzpBEHQURf0TtWavbpq',
                userId: auth.currentUser.uid,
                createdAt: new Date(),
            });
            alert("Vaga criada com sucesso! ID: " + docRef.id);
            router.back();
        } catch (error) {
            alert("Erro ao salvar vaga: " + error.message);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.content}>
                <Voltar />
                <Input
                    label='Vaga'
                    onChangeText={setVaga}
                />
                <Input
                    label='Empresa'
                    onChangeText={setEmpresa}
                />
                <Input
                    label='Local'
                    onChangeText={setLocal}
                />
                <ButtonOnlyBorder text='Editar descrição'/>
                <ButtonOnlyBorder text='Editar benefícios'/>
                <Button text='Criar vaga' onPress={salvarVaga} />
            </View>
        </ScrollView>
    );
}
