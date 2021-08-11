import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class Home extends React.Component{
  constructor(){
    super();
    this.state={
      name:''
    }
  }

  test = () => {
    var thingToSay = this.state.name;
    this.state.name === ''
      ? alert('The box is empty. please enter your name to continue')
      : this.props.navigation.navigate('ImageScreen')

      
  };
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>Home</Text>
        <TextInput style={styles.textInput} placeholder="Your Name"
          onChangeText={(text)=>{
            this.setState({ name: text });
          }} />
        <TouchableOpacity onPress= {()=>this.test() } >
          <Text style={styles.buttonText}>Enter the App</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    backgroundColor:'brown'
  },
  titleText:{
    width:300,
    fontSize:25,
    fontWeight:'bold',
    borderWidth:5,
    backgroundColor:'white',
    textAlign:'center',
    borderRadius:10
  },
  textInput:{
    textAlign:'center',
    height:35,
    borderWidth:2,
    backgroundColor:'lightgreen',
    marginTop:130
  },
  buttonText:{
    textAlign:'center',
    height:35,
    borderWidth:4,
    marginTop:50,
    borderRadius:10,
    backgroundColor:'lightgreen',
  }
})