import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class TabBarComponent extends Component {
    render() {
        return (
            <View style={styles.container}/>
        );
    }
}

styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,

        height: 53,
        width: null,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.3,
    },
})