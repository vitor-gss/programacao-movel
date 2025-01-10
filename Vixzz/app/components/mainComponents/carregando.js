import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

import Colors from '../../styles/colors'

export default function Carregando() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={Colors.primaryColor} />
        </View>
    )
}
