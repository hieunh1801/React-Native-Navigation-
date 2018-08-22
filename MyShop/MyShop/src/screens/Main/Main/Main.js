import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
let iconSearch = '../../../assets/icon/icons8-search-50.png'
let iconShoppingCart = '../../../assets/icon/icons8-add-shopping-cart-50.png'
const { height, width } = Dimensions.get('window');
export default class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.state.params.openShoppingCart()
                }}
            >
                <Image source={require(iconShoppingCart)} style={styles.icon} />
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity
                onPress={() => {
                    navigation.state.params.openSearch()
                }}
            >
                <Image source={require(iconSearch)} style={styles.icon} />
            </TouchableOpacity>
        )
    })
    constructor(props) {
        super(props)
        this.state = {
            isShoppingCart: ''
        }
        this.props.navigation.setParams({
            openShoppingCart: this.openShoppingCart,
            openSearch: this.openSearch,
        })
        

    }
    
    openShoppingCart = () => {
        this.props.navigation.navigate('Order')
    }
    
    openSearch= () => {
        this.props.navigation.navigate('Search')
    }
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity>
                    <Image source={require(iconSearch)} style={styles.icon}/>
                </TouchableOpacity>
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
    tabBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: height / 10,
        width: null,
        borderBottomWidth: 0.3,
        backgroundColor: 'yellow',
        justifyContent: 'center',
    },
    tabBarShoppingCart: {
        flex: 1,
        justifyContent: 'center'
    }
})