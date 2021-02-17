import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todoStack from '../todoStack';

export default function Home({navigation}) {
    const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };
    const [todolist,setTodos] = useState([
        
    ])
    
    const updateData = async (data) =>{
        console.log(data)
        try{
            const jsonValue = JSON.stringify([...todolist,data])
            await AsyncStorage.setItem('@storage_Key',jsonValue)
        } catch (e){

        }

        setTodos([...todolist,data])

    }
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key',jsonValue)
          if(jsonValue !== null) {
            setTodos(JSON.parse(jsonValue))
          }
        } catch(e) {
          // error reading value
        }
      }

    useEffect(() => {
        getData();
    },[])

    const Item = ({item}) => (
        <View style={styles.flatlist}>
        
            <TouchableOpacity 
            onLongPress={async ()=>{
                let newTodos = todolist.filter(val=>{
                    return val !== item
                })

                try{
                    const jsonValue = JSON.stringify(newTodos)
                    await AsyncStorage.setItem('@storage_Key',jsonValue)
                } catch (e){
        
                }
                setTodos(newTodos)
            }}
            onPress={()=>navigation.push('Details', 
            {item:item})}>
                <Text style={styles.flatlisttext}>{item.name}</Text> 
                
            </TouchableOpacity>   
               </View>
      )
  return (
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
        <View style={styles.innercontainer}>    
      <FlatList
      style={styles.item}
           data={todolist}
           renderItem={({ item }) => <Item item={item}/>
           }/>
        </View>
        <Button onPress={()=>navigation.push('AddNewItem',{
            onGoBack:updateData
        })} title="Add New Item"  />
      
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 2,
        resizeMode: "cover",
        justifyContent: "center"
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innercontainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  flatlisttext:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold", 
  },
  flatlist:{
    color: 'white', 
    backgroundColor: "#000000a0",
    borderWidth: 1,
    borderColor:'white',
    flex: 2,
    justifyContent: "center",
    flexWrap:'wrap',
    alignItems:'center',
    textAlign:'center',  
    margin: 5,
    padding:10,
  },
});
