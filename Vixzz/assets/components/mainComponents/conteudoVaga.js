import { View, Text } from 'react-native'
import React from 'react'
import JobCard from './jobCard';
import DivisorWithTextStart from '../elements/divisorWithTextStart'
import { htmlToText } from 'html-to-text';

export default function ConteudoVaga({vaga, empresa, local, tempo, img, descricao}) {
    return (
        <View>
            <JobCard vaga={vaga}
                empresa={empresa}
                local={local}
                tempo={tempo}
                img={img}
            />
            <DivisorWithTextStart text={"Descrição"} />
            <Text>{htmlToText(descricao)}</Text>
        </View>
    )
}