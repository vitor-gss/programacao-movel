import {
    SafeAreaView, View, KeyboardAvoidingView, Platform,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { RichText, Toolbar, useEditorBridge } from '@10play/tentap-editor';
import { useState, useEffect } from 'react';

// Estilos
import styles from '../styles/templateStyles'

// Componentes 
import Button from '../../assets/components/inputs&buttons/buttons/button'
import Voltar from '../../assets/components/headers/voltar';

export default function Editor() {
    const router = useRouter();
    const { content } = useLocalSearchParams()

    const [newContent, setNewContent] = useState(content)

    const editor = useEditorBridge({
        autofocus: true,
        avoidIosKeyboard: true,
        initialContent: content,
        onChange: () => setNewContent(editor.getHTML()) // Atualizando o estado com o texto atual
    });

    const handleSave = () => {
        console.log(newContent._j);
        router.push({
            pathname: '/criarVaga',
            params: {content: newContent}
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
                    onPress={handleSave} 
                />
            </View>
        </View>
    )
}
