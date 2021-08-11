import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firebase from 'firebase'
import db from '../config';

export default class StoryScreen3 extends React.Component{
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
          <Text style={styles.readStory}>The Boy Who Cried, The Wolf</Text>
          <Text>There was a young boy whose father, a farmer, had asked him to take their herd of sheep grazing every day.Moral stories for kids
One day, the boy was extremely bored as he watched over the sheep and so he cried: “Wolf! Wolf!”

On hearing his cries, the villagers rushed to help him chase the wolf away and safe the sheep.

When they saw the grinning boy and realised he had cried wolf for his amusement, they scolded him and told him to not cry wolf!

The next day, the boy cried out that the wolf was there. The villagers came, scolded him again, and left.

Later that same day, a wolf came and terrorized the sheep.

The boy cried, “Wolf! Wolf! Please help me.”

But, the villagers assumed that he was pulling a silly prank again and did not come to his rescue. The sheep ran away and the boy cried.</Text>
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