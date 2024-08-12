import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'
import React from 'react'

export default function Circle(props) {
    return (
        <View>
            <TouchableHighlight
                style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.5,
                    height: Dimensions.get('window').width * 0.5,
                    backgroundColor: props.bg,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                underlayColor='#ccc'
            >
                <Text></Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2
    }
})