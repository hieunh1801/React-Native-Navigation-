import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#cfcfcf' }}>
                <Text>Login</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
            </View>
        );
    }
}