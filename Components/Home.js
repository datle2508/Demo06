import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };
    render() {
        return (
                <View style={styles.container}>
                <Text style={styles.label}> {this.props.navigation.state.params.fullname}</Text>

                    <View style={styles.row}></View>
                    <View style={styles.row}></View>
                    <View style={styles.row}>
                        <View style={styles.colum}>
                            <Text  style={styles.label} onPress={this.props.navigation.navigate("LisContacts")
             } > Contacts</Text>
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




