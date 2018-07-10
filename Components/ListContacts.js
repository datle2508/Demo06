import React, { Component } from 'react';
import{View,StyleSheet,TextInput,ListView,Text,ActivityIndicator,Alert,Button,TouchableOpacity,reject} from "react-native"
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { SearchBar } from 'react-native-elements'
import { Icon } from 'react-native-elements'
export default class ListContacts extends React.Component {

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
          GetListViewItem (department,name,avatar,workphone,phonenumber,email) {
            //Alert.alert('name:'+name+' email:'+email);
            //this.props.navigation.setParams({ name: 'Lucy' })
             this.props.navigation.navigate("ContactDetail",
             { department:department,name: name,avatar:avatar,email:email,workphone:workphone,phonenumber:phonenumber });
           
           }
           SearchFilterFunction(text){
     
            const newData = this.arrayholder.filter(function(item){
                const itemData = item.name.toUpperCase()
                const itemEmail = item.email.toUpperCase()
                const itemDepart = item.department.toUpperCase()
                const itemPhone = item.phonenumber.toUpperCase()
                const itemWorkPhone = item.workphone.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1||itemEmail.indexOf(textData)>-1
                ||itemDepart.indexOf(textData)>-1||itemPhone.indexOf(textData)>-1||itemWorkPhone.indexOf(textData)>-1
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(newData),
                text: text
            })
        }
        componentDidMount() {
            return fetch('http://192.168.0.108:3000/users')
            //return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
              
            .then(
              
              (response) => response.json())
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
                
                Alert.alert(error.message);
                reject(new Error(`Unable to retrieve events.\n${error.message}`));
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
            {/* <Icon name="ios-search" size={20} color="#000"/> */}

                        {/* <SearchBar style={list.search}
              onChangeText={(search) => this.SearchFilterFunction(search)}
              placeholder='Type Here...' /> */}

              <TextInput style={list.search}
                Icon="ios-search"
                placeholder="Search"
                underlineColorAndroid='transparent'
                onChangeText={(search) => this.SearchFilterFunction(search)}
                value={this.state.search}
              />
      <View >
      
        <ListView TouchableHighlight
          dataSource={this.state.dataSource}
          renderSeparator= {this.ListViewItemSeparator}
          // renderRow={(rowData,i) =>  <Text style={styles.rowViewContainer} 
          // onPress={
          //    this.GetListViewItem.bind(this,rowData.department,rowData.name,rowData.phonenumber , rowData.email)} >{rowData.department+rowData.name}</Text>
          //   }
            
          renderRow={(rowData) =>
 
            <View style={{flex:1, flexDirection: 'column'}} >
      
              <TouchableOpacity onPress={this.GetListViewItem.bind(this,rowData.department,rowData.name,rowData.avatar,rowData.workphone,rowData.phonenumber,rowData.email)} >
            
              <Text style={styles.rowViewContainer} >{rowData.name}</Text>
      
              <Text style={styles.textViewContainer} >{rowData.phonenumber}</Text>
      
              <Text style={styles.textViewContainer} >{rowData.email}</Text>
      
              <Text style={styles.textViewContainer} >{ rowData.department}</Text>
      
              </TouchableOpacity>
      
            </View>
      
             }
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
          padding: 5,
          fontSize: 18,
          height: 30,
         },
         textViewContainer: {
          padding: 2,
          fontSize: 14,
          paddingLeft: 10,
          color:'grey'
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