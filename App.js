import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.result}></View>
      <View style={styles.calculations}></View>
      <View style={styles.buttons}>
        <View style={styles.numbers}></View>
        <View style={styles.operations}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result:{
    flex:2,
    backgroundColor:'gray'
  },
  calculations:{
    flex:1,
    backgroundColor:'white'
  },
  buttons:{
    flex:7,
    flexDirection:'row'
  },
  numbers:{
    flex: 6,
    backgroundColor: 'black'
  },
  operations:{
    flex: 1,
    backgroundColor: 'gray'
  }
});
