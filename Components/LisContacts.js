import React, { Component } from 'react';
import{View,StyleSheet,TextInput,ListView,Text,ActivityIndicator,Alert,Button} from "react-native"
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json


export default class LisContacts extends React.Component {

        constructor(props){
          super(props);
          this.state={isLoading: true,search:''}
          this.arrayholder = [] ;
        }
        ListViewItemSeparator = () => {
            return (
              <View
                style={{
                  height: .5,
                  width: "100%",
                  backgroundColor: "#000",
                }}
              />
            );
          }
          GetListViewItem (name,email) {
            //Alert.alert('name:'+name+' email:'+email);
            //this.props.navigation.setParams({ name: 'Lucy' })
             this.props.navigation.navigate("ContactDetail",
             { name: name,email:email });
           
           }
           SearchFilterFunction(text){
     
            const newData = this.arrayholder.filter(function(item){
                const itemData = item.name.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(newData),
                text: text
            })
        }
        componentDidMount() {
 
            //return fetch('http://192.168.0.106:3000/users')
            return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
              
            .then((response) => response.json())
              .then((responseJson) => {
                //Alert.alert(JSON.stringify(responseJson))
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                  isLoading: false,
                  dataSource: ds.cloneWithRows(responseJson),
                }, function() {
         
                  // In this block you can do something with new state.
                  this.arrayholder = responseJson ;
         
                });
              })
              .catch((error) => {
                console.error(error);
              });
              
          }
        render() {
            if (this.state.isLoading) {
                return (
                  <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                  </View>
                );
              }
          return (
            <View style={list.header}>
            {/* <Text style={list.Appname}>Contacts</Text> */}
              <TextInput style={list.search}
                placeholder="Search"
                underlineColorAndroid='transparent'
                onChangeText={(search) => this.SearchFilterFunction(search)}
                value={this.state.search}
              />
      <View >
      
        <ListView TouchableHighlight
          dataSource={this.state.dataSource}
          renderSeparator= {this.ListViewItemSeparator}
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
          onPress={
             this.GetListViewItem.bind(this, rowData.name,rowData.email)} >{rowData.name}</Text>}
          enableEmptySections={true}
          style={{marginTop: 10}}
        />
          </View>
              </View>
          );
        }
      }
      const styles = StyleSheet.create({
 
        MainContainer :{
        
         justifyContent: 'center',
         flex:1,
         margin: 7,
        
         },
        
        rowViewContainer: {
          padding: 10,
          fontSize: 18,
          height: 44,
         },
        
         TextInputStyleClass:{
          padding: 10,
          fontSize: 18,
          height: 44,
          borderWidth: 1,
          borderColor: '#009688',
          borderRadius: 7 ,               
          }
        
       });
      const list = StyleSheet.create({

        header: {
          flex: 1,
          backgroundColor: '#F5FCFF',
          paddingTop: 2,
          paddingRight:5,
          paddingLeft: 5,
         },
      
        Appname: {
          //flex: 1,
          fontSize: 30,
          fontWeight: 'bold',
          paddingBottom: 10,
          paddingLeft: 10,
          color:'black'
          //backgroundColor: 'red',
         },
         search: {
          backgroundColor: '#F5FCFF',
          borderWidth:1,borderRadius: 5,
          paddingTop: 2,
          paddingBottom: 2,
          paddingRight:10,
          paddingLeft: 10,
          borderColor:'black',
          fontSize:15,
          backgroundColor: 'rgba(247,247,247,1.0)',
         },
        container: {
         flex: 1,
         paddingTop: 22
        },
        sectionHeader: {
          paddingTop: 2,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 2,
          fontSize: 14,
          fontWeight: 'bold',
          backgroundColor: 'rgba(247,247,247,1.0)',
        },
        item: {
          padding: 10,
          fontSize: 18,
          height: 44,
        },
      })