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
  View,Alert,ScrollView,TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Communications from 'react-native-communications';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class ContactDetail extends Component {
    constructor(props){
        super(props);
            var ava = this.props.navigation.state.params.avatar
        }
        //Alert.alert(name);
    
  render(){
    return (
      <View style={styles.container}>
      
      <View style={{flex: 1/3,justifyContent: 'center',backgroundColor: 'rgba(225,225,225,1)',
        alignItems: 'center'}}>
      
      <Avatar
        large
        rounded
        title= {this.props.navigation.state.params.avatar}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        //containerStyle={{flex: 1}}
        // containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />
      <Text style={styles.appname}>
      {this.props.navigation.state.params.name}
      </Text>
      <Text style={{color:'grey'}}>
      {this.props.navigation.state.params.department}
      </Text>
      <Text style={{color:'grey'}}>
      Ngân hàng bưu điện Liên Việt
      </Text>
      
      </View>
      
      <ScrollView style={{flex: 3,backgroundColor: 'rgba(225,225,225,0.2)',backgroundColor: '#F5FCFF',
          borderWidth:1,borderRadius: 10,
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight:10,
          paddingLeft: 10,
          
          }} >


      <Text style={styles.appname}>
      phone
      </Text>
      <TouchableOpacity onPress={() => Communications.phonecall(this.props.navigation.state.params.phonenumber, true)}>
      <Text style={styles.detail}>
      {this.props.navigation.state.params.phonenumber}
      </Text>
      </TouchableOpacity>
      <Text style={styles.appname}>
      work phone
      </Text>
      <TouchableOpacity onPress={() => Communications.phonecall(this.props.navigation.state.params.workphone, true)}>
      <Text style={styles.detail}>
      {this.props.navigation.state.params.workphone}
      </Text>
      </TouchableOpacity>
      <Text style={styles.appname}>
      email
      </Text>
      <TouchableOpacity onPress={() => Communications.email(this.props.navigation.state.params.phonenumber, null,null,null,null)}>
      <Text style={styles.detail}>
      {this.props.navigation.state.params.email}
      </Text>
      </TouchableOpacity>

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
    color:'steelblue',
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems:'center',
    borderBottomColor : 'black',
    borderBottomWidth : 1,
   },
  label:{
      fontSize:15
  }

})
