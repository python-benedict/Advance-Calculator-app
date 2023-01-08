import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>121</Text>
      </View>
      <View style={styles.calculations}>
        <Text style={styles.calculationsText}>23+56</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity >
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity >
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity >
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity >
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor:'gray',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
  resultText:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  },
  calculations:{
    flex:1,
    backgroundColor:'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
  calculationsText:{
    fontWeight: 'bold',
    fontSize:20,
    color: 'black'
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
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
  number:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
});
