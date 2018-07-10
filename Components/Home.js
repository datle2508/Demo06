/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Alert} from 'react-native';
import {icon} from 'react-native-vector-icons' 
import { List,ListItem,Header,Tile } from 'react-native-elements'
import {LinearGradient} from 'react-native-linear-gradient' // Only if no expo

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
const list = [
  {
    title: 'Contacts',
    subtitle:'',
    icon: 'book',
    appScreen:'ListContacts'
  },
  {
    title: 'Send SMS',
    subtitle:'',
    icon: 'sms',
    appScreen:'SendSMS'
  },
  {
    title: 'Setting',
    subtitle:'',
    icon: 'av-timer',
    appScreen:'Setting'
  }
]

export default class Home extends Component<Props> {
    constructor(props){
        super(props);
        this.arrayholder = [] ;
        this.state={Username:'',password:''};
    }
    // componentDidMount() {
    //     return fetch('http://192.168.0.108:3000/users')
    //     //return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
          
    //     .then(
          
    //       (response) => response.json())
    //       .then((responseJson) => {
    //         //Alert.alert(JSON.stringify(responseJson))
    //         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //         this.setState({
    //           isLoading: false,
    //           dataSource: ds.cloneWithRows(responseJson),
    //         }, function() {
     
    //           // In this block you can do something with new state.
    //           this.arrayholder = responseJson ;
     
    //         });
    //       })
    //       .catch((error) => {
            
    //         Alert.alert(error.message);
    //         reject(new Error(`Unable to retrieve events.\n${error.message}`));
    //         console.error(error);
    //       });
    //     }

    logout() {
        Alert.alert(
    
            // This is Alert Dialog Title
            'Confirm',
         
            // This is Alert Dialog Message. 
            'Do you want to logout?',
            [
              
              // Second Cancel Button in Alert Dialog.
              {text: 'Cancel', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},
         
              // Third OK Button in Alert Dialog
              {text: 'OK', onPress: () => this.props.navigation.navigate("LoginForm")},
              
            ]
         
          )

        //
      }

      goto(appScreen) {
          if(appScreen == 'ListContacts'){
            this.props.navigation.navigate(appScreen)
          }
        else
        {
            Alert.alert("Comming soon!!")
        }
      }

  render() {
    return (
      <View style ={styles.container} >
<Header
  //leftComponent={{ icon: 'menu', color: '#fff',onPress: () => this.saveData(),}}
  backgroundColor ='rgba(213,116,47,1)'
  centerComponent={{ text: 'App Name', style: { color: '#fff' } }}
  rightComponent={{ icon: 'lock', color: '#fff',TouchableHighlight :true ,onPress: () => this.logout(),}}
/>
<Tile
  imageSrc={{ require: './img/path' }}
  backgroundColor ='rgba(213,116,47,1)'
  title= "Lê Việt Hưng"
  featured
  caption="Phát triển ứng dụng"
/>
<ScrollView>
        <List>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              underlayColor = '#64b5f6'
              leftIcon={{name: item.icon}}
              onPress={() => this.goto(item.appScreen)}
              
            />

          ))
        }
      </List>
        </ScrollView>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:{
    flex: 1,
    //backgroundColor : 'green',
    //borderBottomColor : 'grey',
    //borderBottomWidth : 0.1,
    flexDirection:'row'
    //backgroundColor: 'green',
    //boderBottomColor: 'black',
    //boderbottomWidth:1
    
},
});
