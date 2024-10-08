import { View, StyleSheet, Button, Text, TouchableOpacity} from 'react-native'
import { useState } from 'react'

export default function Cliques() {
    const [cliques, setCliques] = useState(0)

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => setCliques(cliques + 1)} style={styles.btn} activeOpacity={0.7}>
            <Text>OK</Text>
        </TouchableOpacity>
        <Text style={styles.size32}>Quantidade de cliques: {cliques}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    size32:{
        fontSize: 26,
      },
      btn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        fontSize: 32,
        width: "75%",
        height: 50,
        backgroundColor: "#00Fcce",
        borderWidth: 1,
        borderRadius: 4,
      },
})