import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
export default class Me extends Component {
    static navigationOptions = {
        title: 'MeMe',
        mode: 'modal',
        headerMode: 'none'
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#cfcfcf' }}>
                <View style={styles.navbar}>
                    
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height: height/9,

        paddingTop: height/9,
        elevation: 1
    },
})