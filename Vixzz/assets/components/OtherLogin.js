import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function OtherLogin({img}) {
    const caminhoImg = img == 'facebook' ? require(`../logo/facebook.png`) : require(`../logo/apple.png`)
  return (
    <View>
      <Image style={{height: 40, width: 40, borderRadius: '100%', resizeMode: 'contain'}} source={caminhoImg}/>
    </View>
  )
}

