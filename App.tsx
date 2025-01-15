import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/Header'
import Bottom from './src/Bottom'
import Center from './src/Center'

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Header/>
      <Center/>
      <Bottom/>
      </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({})