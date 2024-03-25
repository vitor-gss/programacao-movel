import { StyleSheet, View } from 'react-native';
import Gato from './Gato';
import Cliques from './Cliques';

function App() {
  return (
    <View style={styles.container}>
      <Gato nome="Fred" idade={3} />
      <Gato nome="Simba" idade={2} />
      <Gato nome="Elsa" idade={1} />
    </View>
  );
}

export default Cliques



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#009cce",
    gap: 10,
  },
  text: {
    fontSize: 20,
  },
});
