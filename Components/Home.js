import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView,TouchableOpacity } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };



      _onPressButton() {
        this.props.navigation.navigate("ListContacts")
    }
    render() {
        return (
                <View style={styles.container}>
                <View style={styles.row }></View>
                    <View style={styles.row}>
                        <View style={styles.colum}></View>
                            <View style={styles.colum}>
                            <Image resizeMode="contain" style={styles.logo} source={require('./images/Logo.png')} />
                            </View>
                        <View style={styles.colum}></View>
                    </View>
                    <View style={styles.row}></View>
                    <View style={styles.row}>
                        <Text style={styles.label}> {'WELCOME'}</Text>
                        <Text style={styles.label}> {this.props.navigation.state.params.fullname}</Text>
                    </View>


                    <View style={styles.row}></View>
                    <View style={styles.row}>
                        <View style={styles.colum}>
                            <TouchableOpacity style={styles.buttonContainer}
                            onPress={this._onPressButton.bind(this)}>
                            <Text  style={styles.label}>Contacts</Text>
                            </TouchableOpacity> 
                        </View>
                        <View style={styles.colum}>
                            <Text style={styles.label}> Send SMS</Text>
                        </View>
                        <View style={styles.colum}>
                            <Text style={styles.label}> About</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.colum}></View>
                        <View style={styles.colum}></View>
                        <View style={styles.colum}></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.colum}></View>
                        <View style={styles.colum}></View>
                        <View style={styles.colum}></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.colum}></View>
                        <View style={styles.colum}></View>
                        <View style={styles.colum}></View>
                    </View>
                  {/* <Text style={styles}> {this.props.navigation.state.params.fullname}</Text> */}
                    </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#2c3e50',
    },
    logo: {
        position: 'absolute',
        width: 200,
        height: 100
    },
    row:{
        flex: 1,
        //backgroundColor : 'green',
        borderBottomColor : 'grey',
        borderBottomWidth : 0.1,
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
    label:{
        fontSize:15
    }

})




