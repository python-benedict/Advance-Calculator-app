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
});
