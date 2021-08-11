import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default class ImageScreen extends React.Component{

  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text1} >Story Icon</Text>
        <Text style={styles.text2} >Click On The Image To Read The Story</Text>
        <View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('StoryScreen')}}>
          <Image style={styles.imageIcon1} source={require("../assets/Story-Icon.png")}/>
          <Text style={styles.text3}>Jack and the Beanstalk</Text>
        </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('StoryScreen2')}}>
          <Image style={styles.imageIcon2} source={require("../assets/Story-Icon2.jpg")}/>
          <Text style={styles.text3}>The Tortoise and the Rabbit</Text>
        </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('StoryScreen3')}}>
          <Image style={styles.imageIcon2} source={require("../assets/Story-Icon3.jpg")}/>
          <Text style={styles.text3}>The Boy Who Cried, The Wolf</Text>
        </TouchableOpacity>
        </View>
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    backgroundColor:'coral'
  },
  text1:{
    width:280,
    fontSize:20,
    fontWeight:'bold',
    borderWidth:5,
    backgroundColor:'white',
    textAlign:'center',
    borderRadius:10
  },
  imageIcon1:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:10
  },
  text2:{
    textAlign:'center',
    color:'lightgrey'
  },
  text3:{
    width:300,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  imageIcon2:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:10,
    width:250,
    height:250
  },
})