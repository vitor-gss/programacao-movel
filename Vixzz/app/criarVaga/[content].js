import {
    SafeAreaView, View, KeyboardAvoidingView, Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { RichText, Toolbar, useEditorBridge } from '@10play/tentap-editor';
import { useState, useMemo } from 'react';

// Estilos
import styles from '../styles/templateStyles';

// Componentes 
import Button from '../../assets/components/inputs&buttons/buttons/button';
import Voltar from '../../assets/components/headers/voltar';

export default function Editor() {
    const router = useRouter();
    const [disabled, setDisabled] = useState(true);
    const { content } = useLocalSearchParams();

    // Tratando o parâmetro inicial do editor
    const initialContent = useMemo(() => content || '', [content]);
    const [conteudo, setConteudo] = useState(initialContent);

    const editor = useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
        initialContent: conteudo,
        onChange: () => {
            const updatedContent = editor.getHTML();
            setConteudo(updatedContent);
            setDisabled(false);
        },
    });
    const handleSave = () => {
        router.push({
            pathname: '/criarVaga',
            params: { content: conteudo._j },
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.content}>
                <Voltar />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#009cce' }}>
                    <RichText editor={editor} />
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            bottom: 0,
                        }}
                    >
                        <Toolbar editor={editor} />
                    </KeyboardAvoidingView>
                </SafeAreaView>
                <Button
                    text="Salvar"
                    disabled={disabled}
                    onPress={handleSave}
                />
            </View>
        </View>
    );
}