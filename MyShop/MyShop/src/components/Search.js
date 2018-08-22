import React, { Component } from 'react';
import { Text, View, Keyboard, Button, TouchableWithoutFeedback, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
let iconSearch = '../assets/icon/icons8-search-50.png'
export default class Search extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <View style={{
                backgroundColor: '#cfcfcf',
                width: null,
                height: 40,
                marginLeft: 60,
                marginRight: 15,
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'row',
                borderRadius: 40,
                alignItems: 'center',
                opacity: 1,
                paddingLeft: 15,
            }}>
                <TextInput placeholder="Hello World" style={{
                    height: 60,
                    flex: 9,
                }}

                />
                <TouchableOpacity style={{
                    flex: 2,
                    borderLeftWidth: 0.5,
                    borderLeftColor: 'black',
                    paddingLeft: 10,
                }}
                    onPress={
                        () => {alert('Hello').then(Keyboard.dismiss)}
                    }
                >
                    <Image source={require(iconSearch)} style={{ width: 15, height: 15, tintColor: 'black' }} />
                </TouchableOpacity>

            </View>

        ),

    })
    constructor(props) {
        super(props)
        this.state = {
            searchString: ''
        }
    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#cfcfcf' }}>
                <Text>Search</Text>
                <Image source={require(iconSearch)} style={{ width: 15, height: 15, tintColor: 'black' }} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfcfcf'
    },
    icon: {
        width: 24,
        height: 24,
        margin: 15,
    },

    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})