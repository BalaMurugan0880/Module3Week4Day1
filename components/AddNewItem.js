import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddNewItem({navigation}) {
    const [addItem, setaddItem] = useState('');
    const [itemInfo, setitemInfo] = useState('');
    const [place, setPlace] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add New Item</Text>
      <TextInput 
      style={styles.textinput}
      placeholder="Enter Item Name"
      onChangeText={text => setaddItem(text)}
      value={addItem} 
      />
      <TextInput 
      style={styles.textinput}
      placeholder="Enter Item Info"
      onChangeText={text => setitemInfo(text)}
      value={itemInfo} 
      />
      <TextInput 
      style={styles.textinput}
      placeholder="Enter Place"
      onChangeText={text => setPlace(text)}
      value={place} 
      />
       <Button onPress={()=>{
           let newItem = {"name":addItem,"description":itemInfo,"place":place}
           navigation.state.params.onGoBack(newItem)
           navigation.goBack()
       }} title="Save New Item"  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      color:'black',
      fontSize:22,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  textinput:{
    fontWeight: 'bold', 
    height:  40, 
    color: 'white', 
    textAlign: 'center',
    backgroundColor: "#000000a0",
    borderWidth: 1,
    borderColor:'white',
    margin:5,
    fontWeight: 'bold',

  },
});
