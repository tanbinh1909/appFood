import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavigationScreen from './app/navigation/rootStack';
export default class App extends Component {
  render() {
    return (
      <NavigationScreen/>
    )
  }
}

const styles = StyleSheet.create({})
