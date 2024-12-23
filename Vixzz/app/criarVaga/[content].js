import {
    SafeAreaView, View, KeyboardAvoidingView, Platform,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { RichText, Toolbar, useEditorBridge } from '@10play/tentap-editor';
import { useState } from 'react';

// Estilos
import styles from '../styles/templateStyles'

// Componentes 
import Button from '../../assets/components/inputs&buttons/buttons/button'
import Voltar from '../../assets/components/headers/voltar';

export default function Editor() {
    const router = useRouter();
    const [disabled, setDisabled] = useState(true)
    const { content } = useLocalSearchParams()

    const [newContent, setNewContent] = useState(content)

    const editor = useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
        initialContent: newContent,
        onChange: () => {
            setNewContent(editor.getHTML()) // Atualizando o estado com o texto atual
            setDisabled(false)
        }
    });

    const handleSave = () => {
        router.push({
            pathname: '/criarVaga',
            params: { content: newContent._j }
        })
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
                    text='Salvar'
                    disabled={disabled}
                    onPress={handleSave}
                />
            </View>
        </View>
    )
}
