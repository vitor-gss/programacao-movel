import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

export default function JobCard(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: props.img }} />
        <View style={styles.content}>
          <Text style={styles.textVaga}>{props.vaga}</Text>
          <Text style={[styles.textEmpresa, styles.padrao]}>{props.empresa}</Text>
          <Text style={[styles.textLocal, styles.padrao]}>{props.local}</Text>
          <Text style={[styles.textTempo, styles.padrao]}>{props.tempo}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  content: {
  },
  img: {
    width: 74,
    height: 74,
    borderRadius: 10,
  },
  textVaga: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#2C2C2C'
  },
  textEmpresa: {
    color: '#444444'
  },
  textLocal: {
    color: '#9C9C9C'
  },
  textTempo: {
    color: '#555555'
  },
  padrao: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
})