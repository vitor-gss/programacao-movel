import { View, StatusBar, Text } from 'react-native';
import { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEditorBridge, RichText, Toolbar } from '@10play/tentap-editor';

import styles from './styles/templateStyles';
import Button from '../assets/components/inputs&buttons/buttons/button';
import Title from '../assets/components/text/title'

export default function RichTextEditor() {
    const router = useRouter();
    const { fieldName, setField } = useLocalSearchParams(); 

    const [content, setContent] = useState('');

    const editor = useEditorBridge({
        initialContent: content,
        onChange: setContent,
    });

    const salvarConteudo = () => {
        setField(content);
        router.back(); 
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.content}>
                <Title text={fieldName}/>
                <RichText editor={editor} style={{ flex: 1 }} />
                <Toolbar editor={editor} />
                <Button text={`Salvar ${fieldName}`} onPress={salvarConteudo} />
            </View>
        </View>
    );
}
