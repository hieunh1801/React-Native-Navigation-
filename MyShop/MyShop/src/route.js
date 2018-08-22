import { createStackNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import { Login, Main, Notification, Me, Order, Search, Home, Screen1, Screen2, Screen3 } from './assets/constant';
import TabBarComponent from './components/TabBarComponent';
import { Text, Image } from 'react-native';
import React, { Component } from 'react';

let iconHome = './assets/icon/icons8-home-50.png'
let iconNotification = './assets/icon/icons8-notification-50.png'
let iconUser = './assets/icon/icons8-user-50.png'
let iconShoppingCart = './assets/icon/icons8-add-shopping-cart-50.png'
let iconSearch = './assets/icon/icons8-search-50.png'



const MainStack = StackNavigator(
    {
        Main: {
            screen: Main,
        },
        Order: { screen: Order },
        Search: { screen: Search }
    },
    // {
    //     transitionConfig: () => ({ screenInterpolator: () => null }),
    // }
    // {
        // ẩn hết stackNavBar
    //     mode: 'modal',
    //     headerMode: 'none',
    // }
)

const MeStack = StackNavigator(

    {
        Me: { screen: Me },
        Screen1: Screen1,
        Screen2: Screen2,
        Screen3: Screen3,
        Order: { screen: Order }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }

)



const RootStack = createBottomTabNavigator(
    {
        Home: { screen: MainStack },
        Notification: Notification,
        User: { screen: MeStack },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({

            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName = iconHome;
                // để , một biến để sau này nghĩ cách truyền tên cho routerName 
                if (routeName == 'Home') {
                    return <Image source={require(iconHome)} style={{ height: 24, width: 24, tintColor: tintColor }} />
                } else if (routeName == 'User') {

                    return <Image source={require(iconUser)} style={{ height: 24, width: 24, tintColor: tintColor }} />
                } else if (routeName == 'Notification') {
                    return <Image source={require(iconNotification)} style={{ height: 24, width: 24, tintColor: tintColor }} />
                }
            },
        }),
        tabBarOptions: {
            showLabel: true, // hide labels
            activeTintColor: 'tomato', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            style: {
                backgroundColor: 'white' // TabBar background
            }
        },

    }

)
export default RootStack;