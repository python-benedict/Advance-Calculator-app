import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [resultText, setResultText] = useState("")
  const [calcText, setcalcText] = useState("")

  const calculations = () => {};


  const onButtonClick = (text) =>{
    console.log(text)
    if(text == '='){
      return calculations()
    }
    setResultText(resultText + text)
  };


  const onOperationClick = (text) =>{
    if(text == 'AC'){
      setResultText(""),
      setcalcText(0)
      return;
    }
    else if(text == 'DEL'){
      return setResultText(resultText.toString().substring(0, resultText.length-1))
    }
    console.log(text)
    setResultText(resultText + text)
  }


  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>
      <View style={styles.calculations}>
        <Text style={styles.calculationsText}>{resultText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onButtonClick(1)}}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick(2)}}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick(3)}}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onButtonClick(4)}}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick(5)}}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick(6)}}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onButtonClick(7)}}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick(8)}}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick(9)}}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{onButtonClick('.')}}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick(0)}}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onButtonClick('=')}}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
            <TouchableOpacity onPress={()=>{onOperationClick('DEL')}}>
              <Text style={styles.operationsButton}>Del</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onOperationClick('AC')}}>
              <Text style={styles.operationsButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onOperationClick('+')}}>
              <Text style={styles.operationsButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onOperationClick('-')}}>
              <Text style={styles.operationsButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onOperationClick('*')}}>
              <Text style={styles.operationsButton}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{onOperationClick('/')}}>
              <Text style={styles.operationsButton}>/</Text>
            </TouchableOpacity>
        </View>
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
    backgroundColor: 'gray',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  operationsButton:{
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
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
