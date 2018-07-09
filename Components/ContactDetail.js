/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Alert,ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class ContactDetail extends Component {
    constructor(props){
        super(props);
            
        }
        //Alert.alert(name);
    
  render(){
    return (
      <View style={styles.container}>
      <View style={{flex: 1/2}}>
      
      <Text style={styles.appname}>
      {this.props.navigation.state.params.name}
      </Text>
      
      </View>
      
      <ScrollView style={{flex: 3}} >
      <Text style={styles.appname}>
      Email
      </Text>
      <Text style={styles.detail}>
      {this.props.navigation.state.params.email}
      </Text>

            <Text style={styles.appname}>
      phone
      </Text>
      <Text style={styles.detail}>
      {this.props.navigation.state.params.phonenumber}
      </Text>

              {/* <Text style={styles}> {this.props.navigation.state.params.fullname}</Text> */}
              </ScrollView>
      
      
      </View>
    );
}

// {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//         Name: {this.props.navigation.state.params.name}
//         </Text>
//         <Text style={styles.instructions}>
//         Email: {this.props.navigation.state.params.email}
//         </Text>
//       </View>
//     );
//   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
      //backgroundColor: '#2c3e50',
  },
  logo: {
      position: 'absolute',
      width: 200,
      height: 100
  },
  row:{
      //flex: 1,
      //backgroundColor : 'green',
      borderBottomColor : 'grey',
      borderBottomWidth : 0.1,
      height: 300,
      flexDirection:'row'
      //backgroundColor: 'green',
      //boderBottomColor: 'black',
      //boderbottomWidth:1
      
  },
  colum: {
      flex: 1,
      //backgroundColor : 'red',
      borderWidth:0.5,
      borderColor:'grey',
      justifyContent:'center',
      alignItems:'center'
      //borderleftColor : 'grey'
      //borderleftColor : 'grey',
      //borderleftWidth : 1
  },
  icon:{

  },
  appname: {
    fontSize: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems:'center',
    color:'black'
   },
   detail: {
    fontSize: 15,
    color:'blue',
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems:'center',
    color:'black'
   },
  label:{
      fontSize:15
  }

})
