import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import All from '../screen/All';
import Menu from '../screen/Menu';
const Stack = createStackNavigator();

function StackNavigatorScreen() {
    return (
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                headerShown: false,
            }}
                />
        <Stack.Screen 
            name="Detail" 
            component={Detail}
            options={{
                headerShown: false,
            }}/>
            
        </Stack.Navigator>
    )
}
export default function NavigationScreen() {
    
    return (
        <NavigationContainer>
            <StackNavigatorScreen/>
        </NavigationContainer>
    );
};