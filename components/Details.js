import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function Details({navigation}) {
    const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };
    const item = navigation.getParam('item')
  return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.innercontainer}>
            <Text style={styles.flatlisttext}>Item : {item.name}</Text>      
            <Text style={styles.flatlisttext}>Info : {item.description}</Text>  
            <Text style={styles.flatlisttext}>Location : {item.place}</Text>
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatlisttext:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    
  },
  innercontainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
