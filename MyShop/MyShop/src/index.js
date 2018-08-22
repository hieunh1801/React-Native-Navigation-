import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import  RootStack from './route'
export default class App extends Component {

    render() {
        return (
            <RootStack/>
        );
    }
}