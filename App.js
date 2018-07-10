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
import { List,ListItem,Header } from 'react-native-elements'
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
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
]

export default class Home extends Component<Props> {
  render() {
    return (
      <View style ={styles.container} >
<Header

  leftComponent={{ icon: 'menu', underlayColor: '#64b5f6', color: '#fff',onPress: () => alert('ea')
}}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'lock', color: '#fff' }}
/>
<ScrollView>
        <List style={styles.row}>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              subtitle="aaaa"
              underlayColor = '#64b5f6'
              leftIcon={{name: item.icon}}
              onPress = {this.props.navigation.navigate("ListContacts")}
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
    flex: 1/2,
    //backgroundColor : 'green',
    //borderBottomColor : 'grey',
    //borderBottomWidth : 0.1,
    flexDirection:'row'
    //backgroundColor: 'green',
    //boderBottomColor: 'black',
    //boderbottomWidth:1
    
},
});
