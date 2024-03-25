import { StyleSheet, View } from 'react-native';
import Gato from './Gato';
import Cliques from './Cliques';

function App() {
  return (
    <View style={styles.container}>
      <Gato idade={3} />
      <Gato idade={2} />
      <Gato idade={1} />
    </View>
  );
}

export default App



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
