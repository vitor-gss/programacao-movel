import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from "react";
import { useRouter } from 'expo-router';

import styles from './styles/templateStyles';
import Input from '../assets/components/inputs&buttons/textInputs/textInput';

import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'; // Importe a configuração do Firebase

export default function CriarVaga() {
    const router = useRouter()

    const [vaga, setVaga] = useState()
    const [empresa, setEmpresa] = useState()
    const [local, setLocal] = useState()
    const [tempo, setTempo] = useState()
    const [img, setImg] = useState()

    const salvarVaga = async () => {
        if (!vaga || !empresa || !local || !tempo || !img) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "vagas"), {
                vaga,
                empresa,
                local,
                tempo,
                img,
                createdAt: new Date(),
            });
            alert("Vaga criada com sucesso! ID: " + docRef.id);
            router.back();
        } catch (error) {
            alert("Erro ao salvar vaga: " + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
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
                <Input
                    label='Tempo'
                    onChangeText={setTempo}
                />
                <Input
                    label='Imagem'
                    onChangeText={setImg}
                />
                <Pressable onPress={salvarVaga} style={localStyles.btn}>
                    <Text>Salvar Vaga</Text>
                </Pressable>
                <Pressable onPress={() => router.back()} style={localStyles.btn}>
                    <Text>Voltar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    btn: {
        backgroundColor: '#14d16f'
    }
})