import { View, Text, Image, StyleSheet } from 'react-native'

export default function JobCard(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.img} />
      <View style={styles.content}>
        <Text style={styles.textVaga}>{props.vaga}</Text>
        <Text style={[styles.textEmpresa, styles.padrao]}>{props.empresa}</Text>
        <Text style={[styles.textLocal, styles.padrao]}>{props.local}</Text>
        <Text style={[styles.textTempo, styles.padrao]}>{props.tempo}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  content: {
    flex: 1,
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