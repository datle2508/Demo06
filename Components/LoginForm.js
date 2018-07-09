import React from 'react';
import { Button, View, Text,
  StyleSheet,ListView,SectionList,StatusBar,TouchableOpacity,Image,AsyncStorage,
  TextInput,Alert ,KeyboardAvoidingView} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import LisContacts from "./LisContacts";
import ContactDetail from "./ContactDetail";
import Home from "./Home";
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])


 class LoginForm extends React.Component {
  constructor(props){
    super(props);
    isLoggedIn: false

    this.state={Username:'',password:''}
    this.arrayholder = [] ;
    
}

 
  _onPressButton() {
    const { Username, password } = this.state;
    //this.props.navigation.navigate('Home')
    fetch('http://10.36.126.14:11131/Authentication',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(
        {UserInfo:{
              'type':'AD',
              //  'userName': Username,
              //  'passWord': password
              'userName': 'hunglv5',
              'passWord': 'abcd1234@#'
                  }
         }
       ) 
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
          this.arrayholder = responseJson 
  
          if(responseJson.UserInfo.authen == true){
              var fullName = responseJson.UserInfo.fullName
              var email =responseJson.UserInfo.email
              var mobile = responseJson.UserInfo.mobile
              var department =responseJson.UserInfo.department
              //Alert.alert(fullName)

              this.props.navigation.navigate('Home',{
                 fullname: responseJson.UserInfo.fullName,
                 email:'email',
                 mobile:'mobile',
                 department:'department'                
                })
  
          }else{
              Alert.alert('User not exist!!')
          }
          
      })
      .catch((error) => {
        console.error(error);
      });
    
}
componentDidMount() {
  AsyncStorage.getItem("userName").then((Username) => {
      this.setState({"userName": Username});
  }).done();
}
saveData(value) {
  AsyncStorage.setItem("value", value);
  this.setState({"Username": value});
}

render() {
    const { navigate } = this.props.navigation;
  //var { navigate } = this.props.navigation;
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.fcontainer}>

                <View style={styles.loginContainer}>
                
                    <Image resizeMode="contain" style={styles.logo} source={require('./images/Logo.png')} />
                  {/* <Text style={styles}>Sổ tay danh bạ</Text> */}
                    </View>
               <View style={styles.formContainer} >
               <View style={styles.container}>
          <StatusBar barStyle = 'default'/>
          <TextInput style = {styles.input} 
                      autoCapitalize="none" 
                      underlineColorAndroid='transparent'
                      onSubmitEditing={() => this.passwordInput.focus()} 
                      autoCorrect={false} 
                      //keyboardType='email-address' 
                      returnKeyType="next" 
                      placeholder='Username' 
                      onChangeText={(Username)=>this.saveData({Username})}
                      value={this.state.Username}
                      placeholderTextColor='rgba(62,62,62,0.7)'/>

          <TextInput style = {styles.input}   
                     returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                     underlineColorAndroid='transparent'
                     placeholder='Password' 
                     onChangeText={(password)=>this.setState({password})}
                     value={this.state.password}
                     placeholderTextColor='rgba(62,62,82,0.7)' 
                     secureTextEntry/>
           {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
        <TouchableOpacity style={styles.buttonContainer}
        
         onPress={this._onPressButton.bind(this)}
        >
              <Text  style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity> 
      </View>
               </View>
            </KeyboardAvoidingView>
  );
}
}


const styles = StyleSheet.create({
    fcontainer: {
        flex: 1,
        marginBottom: 300,
        //backgroundColor: '#2c3e50',
    },
  container: {
   padding: 20
  },
  input:{
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      //backgroundColor: 'white',
      borderWidth:1,borderRadius: 5,
      borderColor:'black',
      marginBottom: 10,
      padding: 10,

      color: 'black'
  },
  buttonContainer:{
      backgroundColor: 'rgba(213,116,47,1)',
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }, 
  loginButton:{
    backgroundColor:  'yellow',
     //color: '#fff'
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
    
},
logo: {
    position: 'absolute',
    width: 500,
    height: 200
},
title:{
    color: "#FFF",
    marginTop: 120,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
}
 
});
const RootStack =  createStackNavigator(
  {
    LoginForm: {
      screen: LoginForm,
      navigationOptions: () => ({
        header:null
      }),
    
    },
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header:null
      }),
    },

    LisContacts: {
      screen: LisContacts,
      navigationOptions: () => ({
        title: 'LisContacts',
        headerBackTitle: 'LisContacts'
      }),
    },

    ContactDetail: {
      screen: ContactDetail,
      navigationOptions: () => ({
        title: 'ContactDetail',
        headerBackTitle: 'ContactDetail'
      }),
    },
  },
  {
    initialRouteName: 'LoginForm',
  }
);

export default class App extends React.Component {
  render() {
    
    return <RootStack />;
  }
}