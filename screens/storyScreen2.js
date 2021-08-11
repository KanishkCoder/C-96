import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firebase from 'firebase'
import db from '../config';

export default class StoryScreen2 extends React.Component{
  constructor() {
    super();
    this.state = {
      happy: 0,
      joyfull: 0,
    };
  }
  joyfullcount=()=>{
  this.setState({joyfull:this.state.joyfull+1});
  var joyfull= db.ref('Rating/' + '/')
  joyfull.update({
    'joyfull':this.state.joyfull+1
  })
}
happycount=()=>{
  this.setState({happy:this.state.happy+1});
  var happy= db.ref('Rating/' + '/')
  happy.update({
    'happy': this.state.happy+1
})
}
   
  /*happyPressed(){
  var happy= db.ref('Rating/' + '/')
  happy.update({
    'happy': 1
  })
}*/

/*joyfullPressed(){
  var joyfull= db.ref('Rating/' + '/')
  joyfull.update({
    'joyfull':1
  })
}*/

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText} >STORY</Text>

        <View>
          <Text style={styles.readStory}>The Tortoise and the Rabbit</Text>
          <Text>This popular story is about a hare (an animal belonging to the rabbit family), which is known to move quickly and a tortoise, which is known to move slower.

The story began when the hare who has won many races proposed a race with the tortoise. The hare simply wanted to prove that he was the best and have the satisfaction of beating him.

The tortoise agreed and the race began.

The hare got a head-start but became overconfident towards the end of the race. His ego made him believe that he could win the race even if he rested for a while.

And so, he took a nap right near the finish line.

Meanwhile, the tortoise walked slowly but extremely determined and dedicated. He did not give up for a second and kept persevering despite the odds not being in his favour.

While the hare was asleep, the tortoise crossed the finish line and won the race!

The best part was that the tortoise did not gloat or put the hare down!</Text>
        </View>
        <Text style={styles.like}>{this.state.joyfull}</Text>
          <Text style={styles.dislike}>{this.state.happy}</Text>
        <TouchableOpacity onPress ={this.joyfullcount}>
          <Image style = {styles.happy} source={require("../assets/happy.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.happycount}>
          <Image style = {styles.joyfull} source={require("../assets/joyfull.png")}/>
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    backgroundColor:'coral'
  },
  titleText:{
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
    borderWidth:5,
    backgroundColor:'white'
  },
  readStory:{
    textAlign:'center',
    fontWeight:'bold',
    color:'black',
    fontSize:20
  },
  happy:{
    height:50,
    width:50,
    marginLeft:25,
    marginTop:15
  },
  joyfull:{
    height:50,
    width:50,
    marginLeft:200,
    marginTop:-50
  },
  like: {
    width: 50,
    height: 50,
    marginBottom:-50,
    marginLeft: 90

  },
  dislike: {
    width: 50,
    height: 50,
    marginBottom: -60,
    marginLeft: 180

  },
})