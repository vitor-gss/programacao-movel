import { View, FlatList, StatusBar } from 'react-native'
import { useEffect, useState } from "react";
import { useRouter } from 'expo-router'
// ---------------------------------------------------
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
// ---------------------------------------------------
import styles from './styles/templateStyles'
// ---------------------------------------------------
import Voltar from '../assets/components/headers/voltar'
import JobCard from '../assets/components/mainComponents/jobCard';
import Button from '../assets/components/inputs&buttons/buttons/button'

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function MinhasVagas() {
    const router = useRouter()

    const Separator = () => (
        <View style={{ height: 10 }} />
    );

    const handleCardPress = (id) => {
        router.push(`./vaga/${id}`);
    };

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
            } catch (error) {
                console.error("Erro ao buscar empresas: ", error);
            }
        };

        fetchEmpresas();
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.content}>
                <Voltar title='Minhas vagas' />
                <Button text={'Criar vaga'} />
                <FlatList
                    data={empresas}
                    renderItem={({ item }) =>
                        <JobCard vaga={item.vaga}
                            empresa={item.empresa}
                            local={item.local}
                            tempo={item.tempo}
                            img={item.img}
                            onPress={() => handleCardPress(item.id)} />}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        </View>
    )
}